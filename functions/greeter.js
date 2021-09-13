// Exercise 1
let readline = require("readline-sync");
let getInput = (prompt) => readline.question(prompt);
let firstName = getInput("What is your first name? ");
let lastName = getInput("What is your last name? ");
console.log(`Hello ${firstName} ${lastName}`);
