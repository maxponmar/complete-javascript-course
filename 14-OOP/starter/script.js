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

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
// Prototype of linked objects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

// Prototypal inheritance on built-in objects
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [12, 2, 2, 1, 12]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// Coding challenge 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
