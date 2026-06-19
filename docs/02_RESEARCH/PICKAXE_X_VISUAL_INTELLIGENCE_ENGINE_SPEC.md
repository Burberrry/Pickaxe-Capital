# Pickaxe X Visual Intelligence Engine v2.0 — Prototype Specification

Status: Implementation-ready documentation. Implementation is not approved.
Product layer: Pickaxe Capital.
Internal review layer: AI Habitat OS.
Final reviewer: CEO B.
Default artifact: `1200x1200` chart-led visual intelligence card.
Data mode: static/manual prototype unless a later bounded sprint establishes verified provider infrastructure.

This document defines one future-compatible visual intelligence workflow. It does not create a route, renderer, storage key, packet model, review queue, provider connection, export tool, publishing path, or runtime behavior.

## 1. Executive Definition

Pickaxe X Visual Intelligence Engine v2.0 is a research-only, source-verified market presentation workflow that converts a ticker, market idea, catalyst, chart screenshot, source link, or existing research packet into a premium `1200x1200` chart-led visual intelligence draft for CEO B review. It is a future bridge between Research Packets, Source Hub, Archive, X posts, and newsletters, but every output remains a reviewed presentation artifact rather than a decision or execution system. It is not financial advice, a trading signal, a broker or execution tool, an auto-alert engine, an auto-publishing system, a performance tracker, or proof of edge.

Core workflow:

```text
Operator Input
  -> Input Classification
  -> Required-Field Check
  -> Source Verification
  -> Number and Claim Labels
  -> Visual Intelligence Draft or Safety State
  -> 1000-Point QA
  -> CEO B Review
  -> Internal Use, Public Candidate, Archive, or Rejection
```

Permanent doctrine:

- Research Only
- Manual Review Required
- Not Financial Advice
- No Broker Execution
- Source Verification Required
- Risk First
- CEO B final review
- No guaranteed outcomes

## 2. Operator Workflow

1. CEO B submits a ticker, market idea, chart screenshot, catalyst, source link, or research packet.
2. The workflow classifies the input type and records whether it is source-backed, manually supplied, static/demo, or incomplete.
3. The workflow identifies the fields required for the selected output and asset class.
4. The workflow checks whether the necessary sources are available and reviewable in the same workflow.
5. Every number, chart, and material claim receives a source and verification label.
6. A visual draft is produced only when minimum evidence exists. Otherwise, the workflow returns `SOURCE_REQUIRED` or `NO_OUTPUT`.
7. The draft receives a score under the 1000-point QA rubric.
8. CEO B approves, edits, rejects, returns for evidence, or archives the draft.
9. Public release remains blocked unless the score is at least `900/1000` and CEO B explicitly approves the public-ready candidate.
10. The reviewed artifact may be archived as research memory, an archived lesson, or no-trade intelligence.

The score never overrides a hard block. CEO B approval never converts unverified data into verified data.

## 3. Accepted Inputs

Accepted input classes:

- ticker or asset
- market idea
- catalyst
- chart screenshot
- research packet
- source links
- timeframe
- intended audience
- market regime context
- scenario bias manually supplied by CEO B
- optional manual data notes
- optional Archive or Learning Ledger references

Every input field receives exactly one verification status:

| Status | Meaning | Permitted use |
| --- | --- | --- |
| `VERIFIED_SAME_WORKFLOW` | Checked against a reviewable source during the current workflow. | May support a labeled claim or number. |
| `MANUAL_CEO_B` | Supplied by CEO B but not independently verified in the workflow. | May appear only with a visible manual label. |
| `STATIC_DEMO` | Fixture or illustrative content with no live claim. | Internal prototype use with a visible demo/static label. |
| `SOURCE_REQUIRED` | Material field exists but lacks sufficient verification. | Placeholder or safety state; not a supported claim. |
| `OMITTED` | Field is unavailable, unnecessary, unsafe, or unsupported. | Must not be inferred or silently filled. |

Minimum intake record:

- input class
- ticker/topic or asset identity
- intended output type
- intended audience
- requested timeframe
- supplied sources or explicit source gap
- operator identity as CEO B/manual
- privacy classification

## 4. Output Types

Allowed output types:

- internal research visual draft
- CEO B review visual
- X-ready public visual candidate
- newsletter visual candidate
- no-trade intelligence visual
- archived lesson visual

