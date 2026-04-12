"use strict";

const assert = require("assert");
const graderModule = require("../src/grader");

function testGetLetterGrade() {
  assert.strictEqual(graderModule.getLetterGrade(100), "A");
  assert.strictEqual(graderModule.getLetterGrade(90), "A");
  assert.strictEqual(graderModule.getLetterGrade(80), "B");
  assert.strictEqual(graderModule.getLetterGrade(70), "C");
  assert.strictEqual(graderModule.getLetterGrade(60), "D");
  assert.strictEqual(graderModule.getLetterGrade(59), "F");
  assert.strictEqual(graderModule.getLetterGrade(0), "F");
}

function testGetGradeOnlyAcceptsNumericalValues() {
  assert.throws(() => graderModule.getLetterGrade("100", "Input must be a number."));
  assert.throws(() => graderModule.getLetterGrade(true, "Input must be a number."));
  assert.throws(() => graderModule.getLetterGrade({}, "Input must be a number."));
}

function testGetGradeOnlyAcceptsValuesBetween0And100() {
  assert.throws(() => graderModule.getLetterGrade(-1, "Input must be between 0 and 100."));
  assert.throws(() => graderModule.getLetterGrade(101, "Input must be between 0 and 100."));
}

testGetLetterGrade();
testGetGradeOnlyAcceptsNumericalValues();
testGetGradeOnlyAcceptsValuesBetween0And100();

console.log("All tests passed!");