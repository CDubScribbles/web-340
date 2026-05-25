/**
 * Author: Clifford Smith
 * Date: 5/24/26
 * File Name: trivia-game.js
 * Description: TriviaGame class that uses spawnSync to run a child script
 *              that checks if a trivia answer is correct. Handles errors
 *              that occur during the child process execution.
 */
"use strict";
const { spawnSync } = require('child_process');
const { join } = require('path');

class TriviaGame {
  answerQuestion(question, answer) {
    // Spawn a child process to check the answer
    const child = spawnSync("node", [
      join(__dirname, "answer-checker.js"),
      JSON.stringify({ question, answer })
    ]);

    // Throw any errors that occur during spawning
    if (child.error) {
      throw child.error;
    }

    // Return true if the answer is correct, false otherwise
    const result = child.stdout.toString();
    return result === "Correct";
  }
}

module.exports = { TriviaGame };