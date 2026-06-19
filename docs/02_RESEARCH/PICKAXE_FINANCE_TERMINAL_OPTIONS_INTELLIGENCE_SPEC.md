# Pickaxe Finance Terminal / Options Intelligence — Specification

Status: Docs-only future product specification. Implementation is not approved.
Product layer: Pickaxe Capital.
Internal command layer: AI Habitat OS.
Final reviewer: CEO B.
Default data mode: manually supplied, static/demo, source-required, omitted, or verified in the same workflow.
Route status: no owner route selected or authorized.

This document defines a future research cockpit without creating a route, renderer, storage key, persistence contract, packet model, review queue, provider connection, alert engine, broker pathway, export tool, publishing workflow, or runtime behavior. The existing `docs/02_RESEARCH/PICKAXE_OPTIONS_ALERTS_SPEC.md` remains the specification for the current Options Alerts review unit at `/` and `#/alerts`. This specification does not replace it or move its route ownership.

## 1. Executive Definition

Pickaxe Finance Terminal / Options Intelligence is a research-only finance command surface and future intelligence layer for organizing market context, options candidates, source verification, risk gates, scenario logic, and manual CEO B decision support in one cockpit. It is intended to bridge the existing Alerts Desk, Research Desk, Source Hub, Pickaxe X, Archive, and Learning Ledger while preserving each system's current ownership. It is not Options Hub, a broker, a signal seller, financial advice, execution software, a live-data provider, an automatic alert engine, an automatic publisher, a performance tracker, or proof of edge.

Permanent doctrine:

- Research Only
- Manual Review Required
- Not Financial Advice
- No Broker Execution
- Options Involve Substantial Risk
- Source Verification Required
- Risk Gates Outrank Scores
- CEO B Final Review Required

Conceptual future flow:

```text
Manual or Verified Intake
  -> Source Verification Ledger
  -> Market Context
  -> Options Contract Context
  -> Technical Context
  -> Scenario and Counter-Thesis Review
  -> Risk Gates
  -> 1000-Point Readiness Review
  -> CEO B Disposition
  -> Internal Record, Pickaxe X Candidate, Archive, Learning Ledger, or No Output
```

## 2. Product Relationship Map

| Existing or future system | Responsibility | Finance Terminal relationship |
| --- | --- | --- |
| Alerts Desk / Options Alerts | Current homepage and CEO B research review queue at `/` and `#/alerts`. | Remains the current review owner. Finance Terminal must not replace its renderer, queue, packet states, or V3.1 QQQ golden path. |
| Research Desk | Manual research intake, Research Packet construction, and hosted Pickaxe X preview owner at `#/research`. | May later supply clearly labeled research context. It remains the owner of its current packet builder and Pickaxe X preview. |
| Source Hub | Source verification, provenance, trust state, and provider-boundary cockpit at `#/source-hub`. | Remains the provenance owner. Finance Terminal may later reference source status but must not duplicate or silently upgrade it. |
| Archive | Cleaned memory, packet lineage, no-output records, and reviewed intelligence at `#/archive`. | May later receive sanitized, manually approved records. No automatic write is authorized. |
| Learning Ledger | Lesson-candidate and proposed research-improvement review at `#/learning-ledger`. | May later receive explicit lesson candidates. It must not adopt rules or strategies automatically. |
| Pickaxe X | Hosted static/manual visual intelligence preview inside `#/research`. | May later receive verified Finance Terminal context as a visual candidate reference. No automatic export or publication is authorized. |
| Finance Terminal / Options Intelligence | Future research cockpit and specification layer. | Organizes cross-system context without owning an implementation route yet. |
| Options Hub | Separate future product concept. | Not authorized, selected, implemented, or renamed by this specification. |

Ownership rules:

- This specification must not move, merge, rename, or replace current route ownership.
- The existing Options Alerts specification remains authoritative for the current Alerts review experience.
- Source Hub remains authoritative for provenance.
- Research Desk remains authoritative for manual packet intake and the current Pickaxe X preview.
- Archive and Learning Ledger remain authoritative for memory and lesson review.
- A future Finance Terminal route or component requires a separate owner-route decision and regression plan.

## 3. Core User Problem

