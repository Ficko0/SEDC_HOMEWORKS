let func1 = function () {
    console.log('Hello');
}

func1();

let array = [1, 2, 3, 4, function () {
    return 2 + 5;
}(), 5, 6, 7, 8, 9];

console.log(array[4]);

//Arrow functions

let func2 = () => console.log('Hello 2');

func2();

//Arrow Function ama so deklariran parametar

let sum = num => num + 1;

console.log(sum(5));

let sum2 = (num1, num2) => `The result is ${num1 + num2}`

console.log(sum2(10, 10));

//Koga ima edna linija kod vo arrow function, samiot arrow function ima return po default, koga iame {} zagradi, togash mora da stavime return

let sum3 = (num1, num2) => {
    let result = num1 + num2;
    return `The result is ${result}`
}

console.log(sum3(2, 2));

//IF / ELSE ama so pochista sintaksa. ? e if uslov, : se else

let ternary = num => num === 0 ? 0 : `The result is ${num + 1}`;

console.log(ternary(9));

//Self invoked funcitons (NE SE KORISTAT MNOGU SE LOSHI)

(() => {
    let result = 5;
    console.log(`The result is ${result}`);
})();

(function (num1, num2) {
    console.log(`The first number is ${num1}`);
    console.log(`The second number is ${num2}`);
})(10, 2)

let result1 = (function (num1, num2) {
    return `The sum of the numbers is ${num1 * num2}`;
})(5, 4)

console.log(result1);

// function lengthOfNumber (num) {
//     return `The number of digits in the number ${num} is ${num.toString().length}.`;
// }

// // console.log(lengthOfNumber(900000));

// function oddEven (num) {
//     if (num % 2 == 0) {
//         return `The number ${num} is even.`
//     }
//     else {
//         return `The number is ${num} is odd.`
//     }
// }

// // console.log(oddEven(901));
// // console.log(oddEven(90));

// function negativePositive (num) {
//     if (num < 0) {
//         return `The number ${num} is negative`;
//     }
//     else {
//         return `The number ${num} is positive`;
//     }
// }

// // console.log(negativePositive(-20));
// // console.log(negativePositive(20));

// function checkAll (num) {
//     return `${lengthOfNumber(num)}${oddEven(num)}${negativePositive(num)}`;
// }

// console.log(checkAll(900));
// console.log(checkAll(-801));

let function1 = (num) => `The length of the number ${num} is ${num.toString().length}.`;
let function2 = (num) => num % 2 == 0 ? `The number ${num} is even.` : `The number ${num} is odd.`;
let function3 = (num) => num < 0 ? `The number ${num} is negative` : `The number ${num} is positive.`;
let combinedFunc = (num) => `${function1(num)}${function2(num)}${function3(num)}`;

console.log(combinedFunc(900));

const p1 = document.querySelector('.toChange')

let defaultColor = p1.style.color = 'black';
let defaultTextSize = p1.style.fontSize = '24px';

let variable1 = (element, color = 'black') => {
    element.style.color = color;
}


let variable2 = (element, fontSize = '24px') => {
    element.style.fontSize = fontSize;
}


const h1ChangeFontSize = document.querySelector('.changeFontSize');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const buttonToMakeChanges = document.querySelector('.makeChanges');

let changeFontSize = (element) => {
    element.style.fontSize = `${input1.value}px`;
}

let changeColor = (element) => {
    element.style.color = `${input2.value}`;
}

buttonToMakeChanges.addEventListener('click', () => {
    changeColor(h1ChangeFontSize);
    changeFontSize(h1ChangeFontSize)
})