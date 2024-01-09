function variables(variable) {
    return (typeof (variable));
}

const string = 'string';
const boolean = true;
const object = {};
const number = 10;
const array = [];

console.log(variables(string));
console.log(variables(boolean));
console.log(variables(object));
console.log(variables(number));
// console.log(variables(array));
console.log(array instanceof Array);
