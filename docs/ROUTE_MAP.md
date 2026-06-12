# Pickaxe Capital Route Map

Audited: 2026-06-11.

## Runtime Truth

- `public/index.html` contains the single-page shell and route containers.
- `public/app.js` owns hash routing, direct-path compatibility, and active renderers.
- `server.mjs` serves `public/` locally and falls back to `public/index.html` for app paths.
- GitHub Pages deploys `public/` only. Hash routes are the safest public URLs.
- Root `index.html`, `app.js`, `styles.css`, `habitat-data.js`, `agent-os.js`, and `agent-os.html` mirror their `public/` counterparts.

## Current Pages

Status vocabulary: strong, usable, partial, placeholder.

| Canonical route | Direct path / aliases | Responsible renderer or container | Purpose | Status | Identity | Safety | Mobile | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/`, `#/alerts` | `/alerts`, `/app/alerts`, `#/` | `renderAlertsPage()` -> `renderResearchGatedAlertsDesk()` | Homepage and institutional research review queue | strong | strong | strong | verified | high |
| `#/dashboard` | `/dashboard` | final `renderDashboardPage()` -> `#dashboardContent` | CEO B Mission Control overview | strong | strong | strong | verified | high |
| `#/mission-control` | legacy command view | `#command`, `loadMarket()`, `loadOptions()` | Manual/static market and research console | usable | partial | strong | estimate good | low |
| `#/vision-map` | `/vision-map` | `renderVisionCommandCenter()` | Visual system brain and route/agent map | usable | strong | adequate | verified | high |
| `#/agents` | `/agents`, `#/agent-engine` | final assigned `renderAgentsPage()`; bootstrap declaration retained | Local Agent Habitat operations, department inspector, task board, review/archive routing | strong | strong | strong | desktop + 390px verified | high |
| `#/signals` | `/signals`, `/market-command`, `/signal-engine` | `renderSignalsIntelligence()` plus `#signals` | Research signals and options-style packets | usable | strong | strong | estimate good | high |
| `#/source-hub` | `/source-hub`, `#/data-sources` | final assigned `renderSourceHubPage()`; bootstrap declaration retained | Source trust, verification, and routing cockpit | strong | strong | strong | verified | high |
| `#/risk-rules` | `#/compliance` | `renderRiskRulesPage()` | Hard safety rules and manual review gates | usable | strong | strong | estimate good | high |
| `#/learning-ledger` | hash only | `renderLearningLedgerPage()` | Local lessons, rules, and paper outcomes | usable | strong | adequate | estimate good | medium |
| `#/trend-radar` | hash only | `renderTrendRadarPage()` | Static theme and world-pulse research board | usable | partial | adequate | estimate good | medium |
| `#/archive` | `/archive` | final assigned `renderArchiveIntelligence()` | Cleaned intelligence memory vault | strong | strong | strong | verified | high |
| `#/bookmarks` | `/bookmarks` | `renderBookmarksPage()` | Local Chrome/X bookmark intelligence workflows | usable | strong | strong | estimate good | medium |
| `#/money-lab` | hash only | `renderMoneyLabPage()` | Research-only experiment sandbox | usable | partial | strong | verified | low |
| `#/staging` | `/staging` | final assigned `renderStagingAdvanced()` | QA, tracker, storage, and build-readiness cockpit | strong | strong | strong | verified | high |
| `#/ai-habitat-os` | hash only | final assigned `renderLifeOSPage()` -> `#aiHabitatOS` | Strategic source-agent-risk-CEO B-memory operating map | strong | strong | strong | desktop + 390px verified | high |
| `#/watchlists` | `/watchlists` | final `renderWatchlistsPage()` | Local research universe and focus lists | strong | strong | strong | verified | high |
| `#/markets` | `/markets` | `renderFutureConceptPages()` | Future market overview | placeholder | partial | strong | estimate good | low |
| `#/options` | `/options` | `renderFutureConceptPages()` | Future options research cockpit | placeholder | partial | strong | verified | low |
| `#/catalysts` | `/catalysts` | `renderFutureConceptPages()` | Future catalyst calendar | placeholder | partial | strong | estimate good | low |
| `#/research` | `/research` | `renderResearchDeskPage()` | Local source-linked Research Packet builder | usable | strong | strong | estimate good | high |
| `#/roadmap` | `/roadmap` | roadmap renderer in `public/app.js` | Static build and product roadmap | usable | strong | adequate | estimate good | medium |
| `#/founder` | `/founder`, `/about-founder` | `renderFounderLandingPage()` | Public founder/product/access and pricing concepts | usable | strong | strong | verified | medium |
| `#/ceo-b-profile` | `/ceo-b-profile`, `/app/ceo-b` | `renderFounderProfile()` | CEO B identity and operating principles | usable | strong | not market-facing | verified | medium |
| `#/rkTracker` | `/rk-tracker` | `renderRkTrackerPage()` | DFV-inspired static watchlist tracker | usable | strong | adequate | estimate good | medium |
| `#/berkshire` | `/berkshire-1965` | `renderBerkshirePage()` | Historical turnaround case study | usable | strong | historical-data label | estimate good | low |
| `#/jarvisLab` | `/jarvis-lab` | `renderJarvisLabPage()` | Typed command and future-adapter research prototype | usable | strong | strong | verified | medium |
| `#/lifeOS` | `/life-os` | final `renderLifeOSPage()` -> `#lifeOSContent` | Life OS and future device-role overview | usable | strong | strong | verified | medium |
| `/life-habitat` | direct path only | `renderLifeHabitatPage()` | Data portability and Life Habitat prototype | partial | partial | adequate | estimate good | low |
| `#/agentBuilderFactory` | `/agent-builder-factory` | `renderAgentBuilderFactoryPage()` | LocalStorage-only agent customization prototype | usable | partial | strong | estimate good | low |
| `#/projectUpdate` | `/project-update` | `renderProjectUpdatePage()` | Shareable project/handoff summary surface | usable | strong | adequate | estimate good | medium |
| `#/settings` | `/settings` | `#settings` static container | Settings and local configuration notes | partial | weak | not market-facing | estimate good | low |
| `#/source-hub-staging` | local hash alias | `renderAiHandoffPage()` | In-app handoff copy surface | usable | strong | local-context warning | estimate good | medium |

