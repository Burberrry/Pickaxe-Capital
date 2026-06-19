# Pickaxe Finance Terminal / Options Intelligence — Owner-Route and Static / Manual Prototype Scope

Status: Docs-only future prototype scope definition. Implementation is not approved.
Product layer: Pickaxe Capital.
Internal command layer: AI Habitat OS.
Final reviewer: CEO B.
Recommended future first-prototype owner: existing `#/research`, owner-route-limited.
Data mode: same-workflow verified, manual CEO B input, static/demo, source-required, or omitted.

This document defines the smallest safe future static/manual prototype scope for Pickaxe Finance Terminal / Options Intelligence. It does not implement a route, renderer, storage key, persistence contract, packet model, review queue, data connection, provider, alert, export, publication, or execution path.

## 1. Scope Definition

This is a future prototype scope document only. It translates the hosted-verified Finance Terminal specification into one bounded owner-surface decision and one possible first static/manual prototype shape.

This document does not authorize implementation.

- No owner route is implemented.
- No route, alias, bridge, or navigation item is created.
- No renderer is created or changed.
- No storage key or persistence contract is created.
- No live market or options data is connected.
- No provider, options chain, scraping, background refresh, or broker capability is connected.
- No Options Hub work is authorized.
- No runtime, CSS, HTML, shared data, server, simulator, or route file is changed.

Any implementation requires a separate bounded CEO B authorization naming exact files, the owner route, acceptance criteria, regression routes, validation, commit authority, and push authority.

## 2. Current Locked Context

The first prototype must preserve these current owners and hosted checkpoints:

- `/` and `#/alerts` are the Alerts Desk and canonical CEO B research review queue.
- `docs/02_RESEARCH/PICKAXE_OPTIONS_ALERTS_SPEC.md` remains authoritative for the current Options Alerts review unit.
- V3.1 preserves the QQQ golden path, selected-candidate behavior, packet state, and detailed Signals card placement beneath the Alerts overlay.
- `#/research` owns manual Research Packet intake and the hosted Pickaxe X static/manual preview.
- `renderResearchDeskPage()` is the single active Research Desk renderer.
- `#/source-hub` owns source provenance, trust, intake, and provider-boundary context.
- `#/archive` owns cleaned intelligence memory and packet lineage.
- `#/learning-ledger` owns lesson-candidate and proposed-research-improvement review.
- The hosted Pickaxe X preview remains inside `#/research` and must not be replaced, written to, or changed by Finance Terminal work.
- The Finance Terminal / Options Intelligence specification is hosted-verified but has no implemented owner surface.
- Options Hub remains a separate future-only concept. It is not authorized, implemented, or selected as a route.
- Existing LocalStorage contracts, root/public mirrors, direct-path bridges, `/ai-handoff`, and `data/signal-alerts.json` remain locked.

Finance Terminal is a separate future research cockpit concept. It must not absorb the ownership of Alerts, Research Packet intake, source verification, memory, lesson review, or Pickaxe X presentation.

## 3. Owner Surface Comparison

