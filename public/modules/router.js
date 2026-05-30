/**
 * Router module - handles client-side routing and view updates
 */

import { getCleanPath } from "./utils.js";

const routes = {};
let registeredLayoutFn = null;

/**
 * Register a route path and its render function
 * @param {string} path - URL path (e.g., "/" or "/agents")
 * @param {Function} component - Function that returns HTML string
 */
export function registerRoute(path, component) {
  routes[path] = component;
}

/**
 * Route the application based on the current clean path
 * @param {Function} [layoutFn] - Optional layout function to wrap content
 */
export function route(layoutFn) {
  const currentLayout = layoutFn || registeredLayoutFn;
  const path = getCleanPath();
  
  // Find matching route or fallback to "/"
  const renderFn = routes[path] || routes["/"] || (() => `
    <section class="panel">
      <h2>404 Not Found</h2>
      <p>The requested page <code>${path}</code> does not exist.</p>
      <a class="button" href="#/">Return HQ</a>
    </section>
  `);

  const appEl = document.getElementById("app");
  if (appEl && currentLayout) {
    const pageContent = renderFn();
    appEl.innerHTML = currentLayout(pageContent, path);
  }
}

/**
 * Initialize the router with a default layout function
 * @param {Function} layoutFn - Layout function to wrap pages
 */
export function initRouter(layoutFn) {
  registeredLayoutFn = layoutFn;
  
  // Trigger initial route
  route(layoutFn);
}
