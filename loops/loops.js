// Exercise 2
let factorial = (num) => {
  let result = 1;
  for (let counter = num; counter > 0; num -= 1) {
    result *= counter;
  }
  return result;
}

// Exercise 3
//The code creates an infinite loop because counter always equals 2 since we assign it 1 in line 3 and add 1 to counter in line 5. The conditional in line 7 never runs because counter is never more than 2.

//Exercise 4
// The code logs 1 through 5 without any error. This occurs because the iterator variable i is incremented in line 2.

// Exercise 5
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// Exercise 6
const factorial = (num) => {
  if (num === 1) return 1;

  return num * factorial(num - 1);
}