# Pickaxe 20-Section Execution Blueprint

Date: 2026-06-05

This blueprint turns the current 00-20 Pickaxe OS route map into a professional execution plan. It is a planning document only. It does not change app code, routes, localStorage keys, live data behavior, or `data/signal-alerts.json`.

## Locked Project Truth

- Current live-verified Alerts Desk checkpoint: `29e3dfc Add Alerts Desk options packet detail layer`.
- App model: static-first GitHub Pages app, vanilla HTML/CSS/JS, localStorage only.
- CEO B is the founder decision layer. CEO B organizes, reviews, ranks, and prepares decisions; CEO B does not replace the founder.
- Market Habitat and Life Habitat are separate habitats connected by CEO B.
- Alerts Desk is the homepage and primary research review queue.
- Mission Control is the pinned operating overview.
- Source Hub is the trust and source-verification cockpit.
- Archive is the compounding intelligence vault for cleaned memory.
- Research Desk is a future workspace, not a live autonomous research system.
- No live APIs, provider adapters, scraping, broker execution, betting execution, auto-trading, copy-trading, fake live data, fake connected states, or private frontend keys.
- `data/signal-alerts.json` must remain unstaged and uncommitted.

## Priority Tiers

- Tier 1 Core Product: daily CEO B workflow pages that should become polished, stable, and interconnected first.
- Tier 2 Support System: safety, QA, maps, memory, and workflow pages that make the core product trustworthy.
- Tier 3 Research Expansion: useful research pages that should remain static/local until source workflows are stronger.
- Tier 4 Future Only: pages that need explicit B approval or future backend/adapters before meaningful build-out.
- Tier 5 Do Not Build Yet: pages or capabilities with high safety risk if expanded too early.

## Grouping Strategy

### Command Center Group

Sections: `00 Alerts Desk`, `01 Mission Control`, `02 Command Console`, `03 Vision Map`.

Role: The top-level operating layer. Alerts Desk handles review, Mission Control summarizes the operating state, Command Console preserves command-mode experiments, and Vision Map explains the system visually.

### Intelligence Intake Group

Sections: `04 Agents`, `05 Signals Lab`, `06 Source Hub`, `07 Risk & Rules`, `08 Learning Ledger`.

Role: The research-intake and trust layer. Source Hub verifies material, Risk & Rules gates it, Signals Lab frames it as research, Learning Ledger stores reviewed lessons, and Agents remain conceptual until approved.

### Memory and Research Context Group

Sections: `09 Trend Radar`, `10 Archive Vault`, `11 Bookmarks Mine`, `12 Money Lab`.

Role: The compounding memory layer. Archive is the durable vault; Trend Radar and Bookmarks Mine feed possible source context; Money Lab stays a constrained research notebook.

### Operations Group

Sections: `13 Staging / QA`, `14 Habitat OS`, `15 Watchlists`, `16 Markets Matrix`.

Role: The build-readiness and operating structure layer. Staging validates truth, Habitat OS explains habitat architecture, Watchlists defines the research universe, and Markets Matrix remains future market context only.

### Expansion Group

Sections: `17 Options Hub`, `18 Catalysts Calendar`, `19 Research Desk`, `20 Roadmap`.

Role: The future build layer. These routes can become powerful, but only after source verification, Archive memory, and CEO B review boundaries are stable.

## Core Product Pages

- `00 Alerts Desk`
- `01 Mission Control`
- `06 Source Hub`
- `10 Archive Vault`
- `15 Watchlists`
- `19 Research Desk` once B approves the future research workspace direction

## Future-Only Sections

- `04 Agents`, until B approves a real owner/task/responsibility rebuild.
- `16 Markets Matrix`, until backend/live data boundaries are approved.
- `17 Options Hub`, until B approves research-only options work.
- `18 Catalysts Calendar`, until source workflows can support event provenance.
- `19 Research Desk`, until Alerts Desk, Source Hub, Archive, and Watchlists are stable enough to feed it.

## Do-Not-Build-Yet List

- Live market data or fake live market data.
- Broker execution, order placement, auto-trading, copy-trading, or "one-click trade" flows.
- Provider adapters or private frontend keys.
- Scraping or bypassing protected sites.
- Fake autonomous agents, fake telemetry, fake background jobs, or fake connected states.
- Options Hub execution features.
- Markets Matrix live dashboards.
- Catalysts Calendar live event feeds.
- Device, camera, voice, or local assistant gateway controls.
- Raw private Obsidian or bookmark content published to the public frontend.

