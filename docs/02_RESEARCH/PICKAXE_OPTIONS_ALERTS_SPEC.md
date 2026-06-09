# Pickaxe Options Alerts Spec

Status: Implementation-ready documentation. Implementation is not approved.
Canonical product: `Options Alerts`.
Current compatibility label and route: `Alerts Desk` at `/` and `#/alerts`.
Owner: Options Alerts + Risk Desk + CEO B.

## Product Purpose

Options Alerts is the first flagship Pickaxe operating unit. It converts source-verified market context into a structured `Research Packet Candidate` for manual review. It does not direct a trade, publish autonomously, or connect to a broker.

```text
Source Hub
  -> Candidate Identity and Why Now
  -> Source Trail and Evidence Quality
  -> Contract Quality and Liquidity
  -> Volatility Intelligence and Event Risk
  -> Risk Desk and CEO B Review State
  -> CEO B Review Gate
  -> Archive Outcome
  -> Learning Ledger
```

Hard blocks outrank confidence scores. CEO B final review is required.

## Shared Packet States

- `DRAFT_RESEARCH`
- `NEEDS_MORE_EVIDENCE`
- `RESEARCH_PACKET_CANDIDATE`
- `CEO_B_REVIEW_REQUIRED`
- `WATCHLIST_REVIEW`
- `ARCHIVE_CANDIDATE`
- `REJECTED`
- `SUPPRESSED_NOISE`
- `ARCHIVED_OUTCOME`

No state represents an order, recommendation, or execution instruction.

## Franchise Card 1 - Candidate Identity and Why Now

### Feature Name

Candidate Identity and Why Now

### Owner Route

Options Alerts at `/` and `#/alerts`; source packet originates from `#/research` or `#/source-hub`.

### Purpose

Identify the company, instrument, research direction, setup type, time horizon, and source-backed reason the candidate deserves review now.

### Inputs

- symbol and company name
- asset class
- research direction
- setup type
- thesis summary
- why-now summary
- catalyst record
- Time / Trend / Theme context
- market regime
- packet creation and review timestamps

### Outputs

- normalized candidate identity
- concise research thesis
- explicit why-now statement
- catalyst timing state
- packet age
- missing identity or timing fields

### Rules

- Use `Research Packet Candidate`, never `trade signal`.
- Direction describes a research hypothesis, not an instruction.
- Why Now must cite a verified catalyst, measurable market condition, or documented review trigger.
- Packet age and catalyst date must be visible.
- A thesis without a distinct Why Now remains `DRAFT_RESEARCH`.
- Event ambiguity routes the packet to `NEEDS_MORE_EVIDENCE`.

### Safety Boundaries

- research and education only
- no guaranteed returns
- no directional instruction
- no urgency manufactured from static data
- no fake live timestamps
- no public private-note fields

### Source Requirements

- at least one verified identity source
- at least one source-backed catalyst or review trigger
- source timestamp or manual observation timestamp
- timezone for scheduled events
- clear distinction between fact, interpretation, and speculation

### CEO B Decision

CEO B may continue review, request a clearer thesis, route to Watchlists, archive as context, or reject.

### Archive Outcome

Store the normalized identity, thesis, why-now rationale, catalyst state, CEO B decision, and rejection reason. Exclude private notes from public-safe records.

### Definition of Done

- identity fields are complete
- thesis and Why Now are distinct
- catalyst and timeframe are source-linked
- stale and ambiguous states are visible
- language follows the research-only contract
- CEO B can understand the candidate in under 15 seconds

### Blockers

- missing symbol or instrument identity
- missing Why Now
- stale catalyst
- conflicting event dates
- unsupported directional claim
- private note leakage

### Dependencies

- Source Hub source records
- Research Workspace packet builder
- canonical packet state model
- privacy classification

### Suggested UI Placement

Top-left or first primary panel in the packet detail view, directly below the Options Alerts command header.

### Static/Manual Data Fields

- `packet_id`
- `symbol`
- `company_name`
- `asset_class`
- `research_direction`
- `setup_type`
- `thesis_summary`
- `why_now`
- `catalyst_type`
- `catalyst_at`
- `catalyst_timezone`
- `time_context`
- `trend_context`
- `theme_context`
- `market_regime`
- `created_at`
- `last_reviewed_at`
- `data_mode`

