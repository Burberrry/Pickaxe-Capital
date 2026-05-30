import { AdapterStatuses } from "./adapter-types.mjs";

/**
 * @fileoverview Future Adapter for Alpaca / Polygon Market Data.
 */
export const MarketDataAdapter = {
  name: "Alpaca / Polygon Market Data Adapter",
  category: "Market Data",
  status: AdapterStatuses.ADAPTER_READY,
  requiredCredentials: [
    "POLYGON_API_KEY",
    "ALPACA_API_KEY",
    "ALPACA_API_SECRET"
  ],
  supportedMethods: {
    getQuotes: "Fetch real-time stock/crypto quote snapshots for a list of symbols.",
    getHistoricalBars: "Retrieve historical candles/bars (e.g. 1m, 1h, 1d resolution) for technical studies.",
    getMarketStatus: "Check exchange holiday, active session, and early close status."
  },
  currentFallbackBehavior: "Loads static/mock values from canonical watchlist (default marketWatchlist in habitat-data.js).",
  safetyNotes: "Read-only data feed. Credentials must be isolated on the backend server environment variables. This adapter does not place trades or access brokerage cash balances.",
  frontendSafe: false,

  // Future implementation stub
  async getQuotes(symbols) {
    console.log(`[Adapter - Market Data] Mocking getQuotes for symbols: ${symbols.join(", ")}`);
    return symbols.map(sym => ({
      symbol: sym,
      price: 150.00 + Math.random() * 10,
      timestamp: Date.now(),
      mode: "Mock Fallback"
    }));
  }
};
