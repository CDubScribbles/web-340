"use strict";

const BankAccount = require("../src/bank-account");

test("deposit should increase the balance by the deposit amount", () => {
   const account = new BankAccount();
   account.deposit(100);
   expect(account.balance).toBe(100);
});

test("deposit should emit an error if the deposit amount is less than or equal to 0", () => {
   const account = new BankAccount();
   expect.assertions(1);
   account.on("error", (err) => {
      expect(err).toBeInstanceOf(Error);
   });
   account.deposit(-100);
});

test("withdraw should decrease the balance by the withdraw amount", () => {
   const account = new BankAccount();
   account.deposit(100);
   account.withdraw(50);
   expect(account.balance).toBe(50);
});

test("withdraw should emit an error if the withdraw amount is greater than the balance", () => {
   const account = new BankAccount();
   expect.assertions(2);
   account.on("insufficientFunds", (err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.withdrawAmount).toBe(150);
   });
   account.deposit(100);
   account.withdraw(150);
});