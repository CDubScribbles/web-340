/*
  Pragmatic Node.js
  Chapter 2
  Programming Assignment

  Author: Clifford Smith
  Date: 4/4/26
  Filename: index.js
*/

"use strict";

const { createRecipe, setTimer, quit } = require("./recipes");

const ingredients = [
  "pizza dough",
  "tomato sauce",
  "fresh mozzarella",
  "fresh basil",
  "olive oil",
  "garlic",
  "sea salt",
];

console.log(createRecipe(ingredients));
console.log(setTimer(30));
console.log(quit());