Allowed outputs are candidates or records, not automatic publications.

Blocked output types:

- buy/sell alert
- guaranteed prediction
- auto-published post
- broker or execution instruction
- personalized investment advice
- performance marketing graphic
- fake live-data card

An X-ready or newsletter-ready label means the composition is formatted for later review and possible publication. It does not mean published, approved, or live.

## 5. Static / Manual Prototype Data Contract

The prototype operates without live providers. This is a documentation contract only and does not introduce a runtime schema, packet model, storage key, or API.

Allowed prototype data states:

- static demo data
- manually supplied by CEO B
- source-required
- omitted
- same-workflow verified only when actually checked

Conceptual field contract:

| Field group | Required metadata |
| --- | --- |
| Identity | value, asset/topic type, verification status |
| Market number | value, units, quote type, source, timestamp, timezone, verification status |
| Claim | claim text, source/reference, source quality, verification status |
| Chart | image/origin, timeframe, captured-at context, source status, manual/static marker when applicable |
| Indicator | name, value or visual state, calculation/source basis, verification status |
| Scenario | trigger, invalidation, evidence quality, risk note, source status, CEO B review state |
| Artifact | output type, data mode, QA score, review disposition, privacy state, safety footer |

Rules:

- No number may appear as live unless verified in the same workflow.
- Manual data must be visibly labeled `Manual — CEO B Supplied`.
- Demo data must be visibly labeled `Demo / Static Data`.
- Missing data must not be filled by assumption, interpolation, or invented context.
- `SOURCE_REQUIRED` is a valid workflow result and not a failure.
- `NO_OUTPUT` is a valid workflow result when evidence is insufficient.
- A screenshot is not independently verified merely because it is visible.
- Confidence and conviction describe evidence quality or packet completeness, never expected return.

## 6. Source Verification Requirements

Every sourced fact must carry:

- source name
- source type
- source link or stable reference where available
- verification status
- verification timestamp
- timezone
- source quality level
- claim or number supported

Source quality levels:

| Level | Definition | Use |
| --- | --- | --- |
| Primary source | Originating authority or issuer. | Preferred final evidence where relevant. |
| Reputable secondary source | Established reporting or analysis with attributable sourcing. | Supporting or contextual evidence. |
| Data-provider source | Market-data provider with known quote basis and terms. | Future verified market fields after approved integration. |
| Platform/broker source | Platform-displayed market context or screenshot. | Requires quote type and account/privacy review. |
| Watch source | Fast-moving lead that requires independent confirmation. | Intake only; never final verification alone. |
| User-supplied manual source | CEO B note, observation, or supplied artifact. | Manual-labeled context only. |
| Unverified/rejected source | Unreviewable, conflicting, stale, or insufficient evidence. | Cannot support a final claim. |

Verification rules:

- SEC filings, company investor-relations pages, exchange data, official economic releases, and official event pages are preferred primary sources where relevant.
- Walter Bloomberg / `@DeItaone` is watch-only and cannot be final verification.
- X and other social posts require independent verification before becoming final evidence.
- Screenshots require source, timeframe, and captured-at context; otherwise they remain manual/static or source-required.
- Conflicting sources must be shown as an evidence gap or resolved before public-candidate status.
- Protected sites must not be scraped or bypassed.
- A link alone is not verification; the supported claim and review state must be explicit.

## 7. Timestamp / Timezone / Quote-Type Labels

Every live or market-related number requires:

- source
- quote type
- timestamp
- timezone
- verification status

Approved quote-type labels:

- delayed quote
- real-time quote
- end-of-day quote
- manually supplied quote
- screenshot quote
- static/demo quote
- source-required

Approved timezone examples:

- ET
- PT
- UTC
- exchange-local time

Rules:

- No fake timestamps.
- No fake provider status.
- No unlabeled live numbers.
- A verification timestamp is distinct from the market quote timestamp and must not replace it.
- Relative phrases such as “now,” “today,” or “current” require an absolute timestamp and timezone when tied to market data.
- If the timestamp, timezone, or quote basis is missing, the number must be marked `SOURCE_REQUIRED` or omitted.
- Static/demo numbers must not use visual treatment that implies a current market quote.

Recommended compact label:

