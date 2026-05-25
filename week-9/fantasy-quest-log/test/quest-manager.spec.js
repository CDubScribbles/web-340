/**
 * Author: Clifford Smith
 * Date: 5/24/26
 * File Name: quest-manager.spec.js
 * Description: Test suite for the Fantasy Quest Log application. Tests
 *              writing a quest to a file, reading quests from a file,
 *              return type consistency, and error handling for missing files.
 */
"use strict";
const fs = require("fs").promises;
const { writeQuest, getQuests } = require("../src/quest-manager");

describe("Quest Manager", () => {
  beforeEach(() => {
    jest.resetModules();
    // Mock fs.promises.writeFile to simulate a successful write
    jest.spyOn(fs, "writeFile").mockImplementation(() =>
      Promise.resolve());
    // Mock fs.promises.readFile to return fake quest data
    jest.spyOn(fs, "readFile").mockImplementation(() =>
      Promise.resolve(JSON.stringify([
        { id: 1, title: "The Dragon's Lair", class: "Warrior", difficulty: "Hard", completed: false }
      ])));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("writes a quest to the file", async () => {
    const quest = { id: 1, title: "The Dragon's Lair", class: "Warrior", difficulty: "Hard", completed: false };
    const result = await writeQuest(quest);
    expect(result).toBe(true);
    expect(fs.writeFile).toHaveBeenCalled();
  });

  test("reads quests and returns an array", async () => {
    const quests = await getQuests();
    expect(Array.isArray(quests)).toBe(true);
    expect(quests[0].title).toBe("The Dragon's Lair");
  });

  test("returns a parsed object, not a string", async () => {
    const quests = await getQuests();
    // Enforce consistent return type — never a raw string
    expect(typeof quests).toBe("object");
  });

  test("throws a meaningful error when quest log file does not exist", async () => {
    // Override mock to simulate a missing file
    fs.readFile.mockImplementationOnce(() =>
      Promise.reject(new Error("ENOENT: no such file or directory")));
    await expect(getQuests("missing.json")).rejects.toThrow("Quest log not found");
  });
});