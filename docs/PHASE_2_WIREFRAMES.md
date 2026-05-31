# Pickaxe Capital — Phase 2 Wireframes

This document outlines the text-based ASCII wireframe designs for the conceptual Phase 2 Webull-inspired research terminal.

---

## 1. Dashboard Wireframe

```
+--------------------------------------------------------------------------------------------------+
| BRAND: Pickaxe Capital | VIEW: [Dashboard]  STATUS CHIPS: [Static-First] [Research Only] [No Exec] |
+--------------------------------------------------------------------------------------------------+
| [01 Alerts Desk]       | (Center: Market Pulse / Indices Grid)                                    |
| [02 Watchlists]        | +--------------------+ +--------------------+ +--------------------+   |
| [03 Markets]           | | SPY: 520.50 (+0.4%)| | QQQ: 445.80 (-0.2%)| | BTC: 92400 (+2.1%) |   |
| [04 Options Hub]       | +--------------------+ +--------------------+ +--------------------+   |
| [05 Crypto]            |                                                                         |
| [06 Catalysts]         | (Left: Focus List)      (Center: Daily Brief)  (Right: Risk Desk)       |
| [07 Research]          | +---------------------+ +--------------------+ +---------------------+  |
| [08 Portfolio Research]| | Tickers:            | | Narrative Scan:    | | Active Risk Rules:  |  |
| [09 Asset Detail]      | | > QQQ (Synchronized)| | - Tech CAPEX strong| | - Max size 2% paid   |  |
| [10 AI Habitat OS]     | | - NVDA (Scanned)    | | - CPI exposure high| | - Hard invalidation |  |
|                        | | - AAPL (Waiting)    | | - Volume average   | | - Spread limit 15%  |  |
|                        | +---------------------+ +--------------------+ +---------------------+  |
|                        |                                                                         |
|                        | (Bottom: Manual Portfolio Research Mini-Tracker)                        |
|                        | Ticker: QQQ | Strategy: Breakout | Setup: Daily Cloud | status: Watch   |
+--------------------------------------------------------------------------------------------------+
```

* **Page Purpose**: Provide a unified market snapshot and checklist hub combining macro context and user focus targets.
* **Top Status Chips**: `[Static-First]`, `[Research Only]`, `[No Broker Execution]`, `[Safety Gate: Active]`.
* **Left Panel**: Clickable Watchlist Sync List (binds current global chart/signal focus).
* **Center Panel**: Multi-index grid and the aggregated local Agent Desk Brief.
* **Right Panel**: Risk Rules checklist and active gate validation status.
* **Bottom Panel**: Manual trade entry form and outcome log.
* **Involved Agents**: `System Brain`, `Market Scout`, `Risk Sentinel`.
* **Data Sources**: Yahoo Finance Delay API, Cboe Delay API.
* **Safe Actions**: `Update Watchlist Ticker`, `Trigger Local Review`, `Copy Brief Text`, `Log Paper Setup`.
* **Forbidden Actions**: `Buy`, `Sell`, `Place Order`, `Link Broker Account`.
* **LocalStorage Keys**: `pickaxeDashboardWatchlist`, `pickaxeDashboardBriefCache`.

---

## 2. Watchlists Wireframe

```
+--------------------------------------------------------------------------------------------------+
| BRAND: Pickaxe Capital | VIEW: [Watchlists] STATUS CHIPS: [Manual Review Only] [Research-First]  |
+--------------------------------------------------------------------------------------------------+
| [01 Alerts Desk]       | (Center Watchlist Table)                                                |
| [02 Watchlists]        | Ticker | Price  | Change | Vol/Float | Short Int | Earn Date  | Action  |
| [03 Markets]           | -------+--------+--------+-----------+-----------+------------+---------|
| [04 Options Hub]       | QQQ    | 445.80 | -0.21% | 1.1x      | 1.4%      | 2026-07-21 | [Sync]  |
| [05 Crypto]            | NVDA   |  95.30 | +1.40% | 2.4x      | 2.1%      | 2026-08-15 | [Sync]  |
| [06 Catalysts]         | AAPL   | 189.50 | -0.05% | 0.9x      | 0.8%      | 2026-07-30 | [Sync]  |
| [07 Research]          | BTC-USD| 92400  | +2.10% | N/A       | N/A       | N/A        | [Sync]  |
| [08 Portfolio Research]|                                                                         |
| [09 Asset Detail]      | (Right: Selected Ticker Options-Chain Peek)                             |
| [10 AI Habitat OS]     | Strike | Calls Volume | Calls Bid/Ask | Puts Volume | Puts Bid/Ask      |
|                        | -------+--------------+---------------+-------------+--------------     |
|                        | 445    | 12,400       | 2.10 / 2.15   |  8,200      | 1.85 / 1.90      |
|                        | 450    | 24,100       | 0.85 / 0.90   | 15,400      | 3.10 / 3.20      |
+--------------------------------------------------------------------------------------------------+
```

