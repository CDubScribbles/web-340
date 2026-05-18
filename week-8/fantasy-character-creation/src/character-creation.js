/**
 * Author: Clifford Smith
 * Date: 5/17/26
 * File Name: character-creation.js
 * Description: Fantasy character creation module. Writes character data to
 *              a file and reads characters from a file using Node.js's fs
 *              module promise methods.
 */
"use strict";
const { readFile, writeFile } = require('fs').promises;
const { join } = require('path');

// File path constants anchored to the current directory
const CHARACTERS_FILE = join(__dirname, "characters.json");

async function createCharacter(character) {
  try {
    // Convert character object to JSON string and write to file
    const data = JSON.stringify([character], null, 2);
    await writeFile(CHARACTERS_FILE, data);
  } catch (err) {
    throw err;
  }
}

async function getCharacters() {
  try {
    // Read file and parse JSON string back into an array of characters
    const data = await readFile(CHARACTERS_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    throw err;
  }
}

module.exports = { createCharacter, getCharacters };