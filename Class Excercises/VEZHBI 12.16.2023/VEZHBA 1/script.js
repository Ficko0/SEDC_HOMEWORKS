let parameter1 = 5;
let parameter2 = 'random string';
let parameter3 = null

function parameterPrint (parameter) {
    let result = `The given argument was: "${parameter}". Ok?`;
    return result;
}

console.log(parameterPrint(parameter1));
console.log(parameterPrint(parameter2));
console.log(parameterPrint(parameter3));