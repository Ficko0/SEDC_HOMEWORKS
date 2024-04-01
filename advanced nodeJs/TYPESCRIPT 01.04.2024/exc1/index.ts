// Basic Primitive TypeScript

const isDone: boolean = true; // boolean

const age: number = 30 || 1.5; // number (can be a decimal number or a whole number)
const color: string = 'green'; // string
let carOwner: undefined = undefined; // undefined
let catName: null = null; // null

let test: any; // try to advoid using any

test = 'test';

console.log(color, age, isDone);

// Interfaces (strctly used for Objects)

interface User {
    name: string
    age?: number // the ? states that it's an optional property
}

let randomUser: User = {
    name: 'Fico',
    age: 20
}

let randomUser2: User = {
    name: 'Nikola',
}

function printUserInfo(user: User): void {
    if (user.age) {
        console.log(`User: ${user.name} ${user.age}`);
    }
    else {
        console.log(`User: ${user.name}.`);
    }
}

printUserInfo(randomUser);
printUserInfo(randomUser2);

const res = printUserInfo(randomUser); // this returns a void or nothing


// Classes

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log(`Point is at ${this.x}, ${this.y}`);
    }
}

const newPoint = new Point(2, 3);
newPoint.draw();


// Functions

function sum(a: number, b: number): number {
    if (a > 2 && b > 2) {
        return a + b;
    }
    else {
        return 0;
    }
}


// Generics (Helps us work with more types at once or different types)

function identity<T>(arg: T): T {
    return arg;
}

let dog = identity<string>('Dog');
let isMarried = identity<boolean>(true);
let studentsCount = identity<number>(20);

console.log(dog, isMarried, studentsCount);

function getRandomElement<T>(items: T[]): T {
    const randomIndex = Math.floor(Math.random() * items.length);

    return items[randomIndex];
}

const randomNumber = getRandomElement<number>([1, 2, 3]);
const randomName = getRandomElement<string>(['name1','name2','name3']);

console.log(randomName, randomNumber);


// Enums

enum Color {
    Red, // 0
    Green, // 1
    Blue, // 2
}

console.log(`Red: `, Color.Red);
console.log(`Green: `, Color.Green);
console.log(`Blue: `, Color.Blue);

enum DaysOfTheWeek {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    // ....
}

console.log(`Day: `, DaysOfTheWeek.Monday);


// Union Types

function printId (id: number | string): void { // It can be either a number or a string
    console.log(`Your ID is: ${id}`);
}

printId(2);
printId('String');


// Async Await

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function greeting(name: string): Promise<string> {
    await delay(1000);

    return `Hi ${name}`;
}

async function run(): Promise<void> {
    const toGreet = await greeting('Fico');
    console.log(toGreet);
}

run();


// Advanced Types and Type Guards

type Fish = { swim: () => void };
type Bird = { fly: () => void };

let birb: Bird = {
    fly() {
        console.log(`Birb is flying.`);
    }
}

birb.fly();

let nemo: Fish = {
    swim() {
        console.log(`Nemo is swimming.`);
    }
}   

nemo.swim();

function move(animal: Fish | Bird) {
    if ('swim' in animal) {
        return animal.swim();
    }
    else {
        return animal.fly();
    }
}

function isFish(pet: Fish | Bird) {
    return (pet as Fish).swim !== undefined;
}


// Type Assetrions

let someValue: any = 'this is a string';
let lengthOfSomeValue = (someValue as string).length; // First example
let lengthOfSomeValue2 = (<string>someValue).length; // Second example


// Types VS Interfaces

// Decorators
