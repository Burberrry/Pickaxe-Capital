# Pickaxe Capital / AI Habitat OS — Phase 2 Roadmap

## Purpose

Phase 2 defines the future Webull-inspired research terminal expansion for Pickaxe Capital. It is designed to sit on top of the existing static-first AI Habitat OS, providing a comprehensive workspace for visual intelligence, bookmark mining, and trade strategy analysis without introducing any live brokerage or sportsbook order execution. 

---

## What Phase 2 Is
* **Future Research Terminal**: A consolidated market intelligence dashboard modeled after professional research execution layouts (like Webull/Bloomberg).
* **Dashboard and Watchlist Expansion**: Enhanced tickers, indicators, correlation matrixes, and layout presets.
* **Market Intelligence Cockpit**: Advanced market breadth charts, capital flow indices, and sector rotation trackers.
* **Options Research Hub**: A designated center for researching option chains, open interest metrics, implied volatility structures, and unusual contract volume.
* **Crypto Research Board**: Tracking popular tokens, liquidity pools, and perp data feeds (e.g., Hyperliquid/CoinMarketCap concepts).
* **Catalyst Calendar**: Centralizing earnings, IPOs, Fed/CPI dates, and prediction market events.
* **Research/News Desk**: Symbol-specific aggregated feeds with confidence metrics and sentiment scores.
* **Portfolio Mock/Research View**: Manual portfolio journaling, backtesting, and mock asset allocation.
* **Asset Detail Page**: Single-ticker hub showing charts, order books, smart money filings (13F), insider activity, and related agent briefings.
* **AI Habitat Upgraded Control Room**: Expanded workspace maps, selected-agent HUDs, review workflows, and staging tools.
* **Not a Brokerage**: Generates ideas only; holds no client money and executes no trades.
* **Not a Betting App**: Provides statistics and probability analysis; does not place wagers or connect to sportsbooks.
* **Not Live Trading / Not Auto-Execution**: Strictly research-only.

---

## What Phase 2 Is Not
* **No Broker Execution**: No capability to place, route, or clear orders.
* **No Auto-Trading / No Copy-Trading**: No autonomous bot execution, copy-trading streams, or API trading hooks.
* **No Sportsbook Execution**: No betting interfaces, slip placements, or automated sportsbook executions.
* **No Gambling Advice**: No guaranteed win predictions, locks, or tipping sheets.
* **No Fake Live Data**: Clear disclaimers showing when data is static, delayed, or simulated.
* **No Fake Connected Labels**: No misleading UI tags claiming active broker connections or API links.
* **No Private URLs in Public Repo**: Zero deployment of localhost or private local system addresses.
* **No API Keys in Frontend**: No raw secret credentials, client-side OAuth configurations, or API keys exposed in the HTML/JS source.

---

## Future Route Ideas
*(Note: These are future conceptual routes mapped for design and interface wireframes only. They are not implemented in the current code.)*

* **01 Dashboard** — *Future Concept — Not Implemented Yet*
* **02 Watchlists** — *Future Concept — Not Implemented Yet*
* **03 Markets** — *Future Concept — Not Implemented Yet*
* **04 Options Hub** — *Future Concept — Not Implemented Yet*
* **05 Crypto** — *Future Concept — Not Implemented Yet*
* **06 Catalysts** — *Future Concept — Not Implemented Yet*
* **07 Research** — *Future Concept — Not Implemented Yet*
* **08 Portfolio Research** — *Future Concept — Not Implemented Yet*
* **09 Asset Detail** — *Future Concept — Not Implemented Yet*
* **10 AI Habitat Upgrade** — *Future Concept — Not Implemented Yet*
* **11 Admin / Source Adapter Lab** — *Future Concept — Not Implemented Yet*
* **12 Private Import Lab** — *Future Concept — Not Implemented Yet*

---

## Webull-Inspired Module Ideas

