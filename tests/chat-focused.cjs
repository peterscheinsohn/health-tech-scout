const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'server.js'), 'utf8')
  .replace('loadEnvFile(path.join(siteDir, ".env.local"));', '')
  .replace('loadEnvFile(path.join(siteDir, ".env"));', '');
const sandbox = { require, __dirname: root, module: { exports: {} }, process: { env: {} }, console,
  fetch: async () => { throw new Error('Unexpected network call'); } };
vm.createContext(sandbox);
vm.runInContext(source, sandbox);
const { createChatResponse } = sandbox.module.exports;
const cases = [
  ['I want to quit smoking', /NichtraucherHelden-App/, /somnio/],
  ['Nach jedem Essen greife ich zur Zigarette', /NichtraucherHelden-App/, /somnio/],
  ['Хочу бросить курить', /NichtraucherHelden-App/, /somnio/],
  ["I don't want to quit smoking", /do not have to decide/i, /NichtraucherHelden-App/],
  ['I do not smoke. I cannot sleep at night', /somnio/, /Smoke Free/],
  ['Ich liege nachts wach und kann nicht schlafen', /somnio/, /Smoke Free/],
  ['Не могу спать по ночам', /somnio/, /Smoke Free/],
  ['My weight has been going up and I want to lose weight', /zanadio/, /somnio/],
  ['Ich möchte abnehmen', /zanadio/, /somnio/],
  ['Хочу похудеть', /zanadio/, /somnio/],
  ['I feel overwhelmed and stressed at work', /HelloBetter Stress und Burnout/, /somnio/],
  ['Я постоянно испытываю стресс', /HelloBetter Stress und Burnout/, /somnio/],
  ['Which apps for type 1 diabetes?', /HelloBetter Diabetes/, /Vitadio/],
  ['I need help feeling better', /health concern/i, /somnio/],
  ["I don't know what I should do in my situation. What would you advise?", /health concern/i, /diga|bfarm|112/i],
  ['Ich weiß nicht, was ich in meiner Situation tun soll. Was rätst du?', /gesundheitlichen Anliegen/i, /diga|bfarm|112/i],
  ['Я не знаю, что делать в моей ситуации. Что вы посоветуете?', /проблемой здоровья/i, /diga|bfarm|112/i],
  ['Which DiGA treats hair loss?', /cannot find/i, /InventedQuitApp/],
  ["I can't sleep until I drink two bottles of vodka", /sleep[\s\S]*alcohol[\s\S]*sleep app[\s\S]*doctor/i, /somnio|alcoholic/i],
  ['Ich kann nur schlafen, wenn ich viel Wodka trinke', /Schlafprobleme[\s\S]*Alkoholkonsum[\s\S]*Schlaf-App/i, /somnio/],
  ['Не могу спать без водки, выпиваю две бутылки', /сном[\s\S]*алкоголя[\s\S]*приложени/i, /somnio/],
  ['I have chest pain and cannot sleep', /112/, /somnio/],
  ['I am stressed and cannot sleep', /sleep[\s\S]*stress/i, /somnio|HelloBetter/],
  ['I do not drink alcohol and cannot sleep', /somnio/, /withdrawal/],
];
(async () => {
  let failed = 0;
  for (const [message, expected, forbidden] of cases) {
    const result = await createChatResponse({ message });
    try {
      assert.equal(result.status, 200);
      assert.match(result.body.answer, expected);
      assert.doesNotMatch(result.body.answer, forbidden);
      console.log('PASS', message);
    } catch (error) {
      failed++;
      console.log('FAIL', message, JSON.stringify(result.body.answer));
    }
  }
  const follow = await createChatResponse({ message: 'Which ones?', history: [{ role: 'user', content: 'I want to quit smoking' }] });
  if (!/NichtraucherHelden-App/.test(follow.body.answer)) { failed++; console.log('FAIL follow-up'); } else console.log('PASS follow-up');
  const conversations = [
    ["I haven't had sex in three years.", "Psychological support in sexual field.", /cannot find.*psychological support/i, /Vaginismus|Kranus/],
    ['Ich hatte seit drei Jahren keinen Sex.', 'Psychologische Unterstützung im sexuellen Bereich.', /keine Anwendung.*psychologische Unterstützung/i, /Vaginismus|Kranus/],
    ['У меня три года не было секса.', 'Психологическая поддержка в сексуальной сфере.', /не нашёл приложения.*психологической поддержки/i, /Vaginismus|Kranus/],
    ['I need help feeling better', 'I cannot sleep', /somnio/, /Smoke Free/],
    ['Ich brauche Hilfe', 'Ich kann nicht schlafen', /somnio/, /Smoke Free/],
    ['Мне нужна помощь', 'Я не могу спать', /somnio/, /Smoke Free/],
    ['I need help', 'I have vaginismus', /HelloBetter Vaginismus Plus/, /Kranus/],
    ['I need help with sleep and stress', 'Sleep please', /somnio/, /HelloBetter Stress/],
  ];
  const offers = [
    ['Would you like me to find an app that could help you reduce or quit smoking?', 'Yes', /NichtraucherHelden-App/, /another health concern/i],
    ['You do not have to decide to quit. Would you like me to find an app for reducing or quitting smoking?', 'Yes', /NichtraucherHelden-App/, /would you like/i],
    ['Would you like me to find an app that could help you reduce or quit smoking?', 'No', /another health concern/i, /NichtraucherHelden-App/],
    ['Would you like me to find an app for sleep?', 'Yes', /somnio/i, /Smoke Free/],
    ['Soll ich eine Anwendung für Schlafprobleme suchen?', 'Ja', /somnio/i, /Smoke Free/],
    ['Soll ich eine Anwendung für Schlafprobleme suchen?', 'Nein', /anderes gesundheitliches Anliegen/i, /somnio/],
    ['Хотите, я найду приложение для сна?', 'Да', /somnio/i, /Smoke Free/],
    ['Хотите, я найду приложение для сна?', 'Нет', /другая проблема/i, /somnio/],
    ['Would you like me to find an app for stress?', 'Yes', /HelloBetter Stress/, /somnio/],
    ['Would you like me to find an app for weight?', 'Yes', /zanadio/, /somnio/],
  ];
  for (const [question, reply, expected, forbidden] of offers) {
    const result = await createChatResponse({ message: reply, history: [{ role: 'assistant', content: question }, { role: 'user', content: reply }] });
    try { assert.match(result.body.answer, expected); assert.doesNotMatch(result.body.answer, forbidden); assert.ok((result.body.answer.match(/\?/g) || []).length <= 1); console.log('PASS offer', reply, question); }
    catch { failed++; console.log('FAIL offer', reply, question, JSON.stringify(result.body.answer)); }
  }
  for (const [first, second, expected, forbidden] of conversations) {
    const initial = await createChatResponse({ message: first });
    const history = [{ role: 'user', content: first }, { role: 'assistant', content: initial.body.answer }, { role: 'user', content: second }];
    const result = await createChatResponse({ message: second, history });
    try { assert.match(result.body.answer, expected); assert.doesNotMatch(result.body.answer, forbidden); console.log('PASS conversation', second); }
    catch { failed++; console.log('FAIL conversation', second, JSON.stringify(result.body.answer)); }
  }
  console.log(`${cases.length + 1 + conversations.length + offers.length - failed}/${cases.length + 1 + conversations.length + offers.length} passed`);
  process.exitCode = failed ? 1 : 0;
})().catch(error => { console.error(error); process.exitCode = 1; });
