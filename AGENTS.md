# Pickaxe Capital / AI Habitat OS Rules

This file contains permanent repository rules. For the complete mission, locked-phase map, route registry, module context, brand rules, and future queue, read `docs/00_MASTER/PICKAXE_PROJECT_CONTEXT_LOCK.md` before planning product, route, data, or architecture work.

## Identity And Authority

- Project: Pickaxe Capital / AI Habitat OS.
- Pickaxe Capital is the public brand layer. AI Habitat OS is the internal command center.
- CEO B is the final human review and decision layer.
- Codex is a scoped builder inside the repository, not the decision-maker.
- No output, route, rule, prompt, alert, publication, research state, or product workflow may bypass source checks, risk controls, and CEO B review.

## Product Truth

- The active app is a static-first vanilla HTML/CSS/JavaScript SPA served from `public/`.
- GitHub Pages deploys the static `public/` artifact. Root mirror files must remain synchronized with their required `public/` pairs.
- `src/` Astro files are inactive references unless CEO B explicitly authorizes an architecture migration.
- Canonical app navigation is hash-route based. Direct GitHub Pages paths require explicit directory-index bridge files.
- `/app/alerts` bridges to `#/alerts`.
- `/agents`, `/vision-map`, `/staging`, and `/ceo-b-profile` bridge to matching hash routes.
- `/jarvis-lab` bridges to `#/jarvisLab`; `/life-os` bridges to `#/lifeOS`.
- `/ai-handoff` and `/source-hub-staging` are local-server text endpoints. Never turn them into public static bridges.
- Browser state is LocalStorage/static only. `server.mjs` supplies local-development demo/static endpoints by default.
- No backend, live provider adapter, broker execution, live alerts, authentication, payments, subscriptions, private frontend keys, or autonomous publishing are connected.

## Financial And Data Safety

- Required language where relevant: `Research Only`, `Manual Review Required`, `Not Financial Advice`, `No Broker Execution`, and `Demo/Static Data`.
- Options-specific surfaces must state that options involve substantial risk.
- Confidence and conviction mean research quality or packet completeness, never expected return.
- Public research output remains blocked unless source, risk, and CEO B gates allow it.
- Never add buy/sell commands, personalized financial advice, trade execution, broker integration, copy-trading, guaranteed outcomes, fake live data, fake timestamps, fake provider connections, autonomous rule changes, autonomous publishing, or unverified performance/profit claims.
- No live market number may enter user-facing output unless the same workflow verifies and labels its source, quote type, timestamp, timezone, and verification status.
- If live verification is unavailable, omit the number or label it clearly as demo, static, manual, or source-required.
- Do not scrape or bypass protected sites. Walter Bloomberg / `@DeItaone` may be watch sources, not final verification.
- Raw Obsidian notes, bookmarks, strategies, and local memory remain local-only unless explicitly cleaned and approved.

## Locked Runtime Boundaries

Preserve unless CEO B authorizes a separate bounded implementation sprint:

- Phase 7 Pickaxe Starlight Field.
- Phase 8 Intelligence Orbit and Agent Visual System.
- V3.1 QQQ golden path, selected-candidate behavior, and detailed Signals card placement beneath the Alerts overlay.
- Phase 9A Alerts Product Shell, canonical Alerts renderer, and `/app/alerts` bridge.
- Phase 9B Archive Lesson handoff, one stable packet-linked lesson candidate, and unverified/non-adopted memory state.
- Direct-path bridges for `/agents`, `/vision-map`, `/staging`, `/ceo-b-profile`, `/jarvis-lab`, and `/life-os`.
- Root/public mirror contracts, current LocalStorage contracts, and `data/signal-alerts.json`.

Do not add routes, storage keys, renderers, packet models, review queues, or duplicate page concepts without explicit authorization. Inspect `docs/ACTIVE_RENDER_PATHS.md` before editing duplicated renderer names in `public/app.js`.

## Engineering Discipline

- Inspect before editing. Do not rebuild from scratch or delete working pages without permission.
- Reuse existing routes, components, shared models, and storage contracts.
- Keep mock/manual/static data labeled. Never imply active agents, telemetry, providers, or execution.
- Keep design Pickaxe-branded: premium dark surfaces, metallic gold structure, readable silver/white type, restrained motion, and `prefers-reduced-motion` support.
- Keep animations to performant transforms and opacity.
- No API keys in frontend code.
- External Jarvis/OpenClaw/OpenJarvis/JARVIS repositories are inspiration only; do not copy or fork them into this project.
- Voice, camera, device control, and local assistant gateways remain explicit-permission future adapters.

## Sprint Protocol

Every Codex sprint must:

1. Confirm a clean starting git state and compare with `origin/main`.
2. Read `AGENTS.md`, `PROJECT_STATUS.md`, and `NEXT_STEPS.md`; read the project context lock when the task touches product direction, modules, routes, data, or architecture.
3. Identify the active checkpoint and approved bounded scope.
4. Touch only required files; avoid feature expansion and duplicate concepts.
5. Preserve locked phases, route ownership, mirrors, LocalStorage contracts, and financial safety.
6. Run validation before commit.
7. Update `PROJECT_STATUS.md`, `NEXT_STEPS.md`, and Build Completion Tracker metadata when appropriate.
8. Commit with a clear message.
9. Push only when explicitly authorized or included in the approved task.
10. Stop after reporting results and the next bounded recommendation.

## Validation Pattern

Use the actual `package.json` commands:

```text
node --run build
node --run check:project
node --run check:phase15
node --run check:agents
node --run check:mirrors
node --run smoke:routes
```

Also run JavaScript syntax checks when runtime JavaScript changes, `git diff --check`, and `git status --short --branch`.

If `npm` or the historical `/Applications/Codex.app/Contents/Resources/node` path is unavailable, use the Node runtime supplied by the current Codex workspace.

Browser QA is required for route, layout, interaction, or runtime changes. Check affected routes at desktop and `390x844`, including console errors and horizontal overflow. Docs-only work does not require browser QA.

## Session Records

- `PROJECT_STATUS.md` records completed work and validation.
- `NEXT_STEPS.md` records the active checkpoint and next bounded recommendation.
- The Build Completion Tracker appears in full on `#/staging` and compactly on `/`; default metadata is `public/habitat-data.js` → `buildCompletionTracker`, mirrored in `habitat-data.js`.
- Never expose private local paths or raw vault contents in public frontend files.
