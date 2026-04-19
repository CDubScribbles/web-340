/**
 * Author:
 * Date:
 * File Name: index.js
 * Description: CLI program for the Taco Stand
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

// Set up event listeners for the tacoStand object
tacoStand.on("serve", (customer) => {
   console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
   console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
   console.log(`Taco Stand handles rush: ${rush}`);
});

// Handle the commands
rl.on("line", (input) => {
   const [command, ...args] = input.split(" ");
   const argument = args.join(" ");

   if (command === "serve") {
      tacoStand.serveCustomer(argument);
   } else if (command === "prepare") {
      tacoStand.prepareTaco(argument);
   } else if (command === "rush") {
      tacoStand.handleRush(argument);
   } else {
      console.log(`Unknown command: "${command}". Use "serve", "prepare", or "rush".`);
   }
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);