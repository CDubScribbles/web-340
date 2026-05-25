/**
 * Author: Clifford Smith
 * Date: 5/24/26
 * File Name: quest-data.js
 * Description: Default quest data for the Fantasy Quest Log application.
 *              This file serves as the initial data set for the quest log.
 */
"use strict";

const quests = [
  { id: 1, title: "The Dragon's Lair", class: "Warrior", difficulty: "Hard", completed: false },
  { id: 2, title: "The Enchanted Forest", class: "Mage", difficulty: "Medium", completed: false },
  { id: 3, title: "The Thieves Guild", class: "Rogue", difficulty: "Easy", completed: true },
];

module.exports = { quests };