"use strict";

function getLetterGrade(score) {
  if (typeof score !== "number") {
    throw Error("Input must be a number.");
  }

  if (score < 0 || score > 100) {
    throw Error("Input must be between 0 and 100.");
  }

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

module.exports = {
  getLetterGrade: getLetterGrade
};