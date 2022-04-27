// Hello world
let js = 'amazing';
// if (js === 'amazing') alert("JavaScript is FUN!");
console.log(40 + 8 + 23 - 10);

console.log("Jonas")
console.log(23);

// Values and Variables
let firstName = "Maxiflow";
console.log(firstName)

// Variable names cannot start with numbers
// let 3xd = 10;
let xd = 10;

// Variable names cannot use javascript keywords
// let new = 10;
// let function = "Hello"

// By convention, constants are named with capital letters
let PI = 3.1415;

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

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true)
console.log(typeof "XD")
console.log(typeof 10)
console.log(typeof 10.123123)
let other;
console.log(typeof other)
// Javascript thinks that null is of type object (WARNING: weird behavior)
console.log(typeof null)


// Dynamic typing in action
console.log(typeof javascriptIsFun)
javascriptIsFun = "Hello"
console.log(typeof javascriptIsFun)