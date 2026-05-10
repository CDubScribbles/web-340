/**
 * Author: Clifford Smith
 * Date: 05/10/2026
 * File Name: jokes-streamer.js
 * Description: A Readable stream that outputs jokes in order. Accepts an
 *              array of jokes in reverse order and pushes them one at a time
 *              using the _read method.
 */
"use strict";
const { Readable } = require("stream");

class JokesStream extends Readable {
  constructor(jokes, options) {
    super(options);
    // Store the reversed jokes array for sequential output
    this.jokes = jokes;
  }

  _read() {
    // If no jokes remain, signal end of stream
    if (this.jokes.length === 0) {
      this.push(null);
    } else {
      // Pop the last joke and push it to the stream with a newline
      this.push(this.jokes.pop() + "\n");
    }
  }
}

module.exports = { JokesStream };