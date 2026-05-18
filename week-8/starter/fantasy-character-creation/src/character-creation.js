/**
 * Author: Clifford Smith
 * Date: 5/17/26
 * File Name: character-creation.js
 * Description: Fantasy character creation module. Writes character data to
 *              a file and reads character data from a file using Node.js's
 *              fs module promise methods. Includes stable path resolution,
 *              explicit JSON serialization, and controlled error handling.
 */
"use strict";

const { readFile, writeFile } = require("fs").promises;
const path = require("path");

// Stable file path anchored to the current file's directory
const CHARACTER_FILE_NAME = "character.json";
const CHARACTER_FILE = path.join(__dirname, CHARACTER_FILE_NAME);

async function writeCharacter(character) {
  // Always serialize to JSON regardless of input type
  const data = JSON.stringify(character, null, 2);
  await writeFile(CHARACTER_FILE, data, "utf8");
  return true;
}

async function readCharacter(filePath) {
  // Use provided path or default to CHARACTER_FILE
  const targetPath = filePath
    ? path.join(__dirname, filePath)
    : CHARACTER_FILE;

  try {
    const data = await readFile(targetPath, "utf8");
    // Always return a parsed object, never a raw string
    return JSON.parse(data);
  } catch (err) {
    // Throw a meaningful error if file does not exist
    throw new Error(`Character file not found: ${err.message}`);
  }
}

module.exports = {
  CHARACTER_FILE,
  writeCharacter,
  readCharacter
};