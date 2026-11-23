# Assistant audit and proposed changes

Status: inspection and offline baseline completed. Application behavior is unchanged. Implementation awaits agreement on this proposal. No deployment or push.

## Scope

Inspected the tracked repository structure, assistant frontend, local server, Vercel endpoint, catalogue and directory UI, prompt construction, knowledge content, page integration, configuration examples, and deployment ignore rules. Existing untracked image files were left untouched. No dependencies installed; no secret files read; no external model requests made.

## Current flow

1. `chat-widget.js` sends message, the latest eight history entries, page path, and title to `/api/chat`. The newly appended user message is already in history and is also sent separately.
2. `api/chat.js` delegates to `createChatResponse` in `server.js`; the local HTTP server uses the same function.
3. `createChatResponse` first handles greetings/definitions, then applies a regex-based relevance gate. Rejected questions never reach Gemini. Site overviews, several condition-specific lists, and no-match answers also bypass Gemini.
4. The server reads the `profiles` array from `script.js` using a VM parser and filters to `track === "DiGA"`. The catalogue contains 50 DiGA and five adjacent profiles; the five are not DiGA recommendation candidates.
5. Retrieval expands a small EN/DE synonym dictionary, scores substring matches in names/tags/care areas at 3 and descriptions/manufacturers at 1, and keeps scores at least `max(3, bestScore - 1)`. Conversation text and page metadata are concatenated for context retrieval. Some diabetes/anxiety/depression lists use separate regex scopes instead.
6. Knowledge context combines selected profiles with site text, care-area examples, README, and sometimes analytics notes. It is cached in module memory.
7. Gemini receives one combined user prompt containing instructions, source material, and history. Returned text is cleaned for formatting/links; incomplete answers and errors can trigger handwritten fallbacks. No app/indication/eligibility output validation occurs.

## Confirmed findings

### Intent recognition rejects ordinary health requests

`server.js:381` checks site vocabulary and catalogue names/tags before accepting a question. `I want to quit smoking` is rejected, despite two smoking-cessation profiles in the local catalogue. `I want to stop this habit` is rejected instead of prompting a clarification. The prompt's paraphrase instruction at `server.js:327` cannot repair an earlier rejection.

### Retrieval misses paraphrases and mixes topics

`server.js:834` has no smoking/tobacco/quit/cigarette synonym group. `Show apps for tobacco dependence` produces no retrieved profiles even though tobacco dependence is in a description: one description-only hit cannot reach the score floor of 3. German and indirect wording fail similarly.

Substring matching ignores negation: `I do not smoke. Which apps help with insomnia?` retrieves Smoke Free alongside sleep apps. Concatenating recent requests mixes old diabetes results into a new smoking request. Numeric tokens shorter than three characters are dropped, so ordinary retrieval cannot distinguish type 1 from type 2 diabetes; the existing scoped endpoint path compensates for that specific case. Thus a failed retrieval-layer test is not always a failed final answer.

### Context routing and caching can deliver the wrong material

`server.js:823` treats `cost`/`kosten` as hospital-analytics cues. `What does a DiGA for smoking cessation cost?` selects analytics mode, excluding all DiGA profiles. Page metadata and old analytics history can also select this mode for a new health question.

`server.js:962` caches full mode under just `full`, even though its selected profiles depend on the question. Profile-mode keys use only six search tokens. Both collisions are reproduced by the offline suite; later requests can receive another question's profile context in a warm process.

### Language handling is inconsistent

`server.js:484` uses any matching German word, including `was`. `I was looking for smoking cessation apps` is classified as German; `Hallo` and `Ich möchte mit dem Rauchen aufhören` are classified as English. Fallback language uses a different regex (`server.js:530`). Only three descriptions have German translations (`server.js:722`), producing mixed-language lists.

The EN/DE buttons in `chat-widget.js` control speech recognition only. Their selected value is not sent to the server. Neither explicit language requests nor conversation language are resolved consistently. Cyrillic is removed by the ASCII tokenizer; Russian text can yield no tokens, causing retrieval to return all profiles if reached. Russian and Spanish cases in the suite are proposed expanded-language expectations, not regressions against an existing promise of support.

