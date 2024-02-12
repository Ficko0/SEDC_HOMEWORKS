console.log(window);
console.log(typeof(window)); //Object
console.log('============================');
console.log(document);
console.log(typeof(document));  //Object
console.log('============================');
console.log(document.getElementById);
console.log(typeof(document.getElementById));  //Function
console.log('============================');
console.log(typeof([])); //Object
console.log(typeof([].push));  //Function
console.log('============================');
function sayHello () {
    console.log('Hello');
}
sayHello();
console.log(window);
console.log('============================');
//  Constructor Function

function Dog (name, age, color, favouriteFood) {
    console.log(this);
    this.name = name === undefined ? 'Unnamed' : name;
    this.age = age;
    this.color = color;
    this.favouriteFood = favouriteFood;
    this.hasOwner = false; // default value for all;
    this.food = () => {
        console.log(this);  //Dog Object
    }
    this.bark = () => {
        console.log(this); //Dog Object
        console.log('bark bark bark');
    }
    this.eat = () => {
        console.log(this); //Dog Object
        console.log(this.favouriteFood);
    }
}

let sparky = new Dog ('Sparky', 20, 'brown', 'Nutella');
console.log(sparky);
sparky.eat();
sparky.food();
console.log('============================');
let testObj = {
    whatIsThis: this.sayHello(),
    testMethod: () => {
        console.log(this);
    }
}
console.log(testObj.whatIsThis);
testObj.testMethod();
console.log('============================');
