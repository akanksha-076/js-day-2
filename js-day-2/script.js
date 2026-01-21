//spread operator
//let fruit1=["apple","mango"]
//let fruit2=["banana","cherry"]
//console.log([...fruit1,...fruit2])

//ternary operator
//let age=18;
//lat canvote =age>=18?"you can vote":"you cant vote";
//console.log(canvote);

//let num=5
//let result= num%2===0?"num is odd":"num is even";
//console.log(result)

//leap year testing
let year=2026
let result=(year%4===0 & year%100!==0 || year%400===0)?"year is a leap year":"year is not a lear year";
console.log(result)  

//arrow function
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Bob")); 

//anonymous function
setTimeout(function() {
    console.log("Hello, world!");
}, 1000);

//function expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Charlie"));

//call back function
function logMessage() {
    console.log("This is a callback function.");
}

function executeCallback(callback) {
    callback();
}

executeCallback(logMessage);

//frist class function
function greet(name) {
    return `Hello, ${name}!`;
}

const sayHello = greet;
console.log(sayHello("Dave"));

//heigher order function
function higherOrderFunction(callback) {
    callback();
}

function logMessage() {
    console.log("This is a higher-order function.");
}

higherOrderFunction(logMessage);