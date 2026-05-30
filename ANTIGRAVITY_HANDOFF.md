# Antigravity Handoff - Pickaxe Capital / AI Habitat OS

Paste this into Antigravity after opening this folder:

`/Users/b/Documents/April 18 2028`

## Mission

Finish and stabilize the Pickaxe Capital / AI Habitat OS website without rebuilding from scratch.

The user is low on Codex credits, so work autonomously, inspect before editing, and preserve the existing working site.

## Current Truth

- Active app: static Node app served by `server.mjs`.
- Main website files: `public/index.html`, `public/app.js`, `public/styles.css`, `public/habitat-data.js`.
- `src/` Astro files exist as reference/upgrade material only.
- Local URL: `http://localhost:4328/agents`
- Launcher: `/Users/b/Desktop/Start Pickaxe Website.app`
- Obsidian vault: `/Users/b/Documents/Obsidian Vault`
- Obsidian welcome note: `obsidian://open?vault=Obsidian%20Vault&file=Welcome`

## Absolute Rules

- Do not create a duplicate website or app.
- Do not rebuild from scratch.
- Do not delete working pages without asking.
- Keep `public/` as the active runtime.
- Reuse shared data and components before adding new concepts.
- Mock/demo data must be clearly labeled.
- No fake live integrations.
- No scraping or bypassing protected sites.
- No API keys in frontend code.
- No auto-trading or broker order placement.
- Keep the design dark, premium, cyberpunk, readable, and Pickaxe Capital branded.
- Keep Jarvis/OpenClaw/OpenJarvis research as inspiration only; do not copy repos into this project.
- Voice, camera, device control, and local gateway work must remain future-adapter/explicit-permission only.

## Product Concept

Pickaxe Capital / AI Habitat OS is a premium dark cyberpunk AI civilization system.

It has two habitats:

- Market Habitat
- Life Habitat

CEO B connects both habitats as the founder decision layer. CEO B does not replace the founder. CEO B organizes, reviews, ranks, summarizes, and prepares decisions.

The website is the cockpit. Obsidian is the memory.

## Page Priorities

- `/vision-map` is the main command center and homepage.
- `/agents` is the AI Habitat OS operating layer.
- `/archive` is the compounding intelligence vault.
- `/bookmarks` handles Chrome bookmarks and X Bookmark Intelligence.
- `/source-hub` is the external intelligence source cockpit.
- `/signals` is the single market intelligence page.
- `/jarvis-lab` is the typed CEO B command prototype.
- `/life-os` is the Pickaxe Life OS overview.
- `/staging` is build, QA, source health, and tracker status.
- `/ai-handoff` must keep working.

## First Tasks

1. Inspect `AGENTS.md`, `PROJECT_STATUS.md`, `NEXT_STEPS.md`, and `/ai-handoff`.
2. Verify `server.mjs` serves `public/` on port `4328`.
3. Verify the Desktop launcher still starts the site.
4. Do a browser pass on `/agents`, `/vision-map`, `/archive`, `/bookmarks`, `/source-hub`, `/signals`, and `/staging`.
5. Fix the highest-impact visible issues without changing architecture.

## Best Next Build Work

Prioritize these:

- Connect `/vision-map` and `/archive` actions more deeply into the local mission/review system used by `/agents`.
- Strengthen `/bookmarks` so bookmark/link intake can flow into Obsidian-style categories: Inbox, Source Hub, Archive, CEO B Decisions, Agent Tasks.
- Add clear source/status labels everywhere: Static, Prototype, Research, Future Adapter, Manual Review, Not Implemented.
- Make `/staging` a trustworthy status center.
- Keep `/ai-handoff` current and readable for future AI handoffs.

## Obsidian Bridge

The vault already exists:

`/Users/b/Documents/Obsidian Vault`

Important notes:

- `Welcome.md`
- `Start Here.md`
- `Pickaxe Capital Vault Operating Prompt.md`
- `00 Inbox/Inbox.md`
- `07 Bookmarks/Bookmarks Inbox.md`
- `06 Archive/Archive.md`
- `09 Agents/Agent Tasks.md`
- `10 Decisions/CEO B Decisions.md`

Future website work should respect this split:

- Website = command center / cockpit
- Obsidian = private knowledge vault / memory

## Validation

After meaningful changes, run:

```bash
/Applications/Codex.app/Contents/Resources/node --run build
```

Then verify these routes return 200:

```text
/
/agents
/vision-map
/archive
/staging
/founder
/ceo-b-profile
/jarvis-lab
/life-os
/ai-handoff
```

## Required Session Record

Before finishing, update:

- `PROJECT_STATUS.md`
- `public/habitat-data.js` -> `buildCompletionTracker.latestSession`

Record:

- changed files
- features added
- bugs fixed
- validation command
- validation result
- remaining problems
- next recommended task

## Final Reminder

Do not make the system look more live than it is. Make it more organized, usable, beautiful, and honest.
