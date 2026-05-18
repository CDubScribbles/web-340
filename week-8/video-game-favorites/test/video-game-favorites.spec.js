/**
 * Author: Clifford Smith
 * Date: 5/17/26
 * File Name: video-game-favorites.spec.js
 * Description: Test suite for the video game favorites program. Tests reading
 *              favorite games from a file, writing player ratings to a file,
 *              and handling errors when reading favorite games.
 */
"use strict";
const fs = require('fs').promises;

describe("Video Game Favorites", () => {
  let readFavoriteGames;
  let writePlayerRatings;

  beforeEach(() => {
    jest.resetModules();
    // Mock fs.promises.readFile to return fake game data
    jest.spyOn(fs, 'readFile').mockImplementation(() =>
      Promise.resolve("Game 1\nGame 2\nGame 3\n"));
    // Mock fs.promises.writeFile to simulate a successful write
    jest.spyOn(fs, 'writeFile').mockImplementation(() =>
      Promise.resolve());
    ({ readFavoriteGames, writePlayerRatings } = require('../src/video-game-favorites'));
  });

  test("reads favorite games from a file", async () => {
    const games = await readFavoriteGames();
    expect(games).toEqual(["Game 1", "Game 2", "Game 3"]);
  });

  test("writes player ratings to a file", async () => {
    await expect(writePlayerRatings(["Rating 1", "Rating 2", "Rating 3"]))
      .resolves.toBeUndefined();
  });

  test("handles errors when reading favorite games", async () => {
    // Override mock to simulate a file read error
    fs.readFile.mockImplementationOnce(() =>
      Promise.reject(new Error("File not found")));
    await expect(readFavoriteGames()).rejects.toThrow("File not found");
  });
});