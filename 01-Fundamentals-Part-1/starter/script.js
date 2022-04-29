// Hello world
// let js = 'amazing';
// // if (js === 'amazing') alert("JavaScript is FUN!");
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas")
// console.log(23);

// Values and Variables
// let firstName = "Maxiflow";
// console.log(firstName)

// Variable names cannot start with numbers
// let 3xd = 10;
// let xd = 10;

// Variable names cannot use javascript keywords
// let new = 10;
// let function = "Hello"

// By convention, constants are named with capital letters
// let PI = 3.1415;

// Data Types

// Javascript has 7 primitive data types
// 1.- Number: Floating point numbers, used for decimals and integers
// 2.- String: squence of characters, used for text
// 3.- Boolean: Logical type that can only be true or false, used for taking decicions
// 4.- Undefined: Value taken by a variable that is not yet defined (empty value)
// 5.- Null: Also means empty value
// 6.- Symbol (ES2015): value that is unique and cannot be changed
// 7.- BigInt (ES2020): Large integers than the Number type can hold 

// Javascript has dynamic typing, we do not have to manually define the data type

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true)
// console.log(typeof "XD")
// console.log(typeof 10)
// console.log(typeof 10.123123)
// let other;
// console.log(typeof other)
// // Javascript thinks that null is of type object (WARNING: weird behavior)
// console.log(typeof null)


// // Dynamic typing in action
// console.log(typeof javascriptIsFun)
// javascriptIsFun = "Hello"
// console.log(typeof javascriptIsFun)

// let, const and var
// let age = 30;
// age = 31;

// const birthYear = 1990;
// Not allowed
// birthYear = 12;

// Not allowed, const need to be initialized.
// const job;

// let is block scoped
// var is function scoped
// more information on lesson 7

// By doing this, compiler will create a property in the global object
// lastName = "Ponce";
// console.log(lastName);

// Basic Operators
// const now = 2022;
// const ageMax = now - 1998;
// const ageJonas = now - 1991;
// const agePedro = 2022 - 1994;
// console.log(ageMax);
// console.log(agePedro * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Maximiliano";
// const lastName = "Ponce";
// console.log(firstName + " " + lastName);

// let x = 10 * 5;
// console.log(x);
// x += 30;
// console.log(x);

// console.log(ageMax > ageJonas);
// console.log(ageMax >= 18);
// const isFullAge = agePedro >= 18;

// console.log(now - 1992 > now - 2018);

// Operator Precedence
// For more information visit documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// // const averageAge = ageMax + ageJonas / 2;
// const averageAge = (ageMax + ageJonas) / 2;
// console.log(averageAge)

// Coding Challenge #1

// Test Data 1
const MarksWeight1 = 78;
const MarksHeight1 = 1.69;
const JohnsWeight1 = 92;
const JohnsHeight1 = 1.95;

const MarksBMI1 = MarksWeight1 / (MarksHeight1 ** 2);
console.log(MarksBMI1);
const JohnsBMI1 = JohnsWeight1 / (JohnsHeight1 ** 2);
console.log(JohnsBMI1);

// // Test Data 2
// const MarksWeight2 = 95;
// const MarksHeight2 = 1.88;
// const JohnsWeight2 = 85;
// const JohnsHeight2 = 1.76;

// const MarksBMI2 = MarksWeight2 / (MarksHeight2 ** 2);
// console.log(MarksBMI2);
// const JohnsBMI2 = JohnsWeight2 / (JohnsHeight2 ** 2);
// console.log(JohnsBMI2);

// String and Template Literals
// const firstName = "Max";
// const job = "Technician";
// const birthYear = 1998;
// const year = 2022;

// const max = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + "!";
// console.log(max);

// const maxNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(maxNew);


// Taking Decisions

// const age = 19;

// if (age >= 18) {
//     console.log("Allowed to drive.")
// } else {
//     const yearsLeft = 19 - age;
//     console.log(`Too young. Wait another ${yearsLeft} year :C`);
// }


// Coding Challenge #2

const MarkIsHigher = MarksBMI1 > JohnsBMI1;

if (MarkIsHigher) {
    console.log(`Mark's BMI (${MarksBMI1}) is higher than John's (${JohnsBMI1})`);
} else {
    console.log(`Johns's BMI (${JohnsBMI1}) is higher than John's (${MarksBMI1})`);
}

// Type Convertion and Coercion

// Type Convertion
const inputYear = '1990';
console.log(inputYear + 18);
console.log(inputYear)
console.log(Number(inputYear))

console.log(Number(inputYear) + 18);
console.log(Number('Max'));

// NaN is an invalid number
console.log(typeof NaN);

console.log(String(23));

// Type Coercion
// Numbers are converted to strings
console.log('I am ' + 23 + ' years old')

console.log('23' - '10' - 3);
console.log('23' + '10' - 3);
console.log('21' * '2');


// Truthy and Falsy Values

// 5 Falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean({}))

const money = 1;
if (money) {
    console.log("Spent your money :D")
} else {
    console.log("No money")
}

let height;
// height = 10;
if (height) {
    console.log("Exists")
} else {
    console.log("Not exists OR is 0")
}