## Recommended Build Order

1. Lock this blueprint into project planning docs.
2. Stabilize the Alerts Desk -> Source Hub -> Archive -> Mission Control loop with documentation and route copy only unless B approves code.
3. Polish Watchlists as the research universe foundation, preserving localStorage and static boundaries.
4. Define Research Desk as the manual research workspace, not an autonomous agent system.
5. Consolidate Staging / QA as the visible build readiness and completion-tracker layer.
6. Refine Vision Map and Habitat OS so the full 00-20 operating system is understandable at a glance.
7. Improve Risk & Rules and Learning Ledger as support systems for CEO B review decisions.
8. Only after approval, plan Options Hub and Catalysts Calendar as research-only static prototypes.
9. Defer Agents, Markets Matrix live context, and any backend/provider-adapter work.

## System Connection Model

Alerts Desk is the daily CEO B review queue. It should show research packets that are clearly static, source-aware, manually reviewed, and never executable.

Source Hub is the trust checkpoint. Any future research item should be able to identify its source status, source type, confidence boundary, privacy boundary, and next manual verification action.

Research Desk is the future workspace where B can assemble source-backed research packets before they graduate into Alerts Desk or Archive. It should not become an autonomous research engine without approval.

Archive is the durable memory vault. It stores cleaned source memory, reviewed notes, lesson candidates, and source lineage. It should receive only cleaned/local-safe context.

Mission Control is the operating overview. It should summarize the state of Alerts Desk, Source Hub, Archive, Watchlists, Staging, and build readiness without pretending to have live telemetry.

## Section Execution Cards

### COMMAND

#### 00 Alerts Desk

- Current Name: Alerts Desk
- Better Name if needed: Keep. Optional subtitle: CEO B Research Review Queue.
- Department: Command Center / CEO B Review Workflow.
- Purpose: Homepage and daily manual research packet review queue.
- User Problem: B needs one clean place to review possible market research without confusing static research with execution.
- Inputs: Local mock option alerts, Watchlists context, Source Hub status, Risk & Rules language, Archive memory summaries, CEO B review state.
- Outputs: Reviewed research packets, manual next actions, archive candidates, risk-gated watchlist or research follow-ups.
- Primary Action: Review a research packet and decide the next manual CEO B action.
- Connected Routes: `/`, `#/alerts`, `#/dashboard`, `#/source-hub`, `#/archive`, `#/watchlists`, `#/signals`, `#/risk-rules`.
- Build Now: Keep the verified packet detail layer stable; clarify source status and archive handoff language when needed.
- Build Later: Source-backed packet creation after Source Hub and Research Desk are stable.
- Safety Boundary: Static research only, no live provider data, no broker execution, no fake urgency, no auto-trading.
- Success Criteria: B can open the homepage, understand the packet, source boundary, risk boundary, confidence meaning, and next manual action within one minute.
- Priority Tier: Tier 1 Core Product.

#### 01 Mission Control

- Current Name: Mission Control
- Better Name if needed: Keep.
- Department: Command Center / Operating Overview.
- Purpose: Pinned CEO B operating overview across review queues, memory, source health, route health, and next build moves.
- User Problem: B needs a calm control room instead of hunting through every route for current truth.
- Inputs: Alerts Desk state, Source Hub source status, Archive counts, Watchlists pulse, Staging tracker, roadmap status.
- Outputs: Current operating summary, route health snapshot, next approval queue, risk reminders.
- Primary Action: Decide where CEO B attention should go next.
- Connected Routes: `#/dashboard`, `#/alerts`, `#/source-hub`, `#/archive`, `#/watchlists`, `#/staging`, `#/roadmap`.
- Build Now: Keep as overview; make sure it reflects static/local truth only.
- Build Later: Aggregate local-only counts from source, archive, and review workflows after those flows mature.
- Safety Boundary: No fake telemetry, no fake P&L, no live data claims, no execution controls.
- Success Criteria: Mission Control clearly answers what is stable, what needs review, and what is next.
- Priority Tier: Tier 1 Core Product.

#### 02 Command Console

