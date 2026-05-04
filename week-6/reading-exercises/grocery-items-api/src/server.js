"use strict";
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/grocery" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ items: ["apple", "banana", "carrot"] }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000);

module.exports = server;