CEO B is an options trader who has historically needed many monitors, broker pages, Webull checks, filings pages, news sources, options-flow tools, technical indicators, watchlists, calendars, and market sites to assemble one decision-quality research view. The work is fragmented across tabs, timestamps, quote types, source qualities, and incompatible presentation formats.

The future Finance Terminal should reduce scattered clicking by organizing verified or honestly labeled context into one research cockpit. It should make missing evidence, stale data, contract limitations, risk gates, scenarios, and the final manual review state easier to inspect. It should not promise profit, provide personalized trading advice, issue an instruction, or execute autonomously.

The target outcome is better research organization and review discipline, not faster unsupported conviction.

## 4. Target Future Surface

This specification intentionally does not select or create an implementation surface.

| Possible future owner | Current role | Potential fit | Primary risk |
| --- | --- | --- | --- |
| `/`, `#/alerts` | Locked homepage and Options Alerts review queue. | Strong final-review context. | Could disrupt the canonical Alerts renderer, V3.1 QQQ path, or current review ownership. |
| `#/research` | Manual Research Packet intake and Pickaxe X preview owner. | Strong authoring and evidence-assembly context. | Could overload the current Research Desk or blur packet and terminal responsibilities. |
| `#/source-hub` | Source provenance and trust cockpit. | Strong verification dependency. | Would incorrectly make provenance the owner of market/options synthesis. |
| `#/dashboard` | Mission Control operating overview. | Strong executive summary context. | Could mix high-level operations with detailed contract research. |
| Future `#/finance-terminal` | Dedicated future research cockpit. | Clear product identity and separation. | Adds route, navigation, renderer, ownership, QA, and maintenance scope. |
| Future `#/options-intelligence` | Dedicated options-research surface. | Narrower contract-review identity. | Could duplicate Options Alerts or become Options Hub by drift. |

Recommendation rule:

1. Complete documentation and scope definition first.
2. Compare component ownership against a dedicated route only in a separate owner-route decision sprint.
3. Prefer reuse when it preserves clear ownership and avoids a duplicate product.
4. Do not create a route, alias, direct-path bridge, renderer, or navigation item from this specification.
5. Any future owner selection must name exact files, route invariants, viewports, regression routes, rollback boundaries, and storage behavior.

## 5. Accepted Inputs

Future accepted inputs may include:

- ticker, security, index, ETF, commodity, currency pair, or other research asset;
- asset class;
- market regime;
- timeframe;
- options direction under review;
- exact contract candidate;
- call, put, spread, or strategy label;
- strike, expiry, and premium when manually supplied;
- bid, ask, spread, volume, open interest, and implied volatility when source-verified or manually labeled;
- chart context;
- technical context;
- catalyst;
- filing, earnings, or event link;
- source links and stable references;
- watchlist context;
- Archive memory;
- Learning Ledger lesson context;
- Pickaxe X visual draft reference;
- CEO B notes.

Every input must use one of these labels:

| Label | Meaning | Permitted treatment |
| --- | --- | --- |
| `VERIFIED_SAME_WORKFLOW` | Checked against a reviewable source during the current workflow. | May support a clearly sourced field or conclusion. |
| `MANUAL_CEO_B` | Supplied by CEO B and not independently verified in the current workflow. | May appear only with a visible manual label. |
| `STATIC_DEMO` | Fixture or illustrative data with no current-market claim. | Internal demonstration only with visible static/demo labeling. |
| `SOURCE_REQUIRED` | Material information is unavailable or not sufficiently verified. | Must remain missing, blocked, or explicitly source-required. |
| `OMITTED` | Field is unnecessary, unsupported, unsafe, or intentionally excluded. | Must not be inferred or silently populated. |

Input rules:

- A screenshot is not verified merely because it is visible.
- A broker/platform screen must disclose that origin and quote basis.
- Raw private notes, positions, account details, bookmarks, and local-memory contents remain private.
- An input label cannot be upgraded without a documented verification action.
- Confidence describes evidence quality or packet completeness, never return probability.

## 6. Allowed Outputs

Allowed future outputs:

- internal research cockpit view;
- options intelligence candidate;
- source verification checklist;
- risk gate checklist;
- contract quality note;
- market and technical context summary;
- bull, bear, neutral/wait, and no-trade scenario map;
- no-trade intelligence;
- Archive candidate;
- Learning Ledger lesson candidate;
- Pickaxe X visual candidate reference;
- CEO B review packet.

