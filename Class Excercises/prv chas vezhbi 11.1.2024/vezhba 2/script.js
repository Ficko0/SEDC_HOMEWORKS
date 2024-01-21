let arrayOfInput = ['d', null, undefined, 90, 'sdsd', 'sdsddddddddddd', '90', 12983, '40400', false, NaN, false, 399393, 69420, ''];
let arrayToPush1 = [];
let arrayToPush2 = [];
let arrayToPush3 = [];

function pushString() {
    for (let i = 0; i < arrayOfInput.length; i++) {
        if (typeof arrayOfInput[i] === "string") {
            arrayToPush1.push(arrayOfInput[i]);
        }
    }
}

pushString();
console.log(arrayToPush1);

function pushNumber() {
    for (let i = 0; i < arrayOfInput.length; i++) {
        if (typeof arrayOfInput[i] === "number") {
            arrayToPush2.push(arrayOfInput[i])
        }
    }
}

pushNumber();
console.log(arrayToPush2);

function removeFalseyValues() {
    for (let i = 0; i < arrayOfInput.length; i++) {
        if (typeof arrayOfInput[i] !== "boolean" && typeof arrayOfInput[i] !== "undefined" && !isNaN(arrayOfInput[i]) && arrayOfInput[i] !=="" && arrayOfInput[i] !== null ) {
            arrayToPush3.push(arrayOfInput[i])
        }
    }
}

removeFalseyValues();
console.log(arrayToPush3);