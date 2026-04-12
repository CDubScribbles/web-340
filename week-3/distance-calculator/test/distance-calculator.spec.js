"use strict";

const assert = require("assert");
const calculateDistance = require("../src/distance-calculator");

// Test 1: Earth to Mars
function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Mars"), 0.52);
    console.log("testEarthToMars passed!");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

// Test 2: Earth to Venus
function testEarthToVenus() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Venus"), 0.28);
    console.log("testEarthToVenus passed!");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToVenus: ${error.message}`);
    return false;
  }
}

// Test 3: Venus to Mars
function testVenusToMars() {
  try {
    assert.strictEqual(calculateDistance("Venus", "Mars"), 0.8);
    console.log("testVenusToMars passed!");
    return true;
  } catch (error) {
    console.error(`Failed testVenusToMars: ${error.message}`);
    return false;
  }
}

// Call test functions
testEarthToMars();
testEarthToVenus();
testVenusToMars();