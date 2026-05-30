# README FIRST — How to Load This Into Google Antigravity

This is the clean drop-in context pack for the Pickaxe Capital / AI Habitat OS website.

## Why files were greyed out

If you were in Antigravity's **Add Folder to Workspace** picker, individual PDFs, DOCX, and HTML files being greyed out is normal. That picker wants you to select a **folder**, not a single file.

Do this instead:

1. Unzip this pack.
2. Put the whole folder inside your website repo, for example:
   `pickaxe-capital-command-center/docs/antigravity-context/`
3. Open Antigravity.
4. Add/open the **website repo folder**, not the individual PDFs.
5. Start a new Antigravity conversation in that workspace.
6. Tell it to read:
   `docs/antigravity-context/ANTIGRAVITY_MASTER_CONTEXT.md`
   and then follow:
   `docs/antigravity-context/AGENT_TASK_PICKAXE_FINISH_WEBSITE.md`

## Best Antigravity settings for this project

Use review-driven mode while fixing the website. Do not let the agent run destructive commands without review.

Recommended permission posture:

- Terminal execution: request review at first.
- File access: workspace only.
- Non-workspace file access: off unless you absolutely need it.
- Browser/web: only allow documentation and project-preview URLs you approve.
- Never give it API keys or secrets.

## What Antigravity should build

It should not start over. It should continue the current Pickaxe Capital website, stabilize it, preserve the premium visual direction, and finish the command-center features.

Core project truth:

- Pickaxe Capital = company/public brand.
- AI Habitat OS = internal operating system.
- CEO B = command layer/decision brain.
- Expected architecture = static Node app where `server.mjs` serves `public/`.
- Expected active files = `server.mjs`, `public/index.html`, `public/app.js`, `public/styles.css`, `public/habitat-data.js`, `AGENTS.md`, `PROJECT_STATUS.md`, and `NEXT_STEPS.md` if present.

## What to paste into Antigravity

Paste the full contents of `AGENT_TASK_PICKAXE_FINISH_WEBSITE.md` into Antigravity after the folder is in the workspace.
