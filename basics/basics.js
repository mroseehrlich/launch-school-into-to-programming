// Exercise 1
let myName = "Mia " + "Ehrlich";

// Exercise 2
let num = 4936;
let ones = 4936 % 10;
let tens = ((num - ones) / 10) % 10;
let hundreds = ((num - (tens * 10) - ones) / 100) % 10;
let thousands = (num - (hundreds * 100) - (tens * 10) - ones) / 1000

console.log(ones);
console.log(tens);
console.log(hundreds);
console.log(thousands);

// Exercise 3
String
Boolean 
Number
Number
undefined
Object

// Exercise 4
/*The code logs '510' because the string '5' is concatenated with the string '10' due to type coersion of the number 10. This occurs whenever one uses the + operator
with a string and another data typeof, regradless of which side of the operator the string type is on. */

// Exercise 5
console.log(Number('5') + 10);

// Exercise 6
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// Exercise 7
// The code will not return an error and will, instead, return undefined.

// Exercise 8
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

// Exercise 9
let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
};

// Exercise 10
false

// Exercise 11
3

// Exercise 12
true