### Copy Language Allowed

- Research Packet Candidate
- Why CEO B Is Reviewing This
- Research Direction
- Source-Backed Catalyst
- Manual Review Required
- Needs More Evidence
- Static / Manual Snapshot

### Copy Language Banned

- buy now
- sell now
- strong buy
- trade signal
- guaranteed winner
- cannot miss
- execute
- enter immediately
- AI predicts

## Franchise Card 2 - Source Trail and Evidence Quality

### Feature Name

Source Trail and Evidence Quality

### Owner Route

Options Alerts display; Source Hub at `#/source-hub` owns provenance.

### Purpose

Show where every material claim came from, how fresh and trustworthy it is, whether sources conflict, and what evidence is still missing.

### Inputs

- Source Hub records
- evidence references
- source type and trust tier
- publication and verification timestamps
- public-safe classification
- claim-to-source links
- source conflicts
- missing evidence

### Outputs

- visible source lineage
- evidence-quality summary
- freshness state
- conflict state
- missing-evidence checklist
- public-safe source bundle

### Rules

- Every material claim links to at least one reviewable source.
- Catalyst or narrative claims require two independent sources when practical.
- Primary sources outrank commentary.
- Source quantity cannot compensate for low quality or common origin.
- Unresolved conflict is a hard block.
- A confidence score cannot hide missing evidence.
- Private URLs and raw owner notes remain local-only.

### Safety Boundaries

- no protected-site scraping or bypass
- no invented citations
- no fake connected-source status
- no public raw Obsidian content
- no private account or credential data
- no autonomous publication

### Source Requirements

Each source record must include:

- `source_id`
- title
- source type
- origin or publisher
- claim supported
- trust tier
- published timestamp when known
- last checked timestamp
- freshness state
- conflict state
- public-safe state
- manual reviewer

### CEO B Decision

CEO B may accept the source basis, request more evidence, downgrade the packet, block a source, or reject the packet.

### Archive Outcome

Archive the sanitized source IDs, claim links, evidence summary, conflict resolution, missing evidence at decision time, and CEO B source judgment.

### Definition of Done

- every material claim is traceable
- source freshness is visible
- source conflicts are resolved or blocking
- missing evidence is explicit
- public/private fields are separated
- CEO B can inspect the basis without hidden assumptions

### Blockers

- missing or stale source trail
- unresolved source conflict
- only anonymous or unreviewable evidence
- single-source narrative with no exception rationale
- private data in public-safe output
- source timestamp missing where freshness matters

### Dependencies

- Source Hub
- source and evidence schemas
- privacy rules
- source trust taxonomy

### Suggested UI Placement

Second primary panel beside or immediately below Candidate Identity, with an expandable claim-to-source trail and missing-evidence area.

### Static/Manual Data Fields

- `source_refs`
- `source_count`
- `independent_source_groups`
- `primary_source_count`
- `source_trust_summary`
- `source_freshness`
- `source_conflict_state`
- `claims_supported`
- `missing_evidence`
- `public_safe`
- `verified_by`
- `verified_at`
- `data_mode`

### Copy Language Allowed

- Verified Source
- Primary Source
- Secondary Context
- Source Needed
- Conflict Detected
- Evidence Missing
- Public-Safe Summary
- CEO B Source Review Required

### Copy Language Banned

- confirmed by AI
- secret source
- insider certainty
- guaranteed
- live agent verified
- private vault proof
- source does not matter
- trust the model

## Franchise Card 3 - Contract Quality and Liquidity

### Feature Name

Contract Quality and Liquidity

### Owner Route

Options Alerts; Risk Desk owns hard-block thresholds.

### Purpose

Determine whether a manually entered options contract snapshot is interpretable enough for research review, with clear liquidity, spread, expiry, and snapshot limitations.

### Inputs

- option type
- expiration
- strike
- days to expiry
- bid and ask snapshot
- midpoint
- spread amount and percentage
- volume
- open interest
- underlying reference price
- snapshot timestamp and source

