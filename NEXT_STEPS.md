# Pickaxe Capital Next Steps

## Current Active Checkpoint

Source Hub → Research Desk → Alerts Desk Flow was completed locally on 2026-06-05 as a static/local workflow prototype sprint.

Before starting, `9e2a285 Add landing page services pricing` was verified as pushed to `origin/main`.

The new workflow connects:

- `#/source-hub`
- `#/research`
- `#/alerts`
- `#/archive`
- `#/watchlists`

What changed:

- Source Hub now has a `Source → Research Packet Flow` panel with a local `Create Research Packet Draft` action.
- Research Desk is now a real manual packet builder instead of a future-only placeholder.
- Research Desk includes Packet Builder fields, Source Handoff Queue, Route Decision actions, Research Packet Anatomy, Source Confidence, Missing Evidence, CEO B Review Boundary, and Recent Research Packets.
- Alerts Desk now shows a `Research Desk Intake` panel for packets routed from Research Desk.
- Research packets save locally under `pickaxeResearchPackets`.
- Archive Candidate routing uses the existing cleaned Archive Vault local pattern.
- Watchlist Candidate routing marks the packet as watchlist context without changing the Watchlists data model.

Safety boundaries preserved:

- Static/local prototype only.
- No backend, live APIs, provider adapters, scraping, broker execution, payment/auth, auto-trading, copy-trading, investment advice, guaranteed outcomes, fake live data, or private-note exposure.
- CEO B manual review remains required.
- `data/signal-alerts.json` remains unstaged and uncommitted.

Files updated for this checkpoint:

- `app.js`
- `public/app.js`
- `styles.css`
- `public/styles.css`
- `index.html`
- `public/index.html`
- `PROJECT_STATUS.md`
- `NEXT_STEPS.md`

Validation passed:

- `/Applications/Codex.app/Contents/Resources/node --run build`
- `/Applications/Codex.app/Contents/Resources/node --run check:project`
- Browser sweep for `/`, `#/alerts`, `#/dashboard`, `#/founder`, `#/source-hub`, `#/research`, `#/archive`, `#/watchlists`, `#/staging`, `#/roadmap`, `#/ai-habitat-os`, and `#/ceo-b-profile`
- Workflow check for Source Hub draft creation, Research Desk route decision, Alerts Desk intake rendering, and refresh-preserved local state
- Desktop and 390px mobile overflow checks passed
- `/ai-handoff` returned HTTP 200

Stop after reporting validation, commit, push status, and git status. Do not start another sprint automatically.

## Previous Active Checkpoint

Landing Page + Services / Pricing was completed locally on 2026-06-05 as a static front-end marketing/access page sprint.

Before starting, `53ffd8a Consolidate premium visual CSS system` was verified as pushed to `origin/main`.

The existing public founder route is now the public Pickaxe Capital landing/access page:

- `#/founder`
- `/founder`

The existing CEO B profile route remains preserved:

- `#/ceo-b-profile`

The landing page includes:

- Hero: `Pickaxe Capital` / `Private Market Research OS for Founder-Led Decision Making`
- What Pickaxe Does: Capture, Verify, Build, Decide
- The Pickaxe Operating Loop
- Inside the Private OS modules for Alerts Desk, Mission Control, Source Hub, Archive Vault, Watchlists, and Research Desk
- Private Access Options with Founder Preview, Private Research OS, and Founder’s Edition
- Built For
- Why Pickaxe Is Different
- Future Research Generators
- Visible Research Boundary disclosure
- Static Request Private Access card
- Footer links to Alerts Desk, Mission Control, Source Hub, Archive, Watchlists, and Roadmap

The access/pricing tier cards are planning concepts only. No payment, checkout, auth, backend, account creation, provider adapter, broker integration, live data, trading execution, copy-trading, investment-advice claim, guaranteed-profit claim, or fake live data was added.

The access request card is local-only. `Prepare Access Request` updates local placeholder copy and notification text only; no request is transmitted.

