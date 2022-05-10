'use strict';

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   // console.log(firstName)
//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output)
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial)
//     // add(1,2);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'max';
// calcAge(1968);

console.log(me)
// console.log(job)
// console.log(year)

var me = 'Jonas';
let job = 'teacher'
const year = 1991;


console.log(addDecl(2, 3));
// console.log(addExpre(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpre = function (a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b;


if (!numProducts) deleteShippingCart();
var numProducts = 10;

function deleteShippingCart() {
  console.log("All products deleted");
}

// Only on browser
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z)