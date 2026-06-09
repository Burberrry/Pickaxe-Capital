# Pickaxe Route Ownership Map

Status: Documentation ownership map. Future routes are not approved runtime routes.

| Product / system | Current or proposed route | Owner | Status | Notes |
| --- | --- | --- | --- | --- |
| Options Alerts | `/`, `#/alerts` | Options Alerts + CEO B | Current | Runtime still says Alerts Desk in places; canonical docs name is Options Alerts. |
| Mission Control | `#/dashboard` | CEO B + Operations | Current | Flagship overview and future Daily System Improvement card. |
| Source Hub | `#/source-hub` | Source Verifier | Current | Trust, provenance, and research intake. |
| Research Workspace | `#/research` | Research lane | Current | Packet construction and source handoff. |
| Archive | `#/archive` | Archive Curator | Current | Sanitized durable memory. |
| Learning Ledger | `#/learning-ledger` | Learning lane | Current | Outcomes, lessons, and proposed rules. |
| Watchlists | `#/watchlists` | Watchlist Curator | Current | Research universe. |
| Risk Desk | `#/risk-rules` | Risk lane + CEO B | Current compatibility route | Future hard-block authority must be specified before expansion. |
| Quant Lab | `#/quant-lab` | Quant Research | Future | May own Algorithmic Strategy Factory and Market Cipher Room. |
| Market Cipher Room | `#/quant-lab` or `#/source-hub` | Quant Research + Source Verifier | Future | Final owner route requires CEO B decision. |
| Market Overview | future route decision | Mission Control | Future | Do not create route during docs sprint. |
| Pickaxe Research Center | future route decision | Source Hub + Archive | Future | Could strengthen existing Research Workspace instead of duplicating it. |
| Security Research Cockpit | future ticker detail inside Research Center | Research lane | Future | Prefer component/detail ownership over a duplicate top-level route. |
| Volatility Intelligence Panel | component in Options Alerts and Security Research Cockpit | Quant + Risk | Future | Shared component concept, not a separate route. |
| Performance Tracker | `#/performance` | Archive + Learning Ledger | Future | Blocked until upstream outcomes are stable. |
| Signal Atlas | future module in Source Hub / Quant Lab | Source Verifier + Quant | Future | Avoid standalone route unless proven necessary. |
| Founder OS | `#/life-os` compatibility or future private owner surface | CEO B | Future / Blocked | Keep separate from trading research. |
| Venture Studio | future Founder OS module | CEO B | Future / Blocked | Business Builder and experiments. |
| Staging / QA | `#/staging` | QA Sentinel | Current | Sprint locks and quality control. |

## Ownership Rules

- Strengthen an existing owner route before adding a new top-level route.
- Shared panels remain components unless they have a distinct workflow and durable data model.
- Route creation requires explicit CEO B approval and a franchise card.
- Current aliases remain operational until a separate migration sprint is approved.
