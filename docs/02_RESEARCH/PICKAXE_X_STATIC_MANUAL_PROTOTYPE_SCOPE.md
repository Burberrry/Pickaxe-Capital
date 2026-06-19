# Pickaxe X Visual Intelligence Engine v2.0 — Static / Manual Prototype Implementation-Scope Definition

Status: Docs-only future implementation scope. Runtime implementation is not approved.
Parent specification: `docs/02_RESEARCH/PICKAXE_X_VISUAL_INTELLIGENCE_ENGINE_SPEC.md`.
Recommended future owner surface: existing `#/research`.
Data mode: manual, static/demo, source-required, or omitted.
Persistence recommendation: none for the first prototype.
Final reviewer: CEO B.

This document answers how the first Pickaxe X static/manual prototype could be implemented later without violating current route, renderer, LocalStorage, source-verification, financial-safety, or locked-runtime boundaries. It defines a bounded future implementation target; it does not authorize or perform that implementation.

## 1. Scope Definition

The first possible Pickaxe X implementation should be a single internal visual-draft preview module inside an existing route. CEO B would manually enter or review static fields, see unsupported fields marked `SOURCE_REQUIRED`, generate an on-screen five-band preview, inspect the 1000-point QA result, and choose a manual disposition. The prototype would remain browser-only and internal. It would not create an image file, publish content, call a provider, calculate live market values, write a new packet type, or persist a new Pickaxe X record.

This scope is:

- planning for one later owner-route-limited implementation sprint;
- static/manual only;
- research-only and source-gated;
- compatible with the existing Research Packet, Source Hub, Archive, Learning Ledger, and CEO B review concepts;
- designed to preserve current route and storage ownership.

This scope is not:

- runtime authorization;
- a route, renderer, packet, queue, or storage-key proposal;
- chart generation or image export;
- live data, provider, scraping, broker, authentication, payment, subscription, or publishing work;
- Phase 9C, V3.2, or Options Hub work.

## 2. Proposed Owner Surface

### Recommendation: existing `#/research`

The future static/manual prototype should be owned by the existing `#/research` Research Desk, rendered as one bounded Pickaxe X preview module within the current `renderResearchDeskPage()` output.

Why `#/research` fits:

- It already owns the local source-linked Research Packet builder.
- It is the natural operator workspace for manual ticker/topic, thesis, source, scenario, risk, and review inputs.
- It has one active renderer according to `docs/ACTIVE_RENDER_PATHS.md`, reducing duplicate-render risk.
- It already uses static/local Research Packet patterns and CEO B review language.
- It can show an internal preview before a candidate reaches the locked Alerts review experience.
- It keeps content creation separate from provenance ownership in Source Hub and memory ownership in Archive/Learning Ledger.

### Surface comparison

| Surface | Current responsibility | Fit for first prototype | Decision |
| --- | --- | --- | --- |
| `/`, `#/alerts` | Canonical homepage and CEO B research review queue; Phase 9A and V3.1 locked. | Strong review context, but adding draft creation would mix authoring with a locked review renderer and risk the QQQ golden path. | Do not use as owner. Regression-only later. |
| `#/research` | Manual source-linked Research Packet builder with one active renderer. | Best fit for manual input, source gaps, scenario drafting, QA preview, and internal disposition. | **Recommended owner.** |
| `#/source-hub` | Source trust, verification, intake, and provider-boundary cockpit. | Appropriate provenance dependency, but not the owner of composition or visual drafting. It also has retained bootstrap/final renderer complexity. | Use as source context only. |
| `#/archive` | Cleaned memory, lineage, and reviewed intelligence records. | Appropriate later destination for sanitized approved memory, not an authoring surface. | Do not use as owner. |
| `#/staging` | QA, completion tracker, storage, and build-readiness cockpit. | Appropriate for project validation, not market-research composition. | Do not use as owner. |
| Future route | Could isolate Pickaxe X later. | Adds route, navigation, bridge, ownership, QA, and duplicate-concept risk without a first-prototype need. | Defer; requires separate authorization and architectural justification. |

