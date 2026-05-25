/**
 * Author: Clifford Smith
 * Date: 5/24/26
 * File Name: quest-manager.js
 * Description: The Fantasy Quest Log is a small modular Node.js program that
 *              allows a user to create and retrieve fantasy game quests stored
 *              in a JSON file. It is appropriate in scope because it mirrors
 *              the file I/O patterns covered in Weeks 1-8, using fs.promises
 *              for asynchronous read and write operations on a single data file.
 *              Asynchronous behavior occurs when a new quest is written to the
 *              file, and when the quest log is read back as a parsed array of
 *              objects. The intentional failure case occurs when the quest log
 *              file does not exist — the application throws a meaningful Error
 *              rather than crashing silently or returning inconsistent data.
 */
"use strict";
const fs = require("fs").promises;
const { join } = require("path");

// Stable file path anchored to the current directory
const QUEST_FILE = join(__dirname, "quests.json");

async function writeQuest(quest) {
  try {
    // Serialize quest object to JSON and write to file
    const data = JSON.stringify([quest], null, 2);
    await fs.writeFile(QUEST_FILE, data, "utf8");
    return true;
  } catch (err) {
    throw new Error(`Failed to write quest: ${err.message}`);
  }
}

async function getQuests(filePath) {
  // Use provided path or default to QUEST_FILE
  const targetPath = filePath ? join(__dirname, filePath) : QUEST_FILE;
  try {
    // Read file and parse JSON string back into an array of quests
    const data = await fs.readFile(targetPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    // Throw a meaningful error if file does not exist
    throw new Error(`Quest log not found: ${err.message}`);
  }
}

module.exports = { writeQuest, getQuests, QUEST_FILE };