- Current Name: Command Console
- Better Name if needed: CEO B Command Console.
- Department: Command Center / Manual Command Prototype.
- Purpose: Typed command and routing prototype for CEO B instructions.
- User Problem: B wants a future command layer without granting unsafe system control.
- Inputs: Manual typed commands, route intents, local planning context, approved task categories.
- Outputs: Suggested route jumps, manual tasks, planning notes, review prompts.
- Primary Action: Type or choose a manual command intent.
- Connected Routes: `#/mission-control`, `#/dashboard`, `#/staging`, `#/roadmap`, `#/jarvis-lab`.
- Build Now: Keep static and narrow; preserve route compatibility.
- Build Later: Connect to safe local command templates after explicit approval.
- Safety Boundary: No command execution, device control, shell access, browser actions, autonomous jobs, or private data transmission.
- Success Criteria: The route helps B frame commands without implying the system can act independently.
- Priority Tier: Tier 2 Support System.

#### 03 Vision Map

- Current Name: Vision Map
- Better Name if needed: Pickaxe Vision Map.
- Department: Command Center / Visual Architecture.
- Purpose: Living visual command center for the 00-20 OS map, habitats, routes, and decision flow.
- User Problem: B needs to see how the system fits together before approving build sprints.
- Inputs: Route order, department grouping, Source Hub workflow, Archive workflow, Mission Control overview, roadmap state.
- Outputs: Visual route map, dependency map, workflow explanation, build-sequence clarity.
- Primary Action: Inspect the full Pickaxe OS structure and choose a focus area.
- Connected Routes: `#/vision-map`, `#/dashboard`, `#/source-hub`, `#/archive`, `#/agents`, `#/staging`, `#/roadmap`.
- Build Now: Use this blueprint to align labels, groups, and visual hierarchy later.
- Build Later: Add a polished visual dependency map after B approves the design direction.
- Safety Boundary: Agents and integrations must be labeled conceptual/future unless actually implemented.
- Success Criteria: B can explain the 00-20 system and its dependencies from the map.
- Priority Tier: Tier 2 Support System.

### INTELLIGENCE

#### 04 Agents

- Current Name: Agents
- Better Name if needed: Agent Owners.
- Department: Intelligence / Ownership Model.
- Purpose: Show owners, tasks, progress, responsibilities, and activity without pretending agents are autonomous.
- User Problem: B needs accountability and task ownership, but not fake AI agent telemetry.
- Inputs: Manual owner definitions, route responsibilities, Staging tracker status, CEO B approved tasks.
- Outputs: Agent/owner cards, responsibility map, task queues, future adapter notes.
- Primary Action: Review ownership and route responsibilities.
- Connected Routes: `#/agents`, `#/vision-map`, `#/source-hub`, `#/staging`, `#/dashboard`.
- Build Now: Keep placeholder-only or owner/task schematic.
- Build Later: Rebuild as owner/task/progress system after B approval.
- Safety Boundary: No fake live agents, no background jobs, no autonomous decisions, no fake activity stream.
- Success Criteria: The page communicates ownership clearly while staying honest about future-only automation.
- Priority Tier: Tier 4 Future Only.

#### 05 Signals Lab

- Current Name: Signals Lab
- Better Name if needed: Market Signals Lab.
- Department: Intelligence / Market Research.
- Purpose: Single market intelligence page for research signals and signal context.
- User Problem: B needs signal-like research without mistaking it for trade instruction.
- Inputs: Source Hub status, Watchlists, static mock signal packets, Risk & Rules, Archive memory.
- Outputs: Research signals, thesis context, source confidence, manual review candidates.
- Primary Action: Inspect a research signal and send it to manual review or Archive.
- Connected Routes: `#/signals`, `/signals`, `/market-command`, `/signal-engine`, `#/alerts`, `#/source-hub`, `#/archive`, `#/risk-rules`.
- Build Now: Keep safe research framing and bridge legacy routes into Signals.
- Build Later: Source-backed signal packet structure after Source Hub and Research Desk mature.
- Safety Boundary: No buy/sell language, no fake live flow, no fake Greeks, no execution, no broker links.
- Success Criteria: Signals read as research candidates with source/risk context, not trading calls.
- Priority Tier: Tier 3 Research Expansion.

#### 06 Source Hub