* **Page Purpose**: Custom column equity and index lists with built-in option volatility and scan sync hooks.
* **Top Status Chips**: `[Manual Review Only]`, `[Static Watchlist]`, `[No Orders]`.
* **Left Panel**: Custom watchlist profiles selection list (Equities, ETFs, Macro, AI Candidates).
* **Center Panel**: The detailed metadata table showing float, volume dynamics, and short metrics.
* **Right Panel**: A contract density preview pane (options chain peek).
* **Bottom Panel**: Input field to manually add/remove symbols to local storage lists.
* **Involved Agents**: `Signal Scout`, `Options Flow Hunter`.
* **Data Sources**: Delay APIs, manual user list imports.
* **Safe Actions**: `Sync Chart Focus`, `Add Ticker`, `Export Watchlist CSV`, `Filter Volatility`.
* **Forbidden Actions**: `Execute Broker Order`, `Subscribe to Live Socket Feed`.
* **LocalStorage Keys**: `pickaxeUserWatchlistList`, `pickaxeSelectedWatchlist`.

---

## 3. Markets Wireframe

```
+--------------------------------------------------------------------------------------------------+
| BRAND: Pickaxe Capital | VIEW: [Markets]    STATUS CHIPS: [Delay Feed] [Educational Sandbox]     |
+--------------------------------------------------------------------------------------------------+
| [01 Alerts Desk]       | (Center: Capital Flow sector Rotation Heatmap)                          |
| [02 Watchlists]        | +-----------------------------------+ +-------------------------------+ |
| [03 Markets]           | | Technology (XLK):  +1.45%         | | Consumer Staples (XLP): -0.4% | |
| [04 Options Hub]       | | > Capital Inflow: Strong          | | > Capital Outflow: Average    | |
| [05 Crypto]            | +-----------------------------------+ +-------------------------------+ |
| [06 Catalysts]         |                                                                         |
| [07 Research]          | (Left: Breadth)        (Center: Stress Index) (Right: Sector Leader)    |
| [08 Portfolio Research]| +--------------------+ +--------------------+ +--------------------+  |
| [09 Asset Detail]      | | Adv/Dec: 1,840/1,120| | VIX: 14.2 (Low)    | | XLK leader: NVDA   |  |
| [10 AI Habitat OS]     | | Above 50d MA: 68%  | | Gold/DXY: Gold up  | | XLE leader: XOM    |  |
|                        | +--------------------+ +--------------------+ +--------------------+  |
+--------------------------------------------------------------------------------------------------+
```

* **Page Purpose**: Sector analysis and broad market indices overview for determining system stress limits.
* **Top Status Chips**: `[Delay Feed]`, `[Educational Sandbox]`, `[No Betting / Financial Advice]`.
* **Left Panel**: Market index selector list (S&P 500, Nasdaq, sector breakdown).
* **Center Panel**: Sector rotation flow model comparing defensive vs. aggressive assets.
* **Right Panel**: Sector momentum statistics listing top relative volume stocks.
* **Bottom Panel**: System stress alert log displaying macroeconomic alerts.
* **Involved Agents**: `Macro Watcher`, `Signal Scout`.
* **Data Sources**: Delay indices feed, historical database files.
* **Safe Actions**: `Read Sector Breadth`, `Analyze VIX Levels`, `Review Sector Leader List`.
* **Forbidden Actions**: `Trade Sector ETFs`, `Place Sector Bets`.
* **LocalStorage Keys**: `pickaxeMarketBreadthState`, `pickaxeSectorSelection`.

---

## 4. Options Hub Wireframe