Blocked outputs:

- buy or sell alert;
- guaranteed prediction;
- personalized trade instruction;
- broker order ticket;
- automatic order routing;
- automatically published post;
- live signal;
- profit, accuracy, or track-record claim;
- autonomous rule update;
- autonomous lesson adoption;
- Options Hub implementation.

All output labels describe research state. None authorize a transaction, publication, provider call, or system rule change.

## 7. Static / Manual Prototype Rules

Before separately approved live-provider infrastructure exists:

- every number is `MANUAL_CEO_B`, `STATIC_DEMO`, `SOURCE_REQUIRED`, `OMITTED`, or genuinely `VERIFIED_SAME_WORKFLOW`;
- no number may be labeled live unless the same workflow verifies and displays its source, quote type, timestamp, timezone, and verification state;
- manually supplied values must be visibly labeled manual;
- demonstration values must be visibly labeled static/demo;
- missing values must stay missing;
- `SOURCE_REQUIRED` is a valid safety state;
- `NO_OUTPUT` is a valid safety state;
- no fake timestamp may be created;
- no fake provider status may be displayed;
- no options-chain value may be invented;
- no unavailable field may be represented as zero;
- no polling, scraping, or background refresh may be implied;
- no private frontend key or account credential may be stored.

Prototype documentation may describe conceptual fields and states. It must not create a runtime schema or persistence contract.

## 8. Market Context Blocks

Future market context categories may include:

- major indices;
- sector and ETF context;
- volatility regime;
- yields and rates;
- dollar and relevant FX context;
- commodities where relevant;
- breadth;
- risk-on / risk-off tone;
- catalyst calendar;
- earnings;
- FOMC, CPI, jobs, and other macro events;
- official filings and company news;
- reputable reported news.

Each market-context field must include:

- value or conclusion;
- source name;
- source type;
- quote or observation type;
- timestamp;
- timezone;
- verification state;
- confidence note tied to evidence quality;
- missing or conflicting evidence where relevant.

Rules:

- Context is not a prediction.
- Correlation is not causation.
- Broad market context cannot clear a contract-quality or risk hard block.
- Watch sources may create a research lead but cannot establish final verification alone.
- Stale or missing context must be labeled, omitted, or routed to `SOURCE_REQUIRED`.

## 9. Options Intelligence Blocks

Future options intelligence categories may include:

- contract identity;
- call, put, spread, or strategy label;
- expiry;
- strike;
- premium;
- bid;
- ask;
- spread amount and percentage;
- volume;
- open interest;
- implied volatility;
- historical or realized volatility;
- IV rank or IV percentile only when source-verified with methodology;
- Greeks only when source-verified;
- liquidity quality;
- event risk;
- expected move only when source-verified with methodology;
- unusual activity only when source-verified and carefully defined.

Every options field must be labeled:

- verified;
- manual;
- static/demo;
- source-required;
- omitted.

Options rules:

- Exact contract identity is required before contract-specific interpretation.
- Quote type, timestamp, timezone, and source are mandatory for time-sensitive values.
- IV rank and IV percentile are not interchangeable.
- Volume and open interest are context, not proof of future liquidity or fills.
- Expected move is contextual and not a guaranteed forecast.
- Unusual activity is not intent, direction, or proof of informed trading.
- Wide, crossed, locked, zero, missing, or stale quotes require an explicit warning or block.
- The system must never imply that it currently has a live options chain.
- Options involve substantial risk.

## 10. Technical Context Blocks

Future technical context may include:

- trend;
- price structure;
- VWAP;
- EMA 10, 20, 50, and 200;
- RSI;
- MACD;
- KDJ;
- KST;
- Bollinger Bands;
- Fibonacci;
- volume profile;
- relative volume;
- gap, prior high, and prior low;
- support and resistance;
- supply and demand zones;
- Pickaxe VIC as a future-only research indicator.

Each technical field must identify:

- timeframe;
- source or calculation basis;
- timestamp and timezone where time-sensitive;
- verification status;
- manual annotation status where applicable;
- uncertainty or conflicting evidence.

Technical context rules:

- No indicator may generate a trade command.
- No unsupported value may be populated for visual completeness.
- Manually drawn levels or zones must say `Manual`.
- A technical conclusion must remain conditional and include invalidation.
- Conflicting indicators should remain visible as uncertainty.
- Technical context cannot override source, liquidity, event, or CEO B review gates.