- Current Name: Source Hub
- Better Name if needed: Source Hub.
- Department: Intelligence / Trust Layer.
- Purpose: External intelligence source cockpit and source-verification control room.
- User Problem: B needs to know whether research is sourced, trusted, stale, private, cleaned, or needs verification.
- Inputs: Manual source candidates, bookmark exports, public source references, cleaned memory candidates, CEO B review flags.
- Outputs: Source trust labels, source lineage, archive candidates, route handoff notes, verification gaps.
- Primary Action: Verify or classify a source before it feeds Alerts, Research Desk, Archive, Watchlists, or Mission Control.
- Connected Routes: `#/source-hub`, `/source-hub`, `#/alerts`, `#/archive`, `#/research`, `#/watchlists`, `#/dashboard`, `#/bookmarks`.
- Build Now: Keep as the trust cockpit; improve planning and copy around source-to-route handoffs.
- Build Later: Approved adapters only after backend/security approval.
- Safety Boundary: No scraping, no bypassing protected sites, no fake connected adapters, no private vault exposure.
- Success Criteria: Every important research item can show source status, trust level, privacy boundary, and next verification action.
- Priority Tier: Tier 1 Core Product.

#### 07 Risk & Rules

- Current Name: Risk & Rules
- Better Name if needed: Risk Gate.
- Department: Intelligence / Safety and Governance.
- Purpose: Hard guardrails for what Pickaxe can and cannot do.
- User Problem: B needs safety language and escalation rules that prevent research pages from implying execution or certainty.
- Inputs: Project rules, CEO B manual review requirements, source trust status, alert/signal workflows.
- Outputs: Risk gates, forbidden action list, review language, page safety patterns.
- Primary Action: Check whether a proposed feature or research packet passes the manual review boundary.
- Connected Routes: `#/risk-rules`, `#/alerts`, `#/signals`, `#/source-hub`, `#/watchlists`, `#/options`.
- Build Now: Keep rules visible and use them as planning constraints.
- Build Later: Add local rule references inside future workflow pages.
- Safety Boundary: No execution, certainty claims, legal/financial advice framing, fake connected labels, or risk bypass.
- Success Criteria: Any future sprint can quickly identify what must remain manual, static, or future-only.
- Priority Tier: Tier 2 Support System.

#### 08 Learning Ledger

- Current Name: Learning Ledger
- Better Name if needed: Keep.
- Department: Intelligence / Learning Memory.
- Purpose: Store reviewed lessons, rules, playbooks, and mistakes avoided.
- User Problem: B needs compounding learning without exposing private notes or cluttering Archive.
- Inputs: Archive lesson candidates, CEO B notes, reviewed research outcomes, Risk & Rules updates.
- Outputs: Clean lessons, playbook snippets, rule updates, future checklist candidates.
- Primary Action: Review a cleaned lesson candidate and decide whether it becomes a durable rule.
- Connected Routes: `#/learning-ledger`, `#/archive`, `#/risk-rules`, `#/dashboard`, `#/staging`.
- Build Now: Keep static/local and use Archive as the upstream source.
- Build Later: Add a local lesson promotion workflow after Archive is polished.
- Safety Boundary: No raw private notes, no claims of predictive learning, no fake autonomous improvement.
- Success Criteria: B can separate durable lessons from raw research notes.
- Priority Tier: Tier 2 Support System.

### MEMORY

#### 09 Trend Radar

- Current Name: Trend Radar
- Better Name if needed: Trend Radar.
- Department: Memory / Theme Intelligence.
- Purpose: Theme board for broad market, tech, culture, and opportunity patterns.
- User Problem: B needs a place to track emerging themes without fake real-time trend feeds.
- Inputs: Source Hub source candidates, Archive memory, Watchlists themes, Bookmarks Mine summaries.
- Outputs: Theme cards, watch themes, source gaps, future research prompts.
- Primary Action: Review a theme and route it to Watchlists, Source Hub, Archive, or Research Desk.
- Connected Routes: `#/trend-radar`, `#/source-hub`, `#/archive`, `#/watchlists`, `#/research`.
- Build Now: Keep static and source-needed where appropriate.
- Build Later: Source-backed themes from verified manual inputs.
- Safety Boundary: No fake trend telemetry, no scraping, no live social feed, no unsourced claims.
- Success Criteria: Themes show source status and next research action.
- Priority Tier: Tier 3 Research Expansion.

