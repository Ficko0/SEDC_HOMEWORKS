//Higher Order Funcitons

//forEach (higher order function) => funkcija sho prima argumenti i gi raboti site elementi od primer: nekoja niza


//Not a higher order function
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].firstName} ${students[i].lastName}`);
}

//Higher order Function
function logFullNames(student) {
    console.log(`${student.firstName} ${student.lastName}`);
}

students.forEach(logFullNames);

//Higher order Function with an annonimous function
students.forEach(function (student) {
    console.log(`${student.firstName} ${student.lastName}`);
});

//Using and arrow function
students.forEach(student => console.log(`${student.firstName} ${student.lastName}`));


//FILTER => prima funkcija kako argument. funckijata ima ekspresija shto gi testira site vrednosti od nekoja kolekcija
// i vrakja nova kolekcija so tochni vrednosti (SVE SE CHUVA VO NOVA PROMENLIVA)!!!!!

//not a high order function
let above18 = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].age >= 18) {
        above18.push(students[i]);
    }
}

//high order function
function above18Students (student) {
    return student.age >= 18;
}

let Above18 = students.filter(above18Students);

//higher order function with arrow function
let eighteenYearOlds = students.filter(student => student.age >= 18);


//MAP => prima funkcija kako argument, no ovaa funkcija egzekutira kod za sekoj item od nekoja kolekcija i go vrakja rezultatot.
// so ova mozhe da se modificira i koristi sekoj item od nekoja niza na odreden nachin.

//not a higher order function
let fiveGradeStudentsNames = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].avarageGrade === 5) {
        fiveGradeStudentsNames.push(`${students[i].name} ${students[i].lastName}`);
    }
}

//with high order function
function fiveGradeCheck (student) {
    return student.avarageGrade === 5;
}

function fullName (student) {
    return `${student.firstName} ${student.lastName}`;
}

let fiveGradeStudentsName = students
    .filter(fiveGradeCheck)
    .map(fullName);