```text
Source: [NAME] | Quote: [TYPE] | As of: [YYYY-MM-DD HH:MM TZ] | Status: [VERIFICATION]
```

## 8. Default 1200x1200 Visual Layout

The standard X-ready candidate is a square `1200x1200` card with five vertically ordered bands.

| Band | Purpose | Required fields | Optional fields | Banned fields | Hierarchy | Missing-data state | Source-label rule |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1. Hero Bar | Identify the subject and evidence state immediately. | ticker/topic, asset class, absolute date/time context, source-state badge, Pickaxe identity, disclaimer marker | concise setup label, timeframe | certainty, command language, fake urgency | identity first, source state second | show topic plus `SOURCE_REQUIRED`; do not fabricate price context | every market-time claim must point to the card source rail/footer |
| 2. Core Market Panel | Make the verified chart or explicit placeholder the visual center. | chart or labeled placeholder, timeframe, chart source state | verified/manual key level, regime label | fake chart, unlabeled screenshot, invented market fields | chart dominates; context stays subordinate | use `NO VERIFIED CHART — SOURCE REQUIRED` | chart origin, timeframe, captured-at/quote context, and status required |
| 3. Indicator + Context Band | Summarize only supported technical/context evidence. | at least one labeled context block or an unavailable state | approved indicators, catalyst calendar, options context | unsupported calculations, decorative fake values | limited cards with status badges | show unavailable/source-required per block | each value or conclusion carries status; shared source label allowed only when exact |
| 4. Scenario + Risk Band | Present balanced conditional paths and uncertainty. | bull, bear, neutral/wait; trigger; invalidation; risk; evidence quality; source status | counter-thesis, catalyst risk, liquidity note | commands, certainty, hidden downside | neutral has equal legitimacy; risk is visually prominent | unresolved cases remain source-required or no-output | material triggers and risk claims must map to evidence |
| 5. Final Decision Footer | Show workflow status and prevent implied publication or execution. | QA score, threshold result, CEO B review state, source state, safety footer | archive disposition, intended channel | broker action, auto-publish state, performance claim | review disposition above compact disclosures | default to internal/not approved | source summary and unresolved gaps remain visible |

Brand direction:

- black, charcoal, and gunmetal base
- metallic gold structure
- silver/white text
- restrained green bullish and red bearish accents
- official circular crossed-pickaxe logo
- chart-led hierarchy
- restrained ornament and motion

This visual direction is specification only. It does not authorize CSS, image, logo, renderer, or runtime work.

## 9. Hero Bar

Purpose: establish identity, time context, source state, and Pickaxe authorship in a single scan.

Required:

- ticker or topic
- asset class
- absolute date/time context when market data is present
- source-state badge
- Pickaxe Capital identity
- compact disclaimer marker

Optional:

- setup category
- chart timeframe
- short audience label

Must not include:

- guaranteed prediction
- price target presented as certainty
- buy/sell command
- fake urgency
- unsupported “live” status

Missing-data behavior:

- retain the identity if known;
- replace unsupported market context with `SOURCE_REQUIRED`;
- use `TOPIC UNDER REVIEW` when even the instrument identity is unresolved.

## 10. Core Market Panel

Purpose: provide the primary visual evidence, not decoration.

Allowed content:

- source-labeled chart
- clearly labeled chart placeholder
- current verified context when available
- key level or setup context when verified or manually labeled
- market regime label when supported

Must not include:

- fake chart
- fake live quote
- unlabeled screenshot
- invented volume, implied volatility, open interest, market capitalization, or other market data

Chart requirements:

- ticker/topic and timeframe
- source or manual origin
- captured-at or quote timestamp where applicable
- timezone
- verification state
- readable axes or explicit explanation when axes are cropped

If these requirements are not met, the panel must show a source-required placeholder or the artifact must return `NO_OUTPUT`.

## 11. Indicator + Context Band

Optional blocks:

- trend
- volume
- VWAP
- EMA 10 / 20 / 50 / 200
- RSI
- MACD
- KDJ
- KST
- Bollinger Bands
- Fibonacci
- volume profile
- gap, prior high, prior low, or supply-demand zones
- relative volume
- options implied volatility, open interest, or liquidity only when source-verified
- catalyst calendar only when source-verified

Every indicator receives one status:

- verified
- manual
- static/demo
- unavailable
- source-required

Rules:

