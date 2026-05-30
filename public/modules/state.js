/**
 * State management module
 * Handles app state, localStorage persistence, and safe mutations
 */

const DATA = window.PICKAXE_DATA;

// Initialize state from localStorage or defaults
export const state = {
  alerts: JSON.parse(localStorage.getItem("pickaxe.alerts") || "null") || DATA.optionAlertPackets,
  checklist: JSON.parse(localStorage.getItem("pickaxe.checklist") || "null") || DATA.checklist,
  bookmarks: JSON.parse(localStorage.getItem("pickaxe.bookmarks") || "null") || [],
  bookmarksSearch: "",
  bookmarksCategoryFilter: "all",
  bookmarksTrustFilter: "all",
  bookmarksPage: 0,
  version: 1 // For future migrations
};

/**
 * Safe state mutation helper
 * @param {Object} updates - Object with state updates
 */
export function updateState(updates) {
  Object.assign(state, updates);
  saveState();
}

/**
 * Safe mutation for alerts array
 * @param {string} alertId - Alert ID to update
 * @param {Object} changes - Properties to update
 */
export function updateAlert(alertId, changes) {
  const alert = state.alerts.find(a => a.id === alertId);
  if (!alert) return;
  Object.assign(alert, changes);
  saveState();
}

/**
 * Safe mutation for checklist items
 * @param {string} itemId - Checklist item ID to update
 * @param {boolean} done - Completion status
 */
export function updateChecklist(itemId, done) {
  const item = state.checklist.find(i => i.id === itemId);
  if (!item) return;
  item.done = done;
  saveState();
}

/**
 * Persist state to localStorage with error handling
 */
export function saveState() {
  try {
    localStorage.setItem("pickaxe.alerts", JSON.stringify(state.alerts));
    localStorage.setItem("pickaxe.checklist", JSON.stringify(state.checklist));
    localStorage.setItem("pickaxe.bookmarks", JSON.stringify(state.bookmarks));
    localStorage.setItem("pickaxe.version", state.version.toString());
  } catch (e) {
    console.warn("Failed to save state to localStorage:", e);
    // Silently fail - app continues to work, just no persistence
  }
}

/**
 * Recovery helper for corrupted localStorage
 */
export function recoverState() {
  try {
    const alerts = JSON.parse(localStorage.getItem("pickaxe.alerts"));
    const checklist = JSON.parse(localStorage.getItem("pickaxe.checklist"));
    const bookmarks = JSON.parse(localStorage.getItem("pickaxe.bookmarks"));
    
    if (alerts && Array.isArray(alerts) && alerts.length > 0) {
      state.alerts = alerts;
    }
    if (checklist && Array.isArray(checklist) && checklist.length > 0) {
      state.checklist = checklist;
    }
    if (bookmarks && Array.isArray(bookmarks)) {
      state.bookmarks = bookmarks;
    }
    return true;
  } catch (e) {
    console.warn("Failed to recover state, using defaults:", e);
    // Reset to defaults
    state.alerts = DATA.optionAlertPackets;
    state.checklist = DATA.checklist;
    state.bookmarks = [];
    localStorage.removeItem("pickaxe.alerts");
    localStorage.removeItem("pickaxe.checklist");
    localStorage.removeItem("pickaxe.bookmarks");
    return false;
  }
}

/**
 * Get counts for dashboard
 */
export function getCounts() {
  const pendingBms = state.bookmarks.filter(b => b.ceoBDecision === "pending" || !b.ceoBDecision);
  return {
    total: state.alerts.length,
    pending: state.alerts.filter(a => a.status === "ceo_review").length,
    approved: state.alerts.filter(a => a.ceoBDecision === "approved").length,
    rejected: state.alerts.filter(a => a.status === "risk_rejected").length,
    watch: state.alerts.filter(a => a.status === "watch_only").length,
    sources: DATA.dataSources.length,
    bookmarksCount: state.bookmarks.length,
    bookmarksPending: pendingBms.length
  };
}
