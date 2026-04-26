"use strict";

function isFlower(name) {
  const flowers = [
    "Rose", "Tulip", "Orchid", "Sunflower", "Daisy",
    "Lily", "Daffodil", "Geranium", "Iris", "Violet",
    "Jasmine", "Lavender", "Poppy", "Pansy", "Peony",
    "Hyacinth", "Marigold", "Petunia", "Carnation",
    "Chrysanthemum", "Aster", "Begonia", "Dahlia",
    "Zinnia", "Snapdragon"
  ];

  if (flowers.includes(name)) {
    console.log(`${name} is a flower!`);
  } else {
    console.log(`${name} is not a flower!`);
    process.exit(1);
  }
}

module.exports = { isFlower };