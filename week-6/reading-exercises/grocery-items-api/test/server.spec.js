"use strict";
const http = require("http");
const server = require("../src/server");

describe("server", () => {
  afterAll(() => {
    server.close();
  });

  test("responds with grocery items in JSON format", done => {
    http.get("http://localhost:3000/grocery", res => {
      let data = "";
      res.on("data", chunk => {
        data += chunk;
      });
      res.on("end", () => {
        expect(JSON.parse(data)).toEqual({ items: ["apple", "banana", "carrot"] });
        done();
      });
    });
  });
});