/**
 * Author: Clifford Smith
 * Date: 5/17/26
 * File Name: video-game-favorites.js
 * Description: Reads favorite games from a file and writes player ratings
 *              to a file using Node.js's fs module promise methods.
 */
"use strict";
const { readFile, writeFile } = require('fs').promises;
const { join } = require('path');

// File path constants anchored to the current directory
const GAMES_FILE = join(__dirname, "games.txt");
const RATINGS_FILE = join(__dirname, "ratings.txt");

async function readFavoriteGames() {
  try {
    const data = await readFile(GAMES_FILE, "utf8");
    // Split file contents into an array and filter out empty lines
    const games = data.split("\n").filter(game => game);
    return games;
  } catch (err) {
    throw err;
  }
}

async function writePlayerRatings(ratings) {
  try {
    // Join ratings array into a single string with newlines
    const data = ratings.join("\n");
    await writeFile(RATINGS_FILE, data);
  } catch (err) {
    throw err;
  }
}

module.exports = { readFavoriteGames, writePlayerRatings };