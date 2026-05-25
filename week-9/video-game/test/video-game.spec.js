/**
 * Author: Clifford Smith
 * Date: 5/24/26
 * File Name: video-game.spec.js
 * Description: Test suite for the VideoGame class. Tests sending commands,
 *              handling errors, and handling unknown commands using mocked
 *              child_process.
 */
"use strict";
const { VideoGame } = require("../src/video-game");
const child_process = require("child_process");
const { spawn } = child_process;

jest.mock("child_process");

describe("Video Game", () => {
  let videoGame;

  beforeEach(() => {
    videoGame = new VideoGame();
    spawn.mockClear();
  });

  test("should correctly send a command to the video game", (done) => {
    const mockChild = {
      stdout: { on: jest.fn((event, callback) =>
        callback(JSON.stringify({ state: "Game started" }))) },
      on: jest.fn(),
      send: jest.fn(),
    };
    spawn.mockReturnValueOnce(mockChild);
    videoGame.sendCommand("start", (state) => {
      expect(state).toBe("Game started");
      done();
    });
  });

  test("should handle an error when the video game is not available", () => {
    spawn.mockImplementationOnce(() => {
      throw new Error("Video game not found");
    });
    expect(() => videoGame.sendCommand("start")).toThrow("Video game not found");
  });

  test("should handle an unknown command", (done) => {
    const mockChild = {
      stdout: { on: jest.fn((event, callback) =>
        callback(JSON.stringify({ state: "Unknown command" }))) },
      on: jest.fn(),
      send: jest.fn(),
    };
    spawn.mockReturnValueOnce(mockChild);
    videoGame.sendCommand("unknown", (state) => {
      expect(state).toBe("Unknown command");
      done();
    });
  });
});