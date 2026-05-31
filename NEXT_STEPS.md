# Pickaxe Capital Next Steps

Dynamic data pipeline and Vision Map action wiring successfully completed. Local Node build validation passes, checking projects passes, and all core routes return 200.

## Working Now

- `/`
- `/agents`
- `/vision-map`
- `/archive`
- `/staging`
- `/founder`
- `/ceo-b-profile`
- `/bookmarks`

## Important Environment Note

- The project build validator works with Node: `/Applications/Codex.app/Contents/Resources/node scripts/build.mjs`.
- Do not treat terminal build script differences as an app bug unless it also fails in a normal terminal.

## Current State

- `/agents` is fully integrated with the AI Habitat OS operating layer, review stacks, and active mission boards.
- `/vision-map` is wired dynamically into the Review and Mission pipelines. Node and agent drawers support stateful actions that push task and review items. Selected agent markers support highlights.
- `/bookmarks` supports manual intake and Chrome/X bookmark batch analyzing and deduplication.
- `/archive` card buttons (Summarize, Checklist, Extract, Send to Agent) connect cleanly into the review and checklist mission system.
- Build Completion Tracker is updated to reflect this pipeline completion.

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
- The app is not a git repository in this folder, so no commit was created.
- Completion Tracker edits are browser-local until a backend/storage layer is added.
- Home alert examples are demo/local packets and not financial advice.
- Agent movement, missions, and CEO B Review Stack actions are local browser state, not real autonomous background jobs yet.

## Latest Finished Work

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

Next Best Task:
- Signals / Archive / Bookmarks Deep Functionality Pass (implementing robust local parsing, data export previews, and rules correlation).
- Or Source Hub Adapter Readiness (validating environmental variable parameters stubs and secure connection flows).
- Note: Do not recommend or start Device Hub yet until core visual/product routes are fully verified and stable.
