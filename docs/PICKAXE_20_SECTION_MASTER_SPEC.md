# Pickaxe 20-Section Master Spec

Status: Phase 2H docs-only master architecture.

Source of truth: `Pickaxe OS Research Architecture and Safe Options Alert Design.pdf`, consolidated with the Phase 2E planning pack, Phase 2F QA audit, and Phase 2G Archive / Source Workflow spec.

This document is the clean master reference for the 00-20 Pickaxe OS map. It complements the earlier planning docs rather than replacing their detailed audit history:

- Phase 2E route and blueprint context: `docs/PICKAXE_20_SECTION_BLUEPRINT.md`, `docs/ROUTE_STATUS_MATRIX.md`, `docs/INFORMATION_FLOW_MAP.md`, `docs/NEXT_SPRINT_OPTIONS.md`
- Phase 2F QA context: `docs/PHASE_2F_PRESPRINT_QA_AUDIT.md`, `docs/UI_POLISH_BACKLOG.md`
- Phase 2G future workflow context: `docs/PHASE_2G_ARCHIVE_SOURCE_WORKFLOW_SPEC.md`

## Locked Architecture Truth

- Website = cockpit.
- Obsidian = private memory outside the public website.
- CEO B = final decision and review layer.
- Mission Control = flagship operating overview.
- Source Hub = trust, provenance, and intelligence layer.
- Watchlists = Research Universe.
- Archive = saved intelligence memory.
- Agents = future ownership lanes only.
- Options Research = deferred until B explicitly approves it.
- Static-first GitHub Pages app, vanilla JS / HTML / CSS, localStorage only.
- No live APIs, provider adapters, broker execution, betting execution, copy-trading, fake live data, or private frontend keys.

## Architecture Pattern

The 00-20 system is a layered command system, not a flat page list.

```text
CEO B
  -> Mission Control
  -> Trust spine: External Sources -> Source Hub -> Watchlists -> Signals -> Alerts -> CEO B Review -> Archive
  -> Memory and learning: Archive -> Learning Ledger -> Mission Control
  -> Governance: Risk Rules -> Staging -> Roadmap
  -> Deferred lanes: Agent Lanes, Markets, Options Research, Money Lab expansion
```

The legacy `#/mission-control` concept should not be treated as a peer to `#/dashboard`. If this idea is revisited later, it should be merged into or bridged under Mission Control rather than rebuilt as a second flagship.

## Section Catalog

### 00 Mission Control

- Route: `#/dashboard`
- Nav name: Mission Control
- Status: active flagship
- Priority: highest
- Purpose: summarize operating state for CEO B across sources, alerts, watchlists, archive memory, risk, QA, and next manual action.
- Primary tasks: show state, surface review queues, expose source gaps, summarize archive wins, identify next mission.
- Inputs: Source Hub summaries, Alerts queue, Watchlists health, Archive summaries, Staging/QA state.
- Outputs: `mission_snapshot`, CEO B review focus, route launch context.
- Key UI components: command header, KPI cards, review queue, risk banner, source gap panel, archive memory preview, next mission panel.
- Safety constraints: no fake live claims, no fake P&L, no execution controls, no unsourced values.
- Owner lane: CEO B + Ops lane.
- Acceptance criteria: first screen communicates state in under 10 seconds; every metric has provenance, static/demo, or local-only labeling.
- Sample schema: `{ "id": "mission_2026_06_03", "generated_at": "...", "pending_reviews": 3, "approved_alerts_7d": 0, "source_gap_count": 2, "watchlist_health": "needs_review", "qa_status": "clean" }`
- Related sections: 02 Source Hub, 03 Watchlists, 05 Alerts, 06 Archive, 12 Risk Rules, 19 Staging.
- Implementation priority: preserve and polish after blueprint freeze.
- What not to build yet: live market feed, broker widgets, autonomous agent telemetry, fake execution status.

### 01 Briefing Desk / Home