## 11. Pickaxe VIC Integration Boundary

`Pickaxe VIC Indicator — Volume-In-Candle Accumulation Signal` is future optional research context only.

It may eventually describe:

- abnormal relative volume;
- absorption or reversal candle structure;
- pullback context;
- EMA, VWAP, or prior-high reclaim;
- risk filters.

Permanent boundaries:

- research-only;
- CEO B review required;
- not auto-trading;
- not a buy/sell recommender;
- not used in readiness or contract scoring until separately validated;
- must be backtested across multiple tickers, regimes, and timeframes before any scoring proposal;
- methodology, dataset, failure cases, and bias controls must be documented;
- not implemented in this sprint.

This specification does not define a formula, threshold, score contribution, runtime field, backtest result, or user interface for VIC.

## 12. Source Verification Ledger Requirements

Every material source record should include:

- source name;
- source type;
- link or stable reference;
- claim or field supported;
- verification status;
- source publication time when available;
- quote or observation timestamp;
- verification timestamp;
- timezone;
- quote type;
- source role: primary, secondary, watch-only, manual, or unverified;
- confidence note;
- conflict state;
- privacy/public-safe state;
- rejected-source reason when applicable;
- manual reviewer.

Preferred source hierarchy:

1. SEC and official filings.
2. Company investor relations.
3. Exchange data and official exchange notices.
4. Official economic releases and event calendars.
5. Reputable licensed data providers.
6. Reputable attributable news.
7. Broker or platform screen only when clearly labeled.
8. X/social as a watch source unless independently verified.

Source rules:

- Primary evidence outranks commentary where relevant.
- A link alone is not verification.
- Multiple reports with a common origin do not create independent confirmation.
- Conflicting evidence must remain visible until resolved.
- Protected sites must not be scraped or bypassed.
- Walter Bloomberg and `@DeItaone` may be watch sources only, never final verification.
- Raw private URLs, account screens, local notes, or vault contents must not enter a public-safe record.

## 13. Timestamp / Quote-Type Rules

Every market or options number must show:

- source;
- quote type;
- timestamp;
- timezone;
- verification state.

Approved quote types:

- real-time quote;
- delayed quote;
- end-of-day quote;
- manually supplied quote;
- screenshot quote;
- static/demo quote;
- source-required;
- omitted.

Rules:

- The market observation timestamp and verification timestamp are separate fields.
- Relative language such as `current`, `now`, or `today` requires an absolute timestamp and timezone.
- If the timestamp is missing, mark the field `SOURCE_REQUIRED` or omit the number.
- If the quote basis is unknown, do not infer it.
- Static/demo data must not use visual treatment that implies a current quote.
- A stale quote remains historical context and must not be presented as current.
- No fake timestamp or provider status is permitted.

Recommended compact label:

```text
Source: [NAME] | Quote: [TYPE] | As of: [YYYY-MM-DD HH:MM TZ] | Status: [VERIFICATION]
```

## 14. Risk Gate Framework

Future risk gates should include:

| Risk gate | Trigger | Required result |
| --- | --- | --- |
| Missing source | Material field or claim lacks reviewable provenance. | `SOURCE_REQUIRED`, omission, or block. |
| Stale data | Observation is too old for the stated timeframe or event. | Refresh manually, relabel historical, or block. |
| Unverified options chain | Contract values lack source/quote/time verification. | Block contract-specific conclusion. |
| Wide spread | Spread exceeds the documented review threshold. | Warn, reject contract, or research another candidate. |
| Low volume | Volume is insufficient under the approved context rules. | Warn or block contract-quality eligibility. |
| Low open interest | Open interest is insufficient under the approved context rules. | Warn or block contract-quality eligibility. |
| Event risk | Earnings, FOMC, CPI, jobs, filing, or other event materially affects interpretation. | Display event context and risk; block if unresolved. |
| IV crush risk | Event premium or volatility compression risk is material. | Display explicit risk and methodology. |
| Gap risk | Overnight or event gap can invalidate the assumed structure. | Display explicit risk and scenario impact. |
| News uncertainty | Material news is unverified, conflicting, or incomplete. | Return for evidence or no output. |
| Contradictory source | Material evidence conflicts. | Resolve, narrow the claim, or block. |
| Hard technical invalidation | Defined structure has failed. | Mark invalidated; do not preserve stale conviction. |
| Bad risk/reward clarity | Risk and invalidation cannot be explained coherently. | Block public-ready eligibility. |
| Unclear thesis | Candidate lacks a distinct evidence-based reason for review. | Keep internal or return for evidence. |
| CEO B review missing | No explicit manual disposition exists. | Block escalation. |

