const gradeTracker = {
    students: [],

    
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    
    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) return null;

        const grades = Object.values(student.grades);

        return Number(
            (grades.reduce((total, grade) => total + grade, 0) / grades.length).toFixed(2)
        );
    },

    
    getSubjectAverage(subject) {
        const grades = this.students
            .map(student => student.grades[subject])
            .filter(grade => grade !== undefined);

        if (grades.length === 0) return null;

        return Number(
            (grades.reduce((total, grade) => total + grade, 0) / grades.length).toFixed(2)
        );
    },

    
    getTopStudent() {
        if (this.students.length === 0) return null;

        return this.students.reduce((top, student) =>
            this.getStudentAverage(student.name) >
            this.getStudentAverage(top.name) ? student : top
        );
    },

    
    getStrugglingStudents() {
        return this.students.filter(student =>
            this.getStudentAverage(student.name) < 70
        );
    },

    
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    
    generateReportCard(name) {
        const student = this.getStudent(name);

        if (!student) return "Student not found";

        const average = this.getStudentAverage(name);

        let report = `Report Card: ${name}\n`;

        for (const [subject, grade] of Object.entries(student.grades)) {
            report += `${subject}: ${grade} (${this.getLetterGrade(grade)})\n`;
        }

        report += `Average: ${average}\n`;
        report += `Overall Grade: ${this.getLetterGrade(average)}`;

        return report;
    }
};


gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));