/**
 * Author: Clifford Smith
 * Date: 5/17/26
 * File Name: trivia-game.js
 * Description: Reads trivia questions from a file and writes student answers
 *              to a file using Node.js's fs module callback methods.
 */
"use strict";
const { readFile, writeFile } = require('fs');
const { join } = require('path');

// File path constants anchored to the current directory
const TRIVIA_QUESTIONS_FILE = join(__dirname, "questions.txt");
const STUDENT_ANSWERS_FILE = join(__dirname, "answers.txt");

function readTriviaQuestions(callback) {
  readFile(TRIVIA_QUESTIONS_FILE, { encoding: "utf8" }, (err, data) => {
    if (err) {
      callback(err);
    } else {
      // Split file contents into an array and filter out empty lines
      const questions = data.split("\n").filter(question => question);
      callback(null, questions);
    }
  });
}

function writeStudentAnswers(answers, callback) {
  // Join answers array into a single string with newlines
  const data = answers.join("\n");
  writeFile(STUDENT_ANSWERS_FILE, data, (err) => {
    callback(err);
  });
}

module.exports = { readTriviaQuestions, writeStudentAnswers };