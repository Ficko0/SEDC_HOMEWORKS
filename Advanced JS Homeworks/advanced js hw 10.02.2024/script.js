function Person (name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function () {
        console.log(`The individuals first and last name is: ${this.name} ${this.lastName}.`);
    }

    this.showAcademyStudent = function () {
        console.log(`The student ${this.name} is in the academy ${this.academyName}.`);
    }
}

let person1 = new Person ('Fico', 'Zlatanovski', 19);
person1.getFullName();

function Student (name, lastName, age, academyName, studentId) {
    Object.setPrototypeOf (this, new Person (name, lastName, age))
    this.academyName = academyName;
    this.studentId = studentId;

    this.study = function () {
        console.log(`The student ${this.name} is studying in the academy ${this.academyName}.`);
    }
}

let student1 = new Student ('Nikola', 'Avramovski', 19, 'SEDC', 10);
let student2 = new Student ('Toni', 'Montana', 90, 'SEDC', 100);
student1.study();
student2.study();

student2.showAcademyStudent();

function DesignStudent (name, lastName, age, academyName, studentId, isStudentOfTheMonth, attendAdobeExam) {
    Object.setPrototypeOf (this, new Student (name, lastName, age, academyName, studentId))
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = attendAdobeExam;

    this.showDesignStudent = function () {
        if (this.isStudentOfTheMonth == true) {
            console.log(`The student ${this.name} is the student of the month.`);
        }
        else {
            console.log(`The student ${this.name} is not the student of the month.`);
        }
    }
}

let designStudent1 = new DesignStudent ('Marko', 'Petrovski', 20, 'SEDC', 111, true, false);
designStudent1.showDesignStudent();
let designStudent2 = new DesignStudent ('Mitre', 'Mitrovski', 22, 'SEDC', 220, false, false);
designStudent2.showDesignStudent();

function CodeStudent (name, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject) {
    Object.setPrototypeOf (this, new Student (name, lastName, age, academyName, studentId));
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;

    this.doProject = function (type) {
        if ((this.hasIndividualProject == true) || (this.hasGroupProject == true)) {
            console.log(`The student ${this.name} is working on a ${type} project.`);
        }
        else {
            console.log(`The student ${this.name} is not working on any projects.`);
        }
    }
}

let codeStudent1 = new CodeStudent ('Pero', 'Pistolero', 21, 'SEDC', 202, false, true);
codeStudent1.doProject('Java');
let codeStudent2 = new CodeStudent ('Marijan', 'Pavlovski', 30, 'SEDC', 222, false, false);
codeStudent2.doProject('c++');

function NetworkStudent (name, lastName, age, academyName, studentId, academyPart) {
    Object.setPrototypeOf (this, new Student (name, lastName, age, academyName, studentId));
    this.academyPart = academyPart;

    this.attendCiscoExam = function () {
        console.log(`The student ${this.name} is attending a CISCO exam.`);
    }
}

let networkStudent1 = new NetworkStudent ('Jan', 'Piperka', 18, 'SEDC', 110, 2);
networkStudent1.attendCiscoExam();
let networkStudent2 = new NetworkStudent ('Aleksej', 'Kostovski', 99, 'SEDC', 420, 3);
networkStudent2.attendCiscoExam();