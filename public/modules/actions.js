/**
 * Actions module - handles user interactions and state mutations
 */

import { state, updateAlert, updateChecklist } from "./state.js";
import { route } from "./router.js";

let layoutFn = null;

/**
 * Set layout function for re-renders after actions
 * @param {Function} fn - Layout function
 */
export function setLayout(fn) {
  layoutFn = fn;
}

/**
 * Wire up action handlers (approve, reject, review, checklist)
 */
export function wireActions() {
  // CEO B Approve button
  document.querySelectorAll("[data-approve]").forEach(btn => {
    btn.addEventListener("click", handleApprove);
  });

  // Risk Reject button
  document.querySelectorAll("[data-reject]").forEach(btn => {
    btn.addEventListener("click", handleReject);
  });

  // Send to Review button
  document.querySelectorAll("[data-review]").forEach(btn => {
    btn.addEventListener("click", handleReview);
  });

  // Checklist checkboxes
  document.querySelectorAll("[data-check]").forEach(input => {
    input.addEventListener("change", handleChecklistChange);
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
