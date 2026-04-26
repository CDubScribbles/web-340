"use strict";

function waterPlants() {
  process.nextTick(() => {
    console.log("Gardener: The plants have been watered.");
  });
}

function pruneTrees() {
  setTimeout(() => {
    console.log("Gardener: The trees have been pruned.");
  }, 1000);
}

function mowLawn() {
  setTimeout(() => {
    console.log("Gardener: The lawn has been mowed.");
  }, 2000);
}

module.exports = { mowLawn, waterPlants, pruneTrees };