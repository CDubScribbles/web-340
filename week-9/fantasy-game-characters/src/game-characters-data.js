/**
 * Author: Clifford Smith
 * Date: 5/24/26
 * File Name: game-characters-data.js
 * Description: Child script that outputs a JSON stringified array of
 *              fantasy game characters to the console.
 */
"use strict";

const characters = [
  { class: "Warrior", gender: "Male", funFact: "Afraid of heights." },
  { class: "Mage", gender: "Female", funFact: "Collects rare books." },
  { class: "Rogue", gender: "Other", funFact: "Has a pet dragon." },
];

console.log(JSON.stringify(characters));