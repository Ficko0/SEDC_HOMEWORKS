console.log("SCOPES");

let result = 25  // ova e globalna varijabla i ako se napravi consolelog na result ke ispecati 25 

function multiplyNumbers (a, b) {
    let result = a * b;
    return result;
}

multiplyNumbers(10, 30)

console.log(result);