```
+--------------------------------------------------------------------------------------------------+
| BRAND: Pickaxe Capital | VIEW: [Options Hub] STATUS CHIPS: [No Broker Sync] [Manual Review Only] |
+--------------------------------------------------------------------------------------------------+
| [01 Alerts Desk]       | (Center: Active Options Chain Lookup for [ QQQ ])                       |
| [02 Watchlists]        | Strike | Call Bid/Ask | Call Vol | Call OI | Put Bid/Ask | Put Vol | Put OI |
| [03 Markets]           | -------+--------------+----------+---------+-------------+---------+--------|
| [04 Options Hub]       | 440.00 |  6.20 / 6.30 |    4,100 |  12,800 | 0.40 / 0.45 |   9,100 | 18,200 |
| [05 Crypto]            | 445.00 |  2.10 / 2.15 |   12,400 |  24,500 | 1.85 / 1.90 |   8,200 | 12,400 |
| [06 Catalysts]         | 450.00 |  0.85 / 0.90 |   24,100 |  38,200 | 3.10 / 3.20 |  15,400 | 22,100 |
| [07 Research]          |                                                                         |
| [08 Portfolio Research]| (Left: Unusual Activity)                (Right: Chain Statistics Pane)  |
| [09 Asset Detail]      | +-------------------------------------+ +----------------------------+ |
| [10 AI Habitat OS]     | | QQQ 450C Vol > 3x OI [Research]     | | Put/Call Volume Ratio: 0.85| |
|                        | | NVDA 100C Sweep Alert [Research]    | | Implied Volatility: 22.4%  | |
|                        | +-------------------------------------+ +----------------------------+ |
+--------------------------------------------------------------------------------------------------+
```

* **Page Purpose**: Options chains scanner, unusual volume metrics, and Greek parameter research interfaces.
* **Top Status Chips**: `[No Broker Sync]`, `[Manual Review Only]`, `[Research-Only Packets]`.
* **Left Panel**: Unusual options activity scanner and block trade alerts (delayed).
* **Center Panel**: The detailed option contract strike chain tables.
* **Right Panel**: Implied Volatility stats, skew analysis, and Greek values overview (Delta, Theta, Gamma).
* **Bottom Panel**: Build Option Trade Plan button (packages contract choice, limit target, and risk rules).
* **Involved Agents**: `Options Flow Hunter`, `Risk Sentinel`.
* **Data Sources**: Delayed option data provider (Cboe/Yahoo).
* **Safe Actions**: `Study Options Chain`, `Create Manual Option Plan`, `Calculate Put/Call Ratios`.
* **Forbidden Actions**: `Place Options Order`, `Buy Calls/Puts`, `Auto-Hedge Spread`.
* **LocalStorage Keys**: `pickaxeOptionsSelectedSymbol`, `pickaxeOptionsScanResults`.

---

## 5. Crypto Wireframe

```
+--------------------------------------------------------------------------------------------------+
| BRAND: Pickaxe Capital | VIEW: [Crypto]     STATUS CHIPS: [No Wallet Connect] [Research Only]    |
+--------------------------------------------------------------------------------------------------+
| [01 Alerts Desk]       | (Center: Crypto Watchlist Table)                                        |
| [02 Watchlists]        | Token   | Price   | 24h Change | Volume  | Funding Rate | Sentiment    |
| [03 Markets]           | --------+---------+------------+---------+--------------+-------------- |
| [04 Options Hub]       | BTC-USD | 92400.0 | +2.10%     | 45B     | +0.01%       | Bullish      |
| [05 Crypto]            | ETH-USD |  3450.0 | -0.45%     | 18B     | +0.00%       | Neutral      |
| [06 Catalysts]         | SOL-USD |   185.2 | +5.60%     | 4.2B    | +0.02%       | Strong Bull  |
| [07 Research]          |                                                                         |
| [08 Portfolio Research]| (Left: Volatility Movers)               (Right: Perp Index Indicators)  |
| [09 Asset Detail]      | +-------------------------------------+ +----------------------------+ |
| [10 AI Habitat OS]     | | SOL: Volatility breakout target     | | Index Source: Hyperliquid  | |
|                        | | VIX-Crypto: Low stress regime        | | Wallet Status: Disabled    | |
|                        | +-------------------------------------+ +----------------------------+ |
+--------------------------------------------------------------------------------------------------+
```

* **Page Purpose**: Read-only crypto spot and perpetual indicator tracker templates.
* **Top Status Chips**: `[No Wallet Connect]`, `[Research Only]`, `[Future Backend Required]`.
* **Left Panel**: Top crypto movers and volatility flags.
* **Center Panel**: Major tokens table with volumes, funding rates, and NLP sentiment scores.
* **Right Panel**: Perp indexes tracker (e.g. Hyperliquid index templates).
* **Bottom Panel**: Warning box: "Private keys and wallets cannot be connected to this site."
* **Involved Agents**: `News Raven`, `Conflict Risk Agent`.
* **Data Sources**: CoinMarketCap delay index, local data mock.
* **Safe Actions**: `Read Funding Rates`, `Check Fear/Greed index`, `Review Token Volatility`.
* **Forbidden Actions**: `Connect Wallet`, `Swap Tokens`, `Place Perpetuals Orders`.
* **LocalStorage Keys**: `pickaxeCryptoTokenList`, `pickaxeCryptoSentimentState`.