Files updated for this checkpoint:

- `app.js`
- `public/app.js`
- `styles.css`
- `public/styles.css`
- `PROJECT_STATUS.md`
- `NEXT_STEPS.md`

Validation passed:

- `/Applications/Codex.app/Contents/Resources/node --run build`
- `/Applications/Codex.app/Contents/Resources/node --run check:project`
- Browser sweep for `/`, `#/alerts`, `#/dashboard`, `#/founder`, `/founder`, `#/ceo-b-profile`, `#/source-hub`, `#/archive`, `#/staging`, `#/watchlists`, `#/roadmap`, `#/research`, and `#/ai-habitat-os`
- Desktop and 390px mobile overflow checks passed
- `/ai-handoff` returned HTTP 200

`data/signal-alerts.json` remains unstaged and uncommitted.

Stop after reporting validation, commit, push status, and git status. Do not start another sprint automatically.

## Previous Active Checkpoint

CSS Consolidation / Premium Visual System Cleanup was completed locally on 2026-06-05 as a CSS/front-end consolidation sprint only.

The site now has a calmer premium Pickaxe visual foundation in `styles.css` and `public/styles.css`:

- Global Pickaxe Sovereign tokens for black, graphite, charcoal, ivory, paper, champagne gold, antique gold, bronze, verified sage, risk brick, muted text, borders, radii, shadows, transitions, and shell layers.
- Legacy color aliases now map older cyan/blue/violet/glow variables into the calmer black/gold/sage/muted palette to reduce neon/cyberpunk drift.
- A final compatibility layer normalizes the app shell, sidebar, route containers, cards, buttons, chips, badges, tables, research streams, mobile stacking, overflow handling, and reduced-motion behavior without renaming route classes.
- The stylesheet cache key is now `css-consolidation-20260605` in `index.html` and `public/index.html`.

Preserved:

- Alerts Desk packet detail layer, company monograms, research confidence, metric cards, and research-only framing.
- Mission Control, Source Hub, Archive, Staging, Watchlists, Agents placeholder, Roadmap, Habitat OS, Research Desk, and `/ai-handoff`.
- Sidebar zones and route order: `COMMAND`, `INTELLIGENCE`, `MEMORY`, `OPERATIONS`, `EXPANSION`, with `00 Alerts Desk` first and `01 Mission Control` second.
- Static-first/localStorage-only behavior and all no-live/no-execution safety boundaries.

No app logic, route architecture, sidebar renumbering, HTML structure changes beyond the CSS cache key, live APIs, backend systems, provider adapters, broker integrations, autonomous agents, fake live data, payment/auth, private-note exposure, or `data/signal-alerts.json` changes were added. `data/signal-alerts.json` must remain unstaged and uncommitted.

Validation passed:

- `/Applications/Codex.app/Contents/Resources/node --run build`
- `/Applications/Codex.app/Contents/Resources/node --run check:project`
- Browser sweep for `/`, `#/alerts`, `#/dashboard`, `#/source-hub`, `#/archive`, `#/staging`, `#/watchlists`, `#/agents`, `#/roadmap`, `#/ai-habitat-os`, and `#/research`
- Desktop and 390px mobile overflow checks passed
- `/ai-handoff` returned HTTP 200

Recommended next task after B approval: visually inspect the live deployment after push, then choose either Watchlists Polish or a focused route-by-route visual QA pass. Do not start another sprint automatically.

## Previous Active Checkpoint

Pickaxe 20-Section Execution Blueprint was completed locally on 2026-06-05 as a docs/planning-only sprint.

The new planning artifact is `PICKAXE_20_SECTION_EXECUTION_BLUEPRINT.md`. It defines the professional execution blueprint for the full `00-20` Pickaxe OS map using the current route order:

- `COMMAND`: `00 Alerts Desk`, `01 Mission Control`, `02 Command Console`, `03 Vision Map`
- `INTELLIGENCE`: `04 Agents`, `05 Signals Lab`, `06 Source Hub`, `07 Risk & Rules`, `08 Learning Ledger`
- `MEMORY`: `09 Trend Radar`, `10 Archive Vault`, `11 Bookmarks Mine`, `12 Money Lab`
- `OPERATIONS`: `13 Staging / QA`, `14 Habitat OS`, `15 Watchlists`, `16 Markets Matrix`
- `EXPANSION`: `17 Options Hub`, `18 Catalysts Calendar`, `19 Research Desk`, `20 Roadmap`

Every section now has a planning card with Current Name, Better Name if needed, Department, Purpose, User Problem, Inputs, Outputs, Primary Action, Connected Routes, Build Now, Build Later, Safety Boundary, Success Criteria, and Priority Tier.

The blueprint also identifies grouped section clusters, core product pages, future-only sections, recommended build order, do-not-build-yet items, and the connection model across Alerts Desk, Source Hub, Research Desk, Archive, and Mission Control.

Current build direction from the blueprint:

- Keep Alerts Desk stable as the daily CEO B research review queue.
- Keep Source Hub as the trust/source-verification cockpit.
- Keep Archive as cleaned local memory with source lineage.
- Keep Mission Control as the operating overview.
- Keep Watchlists stable as the research universe foundation.
- Treat Research Desk as a future manual workspace until B approves a build sprint.
- Defer Agents rebuild, Markets Matrix live context, Options Hub, Catalysts Calendar, live APIs, provider adapters, broker execution, auto-trading, copy-trading, and fake live data.

No app code, route architecture, CSS, shared data files, frontend behavior, localStorage keys, live integrations, provider adapters, broker integrations, or `data/signal-alerts.json` changes were added. `data/signal-alerts.json` must remain unstaged and uncommitted.

Validation passed with `/Applications/Codex.app/Contents/Resources/node --run build` and `/Applications/Codex.app/Contents/Resources/node --run check:project`.

Stop after reporting validation, commit, and git status.

## Previous Active Checkpoint

00 Alerts Desk Detail Layer / Options Research Packet Fields was completed locally on 2026-06-05. `/` and `#/alerts` remain the Alerts Desk homepage, now upgraded into a static research-only options review queue with fuller candidate packet fields for CEO B manual review.

The Alerts Desk visual direction is preserved: premium dark command desk, luxury black/gold research cockpit, left intelligence source rail, central options research review stream, right watchlist/sentiment/market-regime panels, bottom call/put research framework panels, and CEO B manual review identity.

Candidate packets now include company monogram, company name, ticker, call/put research candidate label, Review Timeframe, contract context, source agent, agents involved, source type, source verification status, risk status, Research Confidence scored 1-1000 with decimal completeness percentage, Research Thesis, Projected Scenario, and next CEO B review action.

The surrounding desk now includes or improves:

- `Today's Review Queue`
- `Calls vs Puts`
- `Today's Total Conviction`
- `Fear & Greed`
- `Intelligence Sources`
- `Market Overview`
- `System Status`
- `Market Bias`
- `Projected Scenario`
- `Sentiment`
- `Watchlist`

Confidence is framed as mock research completeness, not expected return. The queue remains Static Prototype / Mock / No Live Provider Data / No Broker Execution. Visual filters remain visual-only. No route architecture, backend, live API, provider adapter, broker integration, real trading execution, copy-trading, autonomous agent system, private-note exposure, or `data/signal-alerts.json` changes were added.

Validation passed for this checkpoint: build, project check, browser route sweep, desktop overflow, required packet fields, required metric/context cards, safe wording, sidebar order, `.rail-quote`, `/ai-handoff` HTTP 200, and confirmation that `data/signal-alerts.json` remains unstaged and uncommitted. Mobile responsive rules were audited for one-column packet/card collapse and min-width overflow protection.

Stop after reporting validation, commit, and push status. Future work requires B approval.

## Previous Active Checkpoint

00 Alerts Desk Safety Language + Final Lock Check was completed locally on 2026-06-05. `/` and `#/alerts` remain the Alerts Desk homepage and now use safer research-only language across the premium dark command desk.

