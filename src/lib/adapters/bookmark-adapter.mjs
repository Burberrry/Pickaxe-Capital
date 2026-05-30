import { AdapterStatuses } from "./adapter-types.mjs";

/**
 * @fileoverview Adapter for Bookmark Intelligence (FileReader bookmarks / X API stubs).
 */
export const BookmarkAdapter = {
  name: "Local HTML Bookmark Miner / API Reader",
  category: "Bookmark Intelligence",
  status: AdapterStatuses.LOCAL, // Set to Local as FileReader bookmark miner runs locally
  requiredCredentials: [
    "X_API_BEARER_TOKEN",
    "X_API_CLIENT_ID",
    "X_API_CLIENT_SECRET"
  ],
  supportedMethods: {
    parseBookmarksHtml: "Extract titles, folders, URLs, and dates from Chrome bookmark HTML file exports.",
    fetchXBookmarksLive: "Connect X account live via OAuth 2.0 to sync bookmarked research leads.",
    deduplicateBookmarks: "Run URL normalization and deduplicate repeating bookmarks."
  },
  currentFallbackBehavior: "Processes bookmark exports locally via FileReader in-browser. No database uploads.",
  safetyNotes: "Reads user-supplied bookmarks HTML files. Runs in-memory. Zero network traffic. Future live X sync requires client credentials.",
  frontendSafe: true,

  // Future implementation stub
  parseBookmarksHtml(htmlString) {
    console.log(`[Adapter - Bookmark] Processing HTML string (length: ${htmlString.length})`);
    return [];
  }
};