- The band may use fewer indicators; visual density is not evidence quality.
- Calculation periods, chart timeframe, and data basis must be available for computed indicators.
- Manually drawn zones must say `Manual`.
- Options fields require visible source, timestamp, and substantial-risk language.
- Unsupported indicators must be omitted or shown unavailable, never populated decoratively.
- Conflicting indicators should be summarized as uncertainty rather than forced into one directional conclusion.

## 12. Scenario + Risk Band

The default scenario map contains:

- Bull case
- Bear case
- Neutral / wait case

Each scenario includes:

- conditional trigger
- invalidation
- evidence quality
- risk note
- source status
- CEO B review state

Scenario rules:

- Scenarios are conditional research paths, not predictions.
- Bull and bear accents must not make neutral/wait appear inferior.
- Neutral/wait is useful no-trade intelligence and not a failed result.
- A trigger must be observable and source-backed or visibly manual.
- Invalidation must identify what would weaken the scenario.
- Risk must include relevant event, liquidity, volatility, data-quality, or thesis risk.
- Options scenarios must state that options involve substantial risk.

## 13. Counter-Thesis and Uncertainty

Every draft must state:

- counter-thesis
- missing evidence
- uncertainty state
- invalidation
- reason for no output, when applicable

The workflow must not hide uncertainty to strengthen the appearance of the card. Visual polish cannot upgrade weak evidence. If the counter-thesis cannot be stated because inputs are too incomplete, the artifact remains internal and source-required or returns no output.

Recommended uncertainty states:

- `LOW — MATERIAL CLAIMS VERIFIED`
- `MODERATE — IDENTIFIED EVIDENCE GAPS`
- `HIGH — SOURCE OR TIMING CONFLICT`
- `UNRESOLVED — NO OUTPUT`

These states describe evidence uncertainty, not expected price volatility or return probability.

## 14. No Output and Source Required States

### `NO_OUTPUT`

Use when:

- evidence is insufficient;
- source verification fails;
- sources materially conflict;
- risk is too high or cannot be stated clearly;
- privacy review fails;
- the visual would imply advice, performance, or certainty without support;
- a fake or unverifiable live number is present.

Required `NO_OUTPUT` content:

- concise reason
- missing or rejected evidence
- next evidence needed, if known
- CEO B review state
- Research Only and Manual Review Required labels

### `SOURCE_REQUIRED`

Use when a field is important but cannot be verified in the same workflow.

Rules:

- The label replaces the unsupported value; it does not sit beside a guessed value.
- The field may remain in an internal layout as a clearly blocked placeholder.
- A public candidate cannot rely on source-required material for its principal claim.

`NO_OUTPUT` and `SOURCE_REQUIRED` are successful safety outcomes, not product failures.

## 15. CEO B Review and Publication Gate

CEO B dispositions:

- approve internal use
- approve public-ready candidate
- request edits
- return for evidence
- archive as no-trade intelligence
- reject

Public release requires all of the following:

- QA score of at least `900/1000`
- explicit CEO B approval for the public-ready candidate
- required safety footer present
- all live numbers verified in the same workflow and fully labeled
- no banned language
- visible source state
- visible risk and uncertainty
- no broker or execution implication
- public/private review passed

Gate rules:

- A score below `900/1000` is internal only.
- A score at or above `900/1000` does not publish the artifact.
- CEO B approval cannot waive invented data, fake timestamps, missing risk language, or other automatic-rejection conditions.
- Any edit to a material number, chart, claim, source, scenario, or risk statement invalidates the prior score and approval until re-reviewed.
- Publishing remains a future separate workflow and is not implemented or authorized here.

## 16. Required Safety Footer

Every output includes, where relevant:

- Research Only
- Manual Review Required
- Not Financial Advice
- No Broker Execution
- Demo / Static Data when not live verified
- Options involve substantial risk when options are discussed
- No guaranteed outcomes

Minimum default footer:

```text
Research Only · Manual Review Required · Not Financial Advice · No Broker Execution · No Guaranteed Outcomes
```

Add `Demo / Static Data` whenever the artifact contains prototype data. Add `Options Involve Substantial Risk` whenever options are discussed.

## 17. 1000-Point QA Rubric

The QA score measures artifact readiness and research presentation quality. It does not measure expected return, prediction accuracy, or investment performance.

