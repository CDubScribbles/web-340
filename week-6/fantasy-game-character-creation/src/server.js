/**
 * Author: Clifford Smith
 * Date: 5/3/2026
 * File Name: server.js
 * Description: HTTP server for the fantasy game character creation project. Handles three routes: POST /create (accepts class, gender, and funFact query params), POST /confirm, and GET /character. Listens on port 3000.
 */
"use strict";
const http = require("http");
const url = require("url");

// Stores the created character between requests
let character = null;

const server = http.createServer((req, res) => {
  // Parse the URL and extract the pathname and query parameters
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // POST /create - creates a new character from query parameters
  if (pathname === "/create" && req.method === "POST") {
    character = {
      class: query.class,
      gender: query.gender,
      funFact: query.funFact
    };
    res.writeHead(201);
    res.end(`Character created: ${character.class}, ${character.gender}, ${character.funFact}`);

  // POST /confirm - confirms the character creation
  } else if (pathname === "/confirm" && req.method === "POST") {
    res.writeHead(200);
    res.end("Character creation confirmed!");

  // GET /character - returns the details of the created character
  } else if (pathname === "/character" && req.method === "GET") {
    res.writeHead(200);
    res.end(`Character: ${character.class}, ${character.gender}, ${character.funFact}`);

  // Default - returns 404 for unknown routes
  } else {
    res.writeHead(404);
    res.end();
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = server;