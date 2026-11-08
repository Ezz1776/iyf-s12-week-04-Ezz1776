// TASK 7.3: FUNCTIONS

// Exercise 1: Function Declarations

function greet(name) {
    return `Hello, ${name}!`;
}

const add = function(a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log(greet("Ezra"));
console.log(add(10, 5));
console.log(multiply(4, 5));
console.log(divide(20, 4));

// Exercise 2: Build These Functions

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    return fullName.split(" ")
        .map(name => name[0].toUpperCase())
        .join("");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(calculateArea(10, 5));
console.log(celsiusToFahrenheit(25));
console.log(isEven(8));
console.log(getInitials("Ezra Karimi"));
console.log(reverseString("JavaScript"));

// Exercise 3: Default Parameters

function greetPerson(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetPerson());
console.log(greetPerson("Alice"));
console.log(greetPerson("Bob", "Hi"));

// Challenge: Calculate Tip

function calculateTip(bill, tipPercent = 15) {
    return bill * tipPercent / 100;
}

console.log(calculateTip(1000));
console.log(calculateTip(1000, 20));


function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    return fullName.split(" ")
        .map(name => name[0].toUpperCase())
        .join("");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(calculateArea(10, 5));
console.log(celsiusToFahrenheit(25));
console.log(isEven(8));
console.log(getInitials("Ezra Karimi"));
console.log(reverseString("JavaScript"));


function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());              
console.log(greet("Alice"));       
console.log(greet("Bob", "Hi"));   

function calculateTip(bill, tipPercent = 15) { 
    let tip = bill * (tipPercent / 100);
    let total = bill + tip;

    console.log("Bill amount:", bill);
    console.log("Tip percentage:", tipPercent + "%");
    console.log("Tip amount:", tip);
    console.log("Total amount:", total);
}

calculateTip(1000);
calculateTip(1000, 20);