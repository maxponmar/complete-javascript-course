'use strict';

// Constructor functions and the new operator

const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create methods inside constructor objects (performance)
  // use prototypes
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear)
  // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1.- New {} is created
// 2.- function is called, this = {}
// 3.- {} linked to prototype
// 4.- function automatically return {}

const matilda = new Person('Matilda', 2017);
console.log(matilda);

console.log(jonas instanceof Person);
