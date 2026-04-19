/**
 * Author:
 * Date:
 * File Name: taco-stand.js
 * Description: TacoStandEmitter class module
 */

"use strict";

const EventEmitter = require("events");

class TacoStandEmitter extends EventEmitter {
   constructor() {
      super();
   }

   serveCustomer(customer) {
      this.emit("serve", customer);
   }

   prepareTaco(taco) {
      this.emit("prepare", taco);
   }

   handleRush(rush) {
      this.emit("rush", rush);
   }
}

module.exports = TacoStandEmitter;