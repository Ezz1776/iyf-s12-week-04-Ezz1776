

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(95));
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(65));
console.log(getGrade(40));




function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log(getDayName(0));
console.log(getDayName(1));
console.log(getDayName(2));
console.log(getDayName(3));
console.log(getDayName(4));
console.log(getDayName(5));
console.log(getDayName(6));
console.log(getDayName(8));





for (let i = 0; i < 5; i++) {
    console.log(i);
}


let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}


let number = 0;

do {
    console.log(number);
    number++;
} while (number < 5);



console.log("Numbers 1-100");

for (let i = 1; i <= 100; i++) {
    console.log(i);
}


console.log("Even numbers 1-50");

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}



console.log("FizzBuzz");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}



console.log("Triangle of stars");

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}