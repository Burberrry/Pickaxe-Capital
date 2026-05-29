# Pickaxe Capital UI Upgrade

Drop these files into the root of `Burberrry/Pickaxe-Capital`:

- `index.html`
- `.nojekyll`
- `public/app.js`
- `public/styles.css`

This keeps the current static GitHub Pages structure:
- `index.html` loads `public/habitat-data.js`
- `index.html` loads `public/app.js`
- routing stays hash-based, e.g. `#/mission-control`
- no backend, no API keys, no auto-trading
- alerts remain research-only and manual-review only

Suggested commit message:
`Upgrade command center UI and research workbench`

After publishing, hard refresh:
- Mac: Cmd + Shift + R
- Windows: Ctrl + Shift + R