| Possible future owner | Why it fits | Why it does not fit | Primary breakage risk | Later validation required | First-prototype classification |
| --- | --- | --- | --- | --- | --- |
| Existing `/` and `#/alerts` | Close to CEO B review, Options Alerts, V3.1 candidates, and current options-research context. | It is a locked final-review surface, not the safest place for a new manual composition cockpit. | Duplicate or disrupted Alerts renderer; changed QQQ golden path; moved detailed Signals card; queue or packet mutation; Finance Terminal replacing Options Alerts. | Full Alerts/V3.1 workflow, singleton renderer, selected-candidate sync, `/app/alerts`, desktop/mobile, queue and packet invariants. | **Rejected as first prototype owner.** Regression-only surface. |
| Existing `#/research` | Already owns manual source-linked research composition, Research Packet intake, CEO B review language, and the hosted Pickaxe X preview. It has one active renderer. | The route already carries two responsibilities, so a Finance Terminal panel must remain compact and visually separate from packet intake and Pickaxe X. | Overloading Research Desk; changing Research Packet v2; writing to Pickaxe X; creating a second Research renderer; automatic cross-route handoffs. | Owner-route interaction and layout QA; Research Packet and Pickaxe X regression; refresh/navigation reset; desktop/mobile; storage scan. | **Recommended first prototype owner.** |
| Existing `#/source-hub` | Strong dependency for provenance labels, source-required states, trust context, and source-ledger requirements. | Source Hub owns verification and provenance, not options synthesis, scenario composition, or final cockpit review. It also has retained bootstrap/final renderer complexity. | Duplicated source model; silent confidence upgrades; provider implication; source records mutated by composition work. | Provenance ownership, source-state accuracy, no automatic records, retained renderer behavior, Source Hub-to-Archive workflow. | **Secondary reference surface only.** |
| Existing `#/dashboard` | Mission Control can summarize the current research workload and CEO B priorities. | It is an executive overview, not a detailed contract, source, technical, scenario, and risk composer. | Dashboard clutter; mixing operating telemetry with detailed research fields; implied live system state. | Mission Control hierarchy, nonblank overview, no fake telemetry, no LocalStorage or tracker changes, desktop/mobile. | **Secondary summary reference only.** |
| Existing `#/staging` | Owns QA, completion tracking, storage diagnostics, and build readiness. | It is not a research-authoring or options-review surface. | Mixing market research with release governance; changing tracker or backup/restore behavior. | Tracker, storage, backup/restore, diagnostics, route QA, no research-state writes. | **Rejected as first prototype owner.** QA reference only. |
| Future `#/finance-terminal` | Gives the cockpit a clear product identity and isolates its layout from existing Research Desk responsibilities. | Requires a new route, renderer, navigation ownership, possible bridge decision, route tests, and long-term maintenance before the workflow has been validated. | Duplicate research product; navigation expansion; new renderer and route contracts; premature standalone product. | New-route architecture, navigation, fallback/direct-path behavior, route smoke, renderer ownership, desktop/mobile, all adjacent-route regressions. | **Deferred.** Reconsider only after owner-route-limited prototype evidence. |
| Future `#/options-intelligence` | Provides a narrow options-research identity. | It overlaps the existing Options Alerts review unit and creates the highest risk of drifting into Options Hub. | Duplicated Options Alerts, unclear route ownership, alert-like language, Options Hub drift, future provider/execution pressure. | All new-route checks plus Options Alerts ownership, language, queue, packet, and Options Hub boundary audits. | **Rejected for first prototype.** |

Decision principle:

1. Preserve current owner contracts.
2. Validate the smallest manual workflow before creating a product route.
3. Keep provenance, memory, review, and presentation owners separate.
4. Prefer one bounded module in one existing renderer over a new route or duplicate renderer.

## 4. Recommended Owner Decision

The recommended future owner for the first static/manual Finance Terminal prototype is the existing `#/research` surface, implemented later as one bounded panel inside the existing `renderResearchDeskPage()` output.

Why this is the safest owner:

- Research Desk already owns manual research composition.
- It already handles source-linked packet context and CEO B review language.
- It has one active renderer, reducing duplicate-render risk.
- The first prototype can remain internal and ephemeral before anything reaches Alerts, Archive, Learning Ledger, or Pickaxe X.
- It preserves Source Hub as provenance owner and Alerts as final review owner.
- It tests whether the cockpit is useful before a dedicated route is justified.

The future panel must not:

- replace or restructure the Research Packet builder;
- change Research Packet v2 fields, state transitions, or storage;
- change, write to, or visually merge with the hosted Pickaxe X preview;
- create a second Research renderer;
- write to Alerts packets, review queues, Source Hub, Archive, or Learning Ledger;
- move any Alerts/V3.1 card;
- imply a live provider, live chain, publication path, or execution capability.

A new route is deferred. Future `#/options-intelligence` is rejected for the first prototype because it risks duplicating Options Alerts and drifting into Options Hub. Future `#/finance-terminal` may be reconsidered only after a bounded `#/research` prototype produces evidence that a dedicated surface is necessary.

No owner decision is implemented by this document. A separate implementation authorization must explicitly approve `#/research`, the exact runtime files, one-panel placement, ephemeral state, validation matrix, rollback boundary, commit, and push policy.