#### 10 Archive Vault

- Current Name: Archive Vault
- Better Name if needed: Archive.
- Department: Memory / Compounding Intelligence Vault.
- Purpose: Durable vault for cleaned source memory, reviewed notes, research packets, and lesson candidates.
- User Problem: B needs research memory that compounds without leaking raw private material.
- Inputs: Source Hub cleaned memory, Alerts Desk reviewed packets, Bookmarks Mine cleaned summaries, Learning Ledger candidates, CEO B notes.
- Outputs: Clean archive cards, source lineage, lesson candidates, return-to-source tasks, review state.
- Primary Action: Review, clean, preserve, or route an intelligence item.
- Connected Routes: `#/archive`, `/archive`, `#/source-hub`, `#/alerts`, `#/learning-ledger`, `#/bookmarks`, `#/dashboard`.
- Build Now: Keep source lineage, privacy tier, and CEO B review state central.
- Build Later: Improve duplicate handling, lesson extraction, and source-to-research packet promotion.
- Safety Boundary: Cleaned local memory only; no raw private vault publishing, no live provider data, no broker execution.
- Success Criteria: B can trace where an item came from, whether it is cleaned, and what should happen next.
- Priority Tier: Tier 1 Core Product.

#### 11 Bookmarks Mine

- Current Name: Bookmarks Mine
- Better Name if needed: Bookmark Intelligence.
- Department: Memory / Source Intake.
- Purpose: Chrome bookmark and X Bookmark Intelligence workflows for manual source intake.
- User Problem: B has useful saved links but needs them cleaned and routed safely.
- Inputs: User-provided bookmark exports, manual links, source labels, route tags.
- Outputs: Clean source candidates, Archive candidates, Source Hub review tasks, private-data warnings.
- Primary Action: Convert a manually provided bookmark into a cleaned source candidate.
- Connected Routes: `#/bookmarks`, `/bookmarks`, `#/source-hub`, `#/archive`, `#/research`, `#/trend-radar`.
- Build Now: Keep manual/private-by-default.
- Build Later: Add stronger local cleaning/review workflow after Source Hub and Archive are stable.
- Safety Boundary: No scraping, no automatic private URL publishing, no protected-site bypass, manual import only.
- Success Criteria: Bookmarks can become clean source candidates without exposing private or sensitive context.
- Priority Tier: Tier 3 Research Expansion.

#### 12 Money Lab

- Current Name: Money Lab
- Better Name if needed: Research Money Lab.
- Department: Memory / Research Sandbox.
- Purpose: Research-only sandbox for ideas, experiments, guardrails, and notes.
- User Problem: B needs a safe space for experiments without building execution systems too early.
- Inputs: CEO B notes, Archive lessons, Risk & Rules, research ideas.
- Outputs: Experiment notes, safety questions, build candidates, deferred ideas.
- Primary Action: Capture or review a research experiment concept.
- Connected Routes: `#/money-lab`, `#/archive`, `#/learning-ledger`, `#/risk-rules`, `#/roadmap`.
- Build Now: Keep constrained and explicitly research-only.
- Build Later: Only expand after B defines safe scope.
- Safety Boundary: No betting execution, sportsbook integration, broker execution, copy-trading, auto-trading, or financial action workflow.
- Success Criteria: The page captures ideas without creating unsafe calls to action.
- Priority Tier: Tier 5 Do Not Build Yet.

### OPERATIONS

#### 13 Staging / QA

- Current Name: Staging / QA
- Better Name if needed: Build Readiness.
- Department: Operations / Quality and Release Control.
- Purpose: A-Z build, QA, source-health checks, route status, and build completion tracker.
- User Problem: B needs to know what is built, verified, risky, deferred, or next.
- Inputs: Build validation, route sweep results, completion tracker, project status, next steps, handoff state.
- Outputs: QA status, route matrix, next approval queue, session completion record.
- Primary Action: Verify a sprint and record the current build truth.
- Connected Routes: `#/staging`, `/staging`, `#/roadmap`, `#/dashboard`, `/ai-handoff`.
- Build Now: Keep tracker and QA truth updated after each sprint.
- Build Later: Better planning summaries and route-health visualization.
- Safety Boundary: No fake validation, no hidden failures, no overwriting user localStorage without consent.
- Success Criteria: Every sprint leaves changed files, validation result, remaining problems, and next recommended task.
- Priority Tier: Tier 2 Support System.

