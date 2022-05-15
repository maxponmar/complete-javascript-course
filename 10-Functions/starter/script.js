'use strict';

//Value vs. Reference
const flight = 'LH1234';
const jonas = {
  name: 'Jomas Schmedtmann',
  passport: 123123123423,
};

const checkIn = function (flightNum, passenger) {
  (flightNum = 'LH1999'), (passenger.name = 'Mr.' + passenger.name);
  if (passenger.passport === 123123123423) {
    console.log('Cheked In');
  } else {
    console.log('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

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
