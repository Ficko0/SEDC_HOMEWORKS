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
const randomName = getRandomElement<string>(['name1', 'name2', 'name3']);

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

function printId(id: number | string): void { // It can be either a number or a string
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


// Asserting types in an Array

const rawData: string = '[{"name": John, "age": 30}, {"name": Jane, "age": 20}]';

const data: { name: string, age: number }[] = JSON.parse(rawData) as {
    name: string,
    age: number
}[];


// Working with generics

interface MultiDimensionalArray<T> {
    [key: number]: T | MultiDimensionalArray<T>,
    length: number,
}

function flatten<T>(array: MultiDimensionalArray<T>, result: T[] = []): T[] {
    for (let i = 0; i < Array.length; i++) {
        if (Array.isArray(array[i])) {
            flatten(array[i] as T[], result)
        }
        else {
            result.push(array[i] as T);
        }
    }

    return result;
}

console.log(flatten([1, [2, 3], [4, 5, 6, 7, 8]]));


// Tuple (array kade shto gi predefinirame brojot na elementite i tipovite na sekoj od niv)

type Student = [string, number, number[]]; // this is a tupple

function getStudent(name: string, age: number, grades: number[]): Student {
    let sName = name;
    let sAge = age;
    let sGrades = grades;

    return [sName, sAge, sGrades];
}

const ivan = getStudent('Ivan', 22, [5, 5, 5]);

console.log(ivan);


// Types VS Interfaces

interface Animal {
    type: 'dog' | 'cat' | 'cow' | any; // mozhe da se specificira na prviot nachin ili so any (specificiranje na TIP)
    age: number;
}

interface Pet extends Animal {
    name: string;
}

type VisitReason = 'checkup' | 'sickness' | 'injury';

type Visit = {
    pet: Pet;
    date: Date;
    reason: VisitReason;
}


// Advanced classes

class VetClinic {
    // #visits = []; // this is called a JavaScript Private Property

    private visits: Visit[] = []; // this is called a TypeScript Private Property

    logVisit(visit: Visit) {
        this.visits.push(visit);
    }

    getVisits(): Visit[] {
        return this.visits;
    }
}

let clinic = new VetClinic();

const charlie = {
    name: 'Charlie',
    type: 'dog',
    age: 3,
} satisfies Pet;

clinic.logVisit({
    date: new Date(),
    reason: 'checkup',
    pet: charlie,
})

console.log(clinic.getVisits());


// Decorators

function CanFly(target: Function) {
    target.prototype.fly = function () {
        console.log(`${this.name} is flying`);
    }
}

function HasSuperStrength(target: Function) {
    target.prototype.lift = function () {
        console.log(`${this.name} is lifting a car`);
    }
}

function Invisible(target: Function) {
    target.prototype.invis = function () {
        console.log(`${this.name} is invisible`);
    }
}

@CanFly
@HasSuperStrength
@Invisible
class Superhero implements Character{
    name: string;
    health: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }
    speak(): string {
        return `Hi i am ${this.name}`;
    }

    greet() {
        console.log(`Hi I am ${this.name}`);
    }
}

// const batman = new Superhero('Batman');

// batman.greet();
// (batman as any).fly();
// (batman as any).invis();
// (batman as any).lift();

interface Character {
    name: string;
    health: number;
    speak(): string;
}

class Hero implements Character {
    name: string;
    health: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }

    speak() {
        return `Hi im ${this.name}`
    }
}

const hero1 = new Hero('Superman', 100);

hero1.speak();

function LogBattleEvent<T>(constructor: new (...args: any[]) => T): void {
    console.log(`${constructor.name} battle event created.`);
}

@LogBattleEvent
class Battle<T extends Character> {
    constructor(public participantOne: T, public participantTwo: T) { }

    startBattle(): string {
        return `${this.participantOne.speak()} vs ${this.participantTwo.speak()}`
    }
}

const spiderman = new Hero('Spider-man', 100);
const superman = new Superhero('Superman', 200);

const battle1 = new Battle(spiderman, superman);

battle1.startBattle();


// Classes Keywords

abstract class Vehicle {
    protected readonly numberOfWheels: number;

    constructor (numberOfWheels: number) {
        this.numberOfWheels = numberOfWheels;
    }

    abstract startEngine (): void;

    private displayNumberOfWheels (): void {
        console.log(`This vehicle has ${this.numberOfWheels}.`);
    }

    static getVehicleType (): string {
        return `Generic vehicle`;
    }
}

class Car extends Vehicle {

    engineStarted: boolean = false;
    private _model: string;
    private static numberOfCars: number = 0;

    constructor (model: string, numberOfWheels: number = 4) {
        super(numberOfWheels);
        this._model = model;
        Car.numberOfCars++;
    }

    startEngine(): void {
        this.engineStarted = true;
        console.log(`Engine has started.`);
    }

    get model() {
        return this._model;
    }

    set model(model: string) {
        this._model = model;
    }
}

const yugo = new Car('Yugo', 4);