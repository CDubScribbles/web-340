"use strict";

// Planet distances from the Sun in Astronomical Units (AU)
const planetDistances = {
  Mercury: 0.39,
  Venus: 0.72,
  Earth: 1.00,
  Mars: 1.52,
  Jupiter: 5.20,
  Saturn: 9.54,
  Uranus: 19.2,
  Neptune: 30.06
};

function calculateDistance(planet1, planet2) {
  if (!planetDistances[planet1] || !planetDistances[planet2]) {
    throw new Error("Invalid planet name. Please enter a valid planet.");
  }

  return Math.abs(planetDistances[planet1] - planetDistances[planet2]);
}

module.exports = calculateDistance;