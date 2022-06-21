const input = require('sync-input');

console.log("Hello! My name is Aid.");
console.log("I was created in 2020.");
console.log("Please, remind me your name.");

let name = input();

console.log("What a great name you have, " + name + "!");
console.log("Let me guess your age.");
console.log("Enter remainders of dividing your age by 3, 5 and 7.");

const userAge = (input() * 70 + input() * 21 + input() * 15) % 105;

console.log(`Your age is ${userAge}; that's a good time to start programming!`);
