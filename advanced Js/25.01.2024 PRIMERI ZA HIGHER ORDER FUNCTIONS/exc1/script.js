function Student(firstName, lastName, age, avarageGrade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.avarageGrade = avarageGrade;
}

let students = [
    new Student('Bob', 'Bobski', 17, 5),
    new Student('Petko', 'Petkovski', 22, 3),
    new Student('Marko', 'Markovski', 18, 7),
    new Student('Katerina', 'Bobski', 17, 5),
    new Student('Ivana', 'Ivanovska', 20, 9)
]

// for (let student of students) {
//     console.log(`${student.firstName} ${student.lastName} ${student.age}`);
// }

function fullName(student) {
    console.log(`${student.firstName} ${student.lastName} ${student.age}`);
}
console.log('==========================.forEach=============================');


//High Order Function (.forEach)
students.forEach(fullName);
console.log('=======================================================');

students.forEach(student => console.log(`${student.firstName} ${student.lastName}`));
console.log('=======================================================');

students.forEach(function (student) {
    console.log(`${student.firstName} ${student.lastName}`);
})
console.log('=======================================================');


//High Order Function (.filter)
function checkAge(student) {
    return student.age >= 18;
}
console.log('==========================.filter=============================');
let studentAgeAbove18 = students.filter(checkAge);
console.log(studentAgeAbove18);
console.log('=======================================================');

studentAgeAbove18.forEach(student => console.log(`${student.firstName} ${student.lastName} ${student.age}`));
console.log('=======================================================');

students.filter(student => student.age >= 18) // direktno napraveno i mnogu popregledno
    .forEach(student => console.log(`${student.firstName} ${student.lastName} :Age: ${student.age}`));
console.log('=======================================================');

students.filter(student => student.avarageGrade >= 5)
    .forEach(student => console.log(`${student.firstName} ${student.lastName} :Grade: ${student.avarageGrade}`));
console.log('=======================================================');


//High Order Function (.map)
console.log('==========================.map=============================');
function returnFullName(student) {
    return `${student.firstName} ${student.lastName}`;
}
//prvichno se koristi .filter , posle .map i na kraj .forEach
let studentInfo = students.map(returnFullName);
console.log(studentInfo);
console.log('=======================================================');
students.filter(student => student.avarageGrade >= 5)
    .map(student => `${student.firstName} ${student.lastName} ${student.avarageGrade}`)
    .forEach(student => console.log(student));
console.log('=======================================================');


//High Order Function (.reduce)
console.log('==========================.reduce=============================');
function reduceGradeFunction(sum, grade) {
    return sum += grade;
}
// za sumiranje na vrednosti obichno se koristi prvo .map pa .reduce
console.log(students
    .map(grade => grade.avarageGrade)
    .reduce(reduceGradeFunction, 0));
console.log('=======================================================');
console.log(students
    .map(grade => grade.avarageGrade)
    .reduce((x, y) => x + y, 0));
console.log('=======================================================');
let studentOfGrade = students
    .filter(x => x.avarageGrade > 5) //prvo filtriraj gi site studenti sho imaat ocena pogolema od 5
    .map(x => x.avarageGrade) // posle vrati gi studentite shto imat ocena pogolema od 5
    .reduce((x, y) => x + y, 0) // posle soberi gi nivnite oceni i pochni so sobiranje od 0
console.log(studentOfGrade);
console.log('=======================================================');
let arrayOfNumber = [1, 2, 4, 4, 5, 6];
console.log(arrayOfNumber.reduce((x, y) => x + y, 0));
console.log('=======================================================');


//High Order Function (.sort)
console.log('=========================.sort==============================');
let copyArray = [...students]; //so tri tocki primer: [...imeNaNekojaNiza] se pravi kopija od nekoja niza
console.log(copyArray);
console.log('=======================================================');
console.log(copyArray.sort((x, y) => x.avarageGrade - y.avarageGrade)); //ova e za da gi podredi od najmal do najgolem
console.log(copyArray.sort((x, y) => y.avarageGrade - x.avarageGrade)); //ova e za da gi podredi od najgolem do najmal
console.log('=======================================================');
copyArray.sort((x, y) => x.firstName.localeCompare(y.firstName));
console.log('Sort String with .localeCompare()');
console.log(copyArray);
console.log('=======================================================');


//High Order Function (.replace)
console.log('=========================.replace==============================');
let string = '30/01/2024';
console.log(string);
console.log('=======================================================');
let replacedString = string.replaceAll('/', '-');
console.log(replacedString);