### Owner-route placement

The later implementation should add one clearly titled section within the existing Research Desk hierarchy, after manual research intake/packet context and before route handoff actions. It should not replace the Research Packet builder, become a second Research renderer, or move any existing Signals/Alerts card.

### Owner-route protections

The future module must not:

- alter `renderResearchDeskPage()` ownership or create a second Research renderer;
- change Research Packet v2 storage or state transitions;
- write to the Alerts review queue automatically;
- modify the canonical Alerts renderer, V3.1 QQQ selection, or detailed Signals card placement;
- claim that Source Hub verification occurred when only manual/static data exists;
- send content to Archive or Learning Ledger without a separately approved handoff.

### Later regression routes

A later implementation must test:

- `/`
- `#/alerts`
- `/app/alerts`
- `#/research`
- `#/source-hub`
- `#/archive`
- `#/learning-ledger`
- `#/staging`

`#/research` is the owner-route acceptance target. The other routes are regression targets because they own adjacent review, provenance, memory, or QA contracts.

## 3. Prototype User Workflow

The exact future static/manual workflow should be:

1. CEO B opens `#/research` and enters a ticker, topic, or market idea manually.
2. CEO B adds manual/static values, selects their field states, and labels any screenshot or chart placeholder.
3. The module displays every unsupported material field as `SOURCE_REQUIRED` or `OMITTED`; it never fills gaps by assumption.
4. CEO B requests an internal visual draft preview. The module renders one on-screen `1200x1200`-proportioned five-band card preview using only entered/static content.
5. The module applies the documented 1000-point QA rubric to the preview and displays category scores, score caps, hard blocks, and the total.
6. A total below `900/1000`, any hard block, or any material source-required field blocks the `PUBLIC_READY_CANDIDATE` state.
7. CEO B selects a manual disposition: approve internal use, request edits, return for evidence, archive as no-trade intelligence, or reject. `Approve public-ready candidate` may be displayed only when all specification gates pass, but it does not publish.
8. The output remains internal and ephemeral. Publication, export, Archive writes, Learning Ledger writes, and queue handoffs require separate authorization.

Prototype rules:

- no live data;
- no provider calls;
- no scraping;
- no automated chart or indicator calculation;
- no autonomous QA override;
- no autonomous disposition;
- no auto-publishing;
- no broker/execution implication;
- no persistence required for the first prototype.

The default safe result is an internal draft, `SOURCE_REQUIRED`, or `NO_OUTPUT`.

## 4. Static / Manual Data Fields

The first prototype needs only the following conceptual fields. This table is not a runtime schema and does not authorize a new object contract.

Every field supports these states:

- `MANUAL`
- `STATIC_DEMO`
- `SOURCE_REQUIRED`
- `OMITTED`

| Field | Minimum purpose | Required behavior |
| --- | --- | --- |
| Ticker/topic | Identify the research subject. | Manual text; no automatic symbol lookup. |
| Asset class | Set relevant context and disclosures. | Manual selection; options selection adds substantial-risk language. |
| Timeframe | Define chart/scenario horizon. | Manual/static label, not inferred. |
| Setup label | Describe the research setup without instruction language. | Manual text with banned-language checks. |
| Chart placeholder or manual screenshot label | Provide the visual center or an honest missing-chart state. | Must show origin/status; no automated chart generation. |
| Source status | State evidence condition. | Manual/static/source-required/omitted plus visible verification wording. |
| Quote type label | Describe any entered market number. | Manual, screenshot, static/demo, source-required, or omitted; never implied live. |
| Timestamp/timezone label | Give absolute context to entered market data. | Manually entered and visibly labeled; missing values force source-required or omission. |
| Bull case | Conditional upside scenario. | Must include a trigger or remain source-required. |
| Bear case | Conditional downside scenario. | Must include a trigger or remain source-required. |
| Neutral/wait case | No-trade or wait scenario. | Treated as useful intelligence, not a failed output. |
| Counter-thesis | State the strongest opposing interpretation. | Required for public-ready eligibility; otherwise score-capped. |
| Risk flags | Show source, event, volatility, liquidity, privacy, or thesis risks. | Material risk omissions create a hard block. |
| Confirmation | Define observable supporting evidence. | Manual/static/source-required/omitted; not a command. |
| Invalidation | Define what weakens the scenario. | Required for public-ready eligibility. |
| QA score | Show category points, caps, hard blocks, and total. | Derived only from entered field states and documented rubric. |
| CEO B disposition | Record the current manual review choice in the preview session. | No automatic approval and no persistence in the first prototype. |
| Safety footer | Preserve research and execution boundaries. | Always visible; includes data-mode and options-risk additions when relevant. |