## 5. First Prototype Shape

The smallest safe future prototype is one internal static/manual research cockpit panel within `#/research`.

It may contain:

1. Manual research composer.
2. Source-required and field-state controls.
3. Market context block.
4. Options context block.
5. Technical context block.
6. Scenario and risk block.
7. Readiness score and hard-block panel.
8. CEO B disposition block.
9. Archive, Learning Ledger, and Pickaxe X handoff labels that describe possible manual next actions only.
10. Required safety footer.

The panel should default to `SOURCE_REQUIRED`, `NO_OUTPUT`, or `INTERNAL_ONLY` until its material requirements are satisfied.

It must not contain:

- live data or polling;
- provider calls or provider-status claims;
- options-chain connection;
- generated alerts or buy/sell instructions;
- broker execution, order routing, or an order ticket;
- publishing or automatic transmission;
- image export or download;
- LocalStorage or other persistence;
- automatic Archive or Learning Ledger writes;
- automatic Pickaxe X write, image generation, or handoff;
- PAX implementation;
- Options Hub implementation.

The first prototype validates operator flow, source/risk visibility, readiness usefulness, and CEO B review clarity. It does not validate live infrastructure, durable records, alerts, publication, or execution.

## 6. Static / Manual Data Field Set

This field set is conceptual documentation, not a runtime schema, packet subtype, storage contract, or API model.

Every material field must support these evidence states:

- `VERIFIED_SAME_WORKFLOW`
- `MANUAL_CEO_B`
- `STATIC_DEMO`
- `SOURCE_REQUIRED`
- `OMITTED`

| Conceptual field | Minimum purpose | First-prototype rule |
| --- | --- | --- |
| Ticker / topic | Identify the research subject. | Manual text; no automatic symbol lookup. |
| Asset class | Set relevant context and disclosures. | Manual selection; options context adds substantial-risk language. |
| Timeframe | Define the research horizon. | Explicit manual/static label; never inferred. |
| Market regime label | Describe broad context. | Conditional context, not a prediction. |
| Market context note | Summarize relevant index, sector, rates, volatility, or catalyst context. | Unsupported context remains source-required or omitted. |
| Options direction under review | Identify call, put, spread, neutral, or other review context. | Research label only; never a transaction command. |
| Contract candidate label | Identify the exact or conceptual contract under review. | Contract-specific interpretation requires sufficient identity. |
| Strike / expiry / premium | Record manually supplied contract context. | Visible state, source, quote type, timestamp, and timezone when material. |
| Bid / ask / spread | Record a manual snapshot. | No fill implication; missing quote context blocks interpretation. |
| Volume / open interest / IV | Record manual or same-workflow verified context. | Context only; no liquidity, edge, or intent guarantee. |
| Source status | State evidence condition. | Required for every material claim or number. |
| Quote type | Describe the basis of a market/options number. | Manual, screenshot, static/demo, source-required, omitted, or verified basis. |
| Timestamp | Record the absolute observation time. | No relative-only or invented time. |
| Timezone | Make the timestamp interpretable. | Missing timezone blocks current-number treatment. |
| Technical context | Describe timeframe, structure, indicators, levels, and conflicts. | Manual/static/source-required/omitted; no automatic calculations required. |
| Bull case | Conditional upside path. | Requires trigger, risk, and invalidation or remains blocked. |
| Bear case | Conditional downside path. | Requires trigger, risk, and invalidation or remains blocked. |
| Neutral / wait case | Define the wait or no-action path. | Equal-status research outcome. |
| No-trade intelligence note | Preserve why no output may be the best result. | Must not be framed as failure or missed profit. |
| Counter-thesis | State the strongest opposing interpretation. | Required for readiness eligibility. |
| Risk gates | Display source, event, volatility, liquidity, privacy, and thesis risks. | Material omissions are hard blocks. |
| Confirmation | Define observable supporting evidence. | Conditional research context, not a command. |
| Invalidation | Define what weakens or defeats the scenario. | Required for readiness eligibility. |
| Readiness score | Display rubric categories, score caps, hard blocks, and total. | Research-quality measure only. |
| CEO B disposition | Show the current manual review decision. | Ephemeral; no automatic approval or write. |
| Next manual action | State the next bounded human step. | May reference evidence review or manual handoff; never execution. |

