class Vehicle {
    constructor (id, name, bacthNum, price) {
        this.id = id;
        this.name = name;
        this.bacthNum = bacthNum;
        this.price = price;
    }

    printVehicle () {
        console.log(`Vehicle ID: ${this.id}, Name: ${this.name}, Batch Num: ${this.bacthNum}, Price: ${this.price}$`);
    }
}

let boat = new Vehicle (1, 'Nikolce', 69, 420);
boat.printVehicle();

class WheeledVehicle extends Vehicle {
    constructor (id, name, bacthNum, price, wheels) {
        super (id, name, bacthNum, price)
        this.wheels = wheels;
        this.color = 'white';

    }

    drive () {
        console.log(`The vehicle ${this.name} is driving.`);
    }
}

let car = new WheeledVehicle (22, 'BMW', 111, 50000, 4);
car.drive();

class Car extends WheeledVehicle {
    constructor (id, name, bacthNum, price, wheels, doors, ac) {
        super (id, name, bacthNum, price, wheels)
        this.doors = doors;
        this.ac = ac;

        if (ac) {
            this.price += 400;
        }  // mozhe i na ovoj nachin da se napravi proverka
    }

    static addAirCondition (car) { // a mozhe i na ovoj nachin da se napravi ama ne se koristi tolku mnogu
        if (!car.ac) {
            car.ac = true;
            car.price += 400;
            console.log(`The car ${car.name} has AC for the price of ${car.price}$.`);
        }
        else {
            console.log(`The car ${car.name} already has an AC unit.`);
        }
    }

    drift () {
        console.log(`The vehicle ${this.name} is drifting.`);
    }

    buyCar (money) {
        if (money >= this.price) {
            console.log(`Congrats! You have bought the ${this.name}.`);
        }
        else {
            console.log(`You need ${this.price - money}$ more to buy the car.`);
        }
    }
}

let randomCar = new Car (2020, 'Opel', 99, 20000, 4, 4, true);
let testCar = new Car (2022, 'Audi', 888, 10000, 4, 3, false)
randomCar.drift();
console.log(randomCar);
Car.addAirCondition(testCar); // samo na ovoj nachin mozhe da se pristapi do nekoja funkcija shto ima static pred nea.
testCar.buyCar(10400);