Minimum safety footer:

```text
Research Only · Manual Review Required · Not Financial Advice · No Broker Execution · No Guaranteed Outcomes
```

Add `Demo / Static Data` whenever static/demo content is present. Add `Options Involve Substantial Risk` whenever options are discussed.

### Conceptual preview states

The in-memory preview may conceptually use:

- `DRAFT_INTERNAL`
- `SOURCE_REQUIRED`
- `NO_OUTPUT`
- `CEO_B_REVIEW_REQUIRED`
- `INTERNAL_USE_APPROVED`
- `PUBLIC_READY_CANDIDATE`
- `RETURN_FOR_EVIDENCE`
- `REJECTED`

These are presentation states for a future ephemeral preview, not additions to the current Research Packet state model.

## 5. Existing Data / Contract Reuse

### Concepts that may be reused later

| Existing concept | Safe future reuse |
| --- | --- |
| Research Packet v2 | Read or map already-visible identity, thesis, source, risk, scenario, and CEO B context into the preview without changing the packet schema. Manual intake may remain the primary first-prototype source. |
| Source Hub records | Reference source names, trust status, and verification gaps when those records are already available and public-safe. Source Hub remains provenance owner. |
| Archive memory | Offer contextual reference only after privacy review. Any future write/handoff requires separate authorization. |
| Learning Ledger | Reference reviewed lessons as internal context only. Do not convert a preview into an adopted rule or lesson automatically. |
| CEO B review state | Reuse established language and final-review doctrine. The first prototype may keep its disposition ephemeral rather than writing existing review state. |
| Existing static/demo packet patterns | Reuse labeling, source-required, risk, and no-output conventions without treating fixture data as current market truth. |

### Concepts that must not be reused incorrectly

- `data/signal-alerts.json` must not become Pickaxe X input, fixture storage, preview state, or output storage.
- The locked V3.1 QQQ golden path must not become a mutable production source, editable template, or Pickaxe X persistence layer.
- The Phase 9B lesson candidate must not be repurposed as a visual-card model.
- Existing LocalStorage keys must not accept Pickaxe X fields merely because they are available.
- `pickaxeResearchPackets` must not receive a new visual-card subtype or schema fields without explicit authorization.
- `pickaxeReviewQueue` must not receive automatic Pickaxe X entries.
- Source Hub watch/manual states must not be presented as verified evidence.
- Archive and Learning Ledger must not receive automatic writes.

The first implementation should reuse vocabulary and read-only context before reusing storage or mutation behavior.

## 6. LocalStorage Boundary

### Recommendation: no new LocalStorage and no Pickaxe X persistence

The first prototype should use ephemeral JavaScript state tied to the current `#/research` page session:

- manual form values live in memory;
- preview state is derived from those values;
- QA is recalculated from current field states;
- CEO B disposition is visible for the current session only;
- refresh/navigation may clear the Pickaxe X preview.

This is acceptable for a first prototype because the objective is to validate operator flow, visual hierarchy, safety states, and QA usefulness—not durable recordkeeping.

Existing browser-local review state may be read only when needed to prefill clearly labeled context and only if doing so does not mutate its contract. The safer default is manual entry.

If later user testing proves persistence necessary:

1. stop the implementation;
2. define the exact persistence need and retention/privacy behavior;
3. decide whether an existing contract can safely represent it;
4. obtain separate CEO B authorization for any storage contract or new key;
5. update `docs/LOCAL_STORAGE_KEYS.md` and backup/restore safeguards within that separately approved sprint.

No LocalStorage documentation change is required now because this scope preserves the factual current key inventory.

## 7. Visual Scope Boundary

### Allowed in a later bounded implementation

- one static/manual Pickaxe X preview card;
- one `1200x1200`-proportioned responsive preview inside `#/research`;
- the documented five-band layout:
  1. Hero Bar
  2. Core Market Panel
  3. Indicator + Context Band
  4. Scenario + Risk Band
  5. Final Decision Footer
- visible source, quote-type, timestamp, timezone, and field-state labels;
- required safety footer;
- QA category/total panel;
- CEO B review status;
- explicit `SOURCE_REQUIRED` and `NO_OUTPUT` states;
- manual screenshot preview only if privacy-safe and technically bounded in the separately approved implementation;
- existing Pickaxe dark/gold visual language with restrained green/red scenario accents;
- responsive presentation and reduced-motion compatibility.

### Not allowed in the first implementation

- generated chart automation;
- indicator calculation from market feeds;
- image export or download;
- auto-posting or publishing;
- live quote widget;
- real or fake provider badges;
- fake terminal data;
- provider connection status;
- new animated system or additional global canvas;
- PAX integration;
- new route, route alias, direct-path bridge, renderer owner, packet model, review queue, or storage key;
- changes to the locked Alerts, V3.1, Phase 9B, Starlight, or Intelligence Orbit presentation.

The preview must remain an internal UI composition, not an exported X image.

## 8. PAX Boundary

PAX remains future-only for this prototype.

Allowed future role after separate specification and implementation authorization:

- review companion;
- QA status guide;
- onboarding helper;
- blocked-state indicator.

Forbidden role:

- trading assistant;
- signal generator;
- buy/sell recommender;
- broker/execution mascot;
- performance or profit mascot;
- autonomous reviewer.

No PAX asset, copy layer, interaction, state, or runtime code belongs in the first static/manual prototype sprint.

## 9. Acceptance Criteria For Later Implementation

A future implementation is acceptable only if:

- `#/research` remains the single selected owner route;
- the feature is one bounded module within the existing Research renderer;
- no duplicate renderer or route owner is created;
- no route, alias, or bridge is added unless separately authorized;
- no new LocalStorage key or existing-key schema mutation occurs;
- no packet model or review queue changes;
- root/public mirror pairs remain synchronized;
- required safety copy is always visible;
- `SOURCE_REQUIRED` and `NO_OUTPUT` are visible, usable safety outcomes;
- the five-band preview is clear at desktop and mobile sizes;
- QA category scores, caps, hard blocks, and total are visible;
- CEO B review state and manual disposition are visible;
- no fake data, timestamps, providers, or verification states appear;
- public-ready status is blocked below `900/1000`;
- hard blocks override the score;
- public-ready status also requires CEO B approval;
- public-ready does not publish or export;
- options content shows substantial-risk language;
- no current route, renderer, LocalStorage, Research Packet, source, archive, lesson, bridge, or starfield behavior regresses;
- `data/signal-alerts.json` remains unchanged;
- browser QA and automated validation pass.

Definition of done for that later sprint must explicitly state that the prototype remains internal, static/manual, ephemeral, research-only, and without publication or execution capability.

## 10. Later Implementation Likely Files

Likely files for one separately authorized owner-route-limited implementation:

- `public/app.js` and `app.js` — add one bounded module to the existing Research Desk renderer and ephemeral interaction logic;
- `public/styles.css` and `styles.css` — add route-scoped Pickaxe X preview styles;
- `public/index.html` and `index.html` — only if script or stylesheet cache keys require an approved update;
- `PROJECT_STATUS.md`;
- `NEXT_STEPS.md`;
- `public/habitat-data.js` and `habitat-data.js` only if static shared definitions or Build Completion Tracker metadata are explicitly approved.

