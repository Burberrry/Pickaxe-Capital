window.PICKAXE_DEMO_DATA = {
  meta: {
    version: "3.1",
    mode: "demo",
    label: "Demo Data",
    warning: "For product demonstration only. No fake live prices. Research only. Not financial advice.",
    lastUpdated: "Demo timestamp required before production use."
  },

  qqqResearchCard: {
    id: "PC-DEMO-QQQ-001",
    ticker: "QQQ",
    assetType: "ETF",
    status: "needs_review",
    bias: "watch",
    timeframe: "swing",
    setupType: "mean_reversion_watch",
    marketRegime: "mixed",
    demoLabel: "Demo Data",

    thesis: {
      oneLine: "QQQ is shown as a demo watch candidate to demonstrate the Pickaxe review workflow.",
      time: "Timing requires verification before public research output.",
      trend: "Trend context is placeholder-only until chart levels are verified.",
      theme: "Technology and AI leadership themes require current source review.",
      whyNow: "Used only to demonstrate the research workflow.",
      confirm: "Requires verified price, chart level, source timestamp, and risk review.",
      invalidate: "No verified invalidation yet; Risk Gate blocks approval."
    },

    levels: {
      currentPrice: { value: null, status: "source_required", sourceId: null, timestamp: null },
      trigger: "Source Required",
      confirmation: "Source Required",
      invalidation: "Source Required",
      targetZone: "Source Required",
      riskZone: "Source Required"
    },

    optionsContext: {
      contractType: "watch_only",
      expirationContext: "Demo only. No contract selected.",
      ivContext: "Source Required",
      openInterest: "Source Required",
      volume: "Source Required",
      bidAskSpread: "Source Required",
      liquidityStatus: "unknown",
      warning: "Options involve substantial risk and may expire worthless."
    },

    statuses: {
      sourceLedger: "unverified",
      silenceGate: "needs_more_evidence",
      riskGate: "not_passed",
      blackSwanMode: "inactive",
      ceoBReview: "needs_review",
      publicOutputAllowed: false
    },

    publicFooter: "Research only. Not financial advice. No trade execution. No guaranteed outcomes."
  },

  sourceLedger: [
    {
      sourceId: "SRC-DEMO-001",
      name: "Broker Platform Screenshot",
      type: "manual",
      category: "price",
      status: "needs_manual_check",
      dataPoint: "QQQ current price",
      value: null,
      freshness: "unknown",
      reliability: "manual",
      conflictStatus: "none",
      screenshotRequired: true,
      timestampRequired: true,
      approvedForPublicOutput: false,
      notes: "Manual broker screenshot required before any live market number appears."
    },
    {
      sourceId: "SRC-DEMO-002",
      name: "TradingView Screenshot",
      type: "manual",
      category: "chart",
      status: "needs_manual_check",
      dataPoint: "QQQ chart level",
      value: null,
      freshness: "unknown",
      reliability: "manual",
      conflictStatus: "none",
      screenshotRequired: true,
      timestampRequired: true,
      approvedForPublicOutput: false,
      notes: "Chart levels must be verified before visual generation."
    },
    {
      sourceId: "SRC-DEMO-003",
      name: "Options Chain Source",
      type: "manual",
      category: "options",
      status: "unverified",
      dataPoint: "IV, OI, volume, spread",
      value: null,
      freshness: "unknown",
      reliability: "unknown",
      conflictStatus: "none",
      screenshotRequired: true,
      timestampRequired: true,
      approvedForPublicOutput: false,
      notes: "No options contract can be referenced until liquidity and spread are verified."
    },
    {
      sourceId: "SRC-DEMO-004",
      name: "Macro Context Source",
      type: "manual",
      category: "macro",
      status: "source_required",
      dataPoint: "Rates / dollar / volatility context",
      value: null,
      freshness: "unknown",
      reliability: "unknown",
      conflictStatus: "none",
      screenshotRequired: false,
      timestampRequired: true,
      approvedForPublicOutput: false,
      notes: "Macro context must be timestamped before inclusion."
    },
    {
      sourceId: "SRC-DEMO-005",
      name: "News / Theme Source",
      type: "manual",
      category: "news",
      status: "source_required",
      dataPoint: "Technology / AI theme context",
      value: null,
      freshness: "unknown",
      reliability: "unknown",
      conflictStatus: "none",
      screenshotRequired: false,
      timestampRequired: true,
      approvedForPublicOutput: false,
      notes: "Theme claims must cite source quality and timestamp."
    }
  ],

  agentNotes: [
    {
      agent: "Time Agent",
      status: "needs_data",
      note: "Session timing, expiration context, and catalyst calendar require verification.",
      escalation: "Send to CEO B only after Source Ledger has timestamps."
    },
    {
      agent: "Trend Agent",
      status: "needs_chart_verification",
      note: "Trend structure cannot be approved without verified chart level and screenshot.",
      escalation: "Block visual output until chart data is timestamped."
    },
    {
      agent: "Options Flow Agent",
      status: "blocked",
      note: "IV, open interest, volume, and bid/ask spread are unverified.",
      escalation: "Risk Gate blocks any options-specific language."
    }
  ],

  silenceGate: {
    status: "not_passed",
    decision: "needs_more_evidence",
    reason: "Insufficient verified evidence. No Output is valid until sources are verified.",
    allowedNextStates: ["watch_only", "no_output", "source_conflict", "risk_gate_no_go", "needs_ceo_b_review"]
  },

  blackSwanMode: {
    active: false,
    status: "normal",
    reason: "No extreme volatility condition represented in demo data.",
    rule: "If extreme conditions appear, confidence scores are downgraded and CEO B escalation is required."
  },

  riskGate: {
    status: "not_passed",
    overallRating: "unknown",
    hardStops: [
      "No verified current price",
      "No verified chart level",
      "No invalidation",
      "Options liquidity unverified",
      "No CEO B final review"
    ],
    softWarnings: ["Demo data only", "Market regime unverified", "Theme context unverified"],
    passFail: "fail",
    ceoBEscalation: true
  },

  ceoBReview: {
    status: "needs_review",
    allowedActions: ["approve", "reject", "edit", "archive", "escalate", "no_output"],
    currentDecision: null,
    checklist: [
      "Is the price verified?",
      "Is the chart level verified?",
      "Is the source timestamped?",
      "Is the thesis clear?",
      "Is the invalidation clear?",
      "Is the risk honest?",
      "Is options liquidity acceptable?",
      "Is the language non-hype?",
      "Is the disclaimer present?",
      "Is there fake certainty?",
      "Would this embarrass the brand if posted publicly?"
    ]
  },

  memoryVault: [
    {
      memoryId: "MEM-DEMO-001",
      tickerOrTopic: "QQQ Demo Flow",
      event: "Demo research card created with unverified market data.",
      whatHappened: "QQQ was used to demonstrate the Pickaxe review workflow.",
      whatSystemSaw: "Source Ledger, Silence Gate, Risk Gate, and CEO B Review are required before approval.",
      whatSystemMissed: "No real market data connected yet.",
      sourceIssue: "Price, chart level, options chain, and macro context are unverified.",
      riskIssue: "No invalidation and no options liquidity verification.",
      timingIssue: "No verified session or catalyst timing.",
      visualIssue: "No visual should include fake market numbers.",
      agentIssue: "Agents can prepare notes but cannot publish.",
      ceoBDecision: "Needs Review",
      outcome: "no_output_correct",
      ruleCreated: "No public output unless Source Ledger, Silence Gate, Risk Gate, and CEO B Review pass.",
      futureAgentTask: "Create verified-source checklist before allowing public visual generation.",
      status: "active"
    }
  ]
};