The Alerts Desk visual direction is preserved: luxury black/gold research cockpit, left source rail, options research review stream, right watchlist/sentiment/regime panels, bottom call/put educational framework panels, and CEO B manual review identity.

Final language changes:

- `Options Research Review Stream`
- `Options Research Candidates`
- `Review Direction`
- `Call Research Candidate Framework`
- `Put Research Candidate Framework`
- `Manual Review Required`
- `Source Verification Needed`
- `Risk Gate`
- `Static Prototype`
- `Mock / No Live Provider Data`
- `No Broker Execution`

Visual filters remain visual-only/local mock filters pending B approval. No route architecture, backend, live API, provider adapter, broker integration, autonomous agent, real execution, copy-trading, Watchlists logic, Source Hub workflow, Archive model, Options logic, or `data/signal-alerts.json` changes were added.

Validation passed locally with build, project check, desktop browser route sweep, mobile Alerts Desk overflow check, and `/ai-handoff` HTTP 200. `data/signal-alerts.json` remained unstaged and uncommitted.

Stop after final lock report. Future work requires B approval.

Phase 2P Staging Declutter was completed locally on 2026-06-04. `#/staging` now reads as a QA / build-readiness command center, not a dense tracker page.

Staging now has one hero, one clear purpose/manual action, and three above-fold panels:

- Current Locked Phase
- Route Stability Matrix
- Next Approval Queue

Tracker/history/log details are lower, quieter, or collapsed. The Build Completion Tracker remains available on `#/staging`, and the `pickaxeCompletionTracker` localStorage key is preserved. Backup/export/import and recovery details stay available lower on the page.

Sidebar zones remain locked from `c28f7f7`: `COMMAND`, `INTELLIGENCE`, `MEMORY`, `OPERATIONS`, and `EXPANSION`. Alerts Desk remains `00`; Mission Control remains `01`; `/` and `#/alerts` remain Review Queue; `#/dashboard` remains Mission Control.

No route architecture, backend, live API, provider adapter, broker, copy-trading, private-note exposure, Source Hub workflow, Archive model, Watchlists logic, Agents behavior, Options logic, or `data/signal-alerts.json` changes were added.

Recommended next step after this: CSS Consolidation, then Watchlists Polish. B must approve before either sprint starts.

Sidebar / Navigation Consolidation — 2-Layer 21-Section OS Map was completed locally on 2026-06-04. The sidebar now uses the high-level Pickaxe OS zones `COMMAND`, `INTELLIGENCE`, `MEMORY`, `OPERATIONS`, and `EXPANSION`.

The visible route order is now `00-20`: `00 Alerts Desk`, `01 Mission Control`, `02 Command Console`, `03 Vision Map`, `04 Agents`, `05 Signals Lab`, `06 Source Hub`, `07 Risk & Rules`, `08 Learning Ledger`, `09 Trend Radar`, `10 Archive Vault`, `11 Bookmarks Mine`, `12 Money Lab`, `13 Staging / QA`, `14 Habitat OS`, `15 Watchlists`, `16 Markets Matrix`, `17 Options Hub`, `18 Catalysts Calendar`, `19 Research Desk`, and `20 Roadmap`.

No route architecture, backend, live API, provider adapter, broker, betting/sportsbook, copy-trading, Source Hub workflow, Archive workflow, Watchlists logic, Agents behavior, Options logic, private-note exposure, or `data/signal-alerts.json` changes were added. Recommended next step: Phase 2P Staging Declutter, then CSS Consolidation.

Alerts First + Mindset Quote Polish was completed locally on 2026-06-04. Alerts Desk is now visible route/order `00`, appears first in the sidebar/navigation, and remains the homepage at `/` and `#/alerts`. Mission Control is now visible route/order `01` and remains available at `#/dashboard`.

Mindset quote polish was added to the rotating sidebar mindset rail and the Founder / CEO B profile operating-rules band. The copy stays concise, institutional, research-first, and non-advisory.