No field should be silently populated. An unavailable field remains `SOURCE_REQUIRED` or `OMITTED`, never zero or fabricated.

## 7. Storage Boundary

Recommended first-prototype policy:

- no new LocalStorage key;
- no persistence;
- ephemeral in-memory state only if implementation is later approved;
- refresh, route navigation, or rerender may clear the prototype;
- no backup/restore contract change;
- separate storage-contract authorization is required before any persistence.

The first prototype must not write to:

- `pickaxeResearchPackets`;
- `pickaxeOptionAlerts`;
- `pickaxeLearningLedger`;
- `pickaxeArchiveVault`;
- Pickaxe X preview state;
- `pickaxeReviewQueue` or any other review queue;
- Source Hub records or `pickaxeSourceHubActions`;
- any existing LocalStorage contract.

Existing state may be considered for read-only conceptual reference only in a later separately approved implementation. The safer first-prototype default is manual entry with no cross-contract reads or writes.

If persistence later becomes necessary, implementation must stop and request a separate decision defining retention, privacy, exact fields, existing-key compatibility, backup/restore behavior, migration, and `docs/LOCAL_STORAGE_KEYS.md` updates.

## 8. Source Hub Boundary

Source Hub remains the provenance and trust owner.

Finance Terminal may later:

- display `SOURCE_REQUIRED`;
- show source-ledger requirements;
- display provenance and verification labels;
- provide a conceptual manual reference to Source Hub;
- explain which evidence is missing or conflicting.

Finance Terminal must not:

- auto-create or mutate Source Hub records;
- silently upgrade manual, watch, stale, or conflicting evidence;
- duplicate the Source Hub source model;
- scrape, bypass, poll, or automatically verify sources;
- represent a watch source as final verification;
- imply that a link alone establishes verification;
- expose private source URLs, account context, or raw local notes.

Any future source reference must preserve source name, role, quote/observation basis, timestamp, timezone, verification state, supported claim, conflict state, and privacy status where relevant.

## 9. Alerts Desk / Options Alerts Boundary

Finance Terminal must preserve the current Alerts Desk and Options Alerts system.

- `/` and `#/alerts` remain the Alerts Desk / Options Alerts owner.
- `docs/02_RESEARCH/PICKAXE_OPTIONS_ALERTS_SPEC.md` remains authoritative for the current Alerts review unit.
- Finance Terminal does not replace Alerts Desk or create a second Alerts experience.
- Finance Terminal does not create buy/sell alerts, live signals, or instructions.
- Finance Terminal does not mutate the V3.1 QQQ golden path, selected candidate, simulator sequence, or packet state.
- Finance Terminal does not move the detailed Signals card beneath the Alerts overlay.
- Finance Terminal does not write to Alerts packets, `pickaxeOptionAlerts`, `pickaxeResearchPackets`, or review queues.
- Finance Terminal does not rename or drift into Options Hub.

In a later implementation, `/`, `#/alerts`, and `/app/alerts` are regression targets only. Any handoff label remains descriptive and manual; it does not transmit or mutate data.

## 10. Research Desk / Pickaxe X Boundary

Research Desk remains the manual composition owner. Pickaxe X remains the hosted visual-preview owner inside `#/research`.

Finance Terminal may later display:

- a manual handoff reference;
- a visual candidate reference;
- a source-required state;
- a CEO B disposition label;
- a Research Packet context label;
- a next manual action indicating that separately reviewed context could be re-entered elsewhere.

Finance Terminal must not:

- generate a Pickaxe X image automatically;
- publish automatically to X, newsletters, or any channel;
- create a Research Packet automatically;
- trigger an automatic route handoff;
- write to the existing Pickaxe X preview;
- change the hosted Pickaxe X layout, state, scoring, or behavior;
- merge Finance Terminal scoring with Pickaxe X visual QA;
- add image export or download.

The two panels may share documented vocabulary—source state, risk, scenario, CEO B review, and safety language—but they remain separate workflows and presentation responsibilities.

