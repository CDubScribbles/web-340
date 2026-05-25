/**
 * Author: Clifford Smith
 * Date: 5/24/26
 * File Name: answer-checker.js
 * Description: Child script that checks if a trivia answer is correct.
 *              Receives a question and answer via stdin and sends back
 *              the result.
 */
"use strict";

const input = JSON.parse(process.argv[2] || "{}");
const { question, answer } = input;
let correctAnswer;

switch(question) {
  case "What is Node.js?":
    correctAnswer = "JavaScript runtime";
    break;
  default:
    correctAnswer = "";
}

if (answer === correctAnswer) {
  process.stdout.write("Correct");
} else {
  process.stdout.write("Incorrect");
}