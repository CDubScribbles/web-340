/*
  Pragmatic Node.js
  Chapter 2
  Programming Assignment

  Author: Clifford Smith
  Date: 4/4/26
  Filename: recipes.js
*/

"use strict";

function createRecipe(ingredients) {
  return "Recipe created with ingredients: " + ingredients.join(", ");
}

function setTimer(minutes) {
  return "Timer set for " + minutes + " minutes";
}

function quit() {
  return "Program exited";
}

module.exports = { createRecipe, setTimer, quit };