Validation passed locally:

- `/Applications/Codex.app/Contents/Resources/node --run build`
- `/Applications/Codex.app/Contents/Resources/node --run check:project`
- Browser route sweep for `/`, `#/alerts`, `#/dashboard`, `#/source-hub`, `#/archive`, `#/staging`, `#/watchlists`, `#/agents`, `#/roadmap`, `#/founder`, and `#/ceo-b-profile`
- Mobile homepage/sidebar overflow check at 390px
- `/ai-handoff` returned HTTP 200 with generated context

No route architecture, backend, live API, provider adapter, broker, betting/sportsbook, copy-trading, Source Hub workflow, Archive workflow, Watchlists logic, Agents behavior, Options logic, or `data/signal-alerts.json` changes were added. Recommended next step remains: lock Emergency Visual Triage, then choose sidebar/navigation consolidation or Staging declutter.

Emergency Visual Triage / Homepage Cleanup was completed locally on 2026-06-04. It changed `/`, `#/alerts`, shared CSS, and the stylesheet cache-buster. The homepage now opens as a focused Review Queue with one active packet, one decision checklist, one compact queue, and collapsed packet context. The app shell has been forced back into dark Pickaxe surfaces after the old light-theme polish bled through.

Validation passed locally:

- `/Applications/Codex.app/Contents/Resources/node --run build`
- `/Applications/Codex.app/Contents/Resources/node --run check:project`
- Browser route sweep for `/`, `/agents`, `/vision-map`, `/archive`, `/staging`, `/founder`, `/ceo-b-profile`, `/jarvis-lab`, and `/life-os`
- `/ai-handoff` returned HTTP 200 with generated context

Remaining urgent visual work: consolidate the old CSS polish blocks, structurally simplify the sidebar/navigation, and continue section-by-section cleanup. Do not rebuild from scratch.

Phase 2O Section-by-Section Declutter — Archive First is pushed, deployed, live-reviewed, clean, and live-locked at `5fc85d0 Declutter Archive section`. It changed only `#/archive` and makes Archive read as a premium cleaned intelligence memory vault with one hero, one clear purpose, one clear next manual action, and three above-fold bento panels: Cleaned Memory Queue, Source Lineage Summary, and CEO B Review State.

Phase 2O live review URL:

https://burberrry.github.io/Pickaxe-Capital/?v=phase2o-archive-declutter#/archive

Archive now answers what cleaned intelligence has been preserved, what needs CEO B review, what came from Source Hub, what is clean/local-only, what can become a lesson candidate, what needs more evidence, and what should return to Source Hub. Detailed filters, long archive metadata, secondary actions, import lab, duplicate warnings, old archive history, ownership maps, and local action history are lower or collapsed.

The existing Source Hub -> Archive workflow remains intact. Archive still reads `pickaxeArchiveVault` and shows source lineage, trust labels, privacy tier, private-data-removed state, Source Hub action IDs, and CEO B review state where available. No route architecture, backend systems, dependencies, live APIs, provider adapters, Source Hub data model changes, Archive data model changes, localStorage key changes, Watchlists functionality, Agents functionality, Options logic, raw Obsidian publishing, raw bookmark publishing, or `data/signal-alerts.json` changes were added.

Recommended next section after Phase 2O is `#/staging`, but B must approve before starting it.

Phase 2N-B Section-by-Section Declutter — Source Hub First is pushed, deployed, live-reviewed, clean, and live-locked at `f920dcf Declutter Source Hub section`. It changed only `#/source-hub` and makes Source Hub read as a premium trust cockpit with one hero, one clear purpose, one clear next manual action, and three above-fold bento panels: Verification Matrix, Source Intake Queue, and Source -> Route Map.

Phase 2N-B live review URL:

https://burberrry.github.io/Pickaxe-Capital/?v=phase2nb-source-hub-declutter#/source-hub

