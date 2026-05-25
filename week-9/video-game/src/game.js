/**
 * Author: Clifford Smith
 * Date: 5/24/26
 * File Name: game.js
 * Description: Child script that receives a command from the parent process
 *              and sends back the game state.
 */
"use strict";

process.on("message", (command) => {
  let state;
  switch(command) {
    case "start":
      state = "Game started";
      break;
    case "play":
      state = "Playing game";
      break;
    case "stop":
      state = "Game stopped";
      break;
    default:
      state = "Unknown command";
  }
  process.send({ state });
});