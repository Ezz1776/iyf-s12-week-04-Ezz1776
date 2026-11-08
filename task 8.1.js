

const numbers = [5, -3, 12, 8, -7, 15, 2];


const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);


const positiveNumbers = numbers.filter(num => num >= 0);
console.log("Numbers without negatives:", positiveNumbers);


const firstGreaterThan10 = numbers.find(num => num > 10);
console.log("First number greater than 10:", firstGreaterThan10);


const product = numbers.reduce((total, num) => total * num, 1);
console.log("Product of all numbers:", product);