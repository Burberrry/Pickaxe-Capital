# AGENTS.md

## Project Truth

This is a static Node website with a modular ES6 architecture.

### Active Files

**Backend:**
- `server.mjs` - HTTP server with security headers, caching, and styled 404

**Frontend (Modular Architecture):**
- `public/index.html` - Entry point
- `public/app.js` - Main orchestrator
- `public/habitat-data.js` - Static data
- `public/styles.css` - Design system

**Frontend Modules** (in `public/modules/`):
- `state.js` - State management, localStorage persistence, recovery
- `router.js` - Route registration and navigation
- `actions.js` - Event handlers for user interactions
- `components.js` - All render functions for each page
- `utils.js` - Utilities: sanitization, escaping, helpers

## Architecture

```
┌─ public/app.js (orchestrator)
├─ modules/state.js (state + localStorage)
├─ modules/router.js (routing engine)
├─ modules/actions.js (event wiring)
├─ modules/components.js (page renderers)
└─ modules/utils.js (sanitization + helpers)
```

All state mutations are centralized in `state.js`.
All rendering is centralized in `components.js`.
All routing logic is in `router.js`.
All HTML sanitization happens in `utils.js`.

## Routes

- `/` → Home (command center overview)
- `/mission-control` → CEO B command core
- `/agent-engine` → Agent pipeline status
- `/signals` → Research workbench
- `/alerts` → Approved research memos
- `/risk-rules` → Risk gates documentation
- `/data-sources` → Data adapters
- `/compliance` → Compliance disclosures
- `/archive` → Rejected packets

## Safety Rules for Agents

- ✅ **Do not add API keys to frontend code.** All keys belong in backend proxies.
- ✅ **Do not add auto-trading.** CEO B approval means manual human review only.
- ✅ **Do not claim live integrations unless they exist.** Keep "Demo", "Future Adapter", or "Manual Review" labels honest.
- ✅ **Keep all option/market packets research-only.** Disclaimer language is enforced by Compliance Guard.
- ✅ **CEO B approval means internal manual review.** Not investment adviser approval.
- ✅ **Sanitize all user-facing values.** Use `sanitize()` from utils.js for any dynamic content.
- ✅ **Validate habitat data on startup.** The app halts if PICKAXE_DATA is corrupted.
- ✅ **Recover from localStorage corruption.** State recovery is automatic and safe.

## Data Validation

Before any render:
- All strings are passed through `sanitize()` to prevent injection
- All alerts are validated against schema on app start
- All localStorage reads are wrapped in try/catch
- All render functions have error boundaries via `safeRender()`

## LocalStorage

Keys:
- `pickaxe.alerts` - Array of alert packets
- `pickaxe.checklist` - Array of checklist items
- `pickaxe.version` - Version field for future migrations (currently 1)

Recovery:
- If localStorage is corrupted, the app auto-resets to defaults and logs a warning
- No user data is lost; defaults are restored

## No Breaking Changes

✅ All existing routes work
✅ All dashboard counts still work
✅ CEO B Review workflow unchanged
✅ Archive and Risk rejection unchanged
✅ LocalStorage behavior preserved
✅ GitHub Pages deployment compatible
✅ Localhost dev server compatible

## Deployment

**Local:**
```bash
npm install
npm start
```
Open `http://localhost:4328`

**GitHub Pages:**
Simply push to `main`. GitHub Actions will deploy the `public/` folder automatically (if configured).

Alternatively, manually build and push to `gh-pages` branch.

## Testing Checklist

Before merging any changes:
- [ ] All sidebar links load without errors
- [ ] Dashboard counts update correctly when approving/rejecting packets
- [ ] Mission Control checklist toggles and persists
- [ ] Signals page loads all packets
- [ ] Alert memo rendering is correct
- [ ] Risk Reject sends packet to Archive
- [ ] CEO B Approve moves packet to Alerts
- [ ] LocalStorage survives browser refresh
- [ ] No console errors on any route
- [ ] No API keys or secrets in frontend code
