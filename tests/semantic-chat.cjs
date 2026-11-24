const assert = require("node:assert/strict");
process.env.GEMINI_API_KEY = "offline-test-key";
const { createChatResponse } = require("../server");

let reply;
global.fetch = async () => ({ ok: true, json: async () => ({ candidates: [{ content: { parts: [{ text: JSON.stringify(reply) }] } }] }) });
async function check(message, modelReply, history = []) {
  reply = modelReply;
  return (await createChatResponse({ message, history, pageTitle: "Health Tech Scout | DiGA" })).body.answer;
}
const match = (id, evidence) => ({ status: "matches", matches: [{ id, evidence }] });
(async () => {
  const lowMood = await check("I've been feeling down for weeks. Could a digital health app help?", match(4, "adults with depression and depressive mood"));
  assert.match(lowMood, /deprexis/);
  assert.match(lowMood, /not a diagnosis/);
  assert.doesNotMatch(lowMood, /DiGA means/);
  const german = await check("Seit Monaten macht mir fast alles Angst. Was könnte helfen?", match(45, "generalized anxiety disorder"));
  assert.match(german, /velibra/);
  assert.match(german, /keine Diagnose/);
  const multiple = await check("My mood is low and my knee hurts", { status: "matches", matches: [{ id: 4, evidence: "adults with depression and depressive mood" }, { id: 3, evidence: "anterior knee pain" }] });
  assert.match(multiple, /deprexis/);
  assert.match(multiple, /companion patella/);
  const negated = await check("I have tinnitus but not depression", match(18, "chronic tinnitus burden"));
  assert.match(negated, /Kalmeda/);
  assert.doesNotMatch(negated, /deprexis/);
  const followup = await check("Could it help my low mood?", match(4, "adults with depression and depressive mood"), [{ role: "assistant", content: "You can look at deprexis." }]);
  assert.match(followup, /deprexis/);
  assert.doesNotMatch(await check("Help me", match(999, "invented application evidence")), /Open application/);
  assert.doesNotMatch(await check("Help me", match(4, "invented medical indication")), /deprexis/);
  assert.match(await check("I have an unusual health concern", { status: "no_match", matches: [] }), /cannot identify/i);
  assert.match(await check("I don't know what support I need", { status: "clarify", matches: [] }), /tell me a little more/i);
  assert.match(await check("Could it help?", { status: "clarify_app", matches: [] }), /which application/i);
  global.fetch = async () => ({ ok: false, status: 503 });
  assert.match(await check("I have been feeling unwell lately", {}), /unable to search/i);
  console.log("11 simulated-model response checks passed");
})().catch((error) => { console.error(error); process.exitCode = 1; });
