/**
 * Author: Clifford Smith
 * Date: 4/26/26
 * File Name: pie.spec.js
 * Description: Test file for the pie baker function.
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
const exit = jest.spyOn(process, 'exit').mockImplementation((code) => code);

describe("bakePie", () => {
  let log;

  beforeEach(() => {
    log = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    log.mockRestore();
  });

  test("successfully bakes a pie with all essential ingredients", () => {
    bakePie("Apple", ["flour", "sugar", "butter", "apples"]);
    expect(log).toHaveBeenCalledWith("Apple pie was successfully baked!");
    expect(exit).not.toHaveBeenCalled();
  });

  test("logs a warning when an essential ingredient is missing", () => {
    bakePie("Cherry", ["sugar", "butter", "cherries"]);
    expect(log).toHaveBeenCalledWith("Warning: Missing essential ingredient(s)!");
  });

  test("calls process.exit(1) when an essential ingredient is missing", () => {
    bakePie("Cherry", ["sugar", "butter", "cherries"]);
    expect(exit).toHaveBeenCalledWith(1);
  });
});