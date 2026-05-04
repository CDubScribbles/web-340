/**
 * Author: Clifford Smith
 * Date: 5/3/26
 * File Name: server.spec.js
 * Description: Tests for the fantasy game character creation server. Checks POST /create, POST /confirm, and GET /character routes.
 */
"use strict";
const http = require("http");
const server = require("../src/server");

describe("Fantasy Game Character Creation", () => {
  // Close the server after all tests have run
  afterAll(() => {
    server.close();
  });

  // Test that POST /create responds with 201 and correct character details
  test("POST /create creates a character with query parameters", done => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/create?class=Warrior&gender=Male&funFact=I%20love%20dragons",
      method: "POST"
    };
    const req = http.request(options, res => {
      let data = "";
      // Collect response chunks
      res.on("data", chunk => {
        data += chunk;
      });
      // Verify status code and response body once all data is received
      res.on("end", () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe("Character created: Warrior, Male, I love dragons");
        done();
      });
    });
    req.end();
  });

  // Test that POST /confirm responds with 200 and confirmation message
  test("POST /confirm confirms the character creation", done => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/confirm",
      method: "POST"
    };
    const req = http.request(options, res => {
      let data = "";
      // Collect response chunks
      res.on("data", chunk => {
        data += chunk;
      });
      // Verify status code and response body once all data is received
      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("Character creation confirmed!");
        done();
      });
    });
    req.end();
  });

  // Test that GET /character responds with 200 and the created character's details
  test("GET /character returns the created character", done => {
    http.get("http://localhost:3000/character", res => {
      let data = "";
      // Collect response chunks
      res.on("data", chunk => {
        data += chunk;
      });
      // Verify status code and response body once all data is received
      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("Character: Warrior, Male, I love dragons");
        done();
      });
    });
  });
});