### Outputs

- contract identity
- interpretability state
- liquidity state
- spread warning
- expiry warning
- contract-quality checklist
- blocked reason when quality fails

### Rules

- Exact contract identity is required.
- Snapshot source and timestamp are required.
- Spread percentage must use a documented denominator.
- Zero, crossed, locked, missing, or obviously stale quotes are not interpreted as healthy liquidity.
- Volume and open interest are context, not proof of future fill quality.
- Low-quality contracts are blocked regardless of thesis score.
- Thresholds remain documented configuration, not hidden logic.

### Safety Boundaries

- no order entry
- no broker execution
- no broker integration
- no fill-price promise
- no fake live chain
- no recommendation to transact
- no public account or position data

### Source Requirements

- manually entered or approved snapshot with provenance
- exact observation timestamp
- source/provider label
- known delayed/static/manual state
- threshold version used for review

### CEO B Decision

CEO B may accept the contract for continued research, request another contract snapshot, route the underlying to Watchlists without a contract, or reject for quality.

### Archive Outcome

Store the contract snapshot, threshold version, quality result, warnings, CEO B decision, and any avoided-bad-contract lesson. Do not present it as public performance proof.

### Definition of Done

- exact contract is identifiable
- snapshot provenance is visible
- spread and liquidity calculations are reproducible
- failed thresholds create explicit hard blocks
- no contract-quality field implies execution
- CEO B sees both data and limitations

### Blockers

- weak contract interpretability
- insufficient liquidity
- unacceptable spread
- missing expiration, strike, or option type
- missing or stale snapshot
- invalid quote structure
- threshold version missing

### Dependencies

- static/manual contract snapshot schema
- Risk Desk threshold registry
- source timestamp rules
- volatility context

### Suggested UI Placement

Third primary panel in the central packet column, after evidence quality and before volatility context.

### Static/Manual Data Fields

- `contract_symbol`
- `option_type`
- `expiration`
- `strike`
- `days_to_expiry`
- `bid`
- `ask`
- `midpoint`
- `spread_amount`
- `spread_percent`
- `volume`
- `open_interest`
- `underlying_price_snapshot`
- `snapshot_source`
- `snapshot_at`
- `liquidity_state`
- `interpretability_state`
- `threshold_version`
- `quality_warnings`

### Copy Language Allowed

- Contract Snapshot
- Contract Quality
- Liquidity Review
- Spread Warning
- Interpretation Blocked
- Static / Delayed / Manual
- Alternative Contract Research Needed

### Copy Language Banned

- guaranteed fill
- perfect entry
- buy this contract
- sell this contract
- execute now
- broker ready
- real-time execution
- risk-free contract

## Franchise Card 4 - Volatility Intelligence and Event Risk

### Feature Name

Volatility Intelligence Panel

### Owner Route

Options Alerts; shared future component with Security Research Cockpit. Risk Desk owns event-risk blocks.

### Purpose

Explain premium conditions and event risk through implied volatility, realized volatility, percentile methodology, term structure, skew, and event timing without presenting a prediction.

### Inputs

- implied volatility snapshot
- realized or historical volatility
- IV percentile or rank
- methodology and lookback
- term structure
- skew
- event date and timezone
- expected-move methodology when documented
- premium distortion notes
- volatility source and timestamp

### Outputs

- volatility regime
- event-risk state
- premium distortion warning
- methodology disclosure
- missing-volatility warning
- interpretation limits

### Rules

- Every metric displays source, timestamp, and methodology.
- IV rank and IV percentile must not be treated as interchangeable.
- Expected move is contextual, not a forecast.
- Material event premium requires explicit event-risk review.
- Missing volatility context is a hard block when premium risk is material.
- Static snapshots cannot be labeled live.
- Volatility context cannot override contract-quality or source hard blocks.

### Safety Boundaries

- not a prediction panel
- no probability-of-profit promise
- no guaranteed return language
- no fake live data
- no execution timing
- no hidden model certainty
- no automated decision

### Source Requirements

- approved static/manual volatility snapshot
- source/provider or calculation origin
- observation timestamp
- methodology version
- lookback period
- event calendar source
- explicit unavailable state when data is missing

