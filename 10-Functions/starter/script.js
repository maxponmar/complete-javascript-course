'use strict';

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

h();
f();
console.dir(f);

// Closures

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// Immediately Invoked Function Expressions IIFE
// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();
// runOnce();

// // IIFE
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will never run again'))();

// Coding Challenge 1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// The call and apply methods
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       name,
//       'booked a seat on',
//       this.airline,
//       'flight',
//       this.iataCode,
//       flightNum
//     );
//     this.bookings.push({ flight: this.iataCode + flightNum, name });
//   },
// };

// lufthansa.book(239, 'Max');
// lufthansa.book(635, 'Jonas');
// console.log(lufthansa);

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
// const book = lufthansa.book;
// // book(23, 'Sarah')

// book.call(eurowings, 23, 'Sara');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const flightData = [583, 'George'];
// // Both do the same thing.
// book.apply(eurowings, flightData);
// book.call(eurowings, ...flightData);

// // Bind Method

// // book.call(eurowings, 23, 'Sara');
// const bookEW = book.bind(eurowings);
// bookEW(23, 'Steven Williams');
// console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Martha');
// bookEW23('Pedro');
// console.log(eurowings);

// // With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Functions Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(greeting, name);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Max');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// Call back functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log('Transformed string: ' + fn(str));
//   console.log('Transformed by ' + fn.name);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

//Value vs. Reference

// const flight = 'LH1234';
// const jonas = {
//   name: 'Jomas Schmedtmann',
//   passport: 123123123423,
// };

// const checkIn = function (flightNum, passenger) {
//   (flightNum = 'LH1999'), (passenger.name = 'Mr.' + passenger.name);
//   if (passenger.passport === 123123123423) {
//     console.log('Cheked In');
//   } else {
//     console.log('Wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// JavaScript doest not have pass by reference
// although when we pass object there are passed by reference

// Default Parameters

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2);
// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 1000);