---

## 6. Catalysts Wireframe

```
+--------------------------------------------------------------------------------------------------+
| BRAND: Pickaxe Capital | VIEW: [Catalysts]  STATUS CHIPS: [Delay Feed] [Manual Verification Required] |
+--------------------------------------------------------------------------------------------------+
| [01 Alerts Desk]       | (Center: Weekly Catalyst Calendar)                                      |
| [02 Watchlists]        | Mon 2026-06-01 | Tue 2026-06-02  | Wed 2026-06-03 | Thu 2026-06-04      |
| [03 Markets]           | ---------------+-----------------+----------------+---------------------|
| [04 Options Hub]       | - CPI (8:30AM) | - Earn: AMD (PM)| - FOMC Rate    | - Earn: NVDA (PM)   |
| [05 Crypto]            |   Cons: 3.1%   |   Est EPS: 0.65 |   Est: -25bps  |   Est EPS: 1.15     |
| [06 Catalysts]         |                                                                         |
| [07 Research]          | (Left: Macro Releases)                  (Right: Political / Pred Market)|
| [08 Portfolio Research]| +-------------------------------------+ +----------------------------+ |
| [09 Asset Detail]      | | - Jobs Report: Fri June 5 8:30AM    | | Prediction Market Rate cut | |
| [10 AI Habitat OS]     | | - GDP Revisions: Thu June 4 8:30AM  | | Probability: 84% -25bps    | |
|                        | +-------------------------------------+ +----------------------------+ |
+--------------------------------------------------------------------------------------------------+
```

* **Page Purpose**: Centralize macro data releases, corporate earnings calendars, and geopolitical dates.
* **Top Status Chips**: `[Delay Feed]`, `[Manual Verification Required]`, `[Research-First]`.
* **Left Panel**: Detailed macro event list showing past numbers vs. forecast metrics.
* **Center Panel**: The visual weekly earnings and FOMC catalyst grid.
* **Right Panel**: Geopolitical risk milestones and prediction market probability indicators.
* **Bottom Panel**: Event Warning Banner: "Options volatility spikes before catalyst releases. Size down."
* **Involved Agents**: `Macro Watcher`, `Conflict Risk Agent`.
* **Data Sources**: Economic calendar files, manual date updates.
* **Safe Actions**: `Read Earnings Times`, `Verify Forecast Consensus`, `Check Rate cut probabilities`.
* **Forbidden Actions**: `Bet on Predictions`, `Trade IPOs`, `Execute Arbitrage Orders`.
* **LocalStorage Keys**: `pickaxeCatalystCalendarCache`, `pickaxeSelectedCatalystDay`.

---

## 7. Research Desk Wireframe

```
+--------------------------------------------------------------------------------------------------+
| BRAND: Pickaxe Capital | VIEW: [Research]   STATUS CHIPS: [Static-First] [No Auto-Scraping]      |
+--------------------------------------------------------------------------------------------------+
| [01 Alerts Desk]       | (Center: Aggregate News Stream for [ QQQ ])                             |
| [02 Watchlists]        | Time    | Source | News Title / Corporate Event                 | Trust |
| [03 Markets]           | --------+--------+----------------------------------------------+-------|
| [04 Options Hub]       | 09:30AM | SEC    | AAPL files form 4: Insider buying detected   | High  |
| [05 Crypto]            | 10:15AM | News   | Fed Official speaks on inflation pressure   | Med   |
| [06 Catalysts]         | 11:00AM | Social | Rumor: Tech capital cycle to double in CapEx | Low   |
| [07 Research]          |                                                                         |
| [08 Portfolio Research]| (Left: News Filters)                    (Right: NLP Sentiment scoring)  |
| [09 Asset Detail]      | +-------------------------------------+ +----------------------------+ |
| [10 AI Habitat OS]     | | Categories: SEC filings | Corporate | | Bullish news density: 64%  | |
|                        | | Press releases | Rumors | Analyst   | | Bearish news density: 12%  | |
|                        | +-------------------------------------+ +----------------------------+ |
+--------------------------------------------------------------------------------------------------+
```