### Catalogue coverage exists for smoking; verification metadata is missing

The local catalogue includes `NichtraucherHelden-App` and `Smoke Free - Rauchen aufhoeren`, with smoking-cessation descriptions and manufacturer links (`script.js:363`, `script.js:495`). Missing smoking coverage is not the cause of the reproduced examples.

However, profiles lack stable catalogue IDs, per-entry BfArM references, verification dates, structured indications, and eligibility fields. All 50 carry the broad `Listed DiGA` label. This audit verifies presence in the local snapshot, not current BfArM listing status or clinical eligibility. Those must not be inferred from names or broad care areas.

Care-area cards introduce names not present in the catalogue, including eCovery and memodio. Those cards are included in the model context alongside authoritative profiles, weakening the source boundary.

### Generation relies on instructions rather than enforcement

`server.js:314` instructs Gemini not to invent facts, but `cleanAssistantAnswer` (`server.js:490`) only changes formatting and link visibility. An intentionally fabricated mock output, `InventedQuitApp is approved for every child.`, passes through the real response pipeline unchanged. This demonstrates a missing validation boundary, not an observed live-model hallucination.

Other prompt/fallback conflicts: the guide must handle personal health needs but is told to redirect treatment-choice questions; it must always attach profile links but also suppress unsolicited URLs. Provider failures can return an unrelated DiGA definition or site-help response instead of a condition-specific answer.

## Proposed implementation for agreement

1. Introduce one request resolver for intent, requested language, current topic, exclusions, and confidence. Recognize common everyday EN/DE expressions, including quitting smoking, before the relevance gate. For unfamiliar paraphrases, use a constrained semantic resolver that can select only known catalogue indication IDs; it cannot create app or eligibility facts. Ambiguous requests ask one short clarification instead of guessing a diagnosis.
2. Keep one shared catalogue, add stable IDs and reviewed indication mappings, and retain the current directory UI. Separate supporting marketing/analytics content from recommendation evidence. Record source references and verification dates when actually verified; mark missing information unknown.
3. Retrieve only from the resolved current intent. Use previous user turns only to resolve genuine follow-ups, honor negation and topic changes, and make structured constraints such as diabetes type explicit. Never convert vague symptoms directly into a diagnosis or claim individual suitability.
4. Cache source material independently of requests, or key request-specific context by all relevant structured inputs plus catalogue version. Route reimbursement questions separately from hospital analytics.
5. Resolve language once: explicit request first, confidently detected current language next, then conversation language for short follow-ups. Keep the existing buttons labeled as voice-language controls. Proposed initial scope is complete EN/DE support; RU/ES tests should require an explicit supported-language clarification until expanded support is agreed, rather than silently switching or recommending unrelated apps.
6. Build recommendation answers from validated catalogue IDs and source fields. Render names, links, indications, and known limitations from those records; never trust unrestricted model text for eligibility. Use model-written text only where it cannot introduce unsupported product facts. Distinguish `no matching app in this verified catalogue` from a claim that none exists anywhere. Preserve analytics/site-guide paths, directory filters, pagination, links, voice capture, and accessibility behavior.
7. Add unit and endpoint regressions for the cases below, including model failures, injected fabricated products/eligibility, cache isolation, language continuity, topic changes, and unsupported conditions. After agreement, run offline regressions and browser checks; report live-model checks separately if performed.

## Baseline tests

Run `node tests/audit-assistant.cjs` from the repository root. Exit 1 currently signals the intentionally captured defects.

- 30 question fixtures: direct, everyday, indirect, ambiguous, multilingual, negated, multi-turn, unsupported, off-topic, and existing site/dashboard questions.
- 86 checks: 46 passed, 40 failed. These count assertions across layers, not 86 conversations or a production accuracy percentage.
- No model/network traffic: server functions run in an isolated VM with environment-file loading disabled and an injected mock response for generation-boundary testing. The HTTP server does not listen.
- Existing greeting/definition/overview/off-topic/type-1 diabetes endpoint controls pass. The fabricated-output endpoint guard fails.
- This is a baseline, not a completed fix or full UI regression run. Application files and package scripts have not been changed.
