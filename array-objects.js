const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];


const names = students.map(student => student.name);
console.log(names);


const highAchievers = students.filter(student => student.grade > 80);
console.log(highAchievers);


const charlie = students.find(student => student.name === "Charlie");
console.log(charlie);


const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log(avgGrade);


const csMajors = students.filter(student => student.major === "CS");
console.log(csMajors);


const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade);


const hasTopStudent = students.some(student => student.grade > 90);
console.log(hasTopStudent);


const allPassing = students.every(student => student.grade >= 60);
console.log(allPassing);