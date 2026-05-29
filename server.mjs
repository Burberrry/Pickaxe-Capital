import http from "node:http";
import { readFile } from "node:fs/promises";
import { createReadStream, existsSync } from "node:fs";
import path from "node:path";

const PORT = process.env.PORT || 4328;
const root = path.resolve("public");

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml"
};

/**
 * Security and caching headers
 */
const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin"
};

/**
 * Get cache control header based on file type
 */
function getCacheControl(ext) {
  if (ext === ".html") return "public, max-age=3600"; // 1 hour for HTML
  if ([".js", ".css", ".png", ".jpg", ".svg"].includes(ext)) {
    return "public, max-age=31536000"; // 1 year for assets
  }
  return "public, max-age=86400"; // 1 day default
}

/**
 * Styled 404 page
 */
const notFoundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>404 Not Found</title>
  <style>
    body { 
      margin: 0; 
      padding: 20px;
      font-family: Inter, system-ui, sans-serif;
      background: linear-gradient(135deg, #030406, #07101a);
      color: #f4efe4;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    div {
      text-align: center;
      max-width: 500px;
    }
    h1 { font-size: 48px; margin: 0 0 10px; letter-spacing: -0.05em; }
    p { color: #94a3b3; margin: 0 0 20px; line-height: 1.6; }
    a { 
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background: linear-gradient(180deg, #2266c9, #0a3373);
      border: 1px solid rgba(58,130,255,.48);
      color: white;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 800;
    }
    a:hover { border-color: rgba(255,255,255,.34); }
  </style>
</head>
<body>
  <div>
    <h1>404</h1>
    <p>This research packet does not exist in the habitat.</p>
    <a href="/">Return to Command Center</a>
  </div>
</body>
</html>`;

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  let filePath = path.join(root, decodeURIComponent(url.pathname));
  
  // SPA routing: fallback to index.html for non-file routes
  if (url.pathname === "/" || !path.extname(filePath)) {
    filePath = path.join(root, "index.html");
  }

  // Security: prevent path traversal
  if (!filePath.startsWith(root)) {
    res.writeHead(403, securityHeaders);
    res.end("Forbidden");
    return;
  }

  // File exists check
  if (!existsSync(filePath)) {
    res.writeHead(404, { 
      "Content-Type": "text/html; charset=utf-8",
      ...securityHeaders 
    });
    res.end(notFoundHtml);
    return;
  }

  const ext = path.extname(filePath);
  const contentType = mime[ext] || "application/octet-stream";
  const cacheControl = getCacheControl(ext);

  // Set headers
  res.writeHead(200, {
    "Content-Type": contentType,
    "Cache-Control": cacheControl,
    ...securityHeaders
  });

  // Stream the file
  createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`Pickaxe Capital Market Habitat running at http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop`);
});
