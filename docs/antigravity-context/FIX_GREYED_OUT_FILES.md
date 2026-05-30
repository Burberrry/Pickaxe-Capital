# Fix: Files Are Greyed Out in Antigravity

Most likely reason: you are using a folder picker. In a folder picker, PDFs, DOCX, and HTML files are greyed out because Antigravity wants a folder, not a file.

## Correct method

1. Unzip this pack.
2. Create this folder inside your website repo:

   `docs/antigravity-context/`

3. Copy all files from this pack into that folder.
4. In Antigravity, open/add the **website repo folder**.
5. In chat, tell Antigravity:

   `Read docs/antigravity-context/ANTIGRAVITY_MASTER_CONTEXT.md and docs/antigravity-context/AGENT_TASK_PICKAXE_FINISH_WEBSITE.md first. Then inspect the repo and finish the website.`

## If Antigravity still cannot read it

- Make sure the folder is local, not only in iCloud/Google Drive cloud placeholder mode.
- Right-click the folder and make sure it is downloaded locally.
- On Mac, move it to `Documents/Codex/` or the actual website repo folder.
- Restart Antigravity after adding the workspace.
- Keep file access set to workspace only when possible.
- Only enable non-workspace file access if you know why you need it.

## Do not upload these

- `.env`
- API keys
- secrets
- `node_modules`
- build output folders
- private unrelated folders
- unrelated Docker/FastAPI projects
