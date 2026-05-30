export type EmbedStrategy =
  | "link_card_first"
  | "link_card"
  | "official_widget_preferred"
  | "safe_iframe_attempt_with_fallback"
  | "official_x_timeline_with_fallback"
  | "no_embed_private_import_only";

export type IntelligenceSource = {
  id: string;
  name: string;
  url: string;
  category: string;
  priority: "critical" | "high" | "medium" | "low";
  purpose: string;
  placement: string[];
  embedStrategy: EmbedStrategy;
  embedAllowed: boolean | "maybe" | "widget_only";
  status: string;
  responsibleAgent: string;
  archiveUse: string;
  alertUse: string;
  tags: string[];
  fallbackMessage: string;
  adapterName: string;
};

export const intelligenceSourceIds = [
  "investing-futures",
  "perplexity-finance",
  "tradingview-main",
  "tradingview-dfm",
  "perplexity-discover",
  "osiris-map",
  "pizzint-watch",
  "us-debt-clock",
  "glint-terminal",
  "hyperliquid-gold",
  "deitaone-x",
  "netblocks",
  "flightradar24",
  "x-bookmarks",
  "berkshire-1965-report",
  "rk-tools-3",
  "rk-tools-2",
  "rk-extra-reference",
  "public-tracker-sheet",
  "dfv-reddit",
  "wisesheets-rk",
];
