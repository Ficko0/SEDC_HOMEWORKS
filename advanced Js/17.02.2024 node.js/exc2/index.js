const sayHello = (name) => {
    console.log(`Hello ${name}!`);
}

sayHello ('fico');
sayHello('Bbababababab');

// console.log(window); will throw error because window does not exist

console.log(global); //global e isto ko window samo shto nemozhe da se koristi vo browser, tuku se koristi vo node

setTimeout(() => {
    console.log(`Delayed for 2 seconds`);
}, 2000);

console.log(process.argv);  //dava informacija kade e instaliran node.js i kade se koristi vo momentot

process.stdout.write('Enter something: ');  //so komandata process.stdout.write se pishuva neshto vo terminal (kako alert)

process.stdin.on('data', (input) => {
    const userInput = input.toString().trim();
    console.log(`You entered ${userInput}.`);
    process.exit();
})  // stdin.on (2 argumenta, prviot e data, a vtoriot e nekakva funkcija za da go prosledi toa (kako prompt))

let colors = require('colors');

console.log('Hello world'.red);