# Pickaxe Capital Next Steps

Live Alerts Desk verification is complete. The live GitHub Pages URL `https://burberrry.github.io/Pickaxe-Capital/?v=logo2#/alerts` renders the Citadel Intelligence Center correctly, and the app remains static-first, research-only, and localStorage-backed.

## Working Now

- `/`
- `#/alerts`
- `/agents`
- `/vision-map`
- `/archive`
- `/staging`
- `/founder`
- `/ceo-b-profile`
- `/bookmarks`
- `#/watchlists`
- `#/markets`
- `#/options`
- `#/catalysts`
- `#/research`
- `#/roadmap`

## Important Environment Note

- The project build validator works with Node: `/Applications/Codex.app/Contents/Resources/node scripts/build.mjs`.
- Do not treat terminal build script differences as an app bug unless it also fails in a normal terminal.

## Current State

- Phase 1.5 Design System + Living Agent Network pass is the current active checkpoint.
- The site now prioritizes calmer premium graphite surfaces, grouped command navigation, simplified Alerts Desk review flow, and a Living Agent Network on Vision Map.
- Phase 2A Dashboard prototype is implemented and should wait for CEO B visual approval before Options Hub or Watchlists work.
- Phase 1.6 Premium UI Polish Pass is now layered on top of Phase 1.5: typography, sidebar density, cards, buttons, chips, Alerts Desk polish, and Living Agent Network depth are improved.
- Phase 2A CEO B Dashboard Prototype is now added at `#/dashboard` as the first overview command screen.
- Live URL checked: `https://burberrry.github.io/Pickaxe-Capital/?v=logo2#/alerts`.
- Alerts Desk is live and now simplified into a CEO B review flow with three primary panels and four supporting panels.
- Logo and favicon are improved, cache-busted, and not cropped.
- No stale active wording was found, no code changes were needed in the final verification pass, and validation passed.
- `/` and `#/alerts` now open the cleaner Alerts Desk review queue.
- `/agents` now opens a grouped Agent Engine roster with role/input/output/manual-review summaries.
- `/vision-map` now carries the Living Agent Network with focusable agent nodes and source-to-CEO B flow.
- `/bookmarks` supports manual intake and Chrome/X bookmark batch analyzing and deduplication.
- `/archive` card buttons (Summarize, Checklist, Extract, Send to Agent) connect cleanly into the review and checklist mission system.
- Build Completion Tracker is updated to reflect this pipeline completion.
- Sidebar routes 15-20 are polished future concept pages, not live implementations.

## Completion Tracker System

- Full editable tracker: `/staging`.
- Compact tracker: `/`.
- Default data: `public/habitat-data.js` -> `buildCompletionTracker`.

- Auto-trading.
- Broker order placement.
- Large backend redesign.

## Known Risks

- The app is currently served by `server.mjs` as a static/Node site, even though some Astro source files exist under `src/`.
- Some data is still mock/demo data.
- AI model access should be rechecked after account credit changes; the app now avoids stale quota/billing warnings and falls back to rules-based review when model output is unavailable.
- This folder is an active git repository on `main`.
- Completion Tracker edits are browser-local until a backend/storage layer is added.
- Home alert examples are demo/local packets and not financial advice.
- Agent movement, missions, and CEO B Review Stack actions are local browser state, not real autonomous background jobs yet.

## Latest Finished Work

- Phase 1.5 Design System + Living Agent Network sprint.
- Simplified Alerts Desk from 20 equal-weight panels into a clear CEO B review flow.
- Added Living Agent Network to Vision Map.
- Cleaned route pages toward consistent research-only, manual-review, static-prototype language.
- Phase 1.6 Premium UI Polish Pass.
- Phase 2A CEO B Dashboard Prototype.
- Next task after visual approval: choose either Options Hub prototype or Watchlists prototype.

- Live Alerts Desk Verification Complete.
- Confirmed Citadel Intelligence Center is deployed and stable on GitHub Pages.
- Confirmed desktop/mobile layout has no horizontal overflow and fresh console check has no errors.
- Next task: Phase 2 Dashboard prototype when the user has more usage.

## Previous Finished Work

- Upgraded the first page / Alerts Desk into a premium command-center homepage.
- Added top safety chips, queue controls, safe action buttons, and 20 organized research-only panels.
- Added future concept routes for Watchlists, Markets Matrix, Options Hub, Catalysts Calendar, Research Desk, and Build / Roadmap.
- Cleaned active user-facing alert wording away from broker-execution phrasing.
- Preserved GitHub Pages root deployment workflow and updated safe action versions.

## Earlier Finished Work

