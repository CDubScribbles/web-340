"use strict";

test("should return a list of composers", () => {
  const composers = require("../src/composer");
  expect(composers.getComposers()).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ firstName: "Ludwig", lastName: "Beethoven", genre: "Classical" }),
      expect.objectContaining({ firstName: "Wolfgang", lastName: "Mozart", genre: "Classical" }),
      expect.objectContaining({ firstName: "Johann", lastName: "Bach", genre: "Classical" }),
      expect.objectContaining({ firstName: "Joseph", lastName: "Haydn", genre: "Classical" })
    ])
  );
});

test("should return a composer by last name", () => {
  const composers = require("../src/composer");
  expect(composers.getComposerByLastName("Beethoven")).toEqual(
    expect.objectContaining({ firstName: "Ludwig", lastName: "Beethoven", genre: "Classical" })
  );
});