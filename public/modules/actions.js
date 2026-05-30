/**
 * Actions module - handles user interactions, state mutations, and bookmark parsing
 */

import { state, updateAlert, updateChecklist, updateState, saveState } from "./state.js";
import { route } from "./router.js";

const DATA = window.PICKAXE_DATA;
let layoutFn = null;

/**
 * Set layout function for re-renders after actions
 * @param {Function} fn - Layout function
 */
export function setLayout(fn) {
  layoutFn = fn;
}

/**
 * Wire up action handlers (approve, reject, review, checklist, and bookmarks)
 */
export function wireActions() {
  // CEO B Approve button
  document.querySelectorAll("[data-approve]").forEach(btn => {
    btn.removeEventListener("click", handleApprove);
    btn.addEventListener("click", handleApprove);
  });

  // Risk Reject button
  document.querySelectorAll("[data-reject]").forEach(btn => {
    btn.removeEventListener("click", handleReject);
    btn.addEventListener("click", handleReject);
  });

  // Send to Review button
  document.querySelectorAll("[data-review]").forEach(btn => {
    btn.removeEventListener("click", handleReview);
    btn.addEventListener("click", handleReview);
  });

  // Checklist checkboxes
  document.querySelectorAll("[data-check]").forEach(input => {
    input.removeEventListener("change", handleChecklistChange);
    input.addEventListener("change", handleChecklistChange);
  });

  // Bookmarks file upload input
  const fileInput = document.getElementById("bookmarksFile");
  if (fileInput) {
    fileInput.addEventListener("change", handleBookmarksImport);
  }

  // Bookmarks Search Input
  const bmSearch = document.getElementById("bmSearch");
  if (bmSearch) {
    bmSearch.addEventListener("input", (e) => {
      state.bookmarksSearch = e.target.value;
      state.bookmarksPage = 0;
      route(layoutFn);
    });
  }

  // Bookmarks Category Filter
  const bmCat = document.getElementById("bmCatFilter");
  if (bmCat) {
    bmCat.addEventListener("change", (e) => {
      state.bookmarksCategoryFilter = e.target.value;
      state.bookmarksPage = 0;
      route(layoutFn);
    });
  }

  // Bookmarks Trust Filter
  const bmTrust = document.getElementById("bmTrustFilter");
  if (bmTrust) {
    bmTrust.addEventListener("change", (e) => {
      state.bookmarksTrustFilter = e.target.value;
      state.bookmarksPage = 0;
      route(layoutFn);
    });
  }

  // Bookmarks Pagination
  const prevBtn = document.getElementById("prevBmPage");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (state.bookmarksPage > 0) {
        state.bookmarksPage--;
        route(layoutFn);
      }
    });
  }

  const nextBtn = document.getElementById("nextBmPage");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      state.bookmarksPage++;
      route(layoutFn);
    });
  }

  // Individual Bookmark action buttons (Review gates)
  document.querySelectorAll("[data-bm-action]").forEach(btn => {
    btn.addEventListener("click", handleBookmarkDecision);
  });
}

/**
 * Handle CEO B approve action
 * @param {Event} e - Click event
 */
function handleApprove(e) {
  const alertId = e.currentTarget.dataset.approve;
  if (!alertId) return;

  updateAlert(alertId, {
    ceoBDecision: "approved",
    status: "approved_manual_review"
  });

  if (layoutFn) route(layoutFn);
}

/**
 * Handle risk reject action
 * @param {Event} e - Click event
 */
function handleReject(e) {
  const alertId = e.currentTarget.dataset.reject;
  if (!alertId) return;

  updateAlert(alertId, {
    ceoBDecision: "rejected",
    status: "risk_rejected"
  });

  if (layoutFn) route(layoutFn);
}

/**
 * Handle send to review action
 * @param {Event} e - Click event
 */
function handleReview(e) {
  const alertId = e.currentTarget.dataset.review;
  if (!alertId) return;

  updateAlert(alertId, {
    ceoBDecision: "pending",
    status: "ceo_review"
  });

  if (layoutFn) route(layoutFn);
}

/**
 * Handle checklist item toggle
 * @param {Event} e - Change event
 */
function handleChecklistChange(e) {
  const itemId = e.currentTarget.dataset.check;
  if (!itemId) return;

  updateChecklist(itemId, e.currentTarget.checked);
}

/**
 * Classify bookmarks by URL/title patterns
 */