## 11. Archive / Learning Ledger Boundary

Possible future manual handoff labels:

- archive as no-trade intelligence;
- return for evidence;
- lesson candidate;
- rejected contract;
- risk gate record;
- source gap record.

These labels describe a possible CEO B-directed next action. They do not create or mutate records.

Finance Terminal must not:

- write automatically to Archive;
- write automatically to Learning Ledger;
- create a lesson candidate automatically;
- adopt or update rules automatically;
- claim performance, profit, accuracy, or track record;
- rewrite historical research after an outcome;
- update research rules, Alerts logic, prompts, gates, or scores;
- mark a lesson verified or adopted without separate review.

Any later Archive or Learning Ledger integration requires a separate bounded handoff specification and authorization preserving privacy, lineage, review state, and non-adoption defaults.

## 12. Options Hub Boundary

Finance Terminal and Options Hub remain distinct.

Finance Terminal is:

- a research cockpit;
- a source, risk, contract, market, technical, and scenario organizer;
- a CEO B review surface;
- static/manual first;
- research-only and non-executing.

Options Hub is:

- a future separate product or infrastructure concept;
- not authorized;
- not implemented;
- not selected as a route;
- not a justification for providers, backend work, authentication, payments, subscriptions, entitlements, alerts, or execution.

The first Finance Terminal prototype must stop if it begins to require options-chain infrastructure, alert distribution, account state, order workflow, monetization, or a broader options product shell.

## 13. Risk and Readiness Framework

A later prototype may display the hosted Finance Terminal specification's complete 1000-point readiness rubric:

| Category | Points |
| --- | ---: |
| Source quality | 150 |
| Data freshness | 125 |
| Contract / liquidity clarity | 125 |
| Market context | 100 |
| Technical context | 100 |
| Scenario clarity | 125 |
| Risk clarity | 150 |
| CEO B usefulness | 125 |
| **Total** | **1000** |

The score:

- measures research completeness, evidence quality, risk visibility, and CEO B usefulness only;
- never measures expected return;
- never measures win probability;
- never measures guaranteed profitability;
- never measures trade edge, prediction accuracy, or investment performance;
- never publishes, alerts, transmits, or executes;
- remains `INTERNAL_ONLY` below `900/1000`;
- still requires CEO B review at or above `900/1000`;
- cannot override a hard block.

`900/1000` means eligible for CEO B public-ready candidate review only when every gate passes. It is not publication, an alert, an instruction, a provider action, or execution authority.

## 14. Hard Blocks for First Prototype

| Hard block | Required result |
| --- | --- |
| Missing source status for a material field | `SOURCE_REQUIRED` or `NO_OUTPUT` |
| Missing quote type for a market/options number | `SOURCE_REQUIRED` |
| Missing timestamp or timezone for a purportedly current number | `SOURCE_REQUIRED` or `NO_OUTPUT` |
| Missing material risk gates | `INTERNAL_ONLY` or `NO_OUTPUT` |
| Missing counter-thesis | `INTERNAL_ONLY` |
| Missing invalidation | `INTERNAL_ONLY` |
| Missing CEO B disposition | `INTERNAL_ONLY` |
| Banned instruction, certainty, or performance language | `NO_OUTPUT` |
| Fake live data or fake timestamp | `NO_OUTPUT` |
| Fake provider or verification wording | `NO_OUTPUT` |
| Buy/sell command | `NO_OUTPUT` |
| Guaranteed outcome | `NO_OUTPUT` |
| Performance, profit, accuracy, or track-record claim | `NO_OUTPUT` |
| Broker, order, or execution implication | `NO_OUTPUT` |
| Options Hub drift | Stop implementation and require separate authorization |

Hard-block behavior:

- hard blocks override score and visual polish;
- CEO B approval cannot convert invented or unverified data into verified data;
- a blocked field is replaced by the safety state, not accompanied by a guessed value;
- multiple hard blocks may be shown together;
- clearing a hard block requires corrected manual or same-workflow verified evidence and a fresh CEO B review.

## 15. UI Scope Boundary for Later Implementation

