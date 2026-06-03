# Pickaxe 20-Section Blueprint

Phase 2E planning/audit pack. This document maps the current Pickaxe Capital / AI Habitat OS cockpit so B's hand-drawn 20-section blueprint can plug into a clean system later.

## Locked Product Truth

- Website = cockpit.
- Obsidian = private memory.
- CEO B = decision layer.
- Mission Control = flagship overview.
- Source Hub = trust/intelligence layer.
- Watchlists = Research Universe.
- Agents = placeholder-only until B approves a rebuild.
- Static-first GitHub Pages app; vanilla HTML, CSS, and JS; localStorage only for browser state.
- No live APIs, scraping, provider adapters, broker execution, betting/sportsbook integrations, copy-trading, fake live data, fake connected states, or private frontend keys.

## Numbering Note

The sidebar has a pinned `00` Mission Control route plus numbered sections `01` through `20`. This pack treats Mission Control as the pinned command overview and the 20 sections as the operating-system map around it.

## Route Sections

### 00. Mission Control

- Route: `#/dashboard`
- Current status: live-locked flagship overview
- Purpose: CEO B operating overview for market regime, alerts, watchlists, source state, risk, research queue, and next mission.
- What currently exists: premium command header, static/demo market regime, active agent summary, alerts queue, watchlist pulse, signal board, source preview, risk desk, research queue, private memory layer, and next mission.
- What should eventually exist: cleaned source-state rollups from Source Hub, watchlist health, archive memory snapshots, and CEO B review queue summaries.
- Source dependencies: Source Hub, Watchlists, Alerts, Signals, Archive, Obsidian handoff status.
- localStorage dependencies: `pickaxeReviewQueue`, `pickaxeMissionQueue`, `pickaxeCompletionTracker`, `pickaxeSourceHubActions` indirectly through Source Hub.
- Related routes: `#/source-hub`, `#/watchlists`, `#/alerts`, `#/signals`, `#/archive`, `#/staging`.
- Owner agent/department: CEO B / System Brain / Risk Desk.
- Safety boundaries: no live market feed, no broker connection, no execution adapter, no fake P&L, no fake fund claims.
- Priority: Core
- Recommended next action: keep stable; use as the overview target for future visual blueprint work.

### 01. Alerts Desk

- Route: `#/alerts`
- Current status: stable
- Purpose: research review queue and homepage.
- What currently exists: alert/research packets, CEO B review posture, safety labels, and static/local queue behavior.
- What should eventually exist: source-backed alert packets from Source Hub, archive actions, and clearer relationship to risk gates.
- Source dependencies: Source Hub, Signals, Risk & Rules, Watchlists.
- localStorage dependencies: `pickaxeOptionAlerts`, `pickaxeAlertRules`, `pickaxeReviewQueue`, `pickaxeMissionQueue`.
- Related routes: `#/source-hub`, `#/signals`, `#/risk-rules`, `#/archive`.
- Owner agent/department: Sentry / Risk Desk / CEO B.
- Safety boundaries: no fake urgency, no buy/sell language, no live alert feed unless a backend exists.
- Priority: Core
- Recommended next action: polish only after Source Hub and Archive workflow are stable.

### 02. Command Console

- Route: `#/mission-control`
- Current status: stable legacy/static console
- Purpose: legacy command routing surface and static mission context.
- What currently exists: command console content and route bridge.
- What should eventually exist: either a narrowed legacy bridge or a clean command mode integrated with Mission Control.
- Source dependencies: Staging, CEO B review queue, mission queue.
- localStorage dependencies: `pickaxeActionCenter`, `pickaxeMissionQueue`, `pickaxeReviewQueue`.
- Related routes: `#/dashboard`, `#/staging`, `#/roadmap`.
- Owner agent/department: System Brain / Task Smith.
- Safety boundaries: no command execution, no device control, no autonomous action.
- Priority: System
- Recommended next action: leave alone unless B chooses a command workflow sprint.

### 03. Vision Map

