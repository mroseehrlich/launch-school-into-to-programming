// Exercise 1
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

person.name;

// Exercise 2
// All values are valid as keys.

// Exercise 3
let myArray = {
  0: 4,
  1: 5,
  2: 6,
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// Exercise 4
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keys = Object.keys(obj);
let uppercaseKeys = keys.map(key => key.toUpperCase());

// Exercise 5
let myProtoObj = {
  foo: 1,
  bar: 2,
};
let myObj = Object.create(myProtoObj);

//Exercise 6
/*
** "foo"                            primitive
** 3.1415                           primitive
** [ 'a', 'b', 'c' ]                object
** false                            primitive
** foo                              neither
** function bar() { return "bar"; } object
** undefined                        primitive
** { a: 1, b: 2 }                   object
*/

// Exercise 7
myObj.qux = 3;
// Snippet one iterates only over myObj's own properties and logs 3, while snippet 2 iterates over all the keys including the one's on myObj's prototype.

// Exercise 8
let copyObj = (obj, keys) => {
  let copy = {};
  if (keys) {
    keys.forEach(key => copy[key] = obj[key]);
    return copy;
  } else {
    return Object.assign(copy, obj);
  }
};

// Exercise 9
// The code logs "hi" in line 15 and then logs "hello" in line 16. This happens because objects are mutable but strings are not.

// Exercise 10
[1, 2, ["a", ["b", false]], null, {}]
// Primitives: There are 6. 1, 2, "a", "b", false, null
// Objects: There are 4. [1, 2, ["a", ["b", false]], null, {}], ["a", ["b", false]], ["b", false], {}

// Exercise 11
obj.bar[3].xyz = 606;