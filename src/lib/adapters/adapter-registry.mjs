import { MarketDataAdapter } from "./market-data-adapter.mjs";
import { OptionsFlowAdapter } from "./options-flow-adapter.mjs";
import { NewsRiskAdapter } from "./news-risk-adapter.mjs";
import { BookmarkAdapter } from "./bookmark-adapter.mjs";
import { AiReviewAdapter } from "./ai-review-adapter.mjs";
import { GithubProjectAdapter } from "./github-project-adapter.mjs";

/**
 * @fileoverview Main Registry compiling all future Adapters for Pickaxe Capital / AI Habitat OS.
 */
export const AdapterRegistry = [
  MarketDataAdapter,
  OptionsFlowAdapter,
  NewsRiskAdapter,
  BookmarkAdapter,
  AiReviewAdapter,
  GithubProjectAdapter
];

export {
  MarketDataAdapter,
  OptionsFlowAdapter,
  NewsRiskAdapter,
  BookmarkAdapter,
  AiReviewAdapter,
  GithubProjectAdapter
};