### Dashboard
* **Market Snapshot**: Global indexes (S&P 500, Nasdaq, Russell 2000, DXY, VIX) and daily changes.
* **Watchlist Preview**: Mini-sparklines of selected watchlists.
* **Movers**: Top gainers, top decliners, and unusual volume lists.
* **Sentiment**: Aggregated retail vs. smart money sentiment indicators.
* **AI Summary**: Centralized desk brief compiling yesterday's market events and today's research targets.
* **Events Today**: Visual alerts for high-impact catalyst times (FOMC, CPI, major earnings).
* **Portfolio Research Snapshot**: Mock allocation stats, daily paper performance, and rules verification tags.

### Watchlists
* **Equities**: Customize columns (Price, Change, Vol/Float, Short Interest, Earnings Date).
* **ETFs**: Segmented by category (Leveraged, Volatility, Tech, Commodities, Fixed Income).
* **Indices & Futures**: Track global indices and commodities (`/MES`, `/GC`, `/CL`).
* **Crypto**: Track major pairs (BTC, ETH, SOL) with perp metrics.
* **FX & Macro**: Tracking indices like the Dollar Index (DXY) and interest rates.
* **CEO B Focus List**: Clickable workspace syncing chart, flow proxy, and agent desk briefs.
* **AI Research Candidates**: Tickers auto-flagged by agents for unusual structural setups.

### Markets
* **Index Cards**: Visual overview panels of major indices with real-time delayed index pricing.
* **Breadth**: Advance/Decline line, Net Highs/Lows, and percentage of stocks above moving averages (50d/200d).
* **Capital Flow**: Relative strength index tracking flow in/out of defensive vs. aggressive sectors.
* **Sector Rotation**: Sector heatmaps detailing cash movements.
* **Movers**: Gap-ups, high volume spikes, and short squeeze candidates.
* **Heat Map / Bubble Map Concept**: Visual tree maps grouping sectors and sizes.
* **Risk-On / Risk-Off Context**: VIX stress bands, gold vs. dollar ratios, and high-yield spreads.

### Options Hub
* **Options Overview**: Daily put/call ratios, volume by strike ranges, and overall capital flow.
* **0DTE Center**: Tracking 0-day-to-expiration contract distributions and volume spikes.
* **Option Chain Concept**: Professional layout displaying strikes, bid, ask, volume, open interest, IV, Delta, and Theta.
* **Unusual Activity**: Scanner highlighting contracts with volume exceeding open interest by $\ge 3\text{x}$.
* **Open Interest & Volume**: Comparative histogram charts plotting historical contract accumulation.
* **IV & Greeks**: Curve displays showing implied volatility smile and term structure.
* **Probability Analysis**: Standard deviation cones mapping historical volatility against current pricing.
* **Options Seller Research**: Max pain calculation matrixes and spread yield tables.
* **AI Options Summary**: Synthesized agent breakdown of call/put sweeps and block trades.
* **Research-Only Packet Generation**: Automatically build checklisted trade ideas containing contract targets, exit bounds, and size guidelines for manual execution elsewhere.

### Crypto
* **Popular Crypto**: Main token dashboards tracking price, volume, and supply stats.
* **Top Movers**: Volatility filters highlighting micro/macro cap crypto shifts.
* **Liquidity**: Average bid-ask spreads, order book depth trackers, and funding rates.
* **Sentiment**: Fear & Greed index for crypto, social media volume trends, and developer activity metrics.
* **Token Watchlist**: Tickers tracked with perp contract summaries.
* **Hyperliquid / CoinMarketCap / Crypto Source Ideas**: Read-only tracking templates for perp/dex/spot indicators.
* **No Wallet Connection**: Strictly static research metrics; no option to connect private wallets, execute swaps, or trigger transactions.

