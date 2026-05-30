import { AdapterStatuses } from "./adapter-types.mjs";

/**
 * @fileoverview Future Adapter for Tradier / Unusual Whales Options Flow.
 */
export const OptionsFlowAdapter = {
  name: "Tradier / Unusual Whales Options Flow Adapter",
  category: "Options Flow",
  status: AdapterStatuses.ADAPTER_READY,
  requiredCredentials: [
    "TRADIER_ACCESS_TOKEN",
    "UNUSUAL_WHALES_API_KEY"
  ],
  supportedMethods: {
    getOptionChains: "Retrieve active option chains, strikes, and expirations for a given ticker.",
    getUnusualSweeps: "Poll live unusual option flow sweeps, blocks, block trades, and large institutional sweeps.",
    getOptionGreeks: "Calculate or pull real-time delta, gamma, theta, vega, and implied volatility variables."
  },
  currentFallbackBehavior: "Pulls manual review trade memos and default options packets from localStorage (pickaxeOptionAlerts).",
  safetyNotes: "Options scanning data requires heavy client bandwidth. Credentials must live backend-side. No automated orders are allowed from sweeps.",
  frontendSafe: false,

  // Future implementation stub
  async getUnusualSweeps(limit = 10) {
    console.log(`[Adapter - Options Flow] Mocking unusual sweeps (limit: ${limit})`);
    return [];
  }
};