| Category | Points | Scoring standard |
| --- | ---: | --- |
| Source quality | 150 | 60 provenance completeness; 45 source authority; 25 claim-to-source mapping; 20 conflict handling |
| Data freshness | 125 | 45 quote/event timestamp completeness; 30 timezone and quote type; 30 relevance to stated timeframe; 20 stale-data handling |
| Chart clarity | 125 | 40 readable chart and timeframe; 30 source/origin clarity; 30 key context legibility; 25 honest placeholder/missing state |
| Scenario clarity | 125 | 35 bull case; 35 bear case; 35 neutral/wait case; 20 conditional trigger and invalidation quality |
| Risk clarity | 150 | 45 material risks; 35 counter-thesis; 30 invalidation; 25 uncertainty/evidence gaps; 15 no-output discipline |
| Compliance language | 100 | 40 required footer; 25 absence of commands/certainty; 20 data-mode disclosure; 15 options-risk disclosure when relevant |
| Visual hierarchy | 100 | 30 five-band scan order; 25 chart-led balance; 20 readable type/contrast; 15 restrained color semantics; 10 source-label legibility |
| CEO B usefulness | 125 | 35 decision clarity; 30 evidence-gap visibility; 25 review disposition clarity; 20 archive usefulness; 15 audience/channel fit |
| **Total** | **1000** | |

Readiness:

- `900–1000`: eligible for CEO B public-ready review, subject to every gate and no rejection trigger.
- `750–899`: internal review only; revisions or evidence required.
- `500–749`: incomplete internal draft; substantial remediation required.
- `0–499`: reject or no output.

Score caps:

- Missing source labels on any material claim or market number cap the score at `749`.
- Missing timestamp, timezone, or quote type on a purportedly live market number caps the score at `749` and blocks public-ready status.
- Missing counter-thesis or invalidation caps the score at `849`.
- Missing required risk language caps the score at `799`; if the omission is material, the artifact is automatically rejected.
- A principal claim supported only by a watch source or unverified social post caps the score at `749`.
- `SOURCE_REQUIRED` is not penalized when it is the honest output; it prevents public-ready status only when the missing field is material to the public thesis.

Automatic rejection triggers:

- invented live data
- fake timestamp
- fake provider status
- buy/sell command
- guaranteed outcome
- performance claim without independently verified records
- missing material risk language
- public release without CEO B approval

Automatic rejection overrides the numeric score.

## 18. Allowed and Banned Language

Allowed examples:

- research-only visual
- source-verified, when true
- scenario map
- risk-first context
- no-trade intelligence
- manual review required
- confirmation / invalidation
- evidence gap
- source required

Banned examples:

- guaranteed profit
- this will go up
- buy now
- sell now
- can’t lose
- AI prediction
- verified alpha without independent proof
- autopilot trading
- automated financial advisor
- proven profitable system
- live signal unless it is truly live and verified
- performance claims without verified records

Negative boundary statements in this specification are permitted. Public-facing copy must not use banned language to create urgency, certainty, or implied execution.

## 19. Privacy and Public / Private Boundaries

Artifact states:

| State | Audience | Rule |
| --- | --- | --- |
| Internal research draft | Authorized local research use | May contain manual/source-required fields; remains private by default. |
| Private CEO B review | CEO B review layer | May contain decision notes that must be removed from any public candidate. |
| Public candidate | Prepared for publication review | Must pass source, privacy, safety, QA, and CEO B gates. |
| Published artifact | Public audience | Requires a future separately authorized publishing workflow and final approval record. |
| Archived memory | Internal Archive/Learning use | Stores sanitized lineage and disposition; does not prove performance or adoption. |

Rules:

- Private notes are not public by default.
- Screenshots may contain account, position, identity, or other sensitive information and require review/redaction.
- Public output must not reveal a private trading position unless CEO B explicitly approves that disclosure.
- Public output must not imply personalized advice or broker execution.
- Raw local notes, bookmarks, strategies, and memory remain local-only unless cleaned and approved.
- Archive references must use sanitized, public-safe summaries when attached to a public candidate.

## 20. Pickaxe VIC Indicator Integration

`Pickaxe VIC Indicator — Volume-In-Candle Accumulation Signal` is a future optional indicator module only.

Potential research dimensions:

