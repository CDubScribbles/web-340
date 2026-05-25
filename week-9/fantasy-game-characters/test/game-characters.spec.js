/**
 * Author: Clifford Smith
 * Date: 5/24/26
 * File Name: game-characters.spec.js
 * Description: Test suite for the GameCharacters class. Tests retrieving
 *              game character data, handling a missing script, and handling
 *              a failing script using real child processes.
 */
"use strict";
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    gameCharacters.getCharacters((data, error) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        { class: "Warrior", gender: "Male", funFact: "Afraid of heights." },
        { class: "Mage", gender: "Female", funFact: "Collects rare books." },
        { class: "Rogue", gender: "Other", funFact: "Has a pet dragon." },
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    const gameCharacters = new GameCharacters("nonexistent-script.js");
    gameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    const gameCharacters = new GameCharacters("failing-script.js");
    gameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});