#### 14 Habitat OS

- Current Name: Habitat OS
- Better Name if needed: AI Habitat OS.
- Department: Operations / System Architecture.
- Purpose: Explain the two-habitat model and how CEO B connects Market Habitat and Life Habitat.
- User Problem: B needs the project identity and architecture to stay coherent as routes expand.
- Inputs: Route map, habitat roles, founder/CEO B identity, Source Hub and Archive workflow, future device boundaries.
- Outputs: System architecture explanation, habitat boundaries, future adapter map.
- Primary Action: Review how Market Habitat, Life Habitat, and CEO B fit together.
- Connected Routes: `#/ai-habitat-os`, `#/life-os`, `#/founder`, `#/vision-map`, `#/dashboard`.
- Build Now: Keep conceptual and aligned with current static truth.
- Build Later: Add visual architecture after B approves the 20-section map direction.
- Safety Boundary: Voice, camera, device control, and local assistant gateway remain future-adapter only.
- Success Criteria: The habitat model is understandable without implying unsafe implemented capabilities.
- Priority Tier: Tier 2 Support System.

#### 15 Watchlists

- Current Name: Watchlists
- Better Name if needed: Research Universe.
- Department: Operations / Research Universe.
- Purpose: Phase 2B research universe foundation for tickers, themes, catalysts, and route context.
- User Problem: B needs a stable universe of things to watch before research packets can be prioritized.
- Inputs: Local watchlists, manual ticker/theme context, Source Hub references, Trend Radar themes, Alerts Desk candidates.
- Outputs: Watchlist cards, research universe filters, related route context, future packet seeds.
- Primary Action: Review or organize the research universe.
- Connected Routes: `#/watchlists`, `/watchlists`, `#/alerts`, `#/signals`, `#/source-hub`, `#/trend-radar`, `#/dashboard`.
- Build Now: Keep stable; polish only with B approval.
- Build Later: Source-backed watchlist enrichment and Research Desk packet seeding.
- Safety Boundary: No live prices, fake live data, broker links, execution states, or investment advice.
- Success Criteria: Watchlists remain useful, stable, and clearly research-only.
- Priority Tier: Tier 1 Core Product.

#### 16 Markets Matrix

- Current Name: Markets Matrix
- Better Name if needed: Market Context Matrix.
- Department: Operations / Market Context.
- Purpose: Future market overview for breadth, regimes, sectors, and research context.
- User Problem: B needs broad market context, but the app cannot pretend to have live market telemetry.
- Inputs: Future approved market data, static regime notes, Source Hub verified context, Archive memory.
- Outputs: Market context cards, breadth notes, regime summaries, research prompts.
- Primary Action: Review broad market context before research review.
- Connected Routes: `#/markets`, `#/dashboard`, `#/signals`, `#/watchlists`, `#/source-hub`.
- Build Now: Keep future concept/static placeholder.
- Build Later: Only after approved data boundaries and backend/provider strategy exist.
- Safety Boundary: No fake live prices, no live feed claims, no provider keys in frontend, no trading signals.
- Success Criteria: Until approved, the route stays honest as future/static context.
- Priority Tier: Tier 4 Future Only.

### EXPANSION

#### 17 Options Hub

- Current Name: Options Hub
- Better Name if needed: Options Research Hub.
- Department: Expansion / Options Research.
- Purpose: Future research-only options cockpit for chain concepts, IV context, and probability study.
- User Problem: B wants options research structure without trading execution or fake live chain data.
- Inputs: Approved static research packets, Source Hub verification, Risk & Rules, Watchlists, Archive examples.
- Outputs: Options research packets, education panels, manual review checklists, risk gates.
- Primary Action: Study an options research setup and decide whether it belongs in Alerts Desk review.
- Connected Routes: `#/options`, `#/alerts`, `#/signals`, `#/risk-rules`, `#/source-hub`, `#/archive`.
- Build Now: Do not start without explicit B approval.
- Build Later: Static research-only prototype with no execution features.
- Safety Boundary: No broker execution, no order tickets, no fake chain, no auto-trading, no copy-trading, no trade recommendations.
- Success Criteria: If built, it must read as education/research and require CEO B manual review.
- Priority Tier: Tier 5 Do Not Build Yet.

