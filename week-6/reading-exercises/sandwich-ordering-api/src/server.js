"use strict";
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === "/order" && req.method === "POST") {
    const item = query.item;
    res.writeHead(201);
    res.end(`Order for ${item} has been placed.`);
  } else if (pathname === "/checkout" && req.method === "GET") {
    res.writeHead(200);
    res.end("Checkout page.");
  } else if (pathname === "/confirm" && req.method === "POST") {
    res.writeHead(200);
    res.end("Order has been confirmed.");
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000);

module.exports = server;