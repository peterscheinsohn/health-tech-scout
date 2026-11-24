const assert = require("node:assert/strict");
const { createChatResponse } = require("../server");

async function answer(message, history = []) {
  return (await createChatResponse({ message, history, pageTitle: "Health Tech Scout | DiGA & Digital Health Market Intelligence", page: "/" })).body.answer;
}

(async () => {
  const ambiguous = await answer("May it help with depression?");
  assert.match(ambiguous, /which application/i);
  assert.doesNotMatch(ambiguous, /DiGA means/i);
  const named = await answer("May it help with depression?", [{ role: "assistant", content: "You can look at deprexis." }]);
  assert.match(named, /deprexis/);
  assert.doesNotMatch(named, /Endo-App/);
  const unrelated = await answer("May it help with depression?", [{ role: "assistant", content: "You can look at Endo-App." }]);
  assert.match(unrelated, /does not clearly associate/i);
  const german = await answer("Hilft es bei Depressionen?");
  assert.match(german, /Welche Anwendung/);
  const direct = await answer("I have endometriosis");
  assert.match(direct, /Endo-App/);
  assert.doesNotMatch(direct, /deprexis/);
  assert.match(await answer("I have tinnitus and depression"), /which health concern/i);
  assert.doesNotMatch(await answer("I do not have depression"), /deprexis/);
  assert.match(await answer("What is DiGA?"), /DiGA means/);
  assert.match(await answer("Which applications for back pain?"), /eCovery/);
  console.log("9 catalogue-routing checks passed");
})().catch((error) => { console.error(error); process.exitCode = 1; });
