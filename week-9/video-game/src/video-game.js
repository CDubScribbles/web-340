/**
 * Author: Clifford Smith
 * Date: 5/24/26
 * File Name: video-game.js
 * Description: VideoGame class that uses spawn to send commands to a child
 *              script and receives the game state back. Handles errors that
 *              occur during the child process execution.
 */
"use strict";
const { spawn } = require("child_process");
const { join } = require("path");

class VideoGame {
  sendCommand(command, callback) {
    // Spawn a child process to handle the game command
    const child = spawn("node", [join(__dirname, "game.js")]);

    // Handle errors that occur during spawning
    child.on("error", (error) => {
      throw error;
    });

    // Listen for data from the child process stdout
    child.stdout.on("data", (data) => {
      const { state } = JSON.parse(data.toString());
      callback(state);
    });

    // Send the command to the child process
    child.send({ command });
  }
}

module.exports = { VideoGame };