- Route: `/` and `#/alerts` as current homepage behavior
- Nav name: Briefing Desk / Home
- Status: active
- Priority: high
- Purpose: provide a compact public-safe entry surface and route launcher into the cockpit.
- Primary tasks: orient B, show current review posture, launch Mission Control, Alerts, Source Hub, Watchlists, and Archive.
- Inputs: Mission Control snapshot, approved public-safe notices, Alerts queue summary.
- Outputs: `briefing_state`, route entry decisions.
- Key UI components: compact command panel, route tiles, recent activity, safety banner, compact completion tracker.
- Safety constraints: do not imply a live desk or execution center; public-facing text must match Mission Control truth.
- Owner lane: Editorial / Brand lane.
- Acceptance criteria: routes are obvious; no contradiction with Mission Control; no private/local data appears.
- Sample schema: `{ "generated_at": "...", "featured_panels": ["alerts", "source_hub"], "top_routes": ["#/dashboard", "#/source-hub"], "notices": [] }`
- Related sections: 00 Mission Control, 05 Alerts, 19 Staging.
- Implementation priority: stable; only polish after flagship hierarchy is settled.
- What not to build yet: new homepage route architecture, marketing-only landing page, live activity feed.

### 02 Source Hub

- Route: `#/source-hub`
- Nav name: Source Hub
- Status: active / live-locked
- Priority: highest
- Purpose: verify sources, normalize provenance, classify local-only vs public-safe fields, and create evidence records for the system.
- Primary tasks: register sources, assign trust status, record freshness, flag conflicts, sanitize summaries, route evidence downstream.
- Inputs: manual links, filings, IR pages, source notes, bookmark candidates, approved snapshots, local handoff summaries.
- Outputs: `source_record`, evidence bundles, source gaps, route-ready provenance.
- Key UI components: source registry table, confidence badges, conflict flags, provenance drawer, sanitize/export controls, local action log.
- Safety constraints: no scraping protected sites, no provider-connected claims, no raw Obsidian exposure, no GitHub Pages-breaking remote dependencies.
- Owner lane: Source Verifier lane.
- Acceptance criteria: every downstream source has `trust_status`, `origin`, `last_checked`, and `public_safe` fields.
- Sample schema: `{ "id": "src_ir_001", "type": "company_ir", "title": "Company IR calendar", "trust_status": "high_trust", "public_safe": true, "last_checked": "...", "route_targets": ["#/watchlists", "#/alerts"] }`
- Related sections: 03 Watchlists, 04 Signals, 05 Alerts, 06 Archive, 10 Bookmarks Intake, 12 Risk Rules.
- Implementation priority: stable now; next approved workflow should be Source Hub to Archive, not provider adapters.
- What not to build yet: live adapters, scraping, automatic ingestion, private vault browsing, fake provider statuses.

### 03 Watchlists

- Route: `#/watchlists`
- Nav name: Watchlists
- Status: active and stable
- Priority: highest
- Purpose: maintain the Research Universe by ticker, theme, thesis, catalyst, source state, and review state.
- Primary tasks: organize research targets, show thesis context, expose source gaps, track catalysts, preserve review status.
- Inputs: Source Hub records, manual curation, catalyst tags, archive context.
- Outputs: `watch_item`, curated universe, thesis cards, review candidates.
- Key UI components: filter bar, watchlist tables, thesis chips, catalyst column, evidence links, review status labels.
- Safety constraints: do not touch outside approved scope; no buy/sell labels, fake quotes, fake rankings, or live claims.
- Owner lane: Watchlist Curator lane.
- Acceptance criteria: every symbol or theme has thesis text, source context, and last-reviewed status.
- Sample schema: `{ "id": "watch_ai_infra_001", "symbol": "MSFT", "theme": "AI infrastructure", "thesis": "source-backed research thesis", "source_refs": ["src_ir_001"], "review_status": "watching" }`
- Related sections: 02 Source Hub, 04 Signals, 05 Alerts, 06 Archive, 08 Catalysts.
- Implementation priority: locked; do not modify during this sprint.
- What not to build yet: Watchlists redesign, live quotes, rankings, broker links.

### 04 Signals

