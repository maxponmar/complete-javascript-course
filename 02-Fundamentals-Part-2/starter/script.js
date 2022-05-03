// Strict Mode
'use strict';

// strict mode must be the first peice of code in your javascript files.
// Avoids to create accidental errors

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log("I can drive.");

// const interface = 'Audio';
// const private = 10;

// Functions
// function logger() {
//   console.log('My name is Max');
// }

// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//   return juice;
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice)
// const appleorangejuice = fruitProcessor(2, 4);
// console.log(appleorangejuice)

// Function Declarations vs Expressions

// Function Declaration (We can call them before they are delcared)

const age = calcAge1(1991);
console.log(age);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function Expression

// Not allowed
// const age2 = calcAge2(1991);
// console.log(age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1);