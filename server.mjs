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

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  let filePath = path.join(root, decodeURIComponent(url.pathname));
  if (url.pathname === "/" || !path.extname(filePath)) {
    filePath = path.join(root, "index.html");
  }

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  if (!existsSync(filePath)) {
    filePath = path.join(root, "index.html");
  }

  const ext = path.extname(filePath);
  res.writeHead(200, { "Content-Type": mime[ext] || "application/octet-stream" });
  createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`Pickaxe Capital Market Habitat running at http://localhost:${PORT}`);
});
