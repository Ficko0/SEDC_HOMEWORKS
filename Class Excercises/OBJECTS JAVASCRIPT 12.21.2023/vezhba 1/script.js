const user = {
    userName: 'ivan',
    password: 'password123',
    email: 'jamandilovski@gmail.com'
};

const user2 = {
    userName: 'ivan123',
    password: 'sedc123',
    email: 'ficozlatanovski@gmail.com'
};

const dog = {
    race: 'dzukela',
    age: '2',
    color: 'kafeavo',
    gender: 'male',
    name: 'dzuki',
    bolesti: ['shuga', 'shtenechak', null],
    weight: 80, //kilogrami
};

//////////////////////////////////////////////////////////////////////////////

function studentGenerator(nameParameter, lastNameParameter, ageParameter, genderParameter, gradesParameter) {
    return {
        name: nameParameter,
        lastName: lastNameParameter,
        age: ageParameter,
        gender: genderParameter,
        grades: gradesParameter
    };
};

let student1 = studentGenerator('Viktor', 'Zdravkovski', '21', 'Male', {
    Matematika: 5,
    Angliski: 4
});

console.log(student1);

///////////////////////////////////////////////////////////////////////////////

class Student {           //poubav nachin za prikazhuvanje na objekti: SE KORISTI CLASS I IME NA KLASA !!!!!!(se pishuva vo Pascalcase)!!!!!
    constructor(nameParameter, lastNameParameter, ageParameter, genderParameter, gradesParameter) {
        this.name = nameParameter;
        this.lastName = lastNameParameter;
        this.age = ageParameter;
        this.gender = genderParameter;
        this.grades = gradesParameter;

    }

    walk() {
        console.log(`Name ${this.name} with Lastname ${this.lastName} has started to walk.`);
    }

    // changeLastName(lastName) {
    //     console.log(`Student ${this.name} and with last name ${this.lastName} has changed it's last name to ${lastName}.`);
    //     this.lastName = lastNameParameter;
    // }
}


class Grades {
    constructor(matematika, angliski) {
        this.matematika = matematika;
        this.angliski = angliski;
    }
}

// console.log(Student);
const student2 = new Student('Mario', 'Milchevski', 23, 'Male', new Grades(4, 5))         //za povikuvanje na klasata so ime student
console.log(student2);

//ako sakame da promeni nekoja vrednost mozheme na sledniov nachin

const student3 = student2;
student3.age = 30;

console.log(student2);

console.log(student2.walk());

const student4 = new Student('Marija', 'Tuleva', 20, 'Female', {
    matematika: 5,
    angliski: 2
})

const student5 = new Student('Mila', 'Krstevska', 19, 'Female', {
    matematika: 3,
    angliski: 5
})

student4.walk();
student5.walk();

// student4.changeLastName('Djokovic')

delete student2.grades // delete se koristi za da se izbrishe nekoja vrednost od objektot dokolku sakame da pretrpi nekoja izmena


//////////////////////////////////////////////////////////////

//VEZHBA KUCHE: make a class named Dog. In the constructor define 5 parameters. Make NEW instances of 5 different dogs. Console log them.

//on the class made before (class Dog) extend it to have two new methods. 1. Bark , 2. Eat(accepts 1 argument, that is the food).

class Dog {

    constructor(ageParameter, breedParemeter, weightParemeter, sizeParemeter, brainParameter) {
        this.age = ageParameter;
        this.breed = breedParemeter;
        this.weight = weightParemeter;
        this.size = sizeParemeter;
        this.brain = brainParameter;
    }

    bark() {
        console.log(`The dog with the breed ${this.breed} is barking right now.`);
    }

    eat(food) {
        console.log(`The dog ${this.breed} is currently eating ${food} and is weighing ${this.weight}.`);
    }
}

const dog1 = new Dog('23', 'German Sheperd', '80kg', 'large', 'smart');
const dog2 = new Dog('10', 'Bulldog', '40kg', 'medium', 'dumb');
const dog3 = new Dog('15', 'Golden Retriever', '25kg', 'large', 'very smart');
const dog4 = new Dog('50', 'Beagle', '15kg', 'small', 'not so smart');
const dog5 = new Dog('100', 'Poodle', '4kg', 'small', 'dumb');

console.log(dog1);

console.log(dog2);

console.log(dog3);

console.log(dog4);

console.log(dog5);

console.log('/////////////////////');
dog1.bark();
dog1.eat('meat');

console.log('/////////////////////');
dog2.bark();
dog2.eat('kebab');

console.log('/////////////////////');
dog3.bark();
dog3.eat('hotdog');

console.log('/////////////////////');
dog4.bark();
dog4.eat('dog food');

console.log('/////////////////////');
dog5.bark();
dog5.eat('selsko meso');
console.log('/////////////////////');

/////////////////////////////////////////////////////////////

/**Create class Car with properties:
model, color, year, totaFuel, fuelConsupmtion
Add drive method, that accepts one parameter (distance), that will print
the distance passed and how much fuel was consumed during the travel, and
will update the fuel capacity accoridngly. If there is not enough fuel for
the travel, should print not enough fuel for the travel.
**/

class Car {
    constructor(model, color, year, totalFuel, fuelConsumption) {
        this.model = model;
        this.color = color;
        this.year = year;
        this.totalFuel = totalFuel;
        this.fuelConsumption = fuelConsumption;
    }

    drive (distance) {

        let resultForFuelConsumption = distance * (this.fuelConsumption / 100);
        let fuelLeft = (this.totalFuel - resultForFuelConsumption);

        if ((resultForFuelConsumption > this.fuelConsumption) || (this.totalFuel < fuelLeft)) {
            console.log("Your car doesn't have enough fuel.");
            return;
        }
        else {
            console.log(`Good to go. Your car will pass ${fuelLeft} kilometers.`);
        }
    }
}

const car1 = new Car('BMW', 'silver', '2011', 100, 12);
const car2 = new Car('Opel', 'black', '2004', 300, 10);
const car3 = new Car('Mercedes', 'white', '2023', 500, 5)
const car4 = new Car('Yugo', 'red', '1971', 300, 15)

car1.drive(200);
car2.drive(150);
car3.drive(100);
car4.drive(120);