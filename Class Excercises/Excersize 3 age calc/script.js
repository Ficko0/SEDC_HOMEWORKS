let birthYearInput = parseInt(prompt("Enter your Birthyear"));
let currentYearInput = parseInt(prompt("Enter the current year"));

function calculateAge(birthYear, currentYear) {
    let age = currentYear - birthYear;
    return parseInt(age);
}

let fres = calculateAge(birthYearInput, currentYearInput);
alert(`Your age is ${fres}`);


