console.log("Logical Operators");

// AND OPERATOR

console.log("AND OPERATOR");

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// OR OPERATOR

console.log("OR OPERATOR");

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//NEGATION OPERATOR

console.log("NEGATION OPERATOR");

console.log(!true); //prints false
console.log(!false); //prints true

//COMPARISON OPERATORS

console.log("COMPARISON OPERATORS");
let comparison1 = 4 < 7; //true
console.log(comparison1);

let comparison2 = 5 != 8; //true
console.log(comparison2);

let a = 5;
let b = 9;
let comparison3 = a > b;
console.log(comparison3);

let expression1 = comparison1 && comparison2 && comparison3; //true && true && false ==> printa false bidejki ima edno greshno
console.log(expression1);

let expression2 = comparison1 || comparison2 || comparison3; //true || true || false ==> printa true
console.log(expression2);

let expression3 = ((5 < 2) && (2 >= 3)); //false && false ==> printa false
console.log(expression3);

//TRUTHY FALSEY VALUES

console.log("TRUTHY / FALSEY VALUES");

console.log(true && true); //true
console.log(false && (3 == 4)); //false
console.log('Cat' && 'Dog'); // 'Dog'
console.log("false" && ''); // printa ''
console.log('' || ""); // printa ''
console.log(!""); //true

let d = true;
console.log(!!d); //true

let firstNum = "12";
let secondNum = 4;
console.log(secondNum < firstNum); //true

console.log("4" < "12");

console.log(5 == "5"); //true
console.log(5 === "5"); //false