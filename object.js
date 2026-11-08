
const person = {
    firstName: "Brian",
    lastName: "Kamau",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "football"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};


console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);


person.age = 31;
person.phone = "0712 345 678";

delete person.isStudent;

const calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(5, 3));


const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log(Object.keys(scores));

// Get values
console.log(Object.values(scores));

// Get entries
console.log(Object.entries(scores));

// Loop through
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}