# Pickaxe Capital / AI Habitat OS Rules

This project is Pickaxe Capital / AI Habitat OS.

## Core Concept

- The website is a premium dark cyberpunk AI civilization system.
- It has two separate habitats: Market Habitat and Life Habitat.
- CEO B connects both habitats as the founder decision layer.
- CEO B does not replace the founder. CEO B organizes, reviews, ranks, and prepares decisions.

## Page Priorities

- `/vision-map` is the main command center and homepage.
- `/signals` is the single market intelligence page. Legacy `/market-command` and `/signal-engine` bridge into it.
- `/source-hub` is the external intelligence source cockpit.
- `/archive` is the compounding intelligence vault.
- `/rk-tracker` is the Roaring Kitty / DFV-inspired watchlist tracker.
- `/berkshire-1965` is the historical case study page.
- `/bookmarks` includes Chrome bookmark and X Bookmark Intelligence workflows.
- `/agents` shows owners, tasks, progress, responsibilities, and activity.
- `/jarvis-lab` is the typed CEO B command prototype and Jarvis research stack.
- `/life-os` is the Pickaxe Life OS overview for Archive, Agents, Jarvis, OpenClaw research, and future device roles.
- `/app/alerts` is the planned trigger and alerts center.
- `/founder` combines founder identity and CEO B.
- `/staging` is A-Z build, QA, source-health checks, and status.
- `/ai-handoff` is the copy/paste context endpoint for ChatGPT/Codex. It is generated locally from `AGENTS.md`, `PROJECT_STATUS.md`, and `NEXT_STEPS.md`.

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
- Keep animations performant with CSS transforms and opacity.
- Keep pages readable and organized.
- No API keys in frontend code.
- No auto-trading or broker order placement.
- External Jarvis/OpenClaw/OpenJarvis/JARVIS research repos are inspiration only. Do not copy them into this site or turn this project into a fork.
- Voice, camera, device control, and local assistant gateway work must remain explicit-permission/future-adapter until implemented safely.

## Verification Rules

- After meaningful changes, run the build.
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

## Current Reality

- The active app is served by `server.mjs`.
- The `src/` Astro files exist as upgrade/source references, but the current running site is the static Node app in `public/`.
- Live data and AI agent telemetry are not fully connected yet.