## Archive Subroutes

All Archive subroutes use `#archive`, `loadArchive()`, and route-specific renderers in `public/app.js`.

| Hash route | Local direct compatibility | Renderer | Status |
| --- | --- | --- | --- |
| `#/archive/tree` | `/app/archive/tree` | `renderArchiveTree()` | usable |
| `#/archive/sources` | `/app/archive/sources` | `renderArchiveSources()` | usable |
| `#/archive/agents` | `/app/archive/agents` | `renderArchiveAgents()` | usable |
| `#/archive/findings` | `/app/archive/findings` | `renderArchiveFindings()` | usable |
| `#/archive/imports` | `/app/archive/imports` | `renderArchiveImports()` | usable |
| `#/archive/quarantine` | `/app/archive/quarantine` | `renderArchiveQuarantine()` | usable |

## Local Server Endpoints

| Route | Purpose | Public GitHub Pages behavior |
| --- | --- | --- |
| `/ai-handoff` | Plain-text context generated from `AGENTS.md`, `PROJECT_STATUS.md`, and `NEXT_STEPS.md` | Local server only |
| `/source-hub-staging` | Alias for the plain-text handoff | Local server only |
| `/api/health` | Local runtime mode and health | Not deployed |
| `/api/market`, `/api/options`, `/api/signals` | Demo/static by default; explicit local live-services flag required | Not deployed |
| `/api/checklist`, `/api/build-log`, `/api/vision-map`, `/api/memory` | Local data endpoints | Not deployed |
| `/api/archive/*` | Local archive data endpoints | Not deployed |
| `/api/agents/research`, `/api/journal` | Local demo/research and journal endpoints | Not deployed |

## Missing Requested Concept

- No coin-flip or dedicated thinking-animation page/component exists.
- Pricing exists as planning/access cards inside Founder, not as a standalone route.
- About exists through Founder and CEO B Profile, not as a separate generic About page.
