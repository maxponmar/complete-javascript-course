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

// const age = calcAge1(1991);
// console.log(age);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // Function Expression

// // Not allowed
// // const age2 = calcAge2(1991);
// // console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1);

// Arrow Functions

// const calcAge3 = birthYear => 2037 - birthYear;

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1998, "Maximiliano"));

// Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   return `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
// }

// console.log(fruitProcessor(2, 3));

// Conding Challenge 1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolphinsAverageScore = calcAverage(44, 23, 71);
// const koalasAverageScore = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas)
//     console.log(`Dolphins win (${avgDolphins} - ${avgKoalas})`)
//   else if (avgKoalas >= 2 * avgDolphins)
//     console.log(`Koalas win (${avgKoalas} - ${avgDolphins})`)
// }


// checkWinner(dolphinsAverageScore, koalasAverageScore);

// Introduction to Arrays

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay'
// console.log(friends);
// // friends = ['Bob', 'Alice'];

// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas)
// console.log(jonas.length);

// console.log(years + 10);

// Basic Array Operations

// Add elements
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// const popped = friends.pop(); // Last
// console.log(friends);
// console.log(popped);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));

// friends.push(23)
// console.log(friends);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));
// console.log(friends.includes(23));

// Coding Challenge 2

// const calcTip = bill => bill >= 50 && bill <= 300 ?
//   bill * 0.15 : bill * 0.2;

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(tips);
// console.log(total);

// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
}