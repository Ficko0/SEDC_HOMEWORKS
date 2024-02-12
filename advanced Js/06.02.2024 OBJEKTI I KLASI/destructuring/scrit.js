let dog = {
    dogName: 'Sparky',
    dogColor: 'Black',
    dogAge: 5
}

console.log(dog.dogName);
console.log(dog.dogColor);
console.log(dog.dogAge);

const student = {
    name: 'John Doe',
    age: 19,
    scores: {
        javaScript: 55,
        cSharp: 20,
        advancedJs: 90
    }
};

function displayStudent(student) {
    console.log(`Hello ${student.name}`);
    console.log(`javaScript score: ${student.scores.javaScript}`);
    console.log(`cSharp score: ${student.scores.cSharp}`);
    console.log(`advancedJs score: ${student.scores.advancedJs}`);
}

displayStudent(student);
console.log('===================================');

function destructored({ name, scores: { javaScript = 0, cSharp = 0, advancedJs = 0 } }) {
    console.log(`Hello ${name}`);
    console.log(`javaScript score: ${javaScript}`);
    console.log(`cSharp score: ${cSharp}`);
    console.log(`advancedJs score: ${advancedJs}`);
}

destructored(student);
console.log('===================================');
const rgb = [255, 200, 0];

const [red, green, blue] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`);
console.log('===================================');

const rgb1 = [`#F123`, [255, 200, 0], 555];

const [hex, [red1, green1, blue1]] = rgb1;

console.log(`HEX: ${hex}, R: ${red1}, G: ${green1}, B: ${blue1}`);
console.log('===================================');

let numberArray = [1, 2, 3];

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

sumThree(numberArray[0], numberArray[1], numberArray[2]);

console.log(sumThree(...numberArray));
console.log('===================================');