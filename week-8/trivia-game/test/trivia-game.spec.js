/**
 * Author: Clifford Smith
 * Date: 5/17/26
 * File Name: trivia-game.spec.js
 * Description: Test suite for the trivia game. Tests reading trivia questions
 *              from a file, writing student answers to a file, and handling
 *              errors when reading trivia questions.
 */
"use strict";
const fs = require('fs');

describe("Trivia Game", () => {
  let readTriviaQuestions;
  let writeStudentAnswers;

  beforeEach(() => {
    jest.resetModules();
    // Mock fs.readFile to return fake trivia questions
    jest.spyOn(fs, 'readFile').mockImplementation((file, options, callback) =>
      callback(null, "Question 1\nQuestion 2\nQuestion 3\n"));
    // Mock fs.writeFile to simulate a successful write
    jest.spyOn(fs, 'writeFile').mockImplementation((file, data, callback) =>
      callback(null));
    ({ readTriviaQuestions, writeStudentAnswers } = require('../src/trivia-game'));
  });

  test("reads trivia questions from a file", (done) => {
    readTriviaQuestions((err, questions) => {
      expect(err).toBeNull();
      expect(questions).toEqual(["Question 1", "Question 2", "Question 3"]);
      done();
    });
  });

  test("writes student answers to a file", (done) => {
    writeStudentAnswers(["Answer 1", "Answer 2", "Answer 3"], (err) => {
      expect(err).toBeNull();
      done();
    });
  });

  test("handles errors when reading trivia questions", (done) => {
    // Override mock to simulate a file read error
    fs.readFile.mockImplementationOnce((file, options, callback) =>
      callback(new Error("File not found")));
    readTriviaQuestions((err) => {
      expect(err).not.toBeNull();
      expect(err.message).toBe("File not found");
      done();
    });
  });
});