function classifyBookmark(url, title) {
  const combined = `${url} ${title}`.toLowerCase();
  
  if (combined.includes("tradingview") || combined.includes("chart")) return "Market Intelligence";
  if (combined.includes("sec.gov") || combined.includes("insider") || combined.includes("earnings")) return "Company / Stock Research";
  if (combined.includes("debt") || combined.includes("fed") || combined.includes("treasury") || combined.includes("finance.yahoo") || combined.includes("bloomberg") || combined.includes("zerohedge")) return "Macro / Policy";
  if (combined.includes("twitter.com") || combined.includes("x.com") || combined.includes("reddit.com") || combined.includes("instagram") || combined.includes("facebook")) return "Social Sentiment Leads";
  if (combined.includes("investopedia") || combined.includes("education") || combined.includes("course") || combined.includes("learn") || combined.includes("tutorial")) return "Trading Education";
  if (combined.includes("github") || combined.includes("programming") || combined.includes("javascript") || combined.includes("node") || combined.includes("npm") || combined.includes("python") || combined.includes("huggingface")) return "AI / Coding";
  if (combined.includes("localhost") || combined.includes("pickaxe") || combined.includes("codex") || combined.includes("design") || combined.includes("tailwind")) return "Website / Product Lab";
  if (combined.includes("founder") || combined.includes("business") || combined.includes("startups") || combined.includes("saas") || combined.includes("pitch")) return "Founder / Business";
  if (combined.includes("archive") || combined.includes("history") || combined.includes("wiki") || combined.includes("pdf") || combined.includes("report")) return "Archive / Long-Term Knowledge";
  if (combined.includes("personal") || combined.includes("health") || combined.includes("travel") || combined.includes("recipe") || combined.includes("flight")) return "Personal / Life";
  
  if (url.startsWith("file://") || url.startsWith("chrome://")) return "System / Retrieval Junk";
  return "Low Trust / Noise";
}

/**
 * Score bookmarks trust labels
 */
function scoreBookmarkTrust(url, domain) {
  if (url.startsWith("file://") || url.startsWith("chrome://")) return "Retrieval Artifact";
  
  const highTrustDomains = [
    "sec.gov", "treasury.gov", "federalreserve.gov", "bloomberg.com", "reuters.com", "spglobal.com", "wsj.com"
  ];
  if (highTrustDomains.some(d => domain.endsWith(d))) return "Primary";
  
  const analyticalDomains = [
    "tradingview.com", "github.com", "huggingface.co", "arxiv.org", "investopedia.com"
  ];
  if (analyticalDomains.some(d => domain.endsWith(d))) return "Analytical";
  
  const secondaryDomains = [
    "finance.yahoo.com", "marketwatch.com", "cnbc.com", "bloomberg.com", "wikipedia.org"
  ];
  if (secondaryDomains.some(d => domain.endsWith(d))) return "Secondary";
  
  const ugcDomains = [
    "twitter.com", "x.com", "reddit.com", "youtube.com", "instagram.com"
  ];
  if (ugcDomains.some(d => domain.endsWith(d))) return "UGC / Social";
  
  return "Low Trust / Noise";
}

/**
 * Handle Chrome HTML Bookmarks import
 */
function handleBookmarksImport(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    const htmlString = evt.target.result;
    const parsed = parseChromeBookmarks(htmlString);
    
    // Merge or overwrite bookmarks state
    updateState({
      bookmarks: parsed,
      bookmarksPage: 0
    });

    if (layoutFn) route(layoutFn);
  };
  reader.readAsText(file);
}

/**
 * Parse Chrome HTML Bookmarks
 */
