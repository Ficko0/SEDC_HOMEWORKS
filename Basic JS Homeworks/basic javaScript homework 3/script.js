console.log("DRAVO");

function parameterCheck (input) {
    let result = typeof(input);
    return result;
}

let example1 = parameterCheck(20);
let example2 = parameterCheck(10 < 20);
let example3 = parameterCheck("string");
let example4 = parameterCheck(undefined);
let example5 = parameterCheck();

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);