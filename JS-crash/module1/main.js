// alert("Hello world")

// console.log("Hello World");s
// console.error("error!");
// console.warn('This is an warning');


// Data type: String, Numbers, Boolean, null, undefined
const firstname = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z);

// Concatenation
// Template String
console.log(`My name is is ${firstname} and I am ${age} old` );

const s = 'Hello World';
console.log(s.substring(0, 7).toUpperCase());

// split by letter
console.log(s.split(' '));

// Arrays
const numbers = new Array(1, 2, 3);
console.log(numbers);

const fruits = ['apples', 'bananas', 5, 'pears'];
fruits[3] = 'grapes'; // reassign

fruits.push('mangos');
fruits.unshift('strawberries');

// is it an Array
console.log(Array.isArray(fruits));

console.log(fruits.indexOf('pears'));

console.log(fruits);