#### 18 Catalysts Calendar

- Current Name: Catalysts Calendar
- Better Name if needed: Catalyst Calendar.
- Department: Expansion / Event Research.
- Purpose: Future event/catalyst research board for earnings, FDA, SEC, macro, and watchlist events.
- User Problem: B needs event context tied to sources and watchlists.
- Inputs: Source Hub verified events, manual calendar notes, Watchlists, Archive context, Risk & Rules.
- Outputs: Catalyst cards, event source status, research prompts, Alerts Desk candidates.
- Primary Action: Review a catalyst and decide whether it needs source verification or research packet creation.
- Connected Routes: `#/catalysts`, `#/source-hub`, `#/watchlists`, `#/alerts`, `#/research`, `#/archive`.
- Build Now: Keep future concept/static placeholder.
- Build Later: Manual source-backed event board after Source Hub workflow is stronger.
- Safety Boundary: No fake live calendar, no unsourced event claims, no trading countdowns, no execution prompts.
- Success Criteria: Every catalyst has source status, date context, and manual review boundary.
- Priority Tier: Tier 4 Future Only.

#### 19 Research Desk

- Current Name: Research Desk
- Better Name if needed: CEO B Research Desk.
- Department: Expansion / Research Workspace.
- Purpose: Future manual workspace for source-linked research packets before they enter Alerts Desk or Archive.
- User Problem: B needs a place to assemble research from sources, watchlists, and memory without turning it into autonomous analysis.
- Inputs: Source Hub verified sources, Watchlists, Archive memory, Trend Radar themes, Bookmarks Mine candidates, Risk & Rules.
- Outputs: Draft research packets, source maps, thesis notes, archive candidates, Alerts Desk candidates.
- Primary Action: Assemble a source-backed research packet for CEO B review.
- Connected Routes: `#/research`, `#/source-hub`, `#/archive`, `#/alerts`, `#/watchlists`, `#/trend-radar`, `#/bookmarks`.
- Build Now: Define as future manual workspace in planning docs.
- Build Later: Build after Source Hub, Archive, Alerts Desk, and Watchlists handoffs are stable.
- Safety Boundary: No autonomous research claims, no unsourced packets, no private raw note exposure, no execution advice.
- Success Criteria: Research Desk becomes the safe bridge between verified sources and review-ready packets.
- Priority Tier: Tier 1 Core Product later; Tier 4 Future Only now.

#### 20 Roadmap

- Current Name: Roadmap
- Better Name if needed: Build Roadmap.
- Department: Expansion / Product Planning.
- Purpose: Sprint planning, future sequence, launch readiness, and build map.
- User Problem: B needs to choose next work without losing current truth or starting unsafe features early.
- Inputs: Project status, next steps, Staging tracker, this blueprint, route matrix, B approvals.
- Outputs: Recommended build order, do-not-build-yet list, sprint candidates, launch readiness notes.
- Primary Action: Choose or approve the next sprint.
- Connected Routes: `#/roadmap`, `#/staging`, `#/dashboard`, `#/vision-map`, `/ai-handoff`.
- Build Now: Point future planning toward this execution blueprint.
- Build Later: Add route grouping and build-order visualization.
- Safety Boundary: Roadmap can plan future capabilities but must not imply they are implemented.
- Success Criteria: B can see what to build now, what to defer, and what requires explicit approval.
- Priority Tier: Tier 2 Support System.

## Build-Now Summary

- Keep Alerts Desk stable and research-only.
- Keep Mission Control as the overview of current truth.
- Keep Source Hub as source verification and privacy boundary.
- Keep Archive as cleaned local memory with source lineage.
- Keep Watchlists stable as the research universe.
- Keep Staging / QA updated after every sprint.
- Use this blueprint to guide future copy, grouping, and build order.

## Build-Later Summary

- Research Desk as manual packet assembly workspace.
- Vision Map and Habitat OS visual refinements.
- Learning Ledger lesson promotion from Archive.
- Watchlists polish and source-backed enrichment.
- Catalysts Calendar as manual source-backed event board.
- Options Research Hub only after explicit approval and strict safety framing.

## Final Operating Rule

Every future section should answer four questions clearly:

1. What is B reviewing?
2. Where did it come from?
3. What is safe to do next?
4. What is explicitly not implemented?
