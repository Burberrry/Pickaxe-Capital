# Pickaxe Capital Market Habitat

Premium static website prototype for CEO B, research agents, risk gates, and manual-review market alert packets.

**No live trading. No API keys in frontend. Research only. GitHub Pages compatible.**

## Quick Start

### Local Development

```bash
npm install
npm start
```

Open `http://localhost:4328` in your browser.

**Note:** Node.js 16+ required for ES6 modules.

### Deployment to GitHub Pages

The `public/` folder is your static site. Two options:

**Option 1: GitHub Actions (Recommended)**
```bash
git push origin main
# GitHub Actions automatically deploys public/ to gh-pages
```

**Option 2: Manual Deploy**
```bash
# Build and push to gh-pages branch
git subtree push --prefix public origin gh-pages
```

Then enable GitHub Pages in repo Settings → Pages → Source: `gh-pages`.

## Architecture

```
public/
├── index.html                  # Entry point
├── app.js                       # Main orchestrator (ES6 modules)
├── styles.css                   # Design system (dark theme)
├── habitat-data.js              # Static demo data
└── modules/
    ├── state.js                 # State management + localStorage
    ├── router.js                # Route registration + navigation
    ├── actions.js               # Event handlers
    ├── components.js            # All render functions
    └── utils.js                 # Sanitization + helpers
```

## Features

✅ **Research Pipeline**
- Source Intake → Market Scout → Research → Risk Gate → CEO B Review → Alerts

✅ **Safety & Compliance**
- HTML sanitization on all dynamic content
- localStorage validation with auto-recovery
- Data corruption detection at startup
- Error boundaries on all routes
- Security headers (SAMEORIGIN, nosniff, etc.)

✅ **Static & Fast**
- No backend required for demo
- Works offline after first load
- GitHub Pages compatible
- Caching headers for assets

✅ **Honest Labeling**
- "Demo" / "Future Adapter" / "Manual Review" labels prevent false claims
- No fake market data
- No auto-trading
- Compliance disclosures enforced

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Command center home |
| `/mission-control` | CEO B core dashboard + checklist |
| `/agent-engine` | Agent pipeline status |
| `/signals` | Research workbench (packet queue) |
| `/alerts` | Approved research memos |
| `/risk-rules` | Risk gate documentation |
| `/data-sources` | Data adapter placeholders |
| `/compliance` | Legal disclosures |
| `/archive` | Rejected packets (lessons) |

## State Management

All state lives in `localStorage` with automatic recovery:

- `pickaxe.alerts` - Research packets
- `pickaxe.checklist` - Mission Control tasks
- `pickaxe.version` - For future migrations

If corrupted, the app resets to defaults from `habitat-data.js`.

## Adding Packet Data

Edit `public/habitat-data.js`:

```javascript
optionAlertPackets: [
  {
    id: "ALT-001",
    ticker: "NVDA",
    direction: "CALL",
    strategy: "debit_spread",
    expiry: "2026-07-17",
    strike: "320/330C",
    thesis: "...",
    catalyst: "...",
    invalidation: "...",
    confidence: 82,
    status: "ceo_review",
    ceoBDecision: "pending",
    // ... other fields
  },
  // more packets...
]
```

## Building & Testing

```bash
# Syntax check
npm run build

# Check project config
npm run check:project

# Local test
npm start
# Then test all routes manually in browser
```

## No Breaking Changes

All existing routes, components, and workflows are preserved. This is a refactor, not a rebuild.

- ✅ All 9 sidebar routes work
- ✅ Dashboard counts update
- ✅ CEO B workflow intact
- ✅ Archive function intact
- ✅ LocalStorage persistence intact
- ✅ GitHub Pages deployment works
- ✅ Localhost dev server works

## Security Checklist

Before deploying:
- ✅ No API keys in `public/` folder
- ✅ No real brokerage credentials
- ✅ No OpenAI keys
- ✅ All dynamic content sanitized
- ✅ All routes have error boundaries
- ✅ localStorage recovery tested
- ✅ No console errors
- ✅ All buttons and links work

## Known Limitations

- Demo data only (no live market data)
- No backend integrations (future work)
- No user authentication
- No database persistence (localStorage only)
- No email/Slack notifications
- No real order execution

## Next Phases (Optional)

### Phase 2: Backend Integration
- Create backend proxy for market data
- Add Tradier / Alpaca options chain API
- Implement secure key management

### Phase 3: User Authentication
- Add GitHub OAuth or email login
- Persist state to database
- Multi-user support

### Phase 4: Advanced Features
- PDF export for research memos
- Email alerts for approvals
- Webhook integrations
- Analytics dashboard

## License

Private. Do not redistribute.

## Support

For issues or questions, open a GitHub issue in this repo.
