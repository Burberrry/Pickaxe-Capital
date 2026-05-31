import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

function sanitizeAlert(alert) {
  // Unsafe field rename plan
  if (alert.entry) {
    alert.watchCriteria = alert.entry;
    delete alert.entry;
  }
  if (alert.thesis) {
    alert.researchContext = alert.thesis;
    delete alert.thesis;
  }
  if (alert.alertType) {
    alert.alertType = String(alert.alertType)
      .replace(/Bullish options idea/gi, "Options flow research candidate")
      .replace(/Bearish options idea/gi, "Options flow research candidate")
      .replace(/Real-Time Options Alert/gi, "Options-flow research candidate");
  }
  if (alert.limitMax !== undefined) {
    alert.priceContextMax = alert.limitMax;
    delete alert.limitMax;
  }
  if (alert.invalidation) {
    alert.invalidationResearchNote = alert.invalidation;
    delete alert.invalidation;
  }
  if (alert.target) {
    alert.reviewScenario = alert.target;
    delete alert.target;
  }
  if (alert.order) {
    alert.researchPacket = alert.order;
    delete alert.order;
  }
  if (alert.signal) {
    alert.researchCandidate = alert.signal;
    delete alert.signal;
  }
  if (alert.execution) {
    alert.manualReview = alert.execution;
    delete alert.execution;
  }
  if (alert.tradeSetup) {
    alert.researchPacket = alert.tradeSetup;
    delete alert.tradeSetup;
  }
  if (alert.realTimeOptionsAlert) {
    alert.optionsFlowResearchCandidate = alert.realTimeOptionsAlert;
    delete alert.realTimeOptionsAlert;
  }

  // Add required safety fields
  alert.researchOnly = true;
  alert.manualReviewRequired = true;
  alert.brokerExecution = false;
  alert.autoTrading = false;
  alert.bettingExecution = false;
  alert.providerConnected = false;
  alert.noFakeLiveData = true;
  if (!alert.status || alert.status.includes("approved")) {
    alert.status = "Needs CEO B Review";
  } else {
    alert.status = "Research Candidate";
  }
  alert.safetyLabel = "Research Only — No Broker Execution";
  alert.demoStatic = true;
  alert.generatedResearchSampleOnly = true;

  const forbiddenMap = [
    { regex: /\bbuy call\b/gi, replace: "watch call" },
    { regex: /\bbuy puts\b/gi, replace: "watch puts" },
    { regex: /\bbuy strength\b/gi, replace: "watch strength" },
    { regex: /\bbuy\b/gi, replace: "watch" },
    { regex: /\bsell\b/gi, replace: "trim" },
    { regex: /\bentry\b/gi, replace: "watch criteria" },
    { regex: /\benter\b/gi, replace: "observe" },
    { regex: /\bexecute\b/gi, replace: "manual review" },
    { regex: /\bplace order\b/gi, replace: "verify packet" },
    { regex: /\bcopy trade\b/gi, replace: "manual review" },
    { regex: /\block\b/gi, replace: "confirm" },
    { regex: /\bguaranteed\b/gi, replace: "potential" },
    { regex: /\bbet\b/gi, replace: "research option" },
    { regex: /\bwager\b/gi, replace: "research option" },
    { regex: /\ball-in\b/gi, replace: "defined risk" },
    { regex: /\btrade now\b/gi, replace: "paper review only" },
    { regex: /\bplace bet\b/gi, replace: "verify news" },
    { regex: /\bguaranteed win\b/gi, replace: "high probability setup" },
    { regex: /\bguaranteed return\b/gi, replace: "defined premium risk" },
    { regex: /\buse a limit\b/gi, replace: "limit context" },
    { regex: /\bpushes toward\b/gi, replace: "crosses" },
    { regex: /\bmust take\b/gi, replace: "may review" },
    { regex: /\bshould buy\b/gi, replace: "can watch" },
    { regex: /\bshould sell\b/gi, replace: "can trim" },
    { regex: /\bhigh-conviction trade\b/gi, replace: "options-flow research candidate" },
    { regex: /\bexecution alert\b/gi, replace: "CEO B mobile review packet" },
  ];

  for (const key of Object.keys(alert)) {
    if (typeof alert[key] === "string") {
      let val = alert[key];
      for (const { regex, replace } of forbiddenMap) {
        val = val.replace(regex, replace);
      }
      alert[key] = val;
    } else if (Array.isArray(alert[key])) {
      alert[key] = alert[key].map(item => {
        if (typeof item === "string") {
          let val = item;
          for (const { regex, replace } of forbiddenMap) {
            val = val.replace(regex, replace);
          }
          return val;
        }
        return item;
      });
    }
  }

  if (alert.action) {
    alert.action = String(alert.action)
      .replace(/BUY CALL/gi, "WATCH CALL")
      .replace(/BUY STRENGTH/gi, "WATCH STRENGTH")
      .replace(/BUY/gi, "WATCH")
      .replace(/SELL/gi, "TRIM");
  }

  return alert;
}

async function run() {
  console.log("Starting data sanitization...");

  // 1. Sanitize data/signal-alerts.json
  const pathSignalAlerts = join(root, "data", "signal-alerts.json");
  try {
    const rawData = await readFile(pathSignalAlerts, "utf8");
    const data = JSON.parse(rawData);
    if (Array.isArray(data)) {
      for (const run of data) {
        if (Array.isArray(run.signals)) {
          run.signals = run.signals.map(sanitizeAlert);
        }
      }
      await writeFile(pathSignalAlerts, JSON.stringify(data, null, 2), "utf8");
      console.log("Sanitized data/signal-alerts.json successfully.");
    }
  } catch (err) {
    console.error("Error sanitizing data/signal-alerts.json:", err);
  }

  // 2. We will programmatically update the arrays in app.js and server.mjs when we build or rewrite.
  console.log("Done.");
}

run();
