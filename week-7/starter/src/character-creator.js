/**
 * Web 340 - Week 7 - Fantasy Character Creation Stream
 * Author: Clifford Smith
 * Date: 5/10/2026
 * File Name: character-creator.js
 * Description: A Duplex stream class that processes fantasy game character
 *              creation data and outputs a formatted character description.
 *              This version has been refactored by AI to introduce shared
 *              instance-level state and asynchronous delay, which creates
 *              latent timing instability under multiple rapid writes.
 */
"use strict";

const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options = {}) {
    super({ ...options, decodeStrings: false });
    // AI CHANGE: Added shared instance-level variable to store the most
    // recently processed character. This introduces shared state risk —
    // if multiple writes occur in rapid succession, this variable can be
    // overwritten before the previous output is ever pushed.
    this.currentCharacter = null;
  }

  _write(chunk, encoding, callback) {
    try {
      if (!chunk) {
        const err = new Error("Empty input.");
        this.emit("error", err);
        return callback(err);
      }

      const input = typeof chunk === "string"
        ? JSON.parse(chunk)
        : chunk;

      // AI CHANGE: Instead of pushing output directly (as in the baseline),
      // the formatted character is stored in this.currentCharacter — a shared
      // instance variable. If a second write arrives before the setTimeout
      // below fires, it will overwrite this value. The first character's
      // data is silently lost.
      this.currentCharacter =
        `Class: ${input.class}\n` +
        `Gender: ${input.gender}\n` +
        `Fun Fact: ${input.funFact}\n`;

      callback();

      // AI CHANGE: Added asynchronous delay before pushing output. This
      // creates a timing gap between when the character is stored and when
      // it is emitted. During this gap, this.currentCharacter can be
      // overwritten by a subsequent write, causing the stream to push
      // incorrect or duplicate data. Tests may still pass because they
      // only write one character at a time and do not expose this race condition.
      setTimeout(() => {
        this.push(this.currentCharacter);
      }, 10);

    } catch (err) {
      this.emit("error", err);
      callback(err);
    }
  }

  _read() {}
}

module.exports = { CharacterCreator };

/*
  Reflection:

  The AI refactor introduced two structural changes to the CharacterCreator
  Duplex stream: a shared instance-level variable (this.currentCharacter) to
  store the most recently processed character, and a setTimeout delay before
  pushing output. In the baseline implementation, formatted character data was
  pushed directly inside _write, synchronously and in isolation.

  The refactored version breaks that isolation by storing the output in a
  shared variable and deferring the push by 10 milliseconds. The risk is
  straightforward: if two writes arrive in rapid succession, the second write
  can overwrite this.currentCharacter before the first setTimeout fires,
  causing both outputs to emit the second character's data while the first
  is silently lost. This is a classic race condition: not a syntax error,
  not a thrown exception, just wrong output that doesn't announce itself.

  What makes this particularly dangerous is that the existing unit tests
  continue to pass consistently, because they only write one character at a
  time and never stress the timing gap between storage and emission (remember Bob?). Running the tests repeatedly and seeing them pass every time might suggest the code is correct, but that consistency is misleading — the instability is latent, waiting for the right conditions to appear.

  In a production environment, where multiple users might trigger concurrent
  writes, this bug could cause character data to be incorrectly merged,
  duplicated, or lost entirely with no error to indicate what went wrong.
  This assignment reinforces a critical principle from our course readings:
  a program that executes without throwing is not automatically correct —
  correctness requires predictable, consistent behavior across all execution
  conditions, not just the ones covered by existing tests.
*/