Risk-gate rules:

- Hard blocks outrank conviction, presentation quality, and readiness score.
- Scores cannot clear a hard block.
- CEO B cannot convert unverified data into verified data through approval.
- Privacy leakage, execution language, invented data, and fake timestamps are non-overridable rejection conditions.
- Threshold changes require a separately approved rule/version sprint.

## 15. Scenario Framework

Required scenario outputs:

- bull case;
- bear case;
- neutral / wait case;
- no-trade intelligence case.

Each scenario must include:

- conditional trigger;
- invalidation;
- evidence quality;
- risk note;
- missing evidence;
- source status;
- CEO B review state.

Scenario rules:

- Scenarios are conditional research paths, not predictions.
- Neutral/wait is a valid output, not failure.
- No-trade intelligence may be the highest-quality result when evidence or contract quality is weak.
- Bull and bear cases must not hide the counter-thesis.
- A trigger must be observable and sourced or clearly manual.
- Invalidation must state what weakens or defeats the scenario.
- Options scenarios must include liquidity, volatility, event, and substantial-risk context when relevant.

## 16. Contract Quality Framework

Contract quality may be reviewed conceptually across:

| Category | Review question |
| --- | --- |
| Liquidity | Is the contract interpretable under documented liquidity criteria? |
| Spread | Is the bid/ask spread acceptable and reproducibly calculated? |
| Volume | Is current observed activity sufficient for research context? |
| Open interest | Does open interest support interpretation without implying fill quality? |
| Expiry fit | Does time to expiry fit the stated research horizon and catalyst? |
| IV / event risk | Are volatility methodology and event premium risks visible? |
| Risk/reward clarity | Are downside, invalidation, and uncertainty understandable? |
| Source quality | Are every contract value and calculation traceable? |
| Thesis alignment | Does the contract structure correspond to the stated scenario without becoming an instruction? |
| Invalidation clarity | Is there a clear condition under which the contract thesis is no longer coherent? |

The score or review state measures contract-review quality only. It must not measure:

- expected return;
- win probability;
- guaranteed profitability;
- trade edge;
- live signal strength;
- fill probability;
- future performance.

No contract-quality result authorizes buying, selling, routing, or executing an order.

## 17. Finance Terminal 1000-Point Readiness Rubric

The readiness score measures research completeness, evidence quality, risk visibility, and CEO B usefulness. It does not measure expected return, prediction accuracy, profitability, or investment performance.

| Category | Points | Scoring standard |
| --- | ---: | --- |
| Source quality | 150 | 50 provenance completeness; 40 source authority; 35 claim-to-source mapping; 25 conflict handling |
| Data freshness | 125 | 45 timestamp completeness; 30 timezone and quote type; 30 relevance to timeframe/event; 20 stale-data handling |
| Contract / liquidity clarity | 125 | 30 exact contract identity; 30 spread/liquidity interpretation; 25 volume/open-interest context; 20 expiry fit; 20 limitations |
| Market context | 100 | 25 regime; 20 sector/index context; 20 volatility/rates context; 20 catalyst calendar; 15 contradictory/missing context |
| Technical context | 100 | 25 timeframe/structure; 25 source/calculation basis; 20 confirmation; 20 invalidation; 10 conflicting-evidence treatment |
| Scenario clarity | 125 | 30 bull; 30 bear; 25 neutral/wait; 20 no-trade case; 20 trigger and counter-thesis quality |
| Risk clarity | 150 | 45 material risks; 35 event/volatility/liquidity risks; 30 invalidation; 25 missing evidence; 15 no-output discipline |
| CEO B usefulness | 125 | 35 decision clarity; 30 evidence-gap visibility; 25 disposition clarity; 20 Archive/Learning usefulness; 15 Pickaxe X handoff clarity |
| **Total** | **1000** | |

Readiness bands:

