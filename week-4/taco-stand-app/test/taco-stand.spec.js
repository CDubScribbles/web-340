/**
 * Author:
 * Date:
 * File Name: taco-stand.spec.js
 * Description: Unit tests for TacoStandEmitter
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");

function testServeCustomer() {
   try {
      const tacoStand = new TacoStandEmitter();
      tacoStand.on("serve", (customer) => {
         assert.strictEqual(customer, "John", "Customer should be John.");
      });
      tacoStand.serveCustomer("John");
      console.log("Passed testServeCustomer");
      return true;
   } catch (err) {
      console.error(`Failed testServeCustomer: ${err}`);
      return false;
   }
}

function testPrepareTaco() {
   try {
      const tacoStand = new TacoStandEmitter();
      tacoStand.on("prepare", (taco) => {
         assert.strictEqual(taco, "beef", "Taco should be beef.");
      });
      tacoStand.prepareTaco("beef");
      console.log("Passed testPrepareTaco");
      return true;
   } catch (err) {
      console.error(`Failed testPrepareTaco: ${err}`);
      return false;
   }
}

function testHandleRush() {
   try {
      const tacoStand = new TacoStandEmitter();
      tacoStand.on("rush", (rush) => {
         assert.strictEqual(rush, "lunch", "Rush should be lunch.");
      });
      tacoStand.handleRush("lunch");
      console.log("Passed testHandleRush");
      return true;
   } catch (err) {
      console.error(`Failed testHandleRush: ${err}`);
      return false;
   }
}

testServeCustomer();
testPrepareTaco();
testHandleRush();