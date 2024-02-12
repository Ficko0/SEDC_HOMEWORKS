function Vehicle (id, name, batchNum, price) {
    this.id = id;
    this.name = name;
    this.batchNum = batchNum;
    this.price = price;
    this.companyName = 'move.inc';
    this.printVehicle = () => {
        console.log(`ID: ${this.id}. Name: ${this.name}, Batch Number: ${this.batchNum}, Price: ${this.price}$`);
    }
}

//  SO kreiranje na nov objekt so metodata Object.create(), mozhe da se napravi nova isnatnca od neshto
//  i pritoa da gi zeme site raboti od parent objektot. se krati dosta kod.

// let wheeledVehicle = Object.create (new Vehicle (20, 'Peugeot', '03030BZ', 10990));
// wheeledVehicle.drive = () => {
//     console.log(`DRIVIIIIIIING my ${wheeledVehicle.name}`);
// }
// wheeledVehicle.color = 'White';

// console.log(wheeledVehicle.color);
// console.log(wheeledVehicle.name);
// wheeledVehicle.printVehicle();
// wheeledVehicle.drive();

// let car = Object.create(wheeledVehicle);
// car.fuelTank = 15;

// console.log('==== CAR OBJECT ====');
// console.log(car.fuelTank); // 15
// console.log(car.color); // White
// console.log(car.companyName); // move.inc
// car.printVehicle();
// car.drive();
// console.log(car);
// console.log('=====================================');

// prototipot gi chuva propertinjata od nasledenite objekti!!!!

function WheelVehicle (id, name, batchNum, price, wheels) {

    Object.setPrototypeOf(this, new Vehicle (id, name, batchNum, price));
    this.wheels = wheels;
    this.drive = () => {
        console.log('Wroom!');
    }
}

function Car (id, name, batchNum, price, color, doors) {

    Object.setPrototypeOf(this, new WheelVehicle (id, name, batchNum, price, 4));
    this.color = color;
    this.doors = doors;
    this.drift = () => {
        console.log(`${this.name} is drifting!`);
    }
}

let car1 = new Car (1, 'BMW', '330ix', 15000, 'Gray', 3);
console.log(car1);
let car2 = new Car (2, 'OPEL', 'VECTRA', 12000, 'Black', 5);
console.log(car2);
car1.drive();
car2.drift();
car1.drift();