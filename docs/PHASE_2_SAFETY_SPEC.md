# Pickaxe Capital / AI Habitat OS — Phase 2 Safety Specification

This document details the mandatory safety parameters, routing restrictions, and allowed user-interface action terms for all future Phase 2 Webull-inspired research terminal mockups and prototypes.

---

## Universal Safety Rules
1. **Research Only**: The interface is strictly an educational sandbox.
2. **No Broker Execution**: No live execution engines, order routes, or clearance adapters can exist in this workspace.
3. **No Auto-Trading / No Copy-Trading**: Automated execution, algorithmic trading, and copy-trading parameters are forbidden.
4. **No Betting Execution / No Sportsbook Connection**: No placement of real wagers, sports betting tickets, or account hookups to commercial bookmakers.
5. **No Wallet Connection**: No options to connect crypto wallets, input private keys, or execute smart contract transactions.
6. **No Private Account Connection**: No entry fields for personal brokerage credentials, passwords, or session tokens.
7. **No API Keys in Frontend**: Under no circumstances can client-side code contain, request, or store API keys. All real provider integrations must use secure backends.
8. **No Fake Connected Labels**: Avoid misleading UI titles suggesting "Connected Broker," "Live Execution," or "Broker API Active."
9. **No Fake Live Data**: Clearly state when data feeds are simulated, delayed, or static.
10. **No Guaranteed Returns / No Guaranteed Picks**: No promotional language claiming guaranteed trade success, absolute wins, risk-free profits, or trading "locks."
11. **Manual CEO B Review Required**: The system operates on a human-in-the-loop review architecture. No signals or alerts can pass to action menus without prior manual human verification.

---

## Allowed Action Labels
To preserve the educational research nature of the cockpit, all UI menus, buttons, and status indicators must limit action descriptions to these safe terms:

* **Watch**
* **Research More**
* **Verify Source**
* **Send to CEO B Review**
* **Add to Learning Ledger**
* **Archive Research Note**
* **Create Manual Review Packet**
* **Paper Review Only**
* **Add to Watchlist**
* **Track Result**

---

## Forbidden Action Labels
To prevent confusing the user or implying real execution exists, the following action labels are strictly prohibited:

* **Buy**
* **Sell**
* **Execute**
* **Place Order**
* **Copy Trade**
* **Auto Trade**
* **Bet**
* **Wager**
* **Place Bet**
* **All In**
* **Guaranteed Win**
* **Lock**
* **Live Win**
* **Live Loss**

---

## Future Backend Rule
If a real-time market data or indicator adapter is integrated in the future, it must strictly follow these structural requirements:
* **Backend-Only Storage**: All client credentials, subscription tokens, and API secret keys must remain stored in secure host environment variables.
* **Server-Side Proxy Handlers**: The client-side SPA must query local read-only endpoints (e.g., `/api/market`, `/api/options`) hosted by `server.mjs` (or a proxy server).
* **Read-Only First**: The backend adapter must only parse market streams, options chains, or news feeds. It must not support any transactional API scopes.

---

## Money Lab / Sports Rule
The "Money Lab" module is allowed to research and display sports and commodities risk statistics:
* **Allowed Content**: Aggregate public betting percentages, sports injury timelines, bankroll sizing math education, and historical implied probability charts.
* **Forbidden Content**: Placements of betting slips, automated slip generation, wallet integration, or execution linkages to sportsbooks.
* **Disclaimers**: The module must feature a permanent visible notice indicating: *"For educational odds analysis and risk-management research only. No wagers can be placed from this platform."*