A separately approved later implementation may include:

- one owner-route panel inside `#/research`;
- one manual composer;
- one static/manual cockpit preview;
- visible source-required labels;
- market, options, technical, scenario, and risk blocks;
- one readiness-score panel;
- one CEO B disposition control;
- descriptive Archive, Learning Ledger, and Pickaxe X handoff labels;
- one safety footer;
- ephemeral interaction state.

It must not include:

- a new route, alias, bridge, navigation item, or renderer unless separately authorized;
- a second Research renderer;
- a new storage key or persistence;
- live market data, live options data, provider integrations, polling, or scraping;
- image export, download, publishing, or automatic transmission;
- alert generation or review-queue writes;
- broker execution or order controls;
- PAX;
- Options Hub;
- payments, authentication, subscriptions, or entitlements.

One panel means one bounded module within the current Research Desk hierarchy, not a nested application or replacement page.

## 16. Future Implementation Likely Files

Likely files for a separately approved `#/research` owner-route-limited implementation:

- `public/app.js` and `app.js` — one bounded module and ephemeral interaction logic in the existing Research Desk renderer;
- `public/styles.css` and `styles.css` — route-scoped presentation;
- `public/index.html` and `index.html` — cache keys only if required;
- `PROJECT_STATUS.md`;
- `NEXT_STEPS.md`.

Possible only if separately justified and authorized:

- `public/habitat-data.js` and `habitat-data.js` for static shared definitions or Build Completion Tracker metadata.

Files expected to remain unchanged:

- bridge files;
- server/runtime endpoints;
- simulator files;
- `docs/LOCAL_STORAGE_KEYS.md` when storage remains unchanged;
- `data/signal-alerts.json`;
- Research Packet, Alerts, Archive, Learning Ledger, and Source Hub contracts.

This docs-only sprint does not authorize editing any likely runtime file.

## 17. Later QA Plan

Automated validation for a later implementation:

```text
node --run build
node --run check:project
node --run check:phase15
node --run check:agents
node --run check:mirrors
node --run smoke:routes
node --check public/app.js
node --check app.js
git diff --check
git status --short --branch
```

Also verify:

- root/public mirrors remain identical;
- no new route or renderer owner exists;
- no new LocalStorage key exists;
- existing storage contracts have no schema mutation;
- `data/signal-alerts.json` has no diff;
- only explicitly approved files changed.

Browser QA:

- desktop: `1280x720`;
- mobile: `390x844`;
- owner route: `#/research`;
- regression routes: `/`, `#/alerts`, `/app/alerts`, `#/research`, `#/source-hub`, `#/archive`, `#/learning-ledger`, and `#/staging`.

Owner-route checks:

- correct Research Desk view and nonblank content;
- Finance Terminal is one bounded panel;
- existing Research Packet builder and Pickaxe X preview remain distinct and functional;
- all five evidence states render honestly;
- market/options/technical/scenario/risk blocks update from manual inputs only;
- readiness categories total 1000 and apply score caps correctly;
- below-`900/1000` remains internal;
- hard blocks produce `SOURCE_REQUIRED`, `NO_OUTPUT`, or `INTERNAL_ONLY`;
- CEO B disposition is required;
- refresh/navigation behavior matches ephemeral state;
- required safety footer remains visible;
- options context adds substantial-risk language;
- usable keyboard focus and controls;
- zero console errors;
- no document-level or route-container horizontal overflow;
- one Starlight canvas.

Regression invariants:

- canonical Alerts renderer remains singleton;
- V3.1 QQQ golden path and selected-candidate behavior remain unchanged;
- detailed Signals card remains beneath the Alerts overlay;
- Source Hub remains provenance owner;
- Pickaxe X hosted preview remains unchanged;
- Archive and Learning Ledger receive no automatic writes;
- Phase 9B candidate remains unverified and non-adopted;
- Staging tracker, storage, backup/restore, and diagnostics remain unchanged;
- `/ai-handoff` behavior remains unchanged.

## 18. Safety Footer Requirements

Required future visible footer:

```text
Research Only · Manual Review Required · Not Financial Advice · No Broker Execution · Options Involve Substantial Risk · No Guaranteed Outcomes
```