- Route: `#/vision-map`
- Current status: stable
- Purpose: visual brain / system map for CEO B, routes, agents, and intelligence flow.
- What currently exists: Living Agent Network and route/system concept map.
- What should eventually exist: B's 20-section visual blueprint as a clearer route architecture map.
- Source dependencies: route inventory, Source Hub, Mission Control, Staging tracker.
- localStorage dependencies: mostly static; may reflect `pickaxeMissionQueue` and tracker state indirectly.
- Related routes: all major routes, especially `#/dashboard`, `#/source-hub`, `#/agents`, `#/staging`.
- Owner agent/department: System Brain / CEO B.
- Safety boundaries: agents shown as conceptual/planned unless explicitly implemented.
- Priority: System
- Recommended next action: use B's future sketch to plan a visual-map refinement, not a feature sprint yet.

### 04. Agents Placeholder

- Route: `#/agents`
- Current status: placeholder
- Purpose: reserve the Agent Habitat route without fake autonomous execution.
- What currently exists: calm future placeholder/schematic, old crowded visual removed, explicit no-live-agents truth.
- What should eventually exist: clean operating schematic for owners, tasks, responsibilities, and source handoffs after B approves visual direction.
- Source dependencies: Source Hub, Mission Control, Staging, Archive.
- localStorage dependencies: legacy agent keys exist (`pickaxeOperatingAgents`, `pickaxeAgentOps`, `pickaxeMissionQueue`, `pickaxeReviewQueue`, `pickaxeWorldState`) but should not drive fake live claims.
- Related routes: `#/vision-map`, `#/source-hub`, `#/staging`, `#/dashboard`.
- Owner agent/department: System Brain / Archivist / Forge / Risk Desk.
- Safety boundaries: no fake live agents, no fake telemetry, no background jobs, no autonomous decisions.
- Priority: Future
- Recommended next action: do not rebuild until B approves an Agent Habitat sprint.

### 05. Signals Lab

- Route: `#/signals`
- Current status: stable/research prototype
- Purpose: research signals, not trade calls.
- What currently exists: options/signal research cards, source confidence language, local queues, and safety framing.
- What should eventually exist: source-backed research signals with confidence, source basis, related tickers, horizon, and risk notes.
- Source dependencies: Source Hub, Watchlists, Risk & Rules, Archive.
- localStorage dependencies: `pickaxeOptionAlerts`, `pickaxeReviewQueue`, `pickaxeMissionQueue`, `pickaxeArchiveVault`, `pickaxeLocalNotes`.
- Related routes: `#/source-hub`, `#/alerts`, `#/archive`, `#/risk-rules`.
- Owner agent/department: Oracle / Signal Scout / Risk Desk.
- Safety boundaries: no buy/sell language, no fake Greeks/IV/flow, no real-time claims, no execution.
- Priority: Research
- Recommended next action: keep stable unless B chooses Options Intelligence Hub later.

### 06. Source Hub

- Route: `#/source-hub`
- Current status: live-locked
- Purpose: trust/intelligence layer for source verification, citation mapping, adapter boundaries, and CEO B escalation control.
- What currently exists: Phase 2D Source Hub Intelligence Cockpit with command header, static safety line, verification matrix, source-to-route map, planned/local agent ownership, source intake queue, escalation rules, adapter boundary, private memory boundary, Mission Control integration preview, and local-only action log.
- What should eventually exist: better Archive/CEO B review workflow, source attachment to Watchlists/Signals/Alerts, and backend adapters only after approval.
- Source dependencies: manual/demo/local sources, Source Verification Matrix, Obsidian local handoff summary.
- localStorage dependencies: `pickaxeSourceHubActions`, `pickaxeReviewQueue`, `pickaxeMissionQueue`, `pickaxeArchiveVault`.
- Related routes: `#/dashboard`, `#/watchlists`, `#/signals`, `#/alerts`, `#/archive`, `#/bookmarks`.
- Owner agent/department: Archivist / Forge / Sentry / Risk Desk / CEO B.
- Safety boundaries: no scraping, no live provider calls, no fake connected adapters, no private vault exposure.
- Priority: Core
- Recommended next action: keep stable; next natural adjacent sprint is Archive / Source Workflow if B approves.

### 07. Risk & Rules

