"use strict";

const EventEmitter = require("events");

class BankAccount extends EventEmitter {
   constructor() {
      super();
      this.balance = 0;
   }

   deposit(amount) {
      if (amount <= 0) {
         this.emit("error", new Error("Deposit amount must be greater than 0."));
         return;
      }
      this.balance += amount;
      this.emit("deposit", amount);
   }

   withdraw(amount) {
      if (amount > this.balance) {
         const error = new Error("Insufficient funds.");
         error.withdrawAmount = amount;
         this.emit("insufficientFunds", error);
         return;
      }
      this.balance -= amount;
      this.emit("withdraw", amount);
   }
}

module.exports = BankAccount;