* **Page Purpose**: Corporate filings aggregator, sentiment scorer, and source verification terminal.
* **Top Status Chips**: `[Static-First]`, `[No Auto-Scraping]`, `[No Financial Advice]`.
* **Left Panel**: Categories filter checkbox lists (SEC Filings, PR, Analyst upgrades, social media noise).
* **Center Panel**: Aggregate timeline stream of corporate articles and announcements.
* **Right Panel**: Natural Language Processing sentiment scoring panels and trust warnings.
* **Bottom Panel**: Source verification action button (flags suspicious rumors for quarantine review).
* **Involved Agents**: `News Raven`, `Source Verifier`.
* **Data Sources**: RSS feed stubs, user-imported bookmark texts.
* **Safe Actions**: `Read Corporate News`, `Verify Trust Score`, `Attach News Note to Ticker`.
* **Forbidden Actions**: `Publish News Broadcasts`, `Trade Stocks from News Links`.
* **LocalStorage Keys**: `pickaxeResearchNewsCache`, `pickaxeNewsFilterSettings`.

---

## 8. Portfolio Research Wireframe

```
+--------------------------------------------------------------------------------------------------+
| BRAND: Pickaxe Capital | VIEW: [Portfolio]  STATUS CHIPS: [No Broker Sync] [Manual Entry Only]   |
+--------------------------------------------------------------------------------------------------+
| [01 Alerts Desk]       | (Center: Manual Paper Trade Position Journal)                           |
| [02 Watchlists]        | Ticker | Side | Entry  | Exit   | Quantity | Risk % | Profit/Loss | status |
| [03 Markets]           | -------+------+--------+--------+----------+--------+-------------+--------|
| [04 Options Hub]       | QQQ    | Long | 445.00 | 450.00 | 10       | 1.5%   | +$50.00     | Closed |
| [05 Crypto]            | BTC    | Long | 92000.0| --     | 1        | 2.0%   | +$400.00    | Open   |
| [06 Catalysts]         | NVDA   | Short|  95.00 |  96.20 | 50       | 1.0%   | -$60.00     | Stopped|
| [07 Research]          |                                                                         |
| [08 Portfolio Research]| (Left: Allocation visual)               (Right: Trade Setup Journal Form)
| [09 Asset Detail]      | +-------------------------------------+ +----------------------------+ |
| [10 AI Habitat OS]     | | Equities: 65% | Crypto: 25%         | | Ticker: [      ] Size: [  ] | |
|                        | | Cash: 10% | Max daily risk ok       | | Target: [      ] Stop: [  ] | |
|                        | +-------------------------------------+ +----------------------------+ |
+--------------------------------------------------------------------------------------------------+
```

* **Page Purpose**: Manual paper trading journal, portfolio simulator, and risk parameters analyzer.
* **Top Status Chips**: `[No Broker Sync]`, `[Manual Entry Only]`, `[Education Sandbox]`.
* **Left Panel**: Target vs. current mock allocation graphs and compliance warnings.
* **Center Panel**: Interactive ledger list of open and closed mock setups.
* **Right Panel**: Simple trade entry builder form (calculates trade size based on stop-loss rules).
* **Bottom Panel**: Verification message: "No actual money is used. Log trades manually."
* **Involved Agents**: `Risk Sentinel`, `Wealth Alchemist`.
* **Data Sources**: Manual user text input.
* **Safe Actions**: `Log Trade Entry`, `Calculate Portfolio Value`, `Audit Stop-Loss Performance`.
* **Forbidden Actions**: `Withdraw Cash`, `Fund Account`, `Place Real Broker Orders`.
* **LocalStorage Keys**: `pickaxePortfolioJournalEntries`, `pickaxeAllocationSettings`.

---

## 9. Asset Detail Page Wireframe

