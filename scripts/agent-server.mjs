import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { PORT } from "../src/agent-ecosystem/config.mjs";
import { getRoutes, getHabitat, runMission } from "../src/agent-ecosystem/route-engine.mjs";
import { readMemory } from "../src/agent-ecosystem/memory-store.mjs";
import { createIssue } from "../src/agent-ecosystem/github-tools.mjs";

const root = path.resolve("public");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml"
};

const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin"
};

/**
 * Helper to read JSON request body
 */
function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", (err) => { reject(err); });
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = decodeURIComponent(url.pathname);

  // API Endpoints
  if (pathname.startsWith("/api/")) {
    res.writeHead(200, { "Content-Type": "application/json", ...securityHeaders });

    try {
      if (pathname === "/api/status" && req.method === "GET") {
        const memory = readMemory();
        res.end(JSON.stringify({
          status: "online",
          uptime: process.uptime(),
          nodesCount: 15,
          activeAgents: 8,
          totalMissionsPlanned: memory.missions.length,
          timestamp: new Date().toISOString()
        }));
        return;
      }

      if (pathname === "/api/routes" && req.method === "GET") {
        res.end(JSON.stringify(getHabitat()));
        return;
      }

      if (pathname === "/api/memory" && req.method === "GET") {
        res.end(JSON.stringify(readMemory()));
        return;
      }

      if (pathname === "/api/mission" && req.method === "POST") {
        const body = await readJsonBody(req);
        if (!body.goal) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Missing required parameter: goal" }));
          return;
        }
        const packet = await runMission(body.goal);
        res.end(JSON.stringify(packet));
        return;
      }

      if (pathname === "/api/github/issue" && req.method === "POST") {
        const body = await readJsonBody(req);
        if (!body.title || !body.body) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Missing parameters: title and body" }));
          return;
        }
        const result = await createIssue(body.title, body.body);
        res.end(JSON.stringify(result));
        return;
      }

      // Default API 404
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "API route not found" }));
      return;
    } catch (e) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Server error", message: e.message }));
      return;
    }
  }

  // Static files serving
  let filePath = path.join(root, pathname);

  // Serve /agent-os.html by default for root-level `/agent-os` or `/agent-os.html`
  if (pathname === "/agent-os" || pathname === "/agent-os.html") {
    filePath = path.join(root, "agent-os.html");
  } else if (pathname === "/" || !path.extname(filePath)) {
    // If not a file extension, SPA route fallback to index.html
    filePath = path.join(root, "index.html");
  }

  // Prevent path traversal
  if (!filePath.startsWith(root)) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("Forbidden");
    return;
  }

  // File exists check
  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
    return;
  }

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || "application/octet-stream";

  res.writeHead(200, {
    "Content-Type": contentType,
    "Cache-Control": "public, max-age=3600",
    ...securityHeaders
  });

  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`Pickaxe Agent City OS running at http://localhost:${PORT}`);
  console.log(`Open http://localhost:${PORT}/agent-os.html by default`);
  console.log(`Press Ctrl+C to stop`);
});