- Route: `#/signals`
- Nav name: Signals
- Status: active prototype
- Priority: high
- Purpose: turn watchlist observations into candidate research setups.
- Primary tasks: score candidate ideas, explain evidence, attach invalidation logic, route qualified drafts to Alerts.
- Inputs: Watchlists, Source Hub records, approved signal features, Risk Rules.
- Outputs: `signal_candidate`, feature breakdown, review status.
- Key UI components: signal queue, confidence bars, feature breakdown, evidence drawer, invalidation panel.
- Safety constraints: research-only; no autonomous publication, no execution language, no fake Greeks, no fake live flow.
- Owner lane: Signal Scorer lane.
- Acceptance criteria: every candidate has evidence, invalidation logic, review status, and source provenance.
- Sample schema: `{ "id": "sig_msft_001", "symbol": "MSFT", "direction_bias": "bullish_research_watch", "feature_scores": {}, "evidence_refs": ["src_ir_001"], "invalidation": "catalyst stale", "review_status": "draft" }`
- Related sections: 03 Watchlists, 05 Alerts, 12 Risk Rules, 17 Options Research.
- Implementation priority: stable; only refine after Source Hub and Archive workflow.
- What not to build yet: Options Hub UI, live chain data, prediction engine, trade calls.

### 05 Alerts

- Route: `#/alerts`
- Nav name: Alerts
- Status: active
- Priority: high
- Purpose: present draft and approved research packets through CEO B review.
- Primary tasks: show research packet queue, enforce manual approval, strip private fields, archive outcomes.
- Inputs: signal packets, CEO B decisions, risk rules, source records.
- Outputs: `alert_packet`, rejected packet notes, archive candidates.
- Key UI components: review queue, approve/reject controls, diff view, alert cards, publication log, risk notes.
- Safety constraints: no broker/execution pathways; public packets require CEO B approval and privacy stripping.
- Owner lane: Alert Packet Composer lane.
- Acceptance criteria: zero alerts can publish without explicit decision and approval timestamp.
- Sample schema: `{ "id": "alert_msft_001", "privacy_tier": "public_safe", "status": "approved", "symbol": "MSFT", "confidence": 78.4, "risk_notes": [], "source_refs": [], "approved_by": "CEO B" }`
- Related sections: 02 Source Hub, 04 Signals, 06 Archive, 12 Risk Rules, 17 Options Research.
- Implementation priority: preserve; strengthen source-backed packet flow later.
- What not to build yet: push notification engine, fake urgent alerts, auto-publication, execution controls.

### 06 Archive

- Route: `#/archive`
- Nav name: Archive
- Status: active
- Priority: highest
- Purpose: save approved intelligence, rejected ideas, research history, source summaries, and decision memory.
- Primary tasks: preserve sanitized records, support retrieval, link decisions to source provenance, feed Learning Ledger.
- Inputs: approved alert packets, rejected drafts, source summaries, sanitized notes, bookmark summaries.
- Outputs: `archive_record`, retrieval sets, lesson candidates.
- Key UI components: archive timeline, search, tag filters, source-origin filters, decision drawer, version history.
- Safety constraints: store sanitized summaries, not raw Obsidian dumps, raw bookmarks, private URLs, or private strategy.
- Owner lane: Archive Curator lane.
- Acceptance criteria: records are retrievable by symbol, theme, date, source, decision outcome, and privacy tier.
- Sample schema: `{ "id": "arch_msft_001", "type": "research_packet", "symbol": "MSFT", "summary": "cleaned summary", "source_refs": ["src_ir_001"], "decision": "approved", "privacy_tier": "public_safe" }`
- Related sections: 02 Source Hub, 05 Alerts, 10 Bookmarks Intake, 11 Learning Ledger, 00 Mission Control.
- Implementation priority: next practical implementation candidate after this docs freeze if B approves.
- What not to build yet: raw vault mirror, public note browser, automatic publication.

### 07 Research Workspace