Source Hub now answers what sources are trusted, what still needs verification, what CEO B should review next, which routes depend on sources, and what can move from Source Hub to Archive. Adapter boundaries, planned/local ownership lanes, action logs, private memory boundary, escalation rules, Mission Control preview, long safety wording, and local-only action history are lower or collapsed.

The existing Source Hub -> Archive workflow remains intact. `Save Cleaned Source Memory` still writes local-only cleaned archive candidates with lineage, trust labels, privacy tier, private-data-removed state, Source Hub action IDs, and CEO B review state. No route architecture, backend systems, dependencies, live APIs, provider adapters, Archive data model changes, localStorage key changes, Watchlists functionality, Agents functionality, Options logic, or `data/signal-alerts.json` changes were added.

Phase 2N-B originally recommended `#/archive`; Phase 2O has now completed that recommendation.

Phase 2N-A Launch Countdown Dot Grid is pushed, deployed, live-reviewed, clean, and live-locked at `a132b9e Add launch countdown dot grid`. It adds a premium static dot-grid countdown for `2026-08-03T00:00:00-07:00`, labeled `Testing Launch Window`, not a guaranteed public launch.

Phase 2N-A live review URL:

https://burberrry.github.io/Pickaxe-Capital/?v=phase2na-launch-countdown#/dashboard

The countdown appears only on `#/dashboard` lower on Mission Control, `#/roadmap` as a larger roadmap card, and `#/staging` as a small QA/readiness card. It shows Pickaxe Testing Launch Window, percent complete, days until testing access, the target date, and the safety line: “Static countdown. No live system telemetry.”

Phase 2N-A does not change route architecture, backend systems, dependencies, live APIs, provider adapters, broker integrations, Source Hub workflow, Archive workflow, Watchlists functionality, Agents functionality, Options logic, or `data/signal-alerts.json`.

Phase 2N-A originally recommended `#/source-hub`; Phase 2N-B has now completed that recommendation.

Phase 2M Full-Access Section Decision + Alerts Desk Declutter is pushed, deployed, live-reviewed, clean, and live-locked at `60e5abb Declutter Alerts Desk section`. The chosen section was `/` / `#/alerts` — Alerts Desk / homepage / CEO B Review Queue.

Alerts Desk was chosen because it is the homepage, first impression, daily research review queue, visibly cluttered, and safer to improve than Source Hub, Archive, Watchlists, or Agents in a one-section sprint.

Phase 2M live review URL:

https://burberrry.github.io/Pickaxe-Capital/?v=phase2m-alerts-declutter#/alerts

Phase 2M changed only `/` / `#/alerts`. Alerts Desk now uses one hero, one clear purpose, one clear next manual action, and three above-fold bento panels: Active Research Packet, Decision Checklist, and Safety / Source Boundary.

Secondary Alerts Desk detail now sits lower or quieter: Packet Queue, Source Confidence, Archive/Learning links, market/catalyst context, packet context, and support commentary. Repeated research-only and no-execution copy was merged into one concise visible boundary. Mission Control remains unchanged from Phase 2L. Source Hub remains trust layer. Archive remains cleaned saved intelligence memory. Watchlists remains unchanged. Agents remains placeholder-only. Options Research remains deferred.

Phase 2L Section-by-Section Declutter / Mission Control First remains pushed, deployed, live-reviewed, clean, and live-locked at `adea558 Declutter Mission Control section`. The sprint changed only `#/dashboard`, turning Mission Control into a cleaner command page with one hero, one clear next manual action, and three above-fold bento panels: Decision Queue, Source -> Archive Memory Loop, and 00-20 OS Blueprint Snapshot.

Phase 2K Premium Visual System Polish remains pushed, deployed, live-reviewed, clean, and live-locked at `dbeccff Add Phase 2K premium visual system polish`. The Phase 2K live-lock status commit is `dce28ad Update Phase 2K live lock status`.

Phase 2L live review URL:

https://burberrry.github.io/Pickaxe-Capital/?v=phase2l-dashboard-declutter#/dashboard