- abnormal relative volume
- absorption or reversal candle structure
- pullback context
- EMA, VWAP, or prior-high reclaim
- risk filters
- backtest requirements

Boundaries:

- research-only
- CEO B review required
- not auto-trading
- not used for scoring until separately validated
- must be validated through documented backtesting across multiple tickers before any scoring use
- requires a separate specification and implementation authorization

This sprint does not define a formula, threshold, backtest result, score contribution, runtime field, or user interface for VIC.

## 21. Future Implementation Dependencies

Future dependencies, not current deliverables:

- manual input form
- source checklist
- quote/data verification panel
- card preview
- export workflow
- Archive link
- CEO B approval gate
- provider adapter only after backend, security, observability, licensing, and provider scope
- image export only after a visual-output implementation sprint
- publishing workflow only after compliance and approval-queue scope

Required sequencing:

1. Approve this prototype specification.
2. Define a bounded static/manual data and operator-interface implementation scope.
3. Define security, privacy, source licensing, observability, and failure behavior before any provider adapter.
4. Implement and validate visual output/export separately.
5. Define compliance, approval records, and channel behavior before any publishing workflow.

Provider integration, chart automation, image export, publishing, live market data, backend, authentication, payments, and subscriptions each require separate bounded implementation sprints. None are implied by this specification.

## 22. PAX Mascot / Review Companion Boundary

PAX, the Pickaxe Review Companion, may be considered later only as:

- a visual mascot
- a review-state companion
- a QA/status guide
- an onboarding/helper character

PAX must not be:

- a trading assistant
- an autonomous agent
- a buy/sell recommender
- a broker/execution mascot
- a performance or profit mascot

PAX integration requires a separate docs/spec sprint and is not implemented or designed further in this sprint.

## 23. Acceptance Criteria

This specification is complete when:

- purpose, inputs, outputs, workflow, and non-scope are explicit;
- static/manual prototype rules are defined;
- source-verification labels are defined;
- timestamp, timezone, and quote-type labels are defined;
- `NO_OUTPUT` and `SOURCE_REQUIRED` states are defined;
- CEO B review and publication gates are defined;
- the complete 1000-point QA rubric is defined;
- the `900/1000` public-ready threshold is preserved;
- required safety language is included;
- prototype specification is separated from future implementation;
- current repository and runtime boundaries remain unchanged;
- no live provider integration is implied;
- no trade recommendation or guaranteed outcome is implied.

Definition of ready for a later implementation proposal:

- CEO B approves this specification;
- one owner surface and exact files are named;
- static/manual field handling is mapped without a new storage contract unless separately authorized;
- accessibility, responsive behavior, privacy, export, and failure-state acceptance criteria are written;
- runtime, route, renderer, and mirror impacts are explicitly bounded;
- validation and rollback steps are approved;
- implementation receives separate CEO B authorization.

## 24. Reusable CEO B Prompt Template

> Create a Pickaxe X Visual Intelligence card for [TICKER/IDEA] using only same-workflow verified data. Show source, quote type, timestamp, timezone, verification status, bull/bear/neutral scenarios, risk flags, confirmation, invalidation, and CEO B final review state. Research only. Not financial advice. No broker execution. Do not invent live numbers. If data is unavailable, mark it source-required or omit it.

Prompt-use rules:

- The prompt requests a reviewed draft, not publication.
- Any manually supplied field remains manually labeled.
- If minimum evidence is unavailable, return `SOURCE_REQUIRED` or `NO_OUTPUT`.
- A generated draft still requires QA scoring and CEO B review.

## 25. Hard Stop Conditions

Stop and request separate CEO B authorization if the work requires:

- runtime file changes
- route changes
- CSS changes
- a new renderer
- a new LocalStorage key
- a change to `data/signal-alerts.json`
- a new packet model or review queue
- live data or provider integration
- scraping or protected-site bypass
- authentication, payments, or subscriptions
- broker execution
- publishing or automation
- fake live numbers or fake timestamps
- changes to any locked phase, bridge, mirror contract, or `/ai-handoff` behavior
- restoration of any removed or forbidden module
- resolution of a documentation conflict that requires CEO B judgment

Current sprint boundary:

- specification only;
- no website or server behavior changed;
- no visual asset was generated;
- no market content was generated;
- no implementation, export, provider, or publishing work was authorized.