- Route: `#/research`
- Nav name: Research Workspace
- Status: future bridge
- Priority: medium-high
- Purpose: bridge raw evidence, working notes, long-form memos, and source-linked research packets.
- Primary tasks: draft memos, compare evidence, attach citations, prepare packet candidates.
- Inputs: Source Hub evidence, Watchlists, Archive recalls, CEO B notes.
- Outputs: `research_note`, draft memos, working packets.
- Key UI components: split-pane note editor, evidence sidebar, citation picker, compare view, visibility controls.
- Safety constraints: public site must never expose drafts by default; private notes must stay local-only.
- Owner lane: Research lane.
- Acceptance criteria: every saved memo retains source references and a visibility/privacy flag.
- Sample schema: `{ "id": "note_ai_infra_001", "title": "AI infra memo", "source_refs": ["src_ir_001"], "tags": ["ai", "infrastructure"], "visibility": "local_only", "updated_at": "..." }`
- Related sections: 02 Source Hub, 03 Watchlists, 06 Archive.
- Implementation priority: future after Source Hub/Archive is stable.
- What not to build yet: public collaborative editor, raw Obsidian import, provider research adapters.

### 08 Catalysts

- Route: `#/catalysts`
- Nav name: Catalysts
- Status: future
- Priority: medium
- Purpose: track earnings, macro dates, product events, rulings, filings, and other thesis-relevant events.
- Primary tasks: normalize event dates, assign source confidence, link events to watchlists and packets.
- Inputs: official calendars, IR events, source-verified filings, approved macro calendars.
- Outputs: `catalyst_event`, catalyst calendar, event evidence bundles.
- Key UI components: calendar, timeline, symbol/theme filters, event detail drawer, timezone labels.
- Safety constraints: official-source-first; date confidence and timezone must be visible; no fake live calendar.
- Owner lane: Catalyst lane.
- Acceptance criteria: each event has source, date, timezone, confidence, and last-checked metadata.
- Sample schema: `{ "id": "cat_msft_earnings_001", "symbol": "MSFT", "category": "earnings", "event_at": "...", "timezone": "America/New_York", "source_refs": ["src_calendar_001"], "confidence": "high" }`
- Related sections: 02 Source Hub, 03 Watchlists, 04 Signals, 17 Options Research.
- Implementation priority: future after Source Hub/Archive.
- What not to build yet: automated calendar scraping, fake date certainty, live countdowns without source provenance.

### 09 Trend Radar

- Route: `#/trend-radar`
- Nav name: Trend Radar
- Status: active prototype
- Priority: medium
- Purpose: track themes, sectors, regimes, and narrative momentum across the research universe.
- Primary tasks: summarize themes, connect trends to sources, show regime labels, link back to Archive.
- Inputs: Source Hub, macro sources, Watchlists, Archive pattern recall.
- Outputs: `trend_theme`, theme summaries, regime tags.
- Key UI components: theme boards, heat panels, trend cards, evidence drawers.
- Safety constraints: no fake real-time pulse claims; disclose static, delayed, or local-only inputs.
- Owner lane: Theme lane.
- Acceptance criteria: each trend card ties back to at least one evidence bundle.
- Sample schema: `{ "id": "trend_ai_power_001", "name": "AI power demand", "regime_label": "research_watch", "summary": "source-backed theme", "source_refs": ["src_grid_001"], "symbols": ["NVDA"], "updated_at": "..." }`
- Related sections: 02 Source Hub, 03 Watchlists, 06 Archive.
- Implementation priority: stable prototype; do not expand until trust workflow improves.
- What not to build yet: fake live pulse feed, scraping, social firehose.

### 10 Bookmarks Intake

- Route: `#/bookmarks`
- Nav name: Bookmarks Intake
- Status: active prototype
- Priority: medium
- Purpose: receive candidate URLs, documents, and source seeds, then classify and route them into Source Hub or Archive.
- Primary tasks: import manually, dedupe, classify, sanitize, route cleaned summaries.
- Inputs: manual bookmark imports, local notes, URL submissions.
- Outputs: `source_record` candidates, intake queue items, archive candidates.
- Key UI components: intake table, dedupe controls, classify buttons, batch routing, privacy labels.
- Safety constraints: treat all imports as untrusted and often private; no scraping; raw URLs stay private by default.
- Owner lane: Intake lane.
- Acceptance criteria: no item can move downstream without classification and privacy review.
- Sample schema: `{ "id": "bookmark_001", "raw_title": "private title redacted", "raw_url": "local_only", "import_source": "manual", "intake_status": "needs_classification", "dedupe_key": "...", "routed_to": null }`
- Related sections: 02 Source Hub, 06 Archive, 11 Learning Ledger.
- Implementation priority: future part of Archive/Source workflow, not a standalone scrape tool.
- What not to build yet: automatic browser scraping, public raw bookmark browser, private URL publication.