- `900–1000`: eligible for CEO B public-ready candidate review only when every gate passes.
- `750–899`: internal research only; revisions or evidence required.
- `500–749`: incomplete internal draft; substantial remediation required.
- `0–499`: reject, return for evidence, or no output.

Rules:

- Below `900/1000` remains internal.
- `900/1000` or higher does not publish, alert, or execute anything.
- CEO B approval is always required.
- Missing source labels on any material claim or number cap the score at `749`.
- Missing timestamp, timezone, or quote type on a purportedly current number cap the score at `749` and block public-ready status.
- Missing material risk language caps the score at `799`; a material omission may force rejection.
- Missing counter-thesis or invalidation caps the score at `849`.
- A principal claim supported only by a watch source caps the score at `749`.
- Honest `SOURCE_REQUIRED` or `OMITTED` treatment is preferable to invented completeness.

Automatic rejection overrides the numeric score:

- fake live data;
- fake timestamp;
- fake provider status;
- buy/sell command;
- guaranteed outcome;
- unsupported performance, profit, accuracy, or track-record claim;
- public-ready state without source and risk labels;
- execution implication;
- privacy leakage;
- missing CEO B review.

## 18. CEO B Review Gate

Allowed dispositions:

- approve internal research;
- approve as public-ready candidate;
- request edits;
- return for evidence;
- archive as no-trade intelligence;
- reject.

Public-ready candidate requires all of the following:

- readiness score of at least `900/1000`;
- source labels visible;
- quote type, timestamp, timezone, and verification state visible for every market/options number;
- risk gate visible;
- no unresolved hard block;
- no banned language;
- required safety footer present;
- CEO B approval;
- no execution implication;
- privacy/public-safe review passed.

Gate rules:

- Public-ready means eligible for a future separate publication review, not published.
- A material edit invalidates the prior score and approval until re-reviewed.
- CEO B approval cannot waive invented data, fake timestamps, missing source identity, privacy leakage, or execution language.
- No autonomous approval, publishing, alert generation, or rule update may follow from this gate.

## 19. Archive and Learning Ledger Handoff

Future Archive candidates may preserve:

- source gap;
- no-output decision;
- rejected contract;
- risk-gate result;
- lesson candidate;
- failed thesis;
- no-trade intelligence;
- counter-thesis;
- evidence-checklist improvement;
- sanitized CEO B disposition;
- source and rule versions at decision time.

Archive and Learning Ledger handoff must not:

- claim profit or performance;
- rewrite historical inputs after the outcome;
- auto-update rules, prompts, scores, or gates;
- adopt strategies automatically;
- publish publicly;
- modify Alerts automatically;
- create duplicate packet or lesson models;
- represent a favorable outcome as proof of process quality.

Learning Ledger may propose a checklist, source, risk, design, or prompt improvement. Adoption requires a separate CEO B decision and does not automatically change runtime behavior.

## 20. Pickaxe X Connection

Future relationship:

1. Finance Terminal organizes market, options, technical, source, scenario, and risk context.
2. Pickaxe X may convert verified or honestly labeled context into a visual intelligence candidate.
3. Pickaxe X continues to require visible sources, quote labels, timestamp/timezone context, QA scoring, safety footer, and CEO B review.
4. A Finance Terminal readiness score does not substitute for Pickaxe X visual QA.
5. A Pickaxe X candidate does not become public automatically.

Boundaries:

- no automatic visual export;
- no automatic image download;
- no automatic X publishing;
- no automatic newsletter publishing;
- no automatic public output;
- no new Pickaxe X storage or packet subtype;
- no changes to the hosted `#/research` preview in this sprint.

## 21. PAX Boundary

PAX is future-only.

Allowed future role:

- review-state companion;
- QA/status guide;
- onboarding helper;
- blocked-state indicator.

Forbidden role:

- trading assistant;
- buy/sell recommender;
- broker or execution mascot;
- profit mascot;
- signal character;
- autonomous decision-maker;
- substitute for CEO B review.

No PAX asset, route, copy system, interaction, state, or implementation is authorized by this specification.

## 22. Allowed and Banned Language

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
- no broker execution.

Banned:

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
- guaranteed alert;
- performance proof;
- best contract to buy now.

Negative boundary statements in documentation are permitted. User-facing language must not use banned terms to create urgency, certainty, implied execution, or proof of performance.