### CEO B Decision

CEO B may accept the context, request refreshed/manual evidence, downgrade for event risk, choose Watchlist Review, or reject.

### Archive Outcome

Store the volatility snapshot, methodology, event state, warnings, CEO B interpretation, and later outcome lesson. Do not rewrite the historical snapshot after the outcome.

### Definition of Done

- volatility metrics are defined and source-linked
- event timing is explicit
- unavailable data is shown honestly
- premium distortion and uncertainty are visible
- the panel makes no forecast or execution claim
- CEO B can distinguish context from prediction

### Blockers

- missing volatility context when premium risk is material
- event ambiguity
- missing methodology
- stale snapshot
- conflicting event dates
- unsupported probability claim
- volatility state presented as live when static

### Dependencies

- Source Hub event record
- contract snapshot
- volatility methodology registry
- Risk Desk event rules

### Suggested UI Placement

Fourth primary panel adjacent to Contract Quality, before the final Risk Desk and CEO B review panel.

### Static/Manual Data Fields

- `implied_volatility`
- `realized_volatility`
- `iv_percentile`
- `iv_rank`
- `volatility_lookback`
- `term_structure_state`
- `skew_state`
- `event_name`
- `event_at`
- `event_timezone`
- `event_risk_state`
- `expected_move_context`
- `premium_distortion_warning`
- `volatility_source`
- `volatility_snapshot_at`
- `methodology_version`
- `interpretation_limits`

### Copy Language Allowed

- Volatility Intelligence Panel
- Premium Context
- Event Risk
- Volatility Snapshot
- Methodology Required
- Premium Distortion Warning
- Context, Not Prediction

### Copy Language Banned

- prediction panel
- AI predicts
- guaranteed move
- guaranteed profit
- probability of winning
- easy premium
- buy volatility now
- sell volatility now

## Franchise Card 5 - Risk Desk and CEO B Review State

### Feature Name

Risk Desk and CEO B Review State

### Owner Route

Options Alerts display; Risk Desk compatibility route `#/risk-rules`; CEO B is final owner.

### Purpose

Aggregate hard blocks, warnings, missing evidence, privacy state, checklist compliance, and the explicit CEO B decision before any packet can leave review.

### Inputs

- panel 1-4 completion states
- source hard blocks
- contract-quality hard blocks
- volatility and event hard blocks
- privacy classification
- advisory-language scan
- review checklist
- CEO B identity and timestamp
- decision notes

### Outputs

- hard-block list
- warning list
- review-readiness state
- CEO B decision
- route outcome
- archive handoff state
- Learning Ledger eligibility

### Rules

- Hard blocks outrank confidence scores.
- Scores cannot clear a block.
- `CEO B Review Required` remains visible until an explicit decision is recorded.
- No packet may publish autonomously.
- Missing CEO B review is itself a hard block.
- Override is not allowed for privacy leakage, execution language, or missing source identity.
- Any permitted exception must record rationale, owner, timestamp, and rule version.

### Safety Boundaries

- CEO B final review required
- no autonomous publication
- no broker execution
- no copy-trading
- no fake live data
- no public private-note fields
- no advisory or execution language
- no silent override

### Source Requirements

- complete source trail
- threshold and rule versions
- privacy review result
- language scan result
- panel completion states
- CEO B reviewer identity and timestamp

### CEO B Decision

Allowed decisions:

- `APPROVE_RESEARCH_RECORD`
- `NEEDS_MORE_EVIDENCE`
- `SEND_TO_WATCHLISTS`
- `ARCHIVE_CONTEXT`
- `REJECT`
- `MARK_LESSON`

Approval means the packet is accepted as a reviewed research record. It does not mean authorization to trade, publish performance claims, or execute an order.

### Archive Outcome

Send the final packet state, hard blocks, warnings, CEO B decision, rationale, rule versions, and sanitized outcome record to Archive. Mark lesson candidates for Learning Ledger.

### Definition of Done

- all blocks and warnings are visible
- blocking precedence is deterministic
- CEO B decision is explicit and timestamped
- public/private fields are separated
- route outcome is unambiguous
- archive and lesson handoff states are defined
- no action implies execution or autonomous publication

