/**
 * Author: Clifford Smith
 * Date: 05/24/2026
 * File Name: game-characters.js
 * Description: GameCharacters class that uses spawn to retrieve fantasy game
 *              character data from a child script. Handles errors from missing
 *              or failing scripts via stderr and error events.
 */
"use strict";
const { spawn } = require("child_process");
const { join } = require("path");
const path = require("path");

// Default data file path anchored to the current directory
const dataFile = join(__dirname, "game-characters-data.js");

class GameCharacters {
  constructor(scriptPath = dataFile) {
    // If path is relative, anchor it to __dirname
    this.scriptPath = path.isAbsolute(scriptPath)
      ? scriptPath
      : join(__dirname, scriptPath);
  }

  getCharacters(callback) {
    const child = spawn("node", [this.scriptPath]);

    // Parse and return character data from stdout
    child.stdout.on("data", (data) => {
      const characters = JSON.parse(data.toString());
      callback(characters, null);
    });

    // Log and return errors from stderr
    child.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      callback(null, new Error(data.toString()));
    });

    // Handle spawn errors (e.g. script not found)
    child.on("error", (error) => {
      console.error(`spawn error: ${error}`);
      callback(null, error);
    });
  }
}

module.exports = { GameCharacters };