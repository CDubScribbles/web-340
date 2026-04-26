/**
 * Author: Clifford Smith
 * Date: 4/26/26
 * File Name: pie.js
 * Description: Function to bake a pie with the specified type and ingredients.
 * Author Comment: Thank you for writing what you did in the grading section of last week's assignment. I agree: details matter. Also, thank you for your feedback when you grade the assignments!
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Your code here
  const essentialIngredients = ["flour", "sugar", "butter"];
  
  const missingIngredients = essentialIngredients.filter(
    ingredient => !ingredients.includes(ingredient)
  );

  if (missingIngredients.length > 0) {
    console.log("Warning: Missing essential ingredient(s)!");
    process.exit(1);
  } else {
    console.log(`${pieType} pie was successfully baked!`);
  }
}

module.exports = { bakePie };