### 11 Learning Ledger

- Route: `#/learning-ledger`
- Nav name: Learning Ledger
- Status: active prototype
- Priority: medium
- Purpose: capture lessons, postmortems, false positives, rules, and reusable heuristics.
- Primary tasks: convert reviewed outcomes into lessons, link lessons to archive records, mark adopted rules.
- Inputs: Archive outcomes, CEO B notes, QA reviews, rejected alerts.
- Outputs: `learning_entry`, reusable rules, process notes.
- Key UI components: ledger stream, rule cards, lesson tags, linked records.
- Safety constraints: lessons must be abstracted and sanitized when public-facing; no raw private notes.
- Owner lane: Learning lane.
- Acceptance criteria: each lesson links back to at least one archive record or QA event.
- Sample schema: `{ "id": "learn_001", "lesson_type": "false_positive", "statement": "cleaned lesson", "linked_records": ["arch_msft_001"], "severity": "medium", "adopted_rule": false, "created_at": "..." }`
- Related sections: 06 Archive, 12 Risk Rules, 19 Staging.
- Implementation priority: after Archive workflow; do not ingest raw notes directly.
- What not to build yet: automatic lesson generation from private vaults, unsanitized public postmortems.

### 12 Risk Rules

- Route: `#/risk-rules`
- Nav name: Risk Rules
- Status: active
- Priority: high
- Purpose: centralize policy gates, blocked patterns, publication thresholds, and language restrictions.
- Primary tasks: define hard stops, maintain blocked-language lists, gate Alerts/Signals, block unsafe escalation.
- Inputs: CEO B policy, governance docs, QA findings, options formula guardrails.
- Outputs: `risk_rule`, policy version, downstream guardrails.
- Key UI components: rule registry, thresholds, blocked-language list, escalation map.
- Safety constraints: this route is policy, not prediction; no hidden overrides; CEO B final gate remains.
- Owner lane: Governance / Risk Desk lane.
- Acceptance criteria: downstream sections reference current rule version and stop rules.
- Sample schema: `{ "id": "risk_no_execution_001", "category": "execution_boundary", "rule_text": "No broker or order routing", "threshold": null, "hard_stop": true, "applies_to": ["alerts", "options"], "version": "2H" }`
- Related sections: 04 Signals, 05 Alerts, 17 Options Research, 19 Staging.
- Implementation priority: maintain; use as source for future language and safety scans.
- What not to build yet: automated trading rules, hidden bypasses, real-time risk engine.

### 13 Vision Map

- Route: `#/vision-map`
- Nav name: Vision Map
- Status: active prototype
- Priority: medium
- Purpose: show the operating model, habitats, route relationships, trust spine, memory layer, and future structure.
- Primary tasks: map routes, show dependency arrows, separate current and future zones.
- Inputs: blueprint definitions, roadmap data, route status, governance decisions.
- Outputs: `vision_node`, visual architecture map.
- Key UI components: schematic diagram, route groups, relationship legend, notes drawer.
- Safety constraints: no capability inflation; future areas must be visibly labeled.
- Owner lane: Architecture lane.
- Acceptance criteria: B or Codex can understand the system map without reading code.
- Sample schema: `{ "id": "node_source_hub", "route": "#/source-hub", "label": "Source Hub", "status": "active", "group": "trust_spine", "links": ["#/watchlists", "#/archive"] }`
- Related sections: all, especially 00 Mission Control, 02 Source Hub, 14 AI Habitat OS.
- Implementation priority: future visual polish after blueprint freeze.
- What not to build yet: noisy animated agent map, fake telemetry, route restructuring.

### 14 AI Habitat OS