```
+--------------------------------------------------------------------------------------------------+
| BRAND: Pickaxe Capital | VIEW: [Asset Detail] STATUS CHIPS: [Delay Data] [No Broker Execution]   |
+--------------------------------------------------------------------------------------------------+
| [01 Alerts Desk]       | (Center: selected Asset: [ NVDA ])                                      |
| [02 Watchlists]        | Price: 95.30 (+1.4%) | Day High: 96.50 | Day Low: 94.10 | Vol: 45M      |
| [03 Markets]           | +---------------------------------------------------------------------+ |
| [04 Options Hub]       | | (Holographic / Technical Chart Placeholder Layout)                  | |
| [05 Crypto]            | | > EMA Cloud (Compression active)                                    | |
| [06 Catalysts]         | | > Volume at Price (High accumulation zone at 94.00)                 | |
| [07 Research]          | +---------------------------------------------------------------------+ |
| [08 Portfolio Research]|                                                                         |
| [09 Asset Detail]      | (Left: Filings / 13F)  (Center: Agent Telemetry) (Right: Chain Look)  |
| [10 AI Habitat OS]     | +--------------------+ +--------------------+ +--------------------+  |
|                        | | Insider Buy: Yes   | | Scout: Scanning    | | Strike | Bid/Ask   |  |
|                        | | Smart Money: +4%   | | Sentinel: Alert Ok | | 95.00  | 2.10/2.15 |  |
|                        | +--------------------+ +--------------------+ +--------------------+  |
+--------------------------------------------------------------------------------------------------+
```

* **Page Purpose**: Single-asset analytical profile linking technical charts, option chain summaries, and filings.
* **Top Status Chips**: `[Delay Data]`, `[No Broker Execution]`, `[Manual Verification Required]`.
* **Left Panel**: Insider buying history logs, 13F institutional holding ratios, and short float data.
* **Center Panel**: Agent scanning telemetry, confidence ratings, and diagnostic checklist logs.
* **Right Panel**: Active options chain preview panel.
* **Bottom Panel**: CEO B Review button (packages research, chart setups, and target contracts into a review slip).
* **Involved Agents**: `Market Scout`, `Risk Sentinel`, `Sentiment Scout`.
* **Data Sources**: Delay APIs, manual filings index.
* **Safe Actions**: `Review Chart Structures`, `Check Institutional Filings`, `Promote Setup to Review`.
* **Forbidden Actions**: `Auto-Trade Setup`, `Execute Order via Broker API`.
* **LocalStorage Keys**: `pickaxeActiveAssetTicker`, `pickaxeAssetDetailCache`.

---

## 10. AI Habitat Upgrade Wireframe

```
+--------------------------------------------------------------------------------------------------+
| BRAND: Pickaxe Capital | VIEW: [Habitat OS] STATUS CHIPS: [Telemetry Active] [No Auto-Trading]   |
+--------------------------------------------------------------------------------------------------+
| [01 Alerts Desk]       | (Center: Pickaxe Capital AI Workforce Floor Visual)                     |
| [02 Watchlists]        | +---------------------------------------------------------------------+ |
| [03 Markets]           | |  [Market Pod] ----(collaboration network)----> [Risk Node: Omega]   | |
| [04 Options Hub]       | |       |                                            |                | |
| [05 Crypto]            | |  [News Raven] -------------------------------> [CEO B Tower]        | |
| [06 Catalysts]         | +---------------------------------------------------------------------+ |
| [07 Research]          |                                                                         |
| [08 Portfolio Research]| (Left: Roster Telemetry) (Center: Active Missions) (Right: Review Stack) |
| [09 Asset Detail]      | +----------------------+ +-----------------------+ +------------------+ |
| [10 AI Habitat OS]     | | news-raven: active   | | mission-aapl-options| | review-qqq: high | |
|                        | | risk-guard: scanning | | Status: waiting CEO  | | status: waiting  | |
|                        | +----------------------+ +-----------------------+ +------------------+ |
+--------------------------------------------------------------------------------------------------+
```

* **Page Purpose**: Interactive operations layout monitoring simulated multi-agent telemetry and review stacks.
* **Top Status Chips**: `[Telemetry Active]`, `[No Auto-Trading]`, `[Local Simulation]`.
* **Left Panel**: Interactive agent roster display (name, role, current scan target, confidence score).
* **Center Panel**: The collaborative mission board detailing workflows and target deliverables.
* **Right Panel**: Review stack cards ready for manual human approval.
* **Bottom Panel**: Archive intake controller (allows users to index, search, and catalog imported folders).
* **Involved Agents**: `CEO B`, `System Brain`, `Task Smith`, `Archive Keeper`.
* **Data Sources**: Local registry JSON database files, search indexes.
* **Safe Actions**: `Inspect Agent Telemetry`, `Approve Research Slips`, `Quarantine Bookmark Files`.
* **Forbidden Actions**: `Deploy Autonomous Live Bots`, `Expose Server Credentials`.
* **LocalStorage Keys**: `pickaxeOperatingAgents`, `pickaxeReviewQueueState`.
