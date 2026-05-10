/**
 * Author: Clifford Smith
 * Date: 05/10/2026
 * File Name: movie-processor.spec.js
 * Description: Test suite for the MovieProcessor class. Tests that the stream
 *              processes movie titles correctly, handles invalid data, and
 *              transforms data correctly when written to.
 */
"use strict";
const { MovieProcessor } = require("../src/movie-processor");

describe("MovieProcessor", () => {
  let movieProcessor;

  beforeEach(() => {
    // Create a fresh instance before each test
    movieProcessor = new MovieProcessor();
  });

  test("should process movie data correctly", (done) => {
    const movies = ["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"];

    movies.forEach(movie => movieProcessor.write(movie));

    movieProcessor.on("data", (data) => {
      const movie = movies.shift();
      expect(data.toString().trim()).toBe(`The movie is titled "${movie}".`);
      if (movies.length === 0) done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    movieProcessor.on("error", (err) => {
      expect(err.message).toBe("Invalid data");
      done();
    });
    movieProcessor.write("");
  });

  test("should transform data correctly when written to", (done) => {
    const movie = "The Matrix";
    const expectedOutput = `The movie is titled "${movie}".`;

    movieProcessor.write(movie, "utf8", () => {
      movieProcessor.on("data", (data) => {
        expect(data.toString().trim()).toBe(expectedOutput);
        done();
      });
    });
  });
});