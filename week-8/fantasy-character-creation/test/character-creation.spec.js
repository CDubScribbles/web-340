/**
 * Author: Clifford Smith
 * Date: 5/17/26
 * File Name: character-creation.spec.js
 * Description: Test suite for the fantasy character creation module. Tests
 *              writing a character to a file, reading characters from a file,
 *              and handling errors when writing to the file.
 */
"use strict";
const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    // Mock fs.promises.writeFile to simulate a successful write
    jest.spyOn(fs, 'writeFile').mockImplementation(() =>
      Promise.resolve());
    // Mock fs.promises.readFile to return fake character data
    jest.spyOn(fs, 'readFile').mockImplementation(() =>
      Promise.resolve(JSON.stringify([
        { class: "Warrior", gender: "Male", funFact: "Afraid of heights." }
      ])));
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  test("creates a character and writes to file", async () => {
    const character = { class: "Warrior", gender: "Male", funFact: "Afraid of heights." };
    await expect(createCharacter(character)).resolves.toBeUndefined();
    expect(fs.writeFile).toHaveBeenCalled();
  });

  test("reads characters from a file", async () => {
    const characters = await getCharacters();
    expect(characters).toEqual([
      { class: "Warrior", gender: "Male", funFact: "Afraid of heights." }
    ]);
  });

  test("handles errors when writing to the file", async () => {
    // Override mock to simulate a write error
    fs.writeFile.mockImplementationOnce(() =>
      Promise.reject(new Error("Write error")));
    const character = { class: "Mage", gender: "Female", funFact: "Loves dragons." };
    await expect(createCharacter(character)).rejects.toThrow("Write error");
  });
});