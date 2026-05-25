/**
 * Author: Clifford Smith
 * Date: 5/24/26
 * File Name: comic-books.spec.js
 * Description: Test suite for the ComicBooks class. Tests retrieving comic
 *              book data, handling a missing script, and handling a
 *              failing script using real child processes.
 */
"use strict";
const { ComicBooks } = require("../src/comic-books");

describe("ComicBooks", () => {
  let comicBooks;

  beforeEach(() => {
    comicBooks = new ComicBooks();
  });

  test("should return comic books data", (done) => {
    comicBooks.getComicBooks((data, error) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        { Name: "The Dark Knight Returns", Publisher: "DC Comics", Superhero: "Batman", Villain: "The Joker" },
        { Name: "The Death of Superman", Publisher: "DC Comics", Superhero: "Superman", Villain: "Doomsday" },
      ]);
      done();
    });
  });

  test("should handle an error when the comic books data script is not found", (done) => {
    const comicBooks = new ComicBooks("nonexistent-script.js");
    comicBooks.getComicBooks((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the comic books data script fails", (done) => {
    const comicBooks = new ComicBooks("failing-script.js");
    comicBooks.getComicBooks((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});