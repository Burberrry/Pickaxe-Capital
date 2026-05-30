# Codex Transfer To Antigravity

Open this project folder in Antigravity:

`/Users/b/Documents/April 18 2028`

Then read this file first.

## Mission

Finish and stabilize the Pickaxe Capital / AI Habitat OS website without rebuilding from scratch.

The user is low on Codex credits, so work autonomously, inspect before editing, and preserve the existing working site.

## Current Setup

- Active website folder: `/Users/b/Documents/April 18 2028`
- Active app: static Node app served by `server.mjs`
- Main runtime files: `public/index.html`, `public/app.js`, `public/styles.css`, `public/habitat-data.js`
- Reference-only source folder: `src/`
- Local website: `http://localhost:4328/agents`
- Local handoff endpoint: `http://localhost:4328/ai-handoff`
- Desktop launcher: `/Users/b/Desktop/Start Pickaxe Website.app`
- Obsidian vault: `/Users/b/Documents/Obsidian Vault`
- Obsidian welcome note: `obsidian://open?vault=Obsidian%20Vault&file=Welcome`

## Product Concept

Pickaxe Capital / AI Habitat OS is a premium dark cyberpunk AI civilization system.

It has two habitats:

- Market Habitat
- Life Habitat

CEO B connects both habitats as the founder decision layer. CEO B does not replace the founder. CEO B organizes, reviews, ranks, summarizes, and prepares decisions.

The website is the cockpit. Obsidian is the memory.

## Important Pages

- `/vision-map` is the main command center and homepage.
- `/agents` is the AI Habitat OS operating layer.
- `/archive` is the compounding intelligence vault.
- `/bookmarks` handles Chrome bookmarks and X Bookmark Intelligence.
- `/source-hub` is the external intelligence source cockpit.
- `/signals` is the single market intelligence page.
- `/rk-tracker` is the Roaring Kitty / DFV-inspired watchlist tracker.
- `/berkshire-1965` is the historical case study page.
- `/jarvis-lab` is the typed CEO B command prototype.
- `/life-os` is the Pickaxe Life OS overview.
- `/founder` combines founder identity and CEO B.
- `/staging` is build, QA, source health, and tracker status.
- `/ai-handoff` must keep working.

## Absolute Rules

- Do not create a duplicate website or app.
- Do not rebuild from scratch.
- Do not delete working pages without asking.
- Keep `public/` as the active runtime.
- Reuse shared data and components before adding new concepts.
- Do not hardcode repeated agent data inside pages when it can live in `public/habitat-data.js`.
- Mock/demo data must be clearly labeled.
- No fake live integrations.
- No scraping or bypassing protected sites.
- No API keys in frontend code.
- No auto-trading or broker order placement.
- Keep the design dark, premium, cyberpunk, readable, and Pickaxe Capital branded.
- Keep animations performant with CSS transforms and opacity.
- Keep Jarvis/OpenClaw/OpenJarvis research as inspiration only; do not copy repos into this project.
- Voice, camera, device control, and local gateway work must remain future-adapter/explicit-permission only.

## Obsidian Setup

The Obsidian vault already exists:

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
- `11 Projects/Antigravity Finish Pickaxe.md`

Respect this split:

- Website = command center / cockpit
- Obsidian = private knowledge vault / memory

Future website work should connect bookmarks, source intelligence, archive items, CEO B decisions, and agent tasks to this Obsidian-style structure.

## First Antigravity Tasks

1. Inspect `AGENTS.md`, `PROJECT_STATUS.md`, `NEXT_STEPS.md`, this file, and `http://localhost:4328/ai-handoff`.
2. Verify `server.mjs` serves `public/` on port `4328`.
3. Verify the Desktop launcher still starts the site.
4. Do a browser pass on `/agents`, `/vision-map`, `/archive`, `/bookmarks`, `/source-hub`, `/signals`, and `/staging`.
5. Fix the highest-impact visible issues without changing architecture.

## Best Next Build Work

Prioritize:

- Connect `/vision-map` and `/archive` actions more deeply into the local mission/review system used by `/agents`.
- Strengthen `/bookmarks` so bookmark/link intake can flow into Obsidian-style categories: Inbox, Source Hub, Archive, CEO B Decisions, Agent Tasks.
- Add clear source/status labels everywhere: Static, Prototype, Research, Future Adapter, Manual Review, Not Implemented.
- Make `/staging` a trustworthy status center.
- Keep `/ai-handoff` current and readable for future AI handoffs.

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
