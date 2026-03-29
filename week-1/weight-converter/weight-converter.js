/**
 * Author: Clifford Smith
 * Date: 3/29/26
 * File Name: weight-converter.js
 * Description: This file contains the JavaScript code for a weight converter application. The application allows users to convert weights between different units such as pounds, kilograms, and ounces. The conversion logic will be implemented in this file to perform the necessary calculations based on user input.
*/

"use strict";

// Main function that runs the program
function main() {
    // Check if the user provided exactly one argument (pounds)
    if (process.argv.length !== 3) {
        console.error("Usage: node weight-converter.js <pounds>");
        process.exit(1);
    }

    // Get the weight in pounds from the command line
    const pounds = process.argv[2];

    // Check if the input is a valid number
    if (isNaN(pounds)) {
        console.error("Input must be a number.");
        process.exit(1);
    }

    // Convert pounds to kilograms and round to two decimal places
    const kilograms = (pounds * 0.453592).toFixed(2);

    // Print only the number (per code from the tester)
    console.log(kilograms);
}

// Run the main function
main();