Phase 2L is Mission Control-only. No route architecture, workflow logic, integrations, data model, dependencies, Watchlists functionality, Agents implementation logic, Options logic, backend systems, or `data/signal-alerts.json` changes were added. Mission Control remains flagship. Source Hub remains trust layer. Archive remains cleaned saved intelligence memory. Watchlists remains unchanged. Agents remains placeholder-only. Options Research remains deferred. Next task must be chosen by B.

Phase 2J Mission Control + 20-Section Visual Blueprint Polish is pushed and aligned at `ebbf885`. Mission Control is the flagship command page for the full Pickaxe OS with a clearer CEO B command layer, compact 00-20 blueprint preview, Source-to-Archive aggregate memory summary, and safe decision queue.

Phase 2I Archive / Source Workflow Implementation is pushed, deployed, live-reviewed, clean, and live-locked at `8bc264f`. Source Hub and Archive work together as a safe local-only research memory loop: Source Hub verifies, CEO B reviews, Archive stores cleaned memory, Learning Ledger can receive cleaned lesson candidates, and Mission Control summarizes cleaned state only.

Phase 2H Pickaxe OS Master Architecture + Research Alert Spec is pushed, clean, and locked at `d867b5f`. Phase 2D Source Hub Intelligence Cockpit remains live-reviewed and live-locked. Sidebar number-badge cleanup is live-verified. Phase 2C App Shell / Navigation Reset is officially live-locked. Agents Placeholder Reset and Mission Control Dashboard Upgrade remain stable. Phase 2B Watchlists remains built, committed, pushed to origin/main, live-checked by CEO B, and stability-checked locally.

Latest live review is complete for Phase 2M Alerts Desk declutter.

https://burberrry.github.io/Pickaxe-Capital/?v=phase2i-archive-source#/archive

Latest local stability fix: `/ai-handoff` now returns the generated plain-text handoff, matching `/source-hub-staging`.

Latest memory upgrade: selected private Obsidian notes can feed the local `/ai-handoff` and `/source-hub-staging` context. The public/static frontend should only show sanitized memory-layer status, not private vault contents.

Latest interface upgrade: `#/dashboard` is now Mission Control, the premium CEO B command-center route for market regime, agents, alerts, watchlists, signals, sources, risk, research queue, and next mission.

Latest route cleanup: `#/agents` is intentionally a placeholder/future schematic on a black/graphite background. The old agent habitat image is removed. Do not rebuild the agent habitat until Mission Control and Source Hub are stable.

Latest shell reset: sidebar/navigation now uses a calmer graphite/gold private market OS frame. Mission Control is the flagship route, Agents is placeholder-only, and Source Hub is the next major intelligence layer.

Latest source layer upgrade: `#/source-hub` is now the Source Hub Intelligence Cockpit with source verification matrix, source-to-route map, planned/local agent ownership, source intake queue, adapter boundary panel, private memory boundary, escalation rules, Mission Control integration preview, and local-only action log. All content remains static/manual/demo/local-only with no scraping, live provider calls, broker connection, execution, copy-trading, or private Obsidian note exposure.

Latest archive workflow upgrade: Source Hub to Archive workflow is live. Source Hub can save cleaned source memory to Archive as local-only archive candidates with source lineage, trust labels, privacy tiers, private-data-removed state, linked Source Hub action IDs, and CEO B review state. Archive cards show this lineage and expose safe local-only actions for CEO B review, lesson candidates, evidence requests, cleaning status, and return-to-Source-Hub routing. Watchlists remains unchanged, Agents remains placeholder-only, and Options Research remains deferred until B explicitly approves it.

Latest Mission Control polish: `#/dashboard` now presents Mission Control as a decluttered premium command page, with one hero, three core bento panels above the fold, lower-priority intelligence moved down, and verbose blueprint/operating-chain details collapsed.