function parseChromeBookmarks(htmlString) {
  const bookmarks = [];
  const lines = htmlString.split('\n');
  let folderStack = [];
  
  for (let line of lines) {
    const trimmed = line.trim();
    
    // Track folder paths
    const h3Match = trimmed.match(/<H3[^>]*>(.*?)<\/H3>/i);
    if (h3Match) {
      const folderName = h3Match[1];
      folderStack.push(folderName);
    }
    
    if (trimmed.match(/<\/DL>/i)) {
      folderStack.pop();
    }
    
    // Tokenize A href tags
    const aMatch = trimmed.match(/<A\s+HREF="([^"]+)"[^>]*>(.*?)<\/A>/i);
    if (aMatch) {
      const url = aMatch[1];
      const title = aMatch[2];
      
      const addDateMatch = trimmed.match(/ADD_DATE="(\d+)"/i);
      const addDate = addDateMatch ? new Date(parseInt(addDateMatch[1]) * 1000).toISOString().split('T')[0] : "";
      
      let domain = "";
      try {
        domain = new URL(url).hostname;
      } catch (e) {
        domain = "local-or-invalid";
      }
      
      bookmarks.push({
        id: `BM-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        title: title || url,
        url: url,
        domain: domain,
        folderPath: folderStack.join(" / ") || "Root",
        dateAdded: addDate,
        ceoBDecision: "pending",
        category: classifyBookmark(url, title),
        trustLevel: scoreBookmarkTrust(url, domain),
        isDuplicate: false
      });
    }
  }

  // Exact duplicate detection against itself and existing intelligence/alerts
  const seenUrls = new Set();
  const existingAlertUrls = new Set(state.alerts.map(a => a.thesis && a.thesis.match(/Link: (https?:\/\/[^\s]+)/) ? a.thesis.match(/Link: (https?:\/\/[^\s]+)/)[1] : ""));
  
  bookmarks.forEach(bm => {
    if (seenUrls.has(bm.url) || existingAlertUrls.has(bm.url)) {
      bm.isDuplicate = true;
    } else {
      seenUrls.add(bm.url);
    }
  });

  return bookmarks;
}

/**
 * Handle individual bookmark action promotion (CEO B Review Gates)
 */
function handleBookmarkDecision(e) {
  const btn = e.currentTarget;
  const bmId = btn.dataset.bmId;
  const action = btn.dataset.bmAction;
  
  const bm = state.bookmarks.find(b => b.id === bmId);
  if (!bm) return;

  if (action === "ignore") {
    bm.ceoBDecision = "ignored";
  } else if (action === "archive") {
    bm.ceoBDecision = "archived";
    
    // Promote to Archive Vault Items
    const newArchiveItem = {
      id: `AV-${Math.floor(1000 + Math.random() * 9000)}`,
      title: bm.title,
      url: bm.url,
      domain: bm.domain,
      type: "research",
      topic: bm.category,
      category: bm.category,
      habitat: "Archive",
      status: "active",
      priority: bm.trustLevel === "Primary" ? "high" : "medium",
      connectedAgent: "Archive Keeper",
      summary: `Imported from bookmark folder path: ${bm.folderPath}. Trust: ${bm.trustLevel}.`,
      whySaved: "Saved via manual CEO B review of imported bookmarks.",
      nextAction: "Review tags and attach case notes if needed.",
      tags: ["imported", bm.category.toLowerCase().replace(/[^a-z0-9]/g, "")],
      dateAdded: bm.dateAdded || new Date().toISOString().split('T')[0]
    };
    
    if (!DATA.archiveVaultItems) DATA.archiveVaultItems = [];
    DATA.archiveVaultItems.push(newArchiveItem);
  } else if (action === "signal") {
    bm.ceoBDecision = "promoted";
    
    // Promote to Signals (Option Alerts)
    const newAlert = {
      id: `ALT-${Math.floor(100 + Math.random() * 900)}`,
      ticker: "WATCH", 
      direction: "WAIT",
      strategy: "watch_only",
      expiry: "Manual review",
      strike: bm.title,
      estimatedMid: "N/A",
      spreadQuality: "Watch",
      volume: "N/A",
      openInterest: "N/A",
      impliedVolatility: "N/A",
      delta: "N/A",
      theta: "N/A",
      thesis: `Imported from bookmark folder: ${bm.folderPath}. Link: ${bm.url}`,
      catalyst: "Imported intelligence candidate.",
      invalidation: "N/A",
      targetScenario: "Review setup externally in Webull.",
      riskNotes: ["Manual bookmark import", bm.trustLevel],
      confidence: bm.trustLevel === "Primary" ? 90 : 70,
      status: "watch_only",
      ceoBDecision: "pending",
      disclaimer: "Imported research packet."
    };
    state.alerts.push(newAlert);
  } else if (action === "source") {
    bm.ceoBDecision = "sourced";
    
    // Promote to Data Sources
    const newSource = {
      name: bm.title,
      category: bm.category,
      status: "Manual Import",
      agents: "Bookmark Miner, Market Scout",
      dataType: "User saved link",
      next: "Inspect externally.",
      safety: "No keys required."
    };
    DATA.dataSources.push(newSource);
  }

  saveState();
  if (layoutFn) route(layoutFn);
}