- Route: `#/risk-rules`
- Current status: stable
- Purpose: safety matrix and escalation guardrails.
- What currently exists: forbidden actions, risk gates, research-only boundaries, manual verification requirements.
- What should eventually exist: source-confidence gates that block Watchlists/Signals/Alerts escalation.
- Source dependencies: Source Hub, Alerts, Signals.
- localStorage dependencies: `pickaxeAlertRules`, `pickaxeReviewQueue`, `pickaxeMissionQueue`.
- Related routes: `#/source-hub`, `#/signals`, `#/alerts`, `#/watchlists`.
- Owner agent/department: Risk Desk / Risk Sentinel.
- Safety boundaries: no execution, no fake connected labels, no certainty claims.
- Priority: Core
- Recommended next action: use as a rule source for future workflow polish.

### 08. Learning Ledger

- Route: `#/learning-ledger`
- Current status: stable/prototype
- Purpose: memory layer for verified rules, mistakes avoided, playbooks, and CEO B notes.
- What currently exists: static/local learning sections.
- What should eventually exist: reviewed Archive lessons and CEO B rules that compound over time.
- Source dependencies: Archive, CEO B notes, Risk & Rules.
- localStorage dependencies: `pickaxeLearningLedger`, `pickaxeLocalNotes`.
- Related routes: `#/archive`, `#/staging`, `#/dashboard`.
- Owner agent/department: Archivist / Learning Ledger / CEO B.
- Safety boundaries: no private Obsidian note publishing; cleaned public-safe summaries only.
- Priority: Research
- Recommended next action: leave stable until Archive workflow improves.

### 09. Trend Radar

- Route: `#/trend-radar`
- Current status: stable/prototype
- Purpose: world pulse and theme board.
- What currently exists: static research themes and risk flags.
- What should eventually exist: source-backed themes from Source Hub and archived context.
- Source dependencies: Source Hub, Bookmarks, Archive.
- localStorage dependencies: not a primary dynamic route; may use shared review/mission queues later.
- Related routes: `#/source-hub`, `#/signals`, `#/archive`.
- Owner agent/department: Scout / News Raven / Atlas.
- Safety boundaries: no fake real-time feed, no scraping, no provider claims.
- Priority: Research
- Recommended next action: keep stable until B approves theme/pulse sprint.

### 10. Archive Vault

- Route: `#/archive`
- Current status: stable
- Purpose: saved intelligence memory for links, research packets, playbooks, lessons, and reviewed notes.
- What currently exists: archive intelligence panels, bookmark/source database integration, local archive state, route subsections for archive data.
- What should eventually exist: stronger source-to-archive workflow, review history, duplicate handling, and lesson extraction.
- Source dependencies: Source Hub, Bookmarks, Signals, Alerts, Obsidian handoff summaries.
- localStorage dependencies: `pickaxeArchiveVault`, `pickaxeBookmarks`, `pickaxeLocalNotes`, `pickaxeReviewQueue`.
- Related routes: `#/source-hub`, `#/bookmarks`, `#/learning-ledger`, `#/dashboard`.
- Owner agent/department: Archivist / Archive Keeper.
- Safety boundaries: private source content must be cleaned before public docs or frontend exposure.
- Priority: Core
- Recommended next action: strong candidate for next sprint after B approval.

### 11. Bookmarks Mine

- Route: `#/bookmarks`
- Current status: stable/prototype
- Purpose: private local bookmark workflow for cleaned summaries and archive candidates.
- What currently exists: private-by-default bookmark intelligence and local import framing.
- What should eventually exist: safer manual import, cleaning workflow, source candidate routing, and Archive/Source Hub linkage.
- Source dependencies: user-provided bookmark exports, Source Hub, Archive.
- localStorage dependencies: `pickaxeBookmarks`, `pickaxeLocalNotes`, `pickaxeReviewQueue`, `pickaxeMissionQueue`.
- Related routes: `#/source-hub`, `#/archive`, `#/signals`.
- Owner agent/department: Bookmark Miner / Archivist.
- Safety boundaries: no scraping, no private URL publishing, manual import only.
- Priority: Research
- Recommended next action: connect only as part of Archive / Source Workflow.

### 12. Money Lab