Add when relevant:

- `Static / Demo Data`
- `Manual CEO B Input`
- `Source Required`
- `No Live Provider Connected`
- `Internal Only`
- `CEO B Review Required`

The footer remains visible in default, blocked, internal, and review-ready states. It does not substitute for field-level source and risk labels.

## 19. Allowed and Banned Language

Allowed:

- research-only;
- source-required;
- manual context;
- static/demo;
- no-trade intelligence;
- scenario map;
- risk gate;
- contract quality review;
- CEO B review required;
- options involve substantial risk;
- not financial advice;
- no broker execution;
- internal-only candidate.

Banned in user-facing prototype output:

- buy now;
- sell now;
- guaranteed profit;
- this will go up;
- can't lose;
- proven profitable;
- verified alpha;
- live signal;
- autopilot trading;
- AI prediction;
- trade command;
- best contract to buy now;
- performance proof.

Negative boundary statements in documentation and safety checks are permitted. These terms must never create urgency, certainty, expected-return claims, implied execution, or proof of performance.

## 20. Acceptance Criteria for This Scope Document

This docs-only scope is complete when:

- the owner-surface comparison covers all seven required candidates;
- exactly one future first-prototype owner is recommended;
- current Alerts Desk and Options Alerts ownership are preserved;
- Research Desk and hosted Pickaxe X ownership are preserved;
- Source Hub, Archive, and Learning Ledger boundaries are preserved;
- the smallest static/manual prototype shape is defined;
- the conceptual static/manual field set and five evidence states are defined;
- no new LocalStorage and no persistence are recommended;
- source, quote type, timestamp, timezone, and verification labels are defined;
- risk, readiness, score caps, and hard-block behavior are defined;
- likely later files and full automated/browser QA are defined;
- Options Hub drift is blocked;
- runtime implementation, live data, providers, alerts, publishing, and execution are blocked;
- new routes, renderers, and storage are blocked unless separately authorized;
- `/ai-handoff` and `data/signal-alerts.json` remain unchanged.

## 21. Recommended Next Sprint After This Scope

Recommend exactly one next bounded sprint:

`Pickaxe Finance Terminal static/manual prototype implementation — #/research owner-route-limited`

That future sprint should authorize only:

- one ephemeral Finance Terminal panel inside the existing `renderResearchDeskPage()` output;
- manual/static/source-required/omitted/same-workflow-verified field states;
- market, options, technical, scenario, risk, readiness, and CEO B disposition blocks;
- descriptive manual handoff labels only;
- route-scoped styling and required mirror/cache updates;
- the automated and browser QA plan in this document.

It should explicitly prohibit new routes, renderers, storage, persistence, packet or queue changes, live data, providers, export, publishing, PAX, Options Hub, and changes to locked Alerts, Pickaxe X, Source Hub, Archive, Learning Ledger, `/ai-handoff`, or `data/signal-alerts.json`.

This recommendation is planning only. Do not begin it without separate CEO B authorization.

## 22. Hard Stop Conditions

Stop immediately and request a new bounded CEO B decision if work requires:

- runtime, JavaScript, CSS, HTML, shared-data, server, bridge, or simulator edits during this docs-only sprint;
- a new route, alias, bridge, navigation item, or renderer;
- a new storage key or persistence;
- mutation of an existing LocalStorage contract;
- a packet model or review queue change;
- an automatic Source Hub, Alerts, Pickaxe X, Archive, or Learning Ledger write;
- a `data/signal-alerts.json` change;
- Options Hub implementation or product-shell drift;
- live market data, live options data, provider integration, polling, or scraping;
- protected-site bypass;
- broker execution, order entry, or account connection;
- authentication, payments, subscriptions, or entitlements;
- autonomous publishing or image export;
- fake live numbers, fake timestamps, or fake provider status;
- performance, profit, accuracy, or track-record claims;
- PAX implementation;
- a change to `/ai-handoff`;
- a conflict between current authoritative documents that requires CEO B judgment.

Current sprint result must remain documentation only: no prototype, route, renderer, storage, data, alert, publication, or execution capability is created.