- Upgraded `#/app/alerts` into a dedicated stateful **Alert Rules Center** supporting 7 default rule categories (Options Flow, Market Gates, Risk Warnings, etc.) and complete local actions (Enable/Disable, Duplicate, Delete, Reset).
- Implemented a custom cyberpunk toast notification helper (`showNotification`) and a fully customizable **Rule Configuration Editor** form.
- Added a local-only **Simulate Check** action that updates individual rule statuses.
- Wired rules pipeline integration with CEO B Review (`pickaxeReviewQueue`), Agent Missions (`pickaxeMissionQueue`/`pickaxeAgentOps`), and Archive Vault (`pickaxeArchiveVault`).
- Implemented local-first Data Portability / Backup JSON system inside the Staging Cockpit.
- Added Export System Backup action outputting timestamped JSON configurations (`pickaxe-capital-backup-YYYY-MM-DD-HHMM.json`) containing all 11 state keys.
- Added Import System Backup loader with visual pre-restore verification previews listing key item counts and warning disclaimers.
- Integrated Confirm Restore & Apply action that updates the registry and reloads the browser to apply updates.
- Added Backup Health stats panel rendering item counts for rules, review stacks, mission queues, bookmarks, and vault entries.
- Prepared real-world adapter UI status cards across focus routes (`/source-hub`, `/signals`, `/agents`, `/staging`).
- Integrated Readiness diagnostics stats and safety disclosures indicating zero broker or live API links.
- Upgraded the `#/staging` cockpit into a comprehensive QA and build-completion command center supporting habitat checklist categories, progress stats, verification matrices, and handoff alerts.
- All local check and build validation scripts pass.

## Jarvis / Life OS Next Steps

Latest safe checkpoint:
- `/archive` is now a retrieval-first Intelligence Vault with local search/filter/sort, Bookmark Import Lab, duplicate detector, Agent Source Map, and local actions.
- `/staging` now includes OpenClaw Integration Lab and Jarvis Research Stack checklist.
- `/jarvis-lab` exists as a typed command prototype with localStorage command history.
- `/life-os` exists as the Pickaxe Life OS overview and future device-role foundation.

Next focused improvements:
1. Open `/jarvis-lab` and polish the typed command console UX after browser review.
2. Connect Jarvis command classification to Archive/Agent local queues.
3. Add export/import JSON for Archive Vault local previews.
4. Add a dedicated `/device-hub` only after `/life-os` is stable.
5. Study OpenClaw and jarvis-mlx separately before any gateway or Mac-local assistant connection.

Do not start yet:
- Browser voice recognition.
- Camera preview.
- Public local gateway.
- Device control.
- Backend command execution.

## Recovery / Stabilization Notes

Current safe checkpoint:
- Build passes.
- Required routes return 200.
- `/jarvis-lab` and `/life-os` are optional prototypes, not live systems.
- Staging now includes a Recovery / Stabilization truth panel.

Next work should focus on Phase 2 (Lock the Command Workflow):
1. Confirm intake to review to mission to archive flow.
2. Confirm `/agents` task assignment saves locally.
3. Make CEO B Review Stack simple and useful.
4. Make `/staging` the clear source of build truth.

## Visual Cleanup Checkpoint

Done:
- Browser-wide Visual QA and layout cleanup pass across `/vision-map`, `/agents`, `/archive`, `/staging`, `/jarvis-lab`, and `/life-os` routes at normal zoom.
- Hidden duplicate legacy panels on `/agents`, `/vision-map`, and `/archive` underneath hidden wrapper blocks to maintain DOM integrity.
- Confirmed zero console errors, no layout breaks, and no horizontal overflow on standard viewport sizes.
- Kept node build and project checker scripts fully verified and passing.

## Final Pass Completion

All requirements for the final AI Habitat OS Command Center pass have been completed and verified:
- Default route deflected to Alerts Desk (`#/alerts`).
- Sidebar structured precisely with 14 paths in gold and cyan accents.
- Options alerts sanitized to avoid direct execution verbs and adhere to safety definitions.
- Three-column layout applied to Alerts Desk and three-zone layout applied to Vision Map.
- Learning Ledger, Trend Radar, and Money Lab views integrated statefully with localStorage.
- All updated assets synced to workspace root.

Next Best Tasks:
1. **GitHub Pages Deployment Fix**: Complete. Custom root deployment workflow is active and verified at commit `2dc65d3`.
2. **Phase 2 Planning**: Phase 2 research terminal roadmap and wireframe documents have been created under `docs/`.
3. **Review Wireframes**: CEO B reviews the Phase 2 roadmap and wireframes before initiating any frontend prototype implementation.
