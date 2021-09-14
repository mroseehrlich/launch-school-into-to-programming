// Exercise 1
let readline = require("readline-sync");
let age = parseInt(readline.question("How old are you? "));

console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);

for (let i = 0; i <= 40; i+= 10) {
  if (i === 0) {
    console.log(`You are ${age} years old.`);
  } else {
    console.log(`In ${i} years, you will be ${age + i} years old.`);
  }
};