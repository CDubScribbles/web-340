/**
 * Author: Clifford Smith
 * Date: 5/24/26
 * File Name: comic-books.js
 * Description: ComicBooks class that uses spawn to retrieve comic book data
 *              from a child script. Handles errors from missing or failing
 *              scripts via stderr and error events.
 */
"use strict";
const { spawn } = require("child_process");
const { join } = require("path");

// Default data file path anchored to the current directory
const dataFile = join(__dirname, "comic-books-data.js");

class ComicBooks {
  constructor(scriptPath = dataFile) {
    // Use provided script path or default to comic-books-data.js
    this.scriptPath = scriptPath;
  }

  getComicBooks(callback) {
    const child = spawn("node", [this.scriptPath]);

    // Parse and return comic book data from stdout
    child.stdout.on("data", (data) => {
      const comicData = JSON.parse(data.toString());
      callback(comicData, null);
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

module.exports = { ComicBooks };