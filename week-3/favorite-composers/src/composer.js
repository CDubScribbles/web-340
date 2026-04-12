"use strict";

const composers = [
  { firstName: "Ludwig", lastName: "Beethoven", genre: "Classical" },
  { firstName: "Wolfgang", lastName: "Mozart", genre: "Classical" },
  { firstName: "Johann", lastName: "Bach", genre: "Classical" },
  { firstName: "Joseph", lastName: "Haydn", genre: "Classical" }
];

function getComposers() {
  return composers;
}

function getComposerByLastName(lastName) {
  for (let composer of composers) {
    if (composer.lastName === lastName) {
      return composer;
    }
  }
}

module.exports = {
  getComposers: getComposers,
  getComposerByLastName: getComposerByLastName
};