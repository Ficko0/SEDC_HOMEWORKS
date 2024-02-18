function Academy (academyName, students, subjects, academyStart, academyEnd) {
    this.academyName = academyName;
    this.students = students;
    this.subjects = subjects;
    this.academyStart = academyStart;
    this.academyEnd = academyEnd;
    this.numberOfClasses = this.subjects * 10;

    this.printStudents = function () {
        console.log(`Students of the academy ${this.academyName} are: ${this.students}`);
    }

    this.printSubjects = function () {
        console.log(`Subjects of the academy ${this.academyName} are: ${this.subjects}`);
    }
}

let academy1 = new Academy ('SEDC', ['fico', 'nikola', 'petre'], ['javaScript', 'cSharp', 'C++'], '12.02.2024', '12.02.2025');
academy1.printStudents();
academy1.printSubjects();

function Subject (subjectName, numberOfClasses, isElective, currentAcademy, currentStudents) {
    this.subjectName = subjectName;
    this.numberOfClasses = numberOfClasses;
    this.isElective = isElective;
    this.currentAcademy = currentAcademy;
    this.currentStudents = currentStudents;

    this.overrideClasses = function (classes) {
        if (classes <= 3) {
            console.log('The number of classes cannot be smaller than 3');
        }
        else {
            console.log(`You have ${classes} classes remaining.`);
        }
    }
}

let subject1 = new Subject ('JAVA', true, 'SEDC', ['petre', 'marija', 'fico']);
subject1.overrideClasses(4);

function Student (studentFirstName, studentLastName, studentAge) {
    this.studentFirstName = studentFirstName;
    this.studentLastName = studentLastName;
    this.studentAge = studentAge;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = function (someAcademy) {
        this.academy = someAcademy;
        someAcademy.students.push(this);
    }

    this.startSubject = function () {
        if (this.academy == academy1.academyName && this.currentSubject.includes(subject1.subjectName)) {
            this.currentSubject = subject1.subjectName;
            console.log(`Your current subject is ${subject1.subjectName}.`);
        }
        else {
            this.currentSubject = null;
            console.log(`The subject is not completed.`);
        }
    }

}

let student1 = new Student ('Filip', 'Zlatanovski', 20, ['C++'], 'SEDC', ['javaScript']);
student1.startSubject();