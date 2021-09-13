// Exercise 3
const readline = require("readline-sync");

// (() => {
//   let num1 = Number(readline.question("Enter the first number: "));
//   let num2 = Number(readline.question("Enter the second number: "));
//   return console.log(`${num1} * ${num2} = ${num1 * num2}`);
// })();

const multiply = (val1, val2) => val1 * val2;

const getInput = (prompt) => {
  return parseFloat(readline.question(prompt));
};

let num1 = getInput("Enter the first number: ");
let num2 = getInput("Enter the second number: ");
console.log(`${num1} * ${num2} = ${num1 * num2}`);