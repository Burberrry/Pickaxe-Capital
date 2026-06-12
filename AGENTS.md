# Pickaxe Capital / AI Habitat OS Rules

This project is Pickaxe Capital / AI Habitat OS.

## Core Concept

- The website is a premium dark cyberpunk AI civilization system.
- It has two separate habitats: Market Habitat and Life Habitat.
- CEO B connects both habitats as the founder decision layer.
- CEO B does not replace the founder. CEO B organizes, reviews, ranks, and prepares decisions.

## Current Project Truth

- Static-first GitHub Pages app.
- Vanilla JS / HTML / CSS.
- Public deployment state is LocalStorage/static only.
- `server.mjs` is a local-development server with demo/static endpoints by default.
- Alerts Desk is the homepage.
- Dashboard exists at `#/dashboard`.
- Watchlists exists at `#/watchlists`.
- Phase 2B Watchlists is built, committed, pushed to origin/main, and live-checked by CEO B.
- Phase 2 Hero + Alerts Desk is implemented and locally validated as of 2026-06-11.
- `#/agents` is the Phase 3 browser-local Agent Habitat command center for nine explicit research departments.
- `#/ai-habitat-os` is the Phase 3 browser-local nine-zone strategic system map.
- Both Phase 3 routes are static/browser-local and research-only. They do not represent live autonomous background agents, real telemetry, live provider connections, or broker execution.
- No live APIs, broker execution, betting execution, copy-trading, fake live data, or private frontend keys.
- Keep root/public mirrors synced.
- Treat `public/` as the deployed runtime and root mirror files as synchronized editing copies.
- Treat `src/` Astro files as inactive references unless the architecture is explicitly migrated.

## Page Priorities

- `#/alerts` is the homepage and research review queue.
- `#/dashboard` is the pinned CEO B operating overview.
- `#/watchlists` is the Phase 2B research universe foundation.
- `/vision-map` is the living visual command center.
- `/signals` is the single market intelligence page. Legacy `/market-command` and `/signal-engine` bridge into it.
- `/source-hub` is the external intelligence source cockpit.
- `/archive` is the compounding intelligence vault.
- `/rk-tracker` is the Roaring Kitty / DFV-inspired watchlist tracker.
- `/berkshire-1965` is the historical case study page.
- `/bookmarks` includes Chrome bookmark and X Bookmark Intelligence workflows.
- `/agents` and `#/agents` open the browser-local Agent Habitat workflow; all outputs require source verification and CEO B review.
- `#/ai-habitat-os` maps founder input, agent routing, verification, challenge checks, CEO B review, final research output, and the Archive learning loop.
- `/jarvis-lab` is the typed CEO B command prototype and Jarvis research stack.
- `/life-os` is the Pickaxe Life OS overview for Archive, Agents, Jarvis, OpenClaw research, and future device roles.
- `/app/alerts` is a compatibility path for the current Alerts Desk.
- `/founder` combines founder identity and CEO B.
- `/staging` is A-Z build, QA, source-health checks, and status.
- `/ai-handoff` is the copy/paste context endpoint for ChatGPT/Codex. It is generated locally from `AGENTS.md`, `PROJECT_STATUS.md`, and `NEXT_STEPS.md`.
- `docs/ROUTE_MAP.md` is the comprehensive route and alias inventory.
- `docs/ACTIVE_RENDER_PATHS.md` identifies effective renderers where duplicate function names exist.

## Financial Safety Rules

- Frame alerts, signals, options, scores, and projections as research or demo context.
- Require manual CEO B review before any research state can advance.
- Use `Research Only`, `Manual Review Required`, `Not Financial Advice`, `No Broker Execution`, and `Demo/Static Data` where relevant.
- Never claim guaranteed profits, automatic trading, broker execution, registered-adviser status, verified performance, or live data without a real approved backend.
- Confidence and conviction scores measure packet completeness or research quality, not expected return.
- Keep options risk language visible on option-specific research surfaces.

## Engineering Rules

- Never delete working pages without asking.
- Do not rebuild from scratch unless explicitly asked.
- Do not duplicate pages; merge duplicate ideas into the stronger page.
- Reuse components before creating new ones.
- No duplicate data/component/page concepts.
- Mock data must be labeled.
- No fake live integrations.
- No scraping or bypassing protected sites.
- Use safe external-source fallbacks.
- Keep design dark, premium, cyberpunk, readable, and Pickaxe Capital branded.
- Prefer reusable components and shared data files.
- Do not hardcode repeated agent data inside pages when it can live in a shared data layer.
- Inspect the final effective renderer before editing a duplicated function name in `public/app.js`.
- Keep animations performant with CSS transforms and opacity.
- Respect `prefers-reduced-motion`.
- Keep pages readable and organized.
- No API keys in frontend code.
- No auto-trading or broker order placement.
- External Jarvis/OpenClaw/OpenJarvis/JARVIS research repos are inspiration only. Do not copy them into this site or turn this project into a fork.
- Voice, camera, device control, and local assistant gateway work must remain explicit-permission/future-adapter until implemented safely.

## Verification Rules

- After meaningful changes, run the build.
- Available validation commands are:
  - `/Applications/Codex.app/Contents/Resources/node --run build`
  - `/Applications/Codex.app/Contents/Resources/node --run check:project`
  - `/Applications/Codex.app/Contents/Resources/node --run check:phase15`
  - `/Applications/Codex.app/Contents/Resources/node --run check:agents`
  - `/Applications/Codex.app/Contents/Resources/node --run smoke:routes`
- No lint, typecheck, unit-test, format, preview, or full automated browser script currently exists in `package.json`.
- Update `PROJECT_STATUS.md` after each session.
- Update the Build Completion Tracker before finishing every Codex session.
- The tracker lives on `/staging` as the full editable version and on `/` as a compact command-center panel.
- Tracker edits save in localStorage under `pickaxeCompletionTracker`; default data lives in `public/habitat-data.js` as `buildCompletionTracker`.
- Every future Codex session must record changed files, features added, bugs fixed, validation command used, validation result, remaining problems, and next recommended task.
- Every future Codex session should make sure `/ai-handoff` still works after server changes, because the user uses it to hand current website context to other AI tools.
- In this environment, `npm` may be unavailable. If so, run:
  `/Applications/Codex.app/Contents/Resources/node --run build`
- Verify these routes before handoff:
  `/`, `/agents`, `/vision-map`, `/archive`, `/staging`, `/founder`, `/ceo-b-profile`, `/jarvis-lab`, `/life-os`.
- For route or layout changes, also verify the affected hash route at desktop and 390px mobile width with no console errors or horizontal overflow.

## Current Reality

- The active app is served by `server.mjs`.
- The `src/` Astro files exist as upgrade/source references, but the current running site is the static Node app in `public/`.
- Live data, autonomous background agents, and real agent telemetry are not connected.
- Tailwind Play CDN has been removed. Legacy utility classes are served from the generated local `utility-compat.css`; regenerate or explicitly extend that compatibility file when adding utility-style classes.
- `smoke:routes` provides dependency-free route, static asset, SPA fallback, and deployment-boundary validation. It does not replace full browser automation.
- The active JS and CSS contain documented duplicate/overridden render and style layers. Consolidate only in a separately scoped stabilization sprint.