Latest Alerts Desk polish: `/` / `#/alerts` now presents the homepage/research review queue as a decluttered premium review page, with one hero, three core bento panels above the fold, lower-priority packet details moved down, and longer context/commentary collapsed.

## Do Next

1. Use the Obsidian-backed `/ai-handoff` before future Codex/ChatGPT website build sessions.
2. Let B choose the next task before starting another sprint.
3. Recommended next section after Phase 2O is `#/staging`, but B must approve before starting it.
4. Keep Watchlists stable.
5. Keep Agents placeholder-only until B approves a rebuild.
6. Do not start Options Hub until B approves.
7. Continue preserving research-only wording and static GitHub Pages safety.

## Do Not Start Yet

- Live market data.
- Broker integrations.
- Betting/sportsbook integrations.
- Copy-trading.
- OpenClaw installation.
- 20 custom image section asset integration.
- Backend provider adapters.

## Working Now

- `#/dashboard`
- `#/alerts`
- `#/mission-control`
- `#/vision-map`
- `#/agents`
- `#/signals`
- `#/source-hub`
- `#/risk-rules`
- `#/learning-ledger`
- `#/trend-radar`
- `#/archive`
- `#/bookmarks`
- `#/money-lab`
- `#/staging`
- `#/ai-habitat-os`
- `#/watchlists`
- `#/markets`
- `#/options`
- `#/catalysts`
- `#/research`
- `#/roadmap`

## Current State

- Alerts Desk remains the homepage and research review queue.
- Dashboard exists as pinned `#/dashboard` and now displays as Mission Control, the CEO B operating overview.
- Watchlists exists as `#/watchlists` and is the Phase 2B research universe foundation.
- Vision Map carries the Living Agent Network.
- Routes 16-20 remain future concepts except where explicitly upgraded later.
- The app is static-first, vanilla JS / HTML / CSS, and LocalStorage-only.
- No backend, live provider data, broker execution, auto-trading, betting/sportsbook execution, copy-trading, fake live data, private URLs, or frontend API keys are connected.
- `/ai-handoff` and `/source-hub-staging` both serve the generated local text handoff from `server.mjs`.
- Selected Obsidian notes are local handoff context only; do not publish private vault contents into public frontend files.

## Next Session Priority

- Treat `/` / `#/alerts` Alerts Desk as the homepage and CEO B research review queue.
- Treat `#/dashboard` Mission Control as the flagship command-center page.
- Keep `#/source-hub` as the trust/intelligence layer and preserve the Phase 2N-B decluttered trust cockpit.
- Keep `#/archive` as cleaned saved intelligence memory and preserve the Phase 2O decluttered memory vault.
- Recommended next section after Phase 2O: `#/staging`, because it is the QA/tracker layer and can be cleaned without touching Watchlists.
- B should choose the next recommended task; do not start the next sprint automatically.
- Leave `#/agents` as a placeholder unless B explicitly asks to rebuild the Agent Habitat.
- Do not start Options Hub yet.
- Continue preserving research-only wording and static GitHub Pages safety.
- Keep `/ai-handoff` working after any future server changes.
- Keep the Obsidian memory layer local-only unless B explicitly asks to publish cleaned summaries.

## Completion Tracker System

- Full editable tracker: `#/staging`.
- Compact tracker: `/`.
- Default data: `public/habitat-data.js` -> `buildCompletionTracker`.

## Historical Notes

- Phase 1.5 Design System + Living Agent Network completed.
- Phase 1.6 Premium UI Polish Pass completed.
- Phase 2A CEO B Dashboard Prototype completed.
- Phase 2B Watchlists Prototype completed, pushed to `origin/main`, and live-checked by CEO B.
- Mission Control Dashboard Upgrade completed locally.
- Agents Placeholder Reset completed locally.
- Phase 2C App Shell / Navigation Reset live-locked.
- Sidebar number-badge cleanup live-verified.
- Phase 2D Source Hub Intelligence Cockpit live-reviewed and live-locked.
- Older “Dashboard next” and “future Watchlists” notes are historical only and are no longer the active task.
