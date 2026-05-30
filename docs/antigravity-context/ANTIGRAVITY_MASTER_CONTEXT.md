# ANTIGRAVITY MASTER CONTEXT — Pickaxe Capital / AI Habitat OS

You are working inside the existing Pickaxe Capital / AI Habitat OS website repository.

This is not a new app. This is a recovery-first, premium-finish continuation of the existing website.

## Source of truth order

1. The current repository files are the highest truth for what actually runs.
2. `AGENTS.md` in the repo must be read first if present.
3. `PROJECT_STATUS.md` must be read second if present.
4. `NEXT_STEPS.md` must be read third if present.
5. This `ANTIGRAVITY_MASTER_CONTEXT.md` explains the desired product direction and task contract.
6. The PDFs and DOCX in `source_docs/` are supporting context, not permission to start over or migrate frameworks.

## Identity hierarchy

- Pickaxe Capital = company / public brand.
- AI Habitat OS = internal operating system.
- CEO B = command layer / decision brain.

Use this naming consistently everywhere.

## Non-negotiable rules

- Continue from the current website state. Do not start over.
- Inspect the repo before editing.
- Detect the real active stack from local files.
- If the repo is the expected static Node app, keep it static Node.
- Do not migrate to React, Next, Vite, Astro runtime, FastAPI, Docker, MySQL, nginx, Java, or another architecture unless the repo already proves that is the actual active app.
- Do not install heavy dependencies.
- Do not add WebSockets.
- Do not add backend APIs unless already present and necessary.
- Do not add fake live data, fake telemetry, fake autonomous agents, fake voice/camera/device control, scraping, broker connections, or auto-trading.
- Do not put API keys, secrets, or `.env` data in frontend code.
- Use honest status labels: Live, Static, Prototype, Research, Future Adapter, Needs Review, Not Implemented.
- Every important action, signal, source promotion, and mission route must pass through CEO B Review.
- Run validation before reporting done.

## Expected architecture truth

Expected runtime:

- `server.mjs` serves `public/`.

Expected active files:

- `server.mjs`
- `public/index.html`
- `public/app.js`
- `public/styles.css`
- `public/habitat-data.js`
- `AGENTS.md`
- `PROJECT_STATUS.md`
- `NEXT_STEPS.md` if present
- `package.json` if present

If `src/` or old Astro files exist, treat them as reference only unless the current verified runtime proves otherwise.

## First audit checklist

Before editing, identify:

- Active runtime and framework.
- Build/check scripts.
- Current route list.
- Broken routes.
- Mid-edit or inconsistent files.
- Existing localStorage keys and data structures.
- Duplicate routes/components/data sources.
- Unrelated project folders or files, especially `adcheck`, `graduation-project`, `docker-compose.yml`, `Dockerfile`, `FastAPI`, `uvicorn`, `mysql`, `nginx`, Java backend, `analysis/models/schemas`, or backend/frontend folders not used by Pickaxe Capital.

If unrelated files exist, quarantine/report them instead of integrating them.

## Core product direction

The site should feel like the digital front door of a serious private technology company: calm, expensive, precise, strategic, and believable.

Visual direction:

- Dark graphite / obsidian background.
- Bone-white typography.
- Steel panels.
- One restrained electric-blue accent.
- Small gold highlights only where useful.
- Bloomberg-terminal discipline, not sci-fi cosplay.
- No fake holograms, no terminal spam, no game HUD clutter.
- Strong hierarchy, spacing, route cards, tables, and status panels.

## Required core routes

These must exist cleanly:

- `/` — public command-center home.
- `/vision-map` — static system architecture map.
- `/agents` — AI worker/agent habitat roster.
- `/archive` — intelligence vault.
- `/staging` — truth page for route/build/QA status.
- `/founder` — founder thesis and principles.
- `/ceo-b-profile` — command layer profile.

Optional routes only if already present and safe:

- `/jarvis-lab`
- `/life-os`
- `/device-hub`
- `/vision-lab`
- `/bookmarks`
- `/source-hub`
- `/signals`
- `/ai-handoff`
- `/project-update`

If optional routes exist but are unstable, reduce them to stable honest pages instead of deleting them.

## Bookmark intelligence system

Build local-first bookmark intelligence using the uploaded Chrome HTML export. This is decision support and knowledge organization, not guaranteed money.

Bookmark export currently contains approximately:

- 31,533 bookmarks.
- 914 folders.
- Top domains include twitter.com, instagram.com, google.com, youtube.com, x.com, investopedia.com, tradingview.com, barchart.com, unusualwhales.com, zerohedge.com, investing.com, and finance/research sites.

The system should treat most social bookmarks as leads, not facts.

### `/bookmarks` MVP

Build this only after the current app is stable.

Must have:

1. Manual Chrome bookmarks HTML import using browser `FileReader` only.
2. Folder tree preservation as provenance metadata.
3. Total bookmark count.
4. Total folder count.
5. Top domain counts.
6. Page-type detection: social post, profile, search result, local file, doc, video, general page.
7. Exact and canonical duplicate detection.
8. Category taxonomy.
9. Trust labels.
10. Route actions to Source Hub, Archive Vault, Signals, CEO B Review, Mission Queue, or Ignore.
11. JSON export/backup.
12. Local state only; IndexedDB only if needed for large structured persistence.

### Bookmark taxonomy

Use categories:

- Market Intelligence
- Company / Stock Research
- Macro / Policy
- Social Sentiment Leads
- Trading Education
- AI / Coding
- Website / Product Lab
- Founder / Business
- Archive / Long-Term Knowledge
- Personal / Life
- System / Retrieval Junk
- Low Trust / Noise

Trust labels:

- Primary
- Analytical
- Secondary
- UGC / Social
- Retrieval Artifact
- Low Trust / Noise

## Data model direction

Keep one canonical source for navigation, route metadata, status labels, agents, archive items, staging items, and device/integration cards.

For the current expected static app, likely use `public/habitat-data.js` as the source of truth unless the repo has a better existing equivalent.

Do not hard-code route labels and statuses separately in every page.

## Required handoff pages

If safe in the current app, add:

### `/ai-handoff`

Plain text or Markdown route that gives AI tools the current website state. It should be copyable and generated from project docs when possible.

### `/project-update`

Polished human-readable route for ChatGPT, Gemini, Claude, Grok, Perplexity, Codex, or Antigravity to understand the project after deployment.

It should include project overview, architecture truth, local URLs, active routes, route status, build status, known issues, and next tasks.

## Done standard

Do not stop after planning.

Finish with an exact report:

- Stack detected.
- Active app tree.
- Files changed.
- Files removed/quarantined.
- Commands run.
- Build/check/test results.
- Route status table.
- Remaining blockers.
- Next recommended task.