- Route: `#/ai-habitat-os`
- Nav name: AI Habitat OS
- Status: active prototype
- Priority: medium
- Purpose: explain the broader operating philosophy and system zones across Market Habitat and Life Habitat.
- Primary tasks: describe habitats, decision layers, trust boundaries, future device/assistant ideas.
- Inputs: Vision Map, roadmap, architecture notes, founder/CEO B context.
- Outputs: `habitat_zone`, operating concept summaries.
- Key UI components: habitat map, concept cards, zone descriptions, future-boundary panels.
- Safety constraints: keep claims philosophical/documentary, not telemetric or autonomous.
- Owner lane: Architecture lane.
- Acceptance criteria: clearly distinguishes current product from future ambitions.
- Sample schema: `{ "id": "habitat_market", "purpose": "market research cockpit", "current_status": "active_static", "future_status": "deferred_adapters", "linked_routes": ["#/dashboard", "#/source-hub"] }`
- Related sections: 13 Vision Map, 15 Agent Lanes, 20 Roadmap.
- Implementation priority: stable prototype; revisit after visual map decision.
- What not to build yet: device control, voice/camera adapters, autonomous local assistant gateway.

### 15 Agent Lanes

- Route: `#/agents`
- Nav name: Agent Lanes
- Status: placeholder-only
- Priority: deferred
- Purpose: reserve future ownership lanes without implying live autonomous workers.
- Primary tasks: document roles, allowed data, forbidden actions, review gates, least-privilege boundaries.
- Inputs: governance docs only until explicit implementation approval.
- Outputs: `agent_lane`, permissions matrix, responsibility map.
- Key UI components: lane cards, permissions matrix, not-active banner, review requirement panel.
- Safety constraints: no fake live telemetry, no background jobs, no autonomous decisions, no tool access by default.
- Owner lane: deferred; CEO B approves any future rebuild.
- Acceptance criteria: route remains honest placeholder with explicit approval requirement.
- Sample schema: `{ "id": "lane_source_verifier", "role": "validate provenance", "status": "placeholder_only", "allowed_data": ["public_source_metadata"], "forbidden_actions": ["scrape", "publish", "execute"] }`
- Related sections: 02 Source Hub, 05 Alerts, 06 Archive, 19 Staging.
- Implementation priority: do not rebuild yet.
- What not to build yet: live agents, autonomous tasks, provider access, repo-writing workers, publication authority.

### 16 Markets

- Route: `#/markets`
- Nav name: Markets
- Status: placeholder / future concept
- Priority: deferred
- Purpose: future regime cockpit for broad market context.
- Primary tasks: if approved later, show broad regime summaries, source provenance, sector context, and delayed/static labels.
- Inputs: approved market data plan, source contracts, Source Hub validation.
- Outputs: `market_context`, regime summaries.
- Key UI components: index cards, regime matrix, breadth panels, source labels.
- Safety constraints: deferred until approved data plan; no invented feeds, fake quotes, or live claims.
- Owner lane: deferred.
- Acceptance criteria: route stays placeholder until data provenance is real and documented.
- Sample schema: `{ "id": "market_regime_001", "regime_label": "static_demo", "inputs": ["src_market_snapshot_001"], "updated_at": "...", "privacy_tier": "public_safe" }`
- Related sections: 00 Mission Control, 04 Signals, 17 Options Research.
- Implementation priority: deferred.
- What not to build yet: live market feed, broker data, fake indexes, auto-refreshing market terminal.

### 17 Options Research

- Route: `#/options`
- Nav name: Options Research
- Status: placeholder / deferred pending approval
- Priority: deferred
- Purpose: future research-only options cockpit or private packet lab.
- Primary tasks: if approved later, rank research packets, apply hard filters, require CEO B review, archive outcomes.
- Inputs: approved options data plan, Risk Rules, Source Hub records, contract snapshots with provenance.
- Outputs: `alert_packet` drafts, private packet extensions, archive records.
- Key UI components: chain table, contract drawer, feature panels, evidence panel, CEO B review gates.
- Safety constraints: docs-only now; no execution, fake chains, fake Greeks, live flow, broker connection, copy-trading, or public route build.
- Owner lane: deferred; later Signal Scorer + Alert Packet Composer + CEO B.
- Acceptance criteria: cannot open as public feature until docs-first guardrails and explicit B approval exist.
- Sample schema: `{ "id": "opt_packet_001", "symbol": "MSFT", "privacy_tier": "local_only", "status": "draft", "confidence": 0, "source_refs": [], "public_eligible": false }`
- Related sections: 04 Signals, 05 Alerts, 12 Risk Rules, 06 Archive.
- Implementation priority: docs-only; deferred.
- What not to build yet: Options Hub UI, public route, live options chain, provider adapters, broker links.

