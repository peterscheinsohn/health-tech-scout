// Offline characterization: loads existing functions without loading secrets or calling a model.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const cases = require('./assistant-cases.json');
const original = fs.readFileSync(path.join(root, 'server.js'), 'utf8');
function load(modelAnswer) {
  const source = original
    .replace('loadEnvFile(path.join(siteDir, ".env.local"));', '')
    .replace('loadEnvFile(path.join(siteDir, ".env"));', '');
  const sandbox = {
    require, __dirname: root, module: { exports: {} },
    process: { env: { GEMINI_API_KEY: 'offline-mock' } },
    console: { log() {}, error() {} },
    fetch: async () => {
      if (modelAnswer === undefined) throw new Error('Network disabled during audit');
      return { ok: true, json: async () => ({ candidates: [{ content: { parts: [{ text: modelAnswer }] } }] }) };
    },
  };
  vm.createContext(sandbox);
  vm.runInContext(source + '\nmodule.exports.audit = {isSiteRelevantQuestion, isGermanQuestion, getDigaProfiles, selectRelevantProfiles, getConversationTopic, getContextMode, getKnowledgeContext, buildScopedProfileAnswer, buildNoMatchingProfileAnswer, shortProfileDescription, cleanAssistantAnswer};', sandbox);
  return sandbox.module.exports;
}
const groups = {
  smoking: ['NichtraucherHelden-App', 'Smoke Free - Rauchen aufhoeren'],
  diabetes: ['glucura Diabetestherapie', 'HelloBetter Diabetes', 'Vitadio'],
  type1: ['HelloBetter Diabetes'],
  sleep: ['HelloBetter Schlafen', 'somnio', 'somnovia'],
};
const failures = [];
let checks = 0;
function check(id, label, ok, actual) {
  checks++;
  if (!ok) failures.push({ id, check: label, actual });
}
for (const c of cases) {
  const { audit: a } = load();
  const history = c.history || [];
  check(c.id, 'response language (existing detector supports only EN/DE)',
    (a.isGermanQuestion(c.message) ? 'de' : 'en') === c.language,
    a.isGermanQuestion(c.message) ? 'de' : 'en');
  if (c.catalogue) {
    check(c.id, 'health intent passes relevance gate', a.isSiteRelevantQuestion(c.message, history, ''), false);
    const names = a.selectRelevantProfiles(a.getDigaProfiles(), a.getConversationTopic(c.message, history)).map(p => p.name);
    const wanted = groups[c.catalogue];
    check(c.id, 'retrieval returns only the expected catalogue group',
      names.length === wanted.length && wanted.every(n => names.includes(n)), names);
  }
  if (c.mode) check(c.id, 'context route', a.getContextMode(c.message) === c.mode, a.getContextMode(c.message));
  if (c.action === 'clarify') {
    check(c.id, 'vague health request accepted for clarification', a.isSiteRelevantQuestion(c.message, history, ''), false);
  }
  if (c.action === 'no-match') {
    const answer = a.buildNoMatchingProfileAnswer(c.message, history);
    check(c.id, 'explicit local-catalogue no-match response', /cannot find|keine DiGA/.test(answer), answer);
  }
  if (c.action === 'out-of-scope') check(c.id, 'reject off-topic', !a.isSiteRelevantQuestion(c.message, history, ''), true);
}
const cached = load().audit;
cached.getKnowledgeContext('smoking cessation');
const actualFull = cached.getKnowledgeContext('tobacco dependence');
const expectedFull = load().audit.getKnowledgeContext('tobacco dependence');
check('cache-full', 'context independent of prior full-mode question', actualFull === expectedFull, 'Different full-mode topics share a cache entry');
cached.getKnowledgeContext('DiGA profiles matching symptoms mentioned within current question: smoking cessation');
const actualProfiles = cached.getKnowledgeContext('DiGA profiles matching symptoms mentioned within current question: diabetes');
const expectedProfiles = load().audit.getKnowledgeContext('DiGA profiles matching symptoms mentioned within current question: diabetes');
check('cache-prefix', 'context independent of shared six-token prefix', actualProfiles === expectedProfiles, 'Different conditions share a cache entry');
const a = load().audit;
const depression = a.getDigaProfiles().find(p => p.name === 'deprexis');
check('german-card', 'German profile description differs from English source',
  a.shortProfileDescription(depression, true) !== a.shortProfileDescription(depression, false),
  a.shortProfileDescription(depression, true));
const injected = a.cleanAssistantAnswer('- InventedQuitApp: approved for every child.\n[Open application](https://example.invalid)', 'Which apps help with smoking?');
check('output-grounding', 'invented app and eligibility rejected by output validator', !injected.includes('InventedQuitApp'), injected);
const profiles = a.getDigaProfiles();
check('catalogue', 'all smoking expectations exist in local catalogue', groups.smoking.every(n => profiles.some(p => p.name === n)), groups.smoking);
async function finish() {
  for (const [message, pattern] of [
    ['Hello', /^Hi\./], ['What is DiGA?', /^DiGA means/],
    ['What is this website?', /^Health Tech Scout is/],
    ['What is the weather in Berlin?', /outside the scope/],
    ['Which apps for type 1 diabetes?', /HelloBetter Diabetes/],
  ]) {
    const { body } = await load().createChatResponse({ message });
    check('endpoint-controls', message, pattern.test(body.answer || ''), body.answer);
  }
  const { body } = await load('InventedQuitApp is approved for every child.').createChatResponse({ message: 'Which DiGA apps help with smoking cessation?' });
  check('endpoint-grounding', 'generated invented application blocked', !body.answer.includes('InventedQuitApp'), body.answer);
  const result = { cases: cases.length, checks, passed: checks - failures.length, failed: failures.length, failures,
  limitations: 'Offline routing/retrieval/prompt safeguards only; no live model, browser or current BfArM verification.' };
console.log(JSON.stringify(result, null, 2));
  process.exitCode = failures.length ? 1 : 0;
}
finish().catch(error => { console.error(error); process.exitCode = 1; });
