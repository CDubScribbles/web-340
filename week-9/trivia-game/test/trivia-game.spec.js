/**
 * Author: Clifford Smith
 * Date: 5/24/26
 * File Name: trivia-game.spec.js
 * Description: Test suite for the TriviaGame class. Tests correct answers,
 *              incorrect answers, and error handling using mocked child_process.
 */
"use strict";
const { TriviaGame } = require('../src/trivia-game');
const child_process = require('child_process');
const { spawnSync } = child_process;

jest.mock('child_process');

describe("Trivia Game", () => {
  let triviaGame;

  beforeEach(() => {
    triviaGame = new TriviaGame();
    spawnSync.mockClear();
  });

  test("should correctly answer a trivia question", () => {
    const mockChild = { stdout: Buffer.from("Correct"), error: null };
    spawnSync.mockReturnValueOnce(mockChild);
    const result = triviaGame.answerQuestion("What is Node.js?", "JavaScript runtime");
    expect(result).toBe(true);
  });

  test("should incorrectly answer a trivia question", () => {
    const mockChild = { stdout: Buffer.from("Incorrect"), error: null };
    spawnSync.mockReturnValueOnce(mockChild);
    const result = triviaGame.answerQuestion("What is Node.js?", "A programming language");
    expect(result).toBe(false);
  });

  test("should handle an error when the trivia game is not available", () => {
    spawnSync.mockImplementationOnce(() => {
      throw new Error("Trivia game not found");
    });
    expect(() => triviaGame.answerQuestion("What is Node.js?", "JavaScript runtime"))
      .toThrow("Trivia game not found");
  });
});