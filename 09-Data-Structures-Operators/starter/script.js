'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  // Enhanced
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // Enchanced object literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Enchanced
  orderEnhanced(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// Optional Chaining (?.)
console.log(restaurant.openingHours.mon);
// console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.order?.(0, 1));
console.log(restaurant.orderRissotto?.(0, 1) ?? 'Does not exist');

// Lopping Arrays for-of
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const [index, element] of menu.entries()) {
//   console.log(index + 1, element);
// }
// console.log(menu.entries());
// console.log(...menu.entries());

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// let [players1, players2] = game.players;
// let [gk, ...fieldPlayers] = players1;
// let allPlayers = [...players1, ...players2];
// let playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// const printGoal = function (...players) {
//   console.log(players.length);
// };
// printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoal(...game.scored);
// team1 < team2 && console.log('Team 1 is more likely to win');

// Logical Assigment Operators

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owener: 'Giovanni Rossi',
// };

// rest2.numberGuests = rest1.numGuests || 10;
// Assign property if is falsy
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nulish assignment
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owener &&= '<Anonymous>';
// rest2.owener &&= '<Anonymous>';

// console.log(rest1);
// console.log(rest2);

// The Nulish Coalescing operator
// Nulish: null and undefined (NOT 0 or '')
// console.log(20 ?? 100);
// console.log('' ?? 10);
// console.log(null ?? 'Helllo');
// console.log(undefined ?? 0);

// Short circuiting

// Use any data type, return any data type
// short-circuiting (if the first value is truthy it will return that value)
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// // Rest Pattern and Parameters

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null);

// 1) Destructuring
// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // obtects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   numbers.forEach(num => (sum += num));
//   console.log(sum);
//   return sum;
// };
// add(2, 3);
// add(2, 4, 3, 2);
// add(1, 4, 2, 98);

// const x = [23, 5, 7];
// add(...x);

// Spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// // const ingridients = [prompt("Let's make pasta! Ingridient 1"), prompt("Let's make pasta! Ingridient 2"), prompt("Let's make pasta! Ingridient 3")]
// // restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
// // restaurant.orderPasta(...ingridients);

// // Objects
// const newRestaurant = {
//   ...restaurant,
//   founder: 'Guiseppe',
//   foundedIn: 1998,
// };
// console.log(newRestaurant);

// const restaurantCopy = {
//   ...restaurant,
// };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// Destructuring Objects
// const {
//   name,
//   openingHours,
//   categories
// } = restaurant;
// console.log(name, openingHours, categories)

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const {
//   menu = [], starterMenu: starters = []
// } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 14
// };

// Error
// {a,b} = abj

//solution
// ({
//   a,
//   b
// } = obj)
// console.log(a, b);

// const {
//   fri: {
//     open,
//     close
//   }
// } = openingHours;
// console.log(open, close);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2
// });

// Destructuring Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[1];

// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, second] = restaurant.categories;
// const [first, , third] = restaurant.categories;
// console.log(first, second)
// console.log(first, third)

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// regular way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
