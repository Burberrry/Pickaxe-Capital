import { AdapterStatuses } from "./adapter-types.mjs";

/**
 * @fileoverview Future Adapter for AI model review (Gemini, OpenAI, Anthropic, Perplexity).
 */
export const AiReviewAdapter = {
  name: "Gemini / OpenAI / Anthropic AI Review Adapter",
  category: "AI Model Review",
  status: AdapterStatuses.ADAPTER_READY,
  requiredCredentials: [
    "GEMINI_API_KEY",
    "OPENAI_API_KEY",
    "ANTHROPIC_API_KEY"
  ],
  supportedMethods: {
    generateBrief: "Send formatted command briefing request to model containing active watchlist stats.",
    reviewSignalPacket: "Submit options setups to AI model for risk filter scoring and invalidation thesis validation.",
    extractArchiveInsights: "Digest long-form pasted bookmark texts to summarize turnaround lessons."
  },
  currentFallbackBehavior: "Uses rules-based static parser (e.g. check-project checklist validation, rules-based alerts filtering).",
  safetyNotes: "Never hardcode AI developer keys in client bundle. All requests must go through backend proxy scripts. Fallback to local heuristic checks when quota or connection is unavailable.",
  frontendSafe: false,

  // Future implementation stub
  async reviewSignalPacket(packet) {
    console.log(`[Adapter - AI Review] Mocking AI review for packet: ${packet.symbol}`);
    return {
      approved: true,
      confidence: 85,
      notes: "Heuristic rules check passed."
    };
  }
};
