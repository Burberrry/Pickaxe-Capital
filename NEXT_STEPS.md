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
- Saved browser state: `localStorage.pickaxeCompletionTracker`.

## Next Session Priority

1. **Visual QA & Interaction Audit**: Open `/vision-map` and verify the click-and-route drawer events.
2. **Cheklist Trigger Testing**: Validate that approving a pending packet from the Review Stack correctly generates corresponding checklists on `/staging` and `/agents`.
3. **Alert Setup Rules**: Improve `/app/alerts` to define rules/conditions that CEO B can review.
4. **Data Portability**: Add an option to import/export all local storage states (bookmarks, archive vault, review stack, missions) as a backup JSON file so CEO B's command center data can be moved across devices.
5. **Real-world Adapters preparation**: Define clean interfaces for actual APIs (market data, option flows, geopolitics watchers) keeping mock data visible until keys are supplied.

## Do Not Start Yet

- Live trading execution.
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

- `/ai-handoff` endpoint added and server restarted.
- Staging now has a copyable handoff link and a Copy Handoff Text button.
- Home is now alerts-only with clickable alert packets and a detailed selected-alert panel.
- `/agents` now renders a hub-and-spoke AI Habitat World with animated bridges, habitat districts, moving agent units, mission packages, local details, and CEO B Review Stack.
- Build and project validation passed with the local Node command.

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

Next work should be visual cleanup only:
1. Inspect `/vision-map`, `/agents`, `/archive`, `/jarvis-lab`, and `/life-os` at normal browser zoom.
2. Reduce clutter and oversized sections.
3. Keep all advanced systems labeled prototype/research/future adapter.
4. Do not add new routes, repos, features, live APIs, voice, camera, or device control.

## Visual Cleanup Checkpoint

Done:
- Reduced oversized sections and crowded map scale.
- Hidden duplicate legacy Agent panels beneath the current AI Habitat World.
- Kept build and routes stable.

Next:
- Browser-only visual QA at normal zoom.
- No new features until visual foundation is approved.
