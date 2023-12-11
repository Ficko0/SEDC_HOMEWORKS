console.log("ZDRAVO");

let input1 = parseInt(prompt("Vnesi prv broj"));
let input2 = parseInt(prompt("Vnesi vtor broj"));

function sumOfTwoNumbers (a, b) {
    let sum = a + b;
    return sum;
}

let resultOfSum1 = sumOfTwoNumbers(25, 25);
let resultOfSum2 = sumOfTwoNumbers(90, 10);

console.log(resultOfSum1);
console.log(resultOfSum2);

function subtractTwoNumbers(c, d) {
    sub = c - d;
    return sub;
}

let subtractionOfTwoNumbers1 = subtractTwoNumbers(100, 50);
let subtractionOfTwoNumbers2 = subtractTwoNumbers(20, 10);

console.log(subtractionOfTwoNumbers1);
console.log(subtractionOfTwoNumbers2);

function multiplyTwoNumbers(e, f) {
    multiply = e * f;
    return multiply;
}

let multiplicationOfTwoNumbers1 = multiplyTwoNumbers(10, 10);
let multiplicationOfTwoNumbers2 = multiplyTwoNumbers(90, 10);

console.log(multiplicationOfTwoNumbers1);
console.log(multiplicationOfTwoNumbers2);

function divideTwoNumbers(g, h) {
    divide = g / h;
    return divide;
}

let divisionOfTwoNumbers1 = divideTwoNumbers(100, 10);
let divisionOfTwoNumbers2 = divideTwoNumbers(90, 9);

console.log(divisionOfTwoNumbers1);
console.log(divisionOfTwoNumbers2);

