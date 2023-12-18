let myApp = document.getElementById('app');
let titleDiv = myApp.firstElementChild;
let contentDiv = myApp.children[1];

let students = ['Matej prezime', 'Mario prezime', 'Filip prezime', 'Radica prezime', 'Marija prezime'];
let subjects = ['javascript basic', 'introduction to html', 'javascript advanced', 'angular', 'react'];
let grades = ['a', 'b', 'a', 'c', 'e'];

function printGrades(subjects, grades, element) {
    
    console.log(element);
    element.innerHTML = ""; //clearing element
    element.innerHTML += `<ul>`
    for (let i = 0; i < subjects.length; i++) {
        element.innerHTML += `<li>${subjects[i]}: grades: ${grades[i]}</li>`;
    }
    element.innerHTML += `</ul>`;
}


function printStudents(students, element) {

    element.innerHTML = ""; //clearing element
    element.innerHTML = `<ol>`;

    for (let student of students) {
        element.innerHTML += `<li>${student}</li>`;
    }
    element.innerHTML += `</ol>`;
}

function academyPanel(person, name) {

    if (person == 'student' && name.length >= 2) {
        titleDiv.innerHTML += `<h1><b>Hello There ${name}</b></h1>`;
        titleDiv.innerHTML += `<p>Welcome to your student page!</p>`;
        contentDiv.innerHTML += `<h3>Your Grades</h3>`;
        printGrades(subjects, grades, contentDiv)
    }
    else if (person == 'teacher' && name.length >= 2) {
        titleDiv.innerHTML += `<h1><b>Hello ${name}!</b></h1>
        <p>Welcome to your teachers page</p>`;
        contentDiv.innerHTML += `<h3>Your Students</h3>`;
        printStudents(students, contentDiv);
    }
    else {
        titleDiv.innerHTML += `<h1>Your login was unsucsessful</h1>`;
        titleDiv.innerHTML += `<p>Please try again!</p>`;
    }
};

let input = prompt("Are you a student or a teacher?");
let name = prompt("What is your name?");
academyPanel(input,name);

myApp.style.color = "white";
myApp.style.backgroundColor = "black";