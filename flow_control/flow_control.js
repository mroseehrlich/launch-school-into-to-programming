// Exercise 1

false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // 3
true && (1 + 2);  // 3
false && (1 + 2); // false
(1 + 2) && true;  // true
(32 * 4) >= 129; //false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true

// Exercise 2
const evenOrOdd = (val) => console.log(val % 2 === 0 ? 'even' : 'odd');

// Exercise 3
const improvedEvenOrOdd = (val) => Number.isInteger(val) ? console.log(val % 2 === 0 ? 'even' : 'odd') : console.log("Error: Value must be an integer");

// Exercise 4
// The code logs"Product2", then "Product3", then "Product not found" because the swtich statement falls through to the default since there are no break statements in each case.

// Exercise 5
if (foo()) {
  return 'bar'
} else {
  return qux();
}

// Exercise 6
//The code logs "Not Empty" to the console because the if statement checks arr as a truthy value.

// Exercise 7
const allCaps = (str) => {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
};

// Exercise 8
const numberRange = (num) => {
  if (mun < 0 ) {
    console.log(`${num} is less than 0.`)
  } else if (num <= 50) {
    console.log(`${num} is between 0 and 50.`)
  }  else if (num <= 100) {
    console.log(`${num} is between 50 and 100.`)
  } else {
    console.log(`${num} is greater than 100.`);
  }
};
