window.PICKAXE_DATA = {
  company: {
    name: "Pickaxe Capital",
    product: "Market Habitat",
    commander: "CEO B",
    mode: "Static Prototype",
    safety: "Research Only / Manual Review"
  },

  optionAlertPackets: [
    {
      id: "ALT-001",
      ticker: "NVDA",
      direction: "CALL",
      strategy: "debit_spread",
      expiry: "Demo 2026-07-17",
      strike: "Demo 320/330C",
      estimatedMid: "Demo only",
      spreadQuality: "Watch",
      volume: "Demo static",
      openInterest: "Demo static",
      impliedVolatility: "Demo static",
      delta: "Demo static",
      theta: "Demo static",
      thesis: "Momentum candidate only if broader tech regime confirms strength.",
      catalyst: "AI semiconductor news cycle and earnings-watch pressure.",
      invalidation: "Reject if price loses key trend level or spread widens.",
      targetScenario: "Manual review candidate; no trade execution inside site.",
      riskNotes: ["Demo data only", "Risk Sentinel requires liquidity confirmation", "CEO B approval required"],
      confidence: 82,
      status: "ceo_review",
      ceoBDecision: "pending",
      disclaimer: "Research-only demo packet. Not financial advice."
    },
    {
      id: "ALT-002",
      ticker: "SPY",
      direction: "PUT",
      strategy: "watch_only",
      expiry: "Demo 2026-06-20",
      strike: "Demo 520P",
      estimatedMid: "Demo only",
      spreadQuality: "Reject until confirmed",
      volume: "Demo static",
      openInterest: "Demo static",
      impliedVolatility: "Demo static",
      delta: "Demo static",
      theta: "Demo static",
      thesis: "Downside hedge candidate only if macro regime turns risk-off.",
      catalyst: "Rates, dollar strength, and index breadth deterioration.",
      invalidation: "Reject if breadth recovers and volatility fades.",
      targetScenario: "Watch-only candidate.",
      riskNotes: ["No automatic trading", "Requires spread and volume checks", "Avoid oversized exposure"],
      confidence: 71,
      status: "watch_only",
      ceoBDecision: "pending",
      disclaimer: "Research-only demo packet. Not financial advice."
    },
    {
      id: "ALT-003",
      ticker: "AAPL",
      direction: "WAIT",
      strategy: "watch_only",
      expiry: "Demo 2026-08-21",
      strike: "No strike selected",
      estimatedMid: "N/A",
      spreadQuality: "Risk rejected",
      volume: "Demo static",
      openInterest: "Demo static",
      impliedVolatility: "Demo static",
      delta: "N/A",
      theta: "N/A",
      thesis: "Setup lacks catalyst and confirmation.",
      catalyst: "No strong catalyst found in demo data.",
      invalidation: "Already rejected.",
      targetScenario: "Archive and revisit later.",
      riskNotes: ["No catalyst", "No invalidation", "Risk Sentinel rejected"],
      confidence: 44,
      status: "risk_rejected",
      ceoBDecision: "rejected",
      disclaimer: "Research-only demo packet. Not financial advice."
    }
  ],

  agentPipeline: [
    { id: "ceo-b", name: "CEO B", role: "Masked billionaire commander", habitat: "Command Floor", inputs: "All approved packets", outputs: "Approve / reject / hold", status: "Manual Review", confidence: 100, route: "/mission-control", riskFlag: "Final human gate" },
    { id: "market-scout", name: "Market Scout", role: "Finds tickers worth watching", habitat: "Watchtower", inputs: "Watchlists, sectors, momentum", outputs: "Ticker candidates", status: "Demo Online", confidence: 84, route: "/signals", riskFlag: "No live data" },
    { id: "flow-hunter", name: "Options Flow Hunter", role: "Checks chains, spreads, volume, OI", habitat: "Trading Floor", inputs: "Options chain adapter", outputs: "Flow quality score", status: "Future Adapter", confidence: 76, route: "/data-sources", riskFlag: "Requires real provider" },
    { id: "catalyst-analyst", name: "Catalyst Analyst", role: "Reads events, earnings, macro triggers", habitat: "Research Library", inputs: "News and calendar sources", outputs: "Catalyst summary", status: "Demo Online", confidence: 80, route: "/signals", riskFlag: "Manual verification" },
    { id: "technical-strategist", name: "Technical Strategist", role: "Maps trend, levels, invalidation", habitat: "Chart Room", inputs: "Charts and levels", outputs: "Setup score", status: "Demo Online", confidence: 79, route: "/signals", riskFlag: "No fake live charts" },
    { id: "macro-watcher", name: "Macro Watcher", role: "Monitors rates, indices, dollar, oil", habitat: "Macro Dome", inputs: "Macro dashboard", outputs: "Regime score", status: "Future Adapter", confidence: 70, route: "/data-sources", riskFlag: "Static until connected" },
    { id: "risk-sentinel", name: "Risk Sentinel", role: "Rejects unsafe or weak setups", habitat: "Risk Gate", inputs: "All candidate packets", outputs: "Pass / reject", status: "Active Demo", confidence: 95, route: "/risk-rules", riskFlag: "Hard gate" },
    { id: "compliance-guard", name: "Compliance Guard", role: "Forces research-only language", habitat: "Disclosure Vault", inputs: "Alert copy", outputs: "Safe disclosure", status: "Active Demo", confidence: 98, route: "/compliance", riskFlag: "No advice language" }
  ],

  riskRules: [
    { rule: "Bid/ask spread too wide", action: "Reject or watch-only", severity: "High" },
    { rule: "Open interest too low", action: "Reject until liquid", severity: "High" },
    { rule: "Volume too low", action: "Reject or hold", severity: "Medium" },
    { rule: "IV crush risk unclear", action: "Force manual review", severity: "High" },
    { rule: "No catalyst", action: "Reject", severity: "Medium" },
    { rule: "No invalidation level", action: "Reject", severity: "High" },
    { rule: "Confidence below 70", action: "Archive as weak idea", severity: "Medium" },
    { rule: "CEO B not approved", action: "Do not publish alert", severity: "Critical" }
  ],

  dataSources: [
    { name: "Tradier Options Chains", category: "Options chain", status: "Future Adapter", agents: "Flow Hunter, Risk Sentinel", dataType: "Greeks, IV, chain, quotes", next: "Create backend API proxy; never expose key in frontend.", safety: "Manual review only." },
    { name: "Alpaca Options / Broker Review", category: "Broker / execution", status: "Future Adapter", agents: "CEO B, Risk Sentinel", dataType: "Account eligibility, manual order review", next: "Keep execution external; no auto-trading.", safety: "No trades placed by website." },
    { name: "Cboe / Hanweck Greeks and IV", category: "Research provider", status: "Research Provider", agents: "Flow Hunter, Macro Watcher", dataType: "IV, Greeks, analytics", next: "Evaluate paid provider later.", safety: "Analytics only." },
    { name: "TradingView Charts", category: "Charts", status: "Manual / Embed", agents: "Technical Strategist", dataType: "Charts and levels", next: "Add embed widget later.", safety: "No fake chart claims." },
    { name: "X Bookmarks", category: "Idea intake", status: "Manual Import", agents: "Market Scout, Catalyst Analyst", dataType: "Links and notes", next: "Upload bookmark exports.", safety: "Unverified until reviewed." },
    { name: "News / Macro Sources", category: "News", status: "Future Adapter", agents: "Catalyst Analyst, Macro Watcher", dataType: "Headlines, macro, calendar", next: "Add trusted source list.", safety: "Citations required." },
    { name: "Archive Uploads", category: "Memory", status: "Local Prototype", agents: "Archive Keeper", dataType: "Docs, notes, links", next: "Create archive importer.", safety: "No private secrets in repo." }
  ],

  complianceDisclosures: [
    "Pickaxe Capital alerts are research-only.",
    "Nothing on this site is financial, investment, tax, or legal advice.",
    "Options involve risk and are not suitable for all investors.",
    "Users must review official options risk disclosures before trading options.",
    "No alert guarantees profit or future performance.",
    "Execution is manual and external to this website.",
    "CEO B review means internal human review, not investment-adviser approval."
  ],

  checklist: [
    { id: "c1", text: "Create Market Habitat shell", done: true },
    { id: "c2", text: "Add agent pipeline", done: true },
    { id: "c3", text: "Add risk rules", done: true },
    { id: "c4", text: "Connect real data through backend later", done: false },
    { id: "c5", text: "Publish only research-only packets", done: false }
  ]
};