The later sprint should avoid changing `public/index.html` structure because `#researchContent` already owns the Research route container.

Files that should remain outside the likely implementation:

- route bridge files;
- server files;
- `docs/LOCAL_STORAGE_KEYS.md` when storage remains unchanged;
- `data/signal-alerts.json`;
- simulator files;
- Phase 9B candidate data/contracts;
- provider or backend files.

This docs-only sprint does not authorize touching any likely runtime file listed above.

## 11. Later QA Plan

### Automated validation

Run:

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

Also confirm:

- root/public JavaScript and CSS mirrors are identical;
- HTML mirrors are identical if cache keys change;
- `data/signal-alerts.json` has no diff;
- only approved files changed;
- no new LocalStorage key appears;
- no new route or renderer owner appears.

### Browser QA

Viewports:

- desktop: `1280x720`
- mobile: `390x844`

Owner-route tests on `#/research`:

- correct Research view and nonblank content;
- manual field entry and all four field states;
- preview generation without persistence;
- five-band hierarchy;
- source-required and no-output rendering;
- QA category and total calculation;
- score caps and hard-block behavior;
- below-`900/1000` public-ready block;
- CEO B disposition requirement;
- safety footer and options-risk language;
- refresh/navigation behavior consistent with ephemeral state;
- keyboard focus and usable controls;
- no console errors;
- no document-level or route-container horizontal overflow;
- one Starlight canvas.

Regression QA:

- `/`
- `#/alerts`
- `/app/alerts`
- `#/research`
- `#/source-hub`
- `#/archive`
- `#/learning-ledger`
- `#/staging`

Regression invariants:

- canonical Alerts renderer remains singleton;
- V3.1 detailed Signals card remains beneath the Alerts overlay;
- QQQ golden-path behavior remains unchanged;
- Phase 9B candidate remains stable, unverified, and non-adopted;
- Source Hub retains provenance ownership;
- Archive and Learning Ledger receive no automatic Pickaxe X writes;
- Staging tracker/storage behavior remains unchanged;
- no `/ai-handoff` behavior change;
- one Starlight canvas;
- zero console errors;
- no horizontal overflow.

## 12. Hard Stop Conditions

Stop a future implementation immediately if it requires:

- live data;
- fake live data;
- fake timestamps;
- provider integration or provider-status claims;
- scraping or protected-site bypass;
- broker execution;
- authentication;
- payments;
- subscriptions;
- autonomous publishing;
- image export;
- new route, alias, or bridge;
- duplicate renderer;
- new storage key;
- mutation of an existing LocalStorage contract;
- packet model change;
- review queue change;
- `data/signal-alerts.json` change;
- moving the V3.1 detailed Signals card;
- changing QQQ golden-path behavior;
- changing Phase 9B candidate behavior;
- changing `/ai-handoff`;
- adding PAX;
- restoring any removed or forbidden module;
- performance, profit, accuracy, or track-record claims;
- scope expansion beyond the owner-route-limited static/manual preview.

Any stop condition requires a new bounded CEO B decision before work continues.

## 13. Recommended Next Sprint After This Scope

Recommend exactly one next bounded sprint:

`Pickaxe X static/manual prototype implementation — #/research owner-route-limited`

That later sprint should authorize only:

- one ephemeral static/manual preview module inside the existing `#/research` renderer;
- the five-band preview, field-state controls, documented QA rubric, safety states, and CEO B disposition;
- route-scoped styling and required mirror/cache updates;
- the automated and browser QA plan in this document.

It should explicitly prohibit:

- persistence or LocalStorage changes;
- new routes or renderers;
- packet/review-queue changes;
- export, publishing, providers, live data, or automation;
- changes to locked Alerts, V3.1, Phase 9B, bridges, or `data/signal-alerts.json`.

This recommendation is planning only. CEO B must issue a separate implementation authorization before any runtime file changes.
