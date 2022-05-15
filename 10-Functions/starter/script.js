'use strict';

// The call and apply methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      name,
      'booked a seat on',
      this.airline,
      'flight',
      this.iataCode,
      flightNum
    );
    this.bookings.push({ flight: this.iataCode + flightNum, name });
  },
};

lufthansa.book(239, 'Max');
lufthansa.book(635, 'Jonas');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
// book(23, 'Sarah')

book.call(eurowings, 23, 'Sara');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const flightData = [583, 'George'];
// Both do the same thing.
book.apply(eurowings, flightData);
book.call(eurowings, ...flightData);

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
