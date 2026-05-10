/**
 * Author: Clifford Smith
 * Date: 05/10/2026
 * File Name: jokes-streamer.spec.js
 * Description: Test suite for the JokesStream class. Tests that the stream
 *              outputs jokes correctly in the expected order and format.
 */
"use strict";
const { JokesStream } = require("../src/jokes-streamer");

describe("JokesStream", () => {
  test("should output jokes correctly", (done) => {
    const jokes = [
      "What do you call a fake noodle? An impasta!",
      "What do you call a bear with no teeth? A gummy bear!",
      "Why don't scientists trust atoms? Because they make up everything!"
    ];

    const jokesStream = new JokesStream(jokes.slice().reverse());
    let output = "";

    jokesStream.on("data", (chunk) => {
      output += chunk;
    });

    jokesStream.on("end", () => {
      expect(output).toBe(jokes.join("\n") + "\n");
      done();
    });
  });
});