### 18 Money Lab

- Route: `#/money-lab`
- Nav name: Money Lab
- Status: active research sandbox
- Priority: deferred expansion
- Purpose: sandbox for scenario analysis, thesis stress testing, and non-executing what-if notes.
- Primary tasks: record hypotheses, compare scenarios, link to archive context, label assumptions.
- Inputs: user-entered assumptions, archive records, risk rules.
- Outputs: `scenario_note`, sensitivity checks.
- Key UI components: calculator panels, scenario forms, comparison cards, hypothesis notes.
- Safety constraints: no broker pathways, betting execution, disguised paper trading, or unlabeled outputs.
- Owner lane: Research sandbox.
- Acceptance criteria: every output is marked hypothetical, local/research-only, and non-executing.
- Sample schema: `{ "id": "scenario_001", "thesis": "hypothetical scenario", "inputs": {}, "outcome_notes": "research only", "created_at": "...", "privacy_tier": "local_only" }`
- Related sections: 06 Archive, 11 Learning Ledger, 12 Risk Rules.
- Implementation priority: do not expand unless approved.
- What not to build yet: betting systems, execution plans, broker integration, performance claims.

### 19 Staging

- Route: `#/staging`
- Nav name: Staging
- Status: active
- Priority: high
- Purpose: route-health, QA, build truth, privacy scans, release readiness, and completion tracking.
- Primary tasks: track validations, record changed files, expose route truth, list stop rules, support handoff checks.
- Inputs: build status, route scan, storage audit, docs checklist, completion tracker.
- Outputs: `staging_report`, release readiness state.
- Key UI components: status matrix, checklist, warnings panel, diff summary, validation command panel.
- Safety constraints: remain boring, honest, and operational; no fake route health or live deployment claims.
- Owner lane: QA Sentinel lane.
- Acceptance criteria: one page answers build clean, docs clean, privacy clean, release ready.
- Sample schema: `{ "id": "stage_2026_06_03", "generated_at": "...", "checks": ["build", "check:project"], "routes_checked": ["/", "#/dashboard"], "warnings": [], "ready": true }`
- Related sections: all, especially 12 Risk Rules and 20 Roadmap.
- Implementation priority: update during implementation sprints; docs-only sprint should avoid runtime tracker edits.
- What not to build yet: fake deployment automation, provider health claims, live telemetry.

### 20 Roadmap

- Route: `#/roadmap`
- Nav name: Roadmap
- Status: future
- Priority: medium
- Purpose: show approved sequence of future work, dependencies, out-of-scope boundaries, and validation commands.
- Primary tasks: sequence sprints, track approvals, preserve stop rules, prevent stealth scope creep.
- Inputs: planning docs, QA priorities, architecture decisions, CEO B approvals.
- Outputs: `roadmap_item`, sprint queue, dependency map.
- Key UI components: milestone cards, dependency graph, status timeline, approval labels.
- Safety constraints: explicit approvals only; no stealth Options, Agents, adapters, or route changes.
- Owner lane: Product planning lane.
- Acceptance criteria: every sprint lists scope, out-of-scope, stop rules, validation commands, and approval state.
- Sample schema: `{ "id": "roadmap_archive_source_impl", "title": "Archive / Source Workflow", "status": "recommended_next", "dependencies": ["phase_2h_docs"], "out_of_scope": ["options", "agents"], "next_validation": ["build", "check:project"] }`
- Related sections: 19 Staging, all future/deferred sections.
- Implementation priority: can become a future route after docs and Staging stabilize.
- What not to build yet: runtime roadmap route changes during docs-only sprint.

## Documentation Rule For Codex And ChatGPT

When future AI sessions need orientation, use this document as the high-level section reference, then open the older Phase 2E / 2F / 2G docs only for historical audit detail or implementation-specific workflow constraints. Do not copy raw PDF text into runtime files.
