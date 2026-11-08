
let numA = 10;
let numB = 3;

console.log("Addition:", numA + numB);
console.log("Subtraction:", numA - numB);
console.log("Multiplication:", numA * numB);
console.log("Division:", numA / numB);
console.log("Modulus:", numA % numB);
console.log("Exponentiation:", numA ** numB);


let counter = 0;

counter++;
console.log("Increment:", counter);

counter--;
console.log("Decrement:", counter);




let firstName = "Ezra";
let lastName = "Karimi";

let fullName = firstName + " " + lastName;

console.log("Full name:", fullName);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First letter:", firstName.charAt(0));
console.log("Includes Ezra:", fullName.includes("Ezra"));




let x = 5;
let y = 3;

console.log(x > y);
console.log(x < y);
console.log(x === y);
console.log(x == "5");
console.log(x !== y);

console.log(true && true);
console.log(true || false);
console.log(!true);






let ageInDays = age * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = new Date().getFullYear() + (100 - age);

console.log("My age in years:", age);
console.log("My age in days:", ageInDays);
console.log("My age in hours:", ageInHours);
console.log("Year I will turn 100:", yearTurn100);