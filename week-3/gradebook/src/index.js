"use strict";

const graderModule = require("./grader");

function main() {
  console.log("Your letter grade for 100 is: " + graderModule.getLetterGrade(100));
  console.log("Your letter grade for 89 is: " + graderModule.getLetterGrade(89));
  console.log("Your letter grade for 72 is: " + graderModule.getLetterGrade(72));
  console.log("Your letter grade for 61 is: " + graderModule.getLetterGrade(61));
  console.log("Your letter grade for 59 is: " + graderModule.getLetterGrade(59));
}

main();