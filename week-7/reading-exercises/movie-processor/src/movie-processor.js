/**
 * Author: Clifford Smith
 * Date: 05/10/2026
 * File Name: movie-processor.js
 * Description: A Duplex stream that processes movie titles. Validates input,
 *              formats each title as a sentence, and outputs them sequentially
 *              using an internal queue.
 */
"use strict";
const { Duplex } = require("stream");

class MovieProcessor extends Duplex {
  constructor(options) {
    super(options);
    // Queue stores processed movie titles for sequential output
    this.queue = [];
  }

  _write(chunk, encoding, callback) {
    const movie = chunk.toString().trim();

    // Emit an error if the input is empty
    if (!movie) {
      callback(new Error("Invalid data"));
      return;
    }

    // Format and store the movie title in the queue
    this.queue.push(`The movie is titled "${movie}".`);
    callback();
  }

  _read(size) {
    // Push the next item from the queue, or null if empty
    if (this.queue.length) {
      this.push(this.queue.shift() + "\n");
    } else {
      this.push(null);
    }
  }
}

module.exports = { MovieProcessor };