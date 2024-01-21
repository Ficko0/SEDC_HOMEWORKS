class Student {
    constructor(firstName, lastName, birthYear, academy, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.academy = academy;
        this.grades = grades;
    }

    getAge() {
        let currentYear = 2024;
        let result = currentYear - this.birthYear;
        document.body.innerHTML += `<h1>The student ${this.firstName} ${this.lastName} is ${result} years old.</h1>`;
    }

    getInfo() {
        document.body.innerHTML += `<h2>This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}.</h2>`;
    }

    getAvarageGrades() {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            // sum = (array[i] + sum) / array.length;
            sum += this.grades[i];
        }
        const res = sum / this.grades.length
        return document.body.innerHTML += `<h3>The avarage grades for ${this.firstName} ${this.lastName} are: ${res}.</h3>`
    }
}

const student1 = new Student('Fico', 'Zlatanovski', 2004, 'SEDC', [1, 1, 1, 4, 4, 5, 5, 5]);

student1.getAge();
student1.getInfo();
student1.getAvarageGrades([1, 1, 1, 4, 4, 5, 5, 5]);

const student2 = new Student('Nikolce', 'bravos', 2004, 'FINKI', [5, 5, 5, 5, 5, 5]);

student2.getAge();
student2.getInfo();
student2.getAvarageGrades([5, 5, 5, 5, 5, 5]);

const student3 = new Student('Mila', 'Krstevska', 2005, 'GUC', [4, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);

student3.getAge();
student3.getInfo();
student3.getAvarageGrades([4, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);