## 23. Future Implementation Dependencies

Every future dependency requires separate authorization:

- owner-route decision;
- UI prototype;
- data contract;
- source verification ledger;
- provider adapter memo;
- backend and security architecture;
- live-data licensing and terms review;
- compliance copy matrix;
- observability and failure-state design;
- audit logs;
- manual review queue;
- image export;
- publishing workflow;
- authentication, payments, or subscriptions if ever considered.

Required sequencing:

1. Approve and host-verify this specification.
2. Run a bounded owner-route and static/manual prototype scope decision.
3. Define exact field ownership and storage non-requirements before UI work.
4. Define privacy, security, licensing, observability, and failure behavior before any provider.
5. Implement and validate a static/manual prototype only after explicit authorization.
6. Treat provider, export, publishing, authentication, monetization, and execution as separate future decisions.

This specification authorizes none of those dependencies.

## 24. Acceptance Criteria

This specification is complete only if:

- Finance Terminal / Options Intelligence is defined clearly;
- it is distinguished from Options Hub and the existing Options Alerts review unit;
- all current locked routes, renderers, phases, bridges, and storage contracts remain unchanged;
- accepted inputs and allowed/blocked outputs are defined;
- static/manual/source-required/omitted behavior is defined;
- source verification and source hierarchy are defined;
- timestamp, timezone, and quote-type rules are defined;
- market, options, technical, risk, scenario, and contract-quality frameworks are defined;
- the complete 1000-point readiness rubric totals exactly 1000 points;
- the `900/1000` threshold remains a review threshold rather than publication or execution authority;
- CEO B review dispositions and public-ready gates are defined;
- Archive and Learning Ledger handoff boundaries are defined;
- the Pickaxe X relationship is defined without changing its runtime;
- VIC and PAX remain future-only;
- allowed and banned language is explicit;
- future implementation dependencies are separated;
- no live provider, execution, public publishing, or performance capability is implied.

Definition of ready for a later scope proposal:

- CEO B approves this specification;
- existing Options Alerts and route ownership are explicitly preserved;
- one future owner decision is bounded to exact routes and files;
- static/manual handling is mapped without assuming persistence;
- privacy and source requirements are approved;
- accessibility, responsive behavior, QA, rollback, and regression criteria are written;
- implementation receives separate CEO B authorization.

## 25. Reusable CEO B Prompt Template

> Create a Finance Terminal / Options Intelligence research packet for [TICKER/IDEA] using only same-workflow verified data or clearly labeled manual/static data. Show source, quote type, timestamp, timezone, verification status, market context, options contract context, technical context, bull/bear/neutral scenarios, counter-thesis, risk gates, confirmation, invalidation, readiness score, and CEO B final review state. Research only. Not financial advice. No broker execution. Options involve substantial risk. Do not invent live numbers. If data is unavailable, mark it source-required or omit it.

Prompt-use rules:

- The prompt requests a research packet candidate, not an alert, order, or publication.
- Manual values remain manual.
- Static/demo values remain static/demo.
- Missing material evidence returns `SOURCE_REQUIRED`, `OMITTED`, or `NO_OUTPUT`.
- Any candidate still requires source review, risk review, readiness review, and CEO B disposition.

## 26. Hard Stop Conditions

Stop and request separate CEO B authorization if work requires:

- runtime files;
- route changes;
- CSS changes;
- HTML changes;
- a new renderer;
- a new storage key;
- persistence;
- a packet-model change;
- a review-queue change;
- `data/signal-alerts.json`;
- Options Hub implementation;
- Phase 9C or V3.2;
- live data or provider integration;
- scraping or protected-site bypass;
- broker execution;
- authentication;
- payments;
- subscriptions;
- autonomous publishing;
- automatic rule changes;
- image export;
- fake live numbers;
- fake timestamps;
- fake provider status;
- performance, profit, accuracy, or track-record claims;
- changes to `/ai-handoff`;
- changes to any locked phase, route, renderer, bridge, mirror, storage contract, or hosted Pickaxe X behavior;
- a documentation conflict requiring CEO B judgment.

Current sprint boundary:

- specification only;
- no website, server, data, storage, route, renderer, or visual behavior changed;
- no market packet or alert was generated;
- no provider, export, publication, execution, or Options Hub work was authorized.