- Route: `#/money-lab`
- Current status: stable/research-only prototype
- Purpose: research sandbox for experiments, guardrails, ideas, and notes.
- What currently exists: research-only cards and explicit no betting/sportsbook/financial execution copy.
- What should eventually exist: if kept, a strict research notebook with no execution links.
- Source dependencies: Archive, Learning Ledger, CEO B notes.
- localStorage dependencies: `pickaxeMoneyLab`.
- Related routes: `#/archive`, `#/learning-ledger`, `#/staging`.
- Owner agent/department: CEO B / Risk Desk.
- Safety boundaries: no betting execution, no sportsbook connection, no financial execution.
- Priority: Future
- Recommended next action: do not expand unless B explicitly approves.

### 13. Staging / QA

- Route: `#/staging`
- Current status: stable/system route
- Purpose: validation, build truth, completion tracker, data-source honesty, and QA.
- What currently exists: route status, build status, safety wording, completion tracker, localStorage checks, and system truth panels.
- What should eventually exist: stronger pre-flight checklist for every sprint and cleaner route health matrix.
- Source dependencies: docs, tracker, build scripts, route inventory.
- localStorage dependencies: `pickaxeCompletionTracker`, `pickaxeCoverageMatrix`, `pickaxeBackupMetadata`, all backup keys listed in `docs/LOCAL_STORAGE_KEYS.md`.
- Related routes: all routes, especially `#/roadmap`, `#/dashboard`, `#/source-hub`.
- Owner agent/department: System Brain / QA / Task Smith.
- Safety boundaries: validation only; no fake route health or live deployment claims.
- Priority: System
- Recommended next action: keep as source of truth; update when sprints complete.

### 14. Habitat OS

- Route: `#/ai-habitat-os`
- Current status: stable/prototype
- Purpose: AI Habitat OS overview for source-to-agent-to-CEO B research flow.
- What currently exists: static system map and source-to-CEO B concept.
- What should eventually exist: operating-system map after B's visual blueprint is approved.
- Source dependencies: Source Hub, Agents placeholder, Mission Control, Vision Map.
- localStorage dependencies: mostly static; may reference mission/review queues later.
- Related routes: `#/vision-map`, `#/agents`, `#/source-hub`, `#/dashboard`.
- Owner agent/department: System Brain / CEO B.
- Safety boundaries: no real agent jobs or device control claims.
- Priority: System
- Recommended next action: use B's hand-drawn blueprint before rebuilding.

### 15. Watchlists

- Route: `#/watchlists`
- Current status: stable
- Purpose: Research Universe for categories, ticker candidates, theses, catalysts, tags, and review status.
- What currently exists: Phase 2B static Research Universe, Mission Control-aligned language, manual review workflow, safety truth.
- What should eventually exist: source-backed thesis cards and Archive links.
- Source dependencies: Source Hub, Signals, Risk & Rules, Archive.
- localStorage dependencies: mostly static; may use review/mission queues through actions.
- Related routes: `#/dashboard`, `#/source-hub`, `#/alerts`, `#/risk-rules`, `#/archive`.
- Owner agent/department: Signal Scout / Forge / Risk Desk.
- Safety boundaries: no live quotes, no fake source links, no buy/sell recommendations.
- Priority: Core
- Recommended next action: do not touch unless a bug is found.

### 16. Markets Matrix

- Route: `#/markets`
- Current status: future concept
- Purpose: future market overview for breadth, regimes, and research context.
- What currently exists: future concept placeholder.
- What should eventually exist: source-backed market context only after live-data rules are approved.
- Source dependencies: Source Hub, Watchlists, Risk & Rules, future backend market provider.
- localStorage dependencies: none primary yet.
- Related routes: `#/dashboard`, `#/watchlists`, `#/signals`.
- Owner agent/department: Atlas / Signal Scout.
- Safety boundaries: no live data until backend/API setup is approved; no fake market data.
- Priority: Future
- Recommended next action: do not start yet.

### 17. Options Hub

- Route: `#/options`
- Current status: future concept
- Purpose: future research-only options cockpit.
- What currently exists: future concept placeholder.
- What should eventually exist: options research workflow with source/catalyst/risk notes, never execution.
- Source dependencies: Source Hub, Signals, Risk & Rules, future backend options provider if approved.
- localStorage dependencies: `pickaxeOptionAlerts` already supports demo/research packets in Signals.
- Related routes: `#/signals`, `#/alerts`, `#/source-hub`, `#/risk-rules`.
- Owner agent/department: Flow Hunter / Risk Desk.
- Safety boundaries: no live chain, broker execution, buy/sell language, fake Greeks, fake IV, fake flow, or order routing.
- Priority: Future
- Recommended next action: do not start without B approval.

