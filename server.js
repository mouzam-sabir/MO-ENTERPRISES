/**
 * MO ENTERPRISES — Local Development Server
 * Zero dependencies. Runs on standard Node.js runtime.
 * Usage: node server.js  (or: npm start / npm run dev)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  // Parse URL safely
  const urlPath = req.url.split('?')[0];
  let safePath = path.normalize(urlPath).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  }

  let filePath = path.join(ROOT, safePath);

  fs.stat(filePath, (err, stats) => {
    // If exact file found, serve it
    if (!err && stats.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    // If directory requested, look for index.html
    if (!err && stats.isDirectory()) {
      const indexInDir = path.join(filePath, 'index.html');
      if (fs.existsSync(indexInDir)) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(indexInDir).pipe(res);
        return;
      }
    }

    // SPA Fallback: if not an asset request (no file extension), serve root index.html
    if (!path.extname(urlPath)) {
      const rootIndex = path.join(ROOT, 'index.html');
      if (fs.existsSync(rootIndex)) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(rootIndex).pipe(res);
        return;
      }
    }

    // 404
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`404 Not Found: ${urlPath}`);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`  MO ENTERPRISES Local Server Running!`);
  console.log(`  > Local:   http://localhost:${PORT}`);
  console.log(`  > Network: http://127.0.0.1:${PORT}`);
  console.log(`======================================================\n`);
});
