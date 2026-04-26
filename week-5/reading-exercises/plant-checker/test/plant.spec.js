"use strict";
const plant = require("../src/plant");

const exit = jest.spyOn(process, 'exit').mockImplementation((code) => code);

describe("isFlower", () => {
  let log;

  beforeEach(() => {
    log = jest.spyOn(console, "log");
  });

  afterEach(() => {
    log.mockRestore();
  });

  test("identifies a flower", () => {
    plant.isFlower("Rose");
    expect(log).toHaveBeenCalledWith("Rose is a flower!");
    expect(exit).not.toHaveBeenCalled();
  });

  test("identifies a non-flower plant", () => {
    plant.isFlower("Fern");
    expect(log).toHaveBeenCalledWith("Fern is not a flower!");
    expect(exit).toHaveBeenCalledWith(1);
  });
});