### Blockers

- any unresolved Risk Desk hard block
- missing CEO B review
- incomplete privacy review
- missing rule version
- advisory or execution language
- inconsistent packet state

### Dependencies

- completed panels 1-4
- Risk Desk hard-block registry
- CEO B Review Gate
- Archive Outcome schema
- Learning Ledger handoff

### Suggested UI Placement

Fifth and final primary panel, fixed as the decision boundary at the bottom or right side of the packet detail view.

### Static/Manual Data Fields

- `hard_blocks`
- `warnings`
- `missing_evidence`
- `risk_rule_version`
- `privacy_review_state`
- `language_scan_state`
- `review_readiness`
- `ceo_b_decision`
- `ceo_b_decision_note`
- `reviewed_by`
- `reviewed_at`
- `route_outcome`
- `archive_handoff_state`
- `learning_ledger_state`

### Copy Language Allowed

- Risk Desk
- Hard Block
- Warning
- CEO B Review Required
- Needs More Evidence
- Reviewed Research Record
- Archive Outcome
- Mark Lesson

### Copy Language Banned

- auto-trade filter
- approved to trade
- buy now
- sell now
- strong buy
- auto-execute
- broker execution
- copy-trade
- AI approved

## Risk Desk Hard Blocks

| Hard block | Trigger | Required resolution | Override |
| --- | --- | --- | --- |
| Missing or stale source trail | Material claim lacks reviewable or timely evidence | Refresh, replace, or remove unsupported claim | No |
| Unresolved source conflict | Material sources disagree | Resolve, narrow claim, or route to Needs More Evidence | No |
| Weak contract interpretability | Exact contract or quote structure cannot be understood | Replace snapshot or remove contract from packet | No |
| Insufficient liquidity | Documented liquidity floor fails | Research another contract or underlying only | Only through a separately approved threshold revision |
| Unacceptable spread | Spread threshold fails | Refresh snapshot or research another contract | Only through a separately approved threshold revision |
| Event ambiguity | Event date, timezone, or impact is unresolved | Verify event or downgrade packet | No |
| Missing volatility context | Premium risk is material and volatility context is absent | Add sourced volatility context | No |
| Private data in public-safe packet | Private note, URL, path, account, or identity appears | Remove and re-run privacy review | No |
| Advisory or execution language | Packet contains instruction or execution framing | Rewrite and re-run language review | No |
| Missing CEO B review | No explicit final review record | CEO B must review and decide | No |

Hard blocks set `review_readiness` to `BLOCKED` and prevent escalation regardless of confidence score.

## CEO B Review Gate

### Entry Requirements

- all five panels render a complete static/manual record
- Risk Desk evaluation is current
- source and snapshot timestamps are visible
- privacy and language scans pass
- hard-block list is empty
- missing evidence is either resolved or explicitly accepted as a non-blocking limitation

### Review Questions

1. Is the candidate identity and Why Now understandable without hidden context?
2. Can each material claim be traced to a source?
3. Is the contract interpretable and liquid enough for research?
4. Is volatility and event risk explained without prediction language?
5. Are all risks, missing evidence, and limitations visible?
6. Does the packet remain useful without urgency or execution framing?
7. Is the proposed Archive Outcome appropriate and privacy-safe?

### Decision Record

Required fields:

- decision
- rationale
- reviewer
- reviewed timestamp
- rule version
- packet version
- route outcome
- archive handoff state
- lesson-candidate state

### Gate Rule

No confidence score, agent-lane vote, or completeness percentage may substitute for CEO B review. No packet leaves the gate through autonomous publication.

## Archive Outcome Handoff

Archive receives a sanitized, immutable-at-decision snapshot containing:

- packet identity and version
- panel 1-5 state
- source references and quality summary
- contract and volatility snapshots
- hard blocks and warnings
- CEO B decision and rationale
- route outcome
- privacy tier
- outcome status
- later review date
- linked lesson IDs

Allowed Archive Outcome states:

- `REVIEWED_RESEARCH_RECORD`
- `WATCHLIST_CONTEXT`
- `REJECTED_PACKET`
- `SUPPRESSED_NOISE`
- `AVOIDED_BAD_SETUP`
- `PAPER_REVIEW_OUTCOME`
- `LESSON_CANDIDATE`

Archive Outcome is company memory, not public performance proof. Historical inputs must not be rewritten after the observed outcome.

## Learning Ledger Connection

A Learning Ledger candidate may be created when:

- a hard block prevented a weak packet
- a packet was too early or too late
- catalyst quality failed
- liquidity or spread quality failed
- volatility context changed the interpretation
- source conflict exposed a faulty assumption
- a rule break occurred
- a strong process produced a poor outcome
- a weak process produced a favorable outcome

Each lesson candidate includes:

- linked Archive Outcome
- observed result
- process quality
- mistake or strength
- lesson extracted
- proposed checklist, source, risk, design, or prompt improvement
- CEO B adoption decision

Learning Ledger proposes changes. It does not update rules automatically.

## Static/Manual Data Plan

### Data Modes

- `STATIC_SEED`
- `MANUAL_ENTRY`
- `LOCAL_SNAPSHOT`
- `UNAVAILABLE`

### Requirements

- Every time-sensitive field includes `observed_at`.
- Every sourced field includes `source_id` or a clear manual-origin label.
- Every unavailable field renders as unavailable, not zero.
- Manual edits record `updated_by` and `updated_at`.
- Static examples are labeled as examples or mock research data.
- No polling, scraping, provider connection, or background refresh is implied.
- No frontend secret or private account data is stored.

### Minimum Packet Data Groups

- identity and why-now
- source trail
- contract snapshot
- volatility and event snapshot
- risk and review record
- archive and lesson handoff

## Safety Language Rules

### Required Visible Language

- Research and education only
- Static / Manual Data
- CEO B Review Required
- No Broker Execution
- No Autonomous Publication
- Source Verification Required
- Hard Blocks Override Scores

### Allowed Terms

- Research Packet Candidate
- research direction
- review trigger
- source-backed
- contract snapshot
- volatility context
- risk warning
- hard block
- reviewed research record
- Archive Outcome
- Learning Ledger candidate

### Banned Terms

- buy now
- sell now
- strong buy
- trade signal
- guaranteed
- will profit
- risk-free
- execute
- auto-execute
- broker integration
- real-time execution
- copy-trade
- AI predicts
- autonomous approval

Negative boundary statements using these terms are permitted in documentation and safety copy.

## Definition of Ready for Implementation

Implementation may be proposed only when:

- all five franchise cards are approved by CEO B
- Risk Desk hard blocks and threshold ownership are approved
- CEO B Review Gate decisions and fields are approved
- Archive Outcome and Learning Ledger schemas are approved
- static/manual data plan is approved
- canonical copy language is approved
- exact runtime files and route scope are named
- root/public mirror requirements are named
- test fixtures are labeled static or mock
- privacy classification is complete
- accessibility and responsive acceptance criteria are written
- build, project check, route verification, safety scan, and rollback plan are specified
- CEO B gives explicit implementation approval

## Definition of Done for Future Implementation

A later implementation is done only when:

- the five panels appear in the approved order and placement
- every required field supports honest static/manual/unavailable states
- source lineage and timestamps are visible
- all ten hard blocks work deterministically
- hard blocks override all scores
- CEO B Review Required persists until an explicit decision
- no autonomous publication path exists
- Archive Outcome receives a sanitized decision snapshot
- Learning Ledger receives only explicit lesson candidates
- banned public-facing language is absent
- private fields cannot enter public-safe records
- no broker, account, API, scraping, or execution capability is added
- root/public mirrors remain synchronized
- build and project checks pass
- approved desktop and mobile route checks pass
- `data/signal-alerts.json` remains unchanged unless separately authorized
- `PROJECT_STATUS.md`, `NEXT_STEPS.md`, and the Build Completion Tracker are updated within the approved implementation scope
- CEO B completes final acceptance review

## Current Sprint Boundary

This document completes the specification sprint only. It does not authorize UI work, runtime edits, route changes, Quant Lab work, Performance Tracker work, API connections, broker integration, fake live data, or autonomous agents.
