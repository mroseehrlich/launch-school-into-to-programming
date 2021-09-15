// Exercise `1
let array1 = [1, 2, undefined, 4]; // array1.length === 4

let array2 = [1];
array2.length = 5; // array2.length === 5

let array3 = [];
array3[-1] = [1]; // array3.length === 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // array4.length === 3

let array5 = [];
array5[100] = 3; // array5.length === 101

// Exercise 2
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach((val) => {
  if (index % 2 === 0) {
    console.log(val);
  }
});

// Exercise 3
myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray[i].length; i ++) {
    let val = myArray[i][j];

    if (val % 2 === 0) {
      console.log(val);
    }
  };
};

myArray.forEach(val => {
  val.forEach(nestedVal => {
    if (nestedVal % 2 === 0) {
      console.log(nestedVal);
    }
  });
});

// Exercise 4
myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

myArray.map((val) => val % 2 === 0 ? "even" : "odd");

// Exercise 5
const findIntegers = (arr) => arr.filter(val => Number.isInteger(val));

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

// Exercise 6
// let oddLengths = (arr) => {
//   return arr.map(string => string.length).filter(length => length % 2 !== 0);
// };
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr));

// Exercise 7
const sumOfSquares = (arr) => {
  return arr.reduce((sum, element) => sum + element ** 2, 0);
};
array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

// Exercise 8
const oddLengths = (arr) => {
 return arr.reduce((arr, val) => {
    if (val.length % 2 !== 0) {
      arr.push(val);
    }
    return arr;
 }, [])
};
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// Exercise 9
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

numbers1.includes(3);
numbers2.includes(3);
numbers3.includes(3);

// Exercise 10
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
arr[1][3] = 606;
