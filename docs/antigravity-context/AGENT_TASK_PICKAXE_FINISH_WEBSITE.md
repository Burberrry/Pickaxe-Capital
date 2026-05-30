# AGENT TASK — Finish Pickaxe Capital Website in Antigravity

You are working inside my existing Pickaxe Capital / AI Habitat OS website repository.

Read these first:

1. `docs/antigravity-context/ANTIGRAVITY_MASTER_CONTEXT.md`
2. `docs/antigravity-context/PROJECT_RULES_FOR_ANTIGRAVITY.md`
3. `docs/antigravity-context/SOURCE_MANIFEST.md`
4. Current repo `AGENTS.md`, `PROJECT_STATUS.md`, and `NEXT_STEPS.md` if they exist.

## Mission

Stabilize, simplify, and finish the current Pickaxe Capital website as a premium command-center company site.

Do not start over. Do not migrate frameworks. Do not invent fake live capabilities.

## First phase: audit and stabilize

1. Inspect the repo tree.
2. Identify the real active app, source root, router, server, styles, data files, and scripts.
3. Confirm whether this is the expected static Node app where `server.mjs` serves `public/`.
4. Read active files:
   - `server.mjs`
   - `public/index.html`
   - `public/app.js`
   - `public/styles.css`
   - `public/habitat-data.js`
   - `package.json` if present
   - validation scripts if present
5. Search for unrelated/broken architecture files:
   - `adcheck`
   - `graduation-project`
   - `docker-compose.yml`
   - `Dockerfile`
   - FastAPI / uvicorn / MySQL / nginx / Java backend
   - `analysis/models/schemas`
   - backend/frontend folders not used by Pickaxe Capital
6. Report what is real and what is unrelated.
7. Run current build/check command.
8. Fix build/import/runtime errors first.

## Second phase: route recovery

Make the following core routes render cleanly:

- `/`
- `/vision-map`
- `/agents`
- `/archive`
- `/staging`
- `/founder`
- `/ceo-b-profile`

Keep optional routes only if already present or easy/safe:

- `/jarvis-lab`
- `/life-os`
- `/device-hub`
- `/vision-lab`
- `/bookmarks`
- `/source-hub`
- `/signals`
- `/ai-handoff`
- `/project-update`

If a route is broken, simplify it into a stable page with an honest status label.

## Third phase: centralize data and layout

Create or preserve one canonical source for:

- navigation
- route metadata
- status labels
- agent cards
- archive items
- staging/QA items
- integration cards
- bookmark taxonomy

For the expected static Node app, prefer `public/habitat-data.js` unless the repo already has a better central data file.

## Fourth phase: premium UI polish

Make the website feel:

- premium
- precise
- dark
- Bloomberg-terminal disciplined
- high-trust
- founder-command-center style

Use:

- graphite / obsidian
- bone-white text
- steel panels
- restrained electric-blue accent
- small gold highlights only when useful
- sharp cards
- clean tables
- generous spacing
- honest status badges

Do not use:

- fake holograms
- comic HUDs
- excessive neon
- fake terminal spam
- fake telemetry
- cluttered game UI

## Fifth phase: bookmark intelligence MVP

Only after the core app is stable, build or improve `/bookmarks`.

Use the local Chrome bookmarks HTML export from:

`docs/antigravity-context/source_docs/All_my_bookmarks.html`

Build a manual browser-only importer:

- Use FileReader only.
- No scraping.
- No cloud sync.
- No backend database.
- No API keys.
- No broker/trading execution.

Implement:

- import button
- parse bookmarks/folders
- preserve folder path provenance
- total bookmarks/folders
- top domains
- page type detection
- exact/canonical duplicate detection
- taxonomy categories
- trust labels
- route to Source Hub / Archive / Signals / CEO B Review / Mission Queue / Ignore
- JSON export

## Sixth phase: handoff pages

If safe, add/update:

- `/ai-handoff` — plain text/markdown AI-readable current project context.
- `/project-update` — polished human-readable project status page.

These should help ChatGPT/Claude/Gemini/Antigravity understand the project after deployment.

## Final verification

Run available commands from `package.json` or project docs.

If this is the Codex Mac static Node environment and scripts exist, prefer:

- `/Applications/Codex.app/Contents/Resources/node --run build`
- `/Applications/Codex.app/Contents/Resources/node --run check:project`

If those do not exist, inspect `package.json` and use the correct project commands.

## Final report required

End with:

1. Stack detected.
2. Active app tree.
3. Files changed.
4. Files removed or quarantined.
5. Commands run.
6. Build/check/test results.
7. Route status table.
8. Bookmark intelligence status.
9. Known remaining blockers.
10. Next recommended task.