### Catalysts
* **Earnings**: Weekly calendar grouped by date, market cap, and historical volatility post-earnings.
* **IPOs**: Initial public offerings list with pricing ranges, lock-up expiration dates, and underwriter profiles.
* **Macro Calendar**: Scheduled data releases (Fed rates, CPI, jobs report, GDP revisions) with consensus vs. actual numbers.
* **Fed / CPI / Jobs**: Detailed sub-pages explaining rate projections (Fed dot plot) and inflation trend lines.
* **Geopolitical Events**: Major global milestones, elections, and trade decisions categorized by market-risk tier.
* **Prediction Market Events**: Public odds data tracking macro probabilities (e.g. rate cut chances).
* **AI Event Summary**: Agent briefs summarizing upcoming catalysts and identifying which watchlist tickers are exposed.

### Research
* **News Feed Concept**: Aggregated market news stories linked directly to symbol tags.
* **Symbol-Linked Research**: Quick-access corporate filings, SEC disclosures, analyst ratings, and dividend declarations.
* **Source Confidence**: Scoring system for news outlets and Twitter feeds (Trusted, OSINT, Rumor, Noise).
* **Sentiment**: Natural language processing scores showing news headlines as bullish, bearish, or neutral.
* **AI Daily Summary**: Daily compressed brief detailing main headlines and sector reactions.
* **Learning Ledger Links**: Highlighted lessons related to the setups identified in current headlines.
* **Archive Links**: Quick connections to saved bookmarks or folders that match the target symbol or catalyst.

### Portfolio Research
* **Manual Portfolio Journal**: Interactive sheet to input paper trades, entry levels, exit prices, execution notes, and psychological state.
* **Mock Allocation**: Virtual pie chart representing target risk parameters (e.g., max 2% per setup, maximum 10% total exposure).
* **No Brokerage Sync**: Zero auto-import of account status, balances, positions, or executions.
* **No Execution**: No buy/sell/cancel order mechanisms.
* **No Account Credentials**: Zero entry fields for usernames, API keys, passwords, or authentication tokens.
* **Manual Review Only**: User manually updates the sheet to reflect external operations.
* **Autopilot / 13F / Investor Tracker Concepts**: Research databases tracking filings of prominent investment managers (e.g., Warren Buffett/Michael Burry portfolios).

### Asset Detail Page
* **Chart Panel Placeholder**: Multi-timeframe layout for technical indicators (EMA Cloud, VAP, RSI).
* **Options Panel Placeholder**: Quick-lookup option chain pane showing premium bid/asks.
* **News Panel**: Aggregate corporate news, analyst targets, and press releases.
* **Source Confidence**: Quality score of news coverage.
* **Smart Money / 13F / Insider Ownership**: Insider buy/sell logs and institutional concentration ratios.
* **Short Interest / Borrow Risk**: Short float percentages, days to cover, and borrow fee trend lines.
* **AI Summary**: Synthesized agent summary of the chart structure, catalyst risk, options flow, and checklist status.
* **Related Agents**: List of agents active in scanning this asset, showing individual telemetry and logs.
* **CEO B Review Button**: Packages the asset research, options choice, and risk parameters into a manual review packet.

### AI Habitat Upgrade
* **CEO B Control Room**: Enhanced view toggling alerts, active missions, system stress, and review logs.
* **Agent City Visual**: Upgraded visual canvas showing specialist agents, station roles, and communication networks.
* **Agent Tasks**: Telemetry panels showing what each agent is scanning, CPU/confidence levels, and output logs.
* **Review Queue**: Pending research packets awaiting manual human verification.
* **Mission Packets**: Clickable details outlining collaboration paths, target output, and confidence.
* **Learning Memory**: Dynamic database query of lessons database (JSON/CSV archive).
* **Trend Radar**: Narrative/topic extraction tool monitoring trends across imported links.
* **Source Intake Universe**: Full table of imported folder files, search indexing status, and quarantine counts.
* **Archive Vault**: Deduped Chrome bookmarks vault with folder navigation.
* **Staging QA**: Core diagnostics dashboard checking route status, build tasks, and adapter readiness logs.