### 18. Catalysts Calendar

- Route: `#/catalysts`
- Current status: future concept
- Purpose: future catalyst board for earnings, macro, and event-risk research.
- What currently exists: future concept placeholder.
- What should eventually exist: source-backed catalyst notes and alert context after Source Hub workflow matures.
- Source dependencies: Source Hub, Alerts, Watchlists, future calendar provider if approved.
- localStorage dependencies: none primary yet.
- Related routes: `#/source-hub`, `#/alerts`, `#/watchlists`.
- Owner agent/department: Sentry / Forge / Atlas.
- Safety boundaries: no fake live calendar, no scraping, no urgency claims.
- Priority: Future
- Recommended next action: wait until Source Hub and Archive workflow are stronger.

### 19. Research Desk

- Route: `#/research`
- Current status: future concept
- Purpose: future source-linked research workspace.
- What currently exists: future concept placeholder.
- What should eventually exist: structured briefs, thesis cards, confidence notes, and archive/source links.
- Source dependencies: Source Hub, Archive, Watchlists, Bookmarks.
- localStorage dependencies: `pickaxeLocalNotes`, `pickaxeJournalEntries`, `pickaxeReviewQueue`.
- Related routes: `#/source-hub`, `#/archive`, `#/watchlists`, `#/bookmarks`.
- Owner agent/department: Forge / Archivist / CEO B.
- Safety boundaries: no private note publishing, no financial advice claims.
- Priority: Future
- Recommended next action: consider after B's blueprint or Archive / Source Workflow.

### 20. Build / Roadmap

- Route: `#/roadmap`
- Current status: future concept/roadmap
- Purpose: future build cockpit for phases, validation, and next prototype decisions.
- What currently exists: future concept placeholder with link to Dashboard.
- What should eventually exist: current plan, sprint queue, route status, and B decision menu.
- Source dependencies: PROJECT_STATUS, NEXT_STEPS, docs, Staging tracker.
- localStorage dependencies: `pickaxeCompletionTracker`, `pickaxeActionCenter`, `pickaxeMissionQueue`.
- Related routes: `#/staging`, `#/dashboard`, `#/vision-map`.
- Owner agent/department: System Brain / Task Smith.
- Safety boundaries: no starting work automatically; B chooses next sprint.
- Priority: System
- Recommended next action: use docs from this Phase 2E pack as the roadmap source.

## Legacy / Compatibility Routes

| Route | Maps To | Status | Notes |
| --- | --- | --- | --- |
| `/` | Alerts Desk | stable | Root opens homepage/research queue. |
| `/app/alerts` | Alerts Desk | compatibility | Legacy alert route. |
| `/market-command` | Signals/command bridge | compatibility | Legacy route bridged by app/router. |
| `/signal-engine` | Signals | compatibility | Legacy signal route. |
| `/life-habitat` | Life Habitat | prototype/legacy | Life OS concept route. |
| `/founder` | Founder profile | stable/prototype | Founder/CEO B identity. |
| `/ceo-b-profile` | CEO B profile | stable/prototype | CEO B identity bridge. |
| `/jarvis-lab` | Jarvis Lab | prototype | Typed command research stack only. |
| `/life-os` | Life OS | prototype | Future device/life OS overview. |
| `/ai-handoff` | Local handoff text | local-only | Generated from `AGENTS.md`, `PROJECT_STATUS.md`, `NEXT_STEPS.md`, and selected local Obsidian notes when local server can read them. |

## Planning Findings

- The strongest next architecture work is not a new route. It is deciding how the 20-section visual blueprint groups the existing routes.
- Source Hub now creates the right trust layer; the natural adjacent product workflow is Archive / Source Workflow, but only after B chooses it.
- Watchlists should remain stable until source-backed thesis linking is deliberately planned.
- Agents should remain placeholder-only until B approves a clean schematic direction.
- Options Hub has higher safety risk than Archive/Source or Visual Blueprint planning and should wait for explicit approval.
