class Animal {
    constructor (name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    eatAnimal (animal) {
        if (animal.type !== 'Herbivore') {
            console.log(`The animal ${this.name} ate ${animal.name}.`);
            this.isEaten = true;
        }
        else {
            console.log(`The animal ${animal.name} can't be eaten.`);
        }
    }
}

class Carnivore extends Animal {
    constructor (name, type, age, size) {
        super (name, type, age, size)
    }

    checkIfAnimalIsLarger (animalSize) {
        if (this.size < animalSize.size) {
            console.log(`The animal ${this.name} tried to eat ${animalSize.name}`);
        }
    }
}

class Herbivore extends Animal {
    constructor (name, type, age, size) {
        super (name, type, age, size)
    }

    clgHerbivore () {
        console.log(`The animal ${this.name} is a herbivore and does not eat other animals.`);
    }
}

class Omnivore extends Animal {
    constructor (name, type, age, size) {
        super (name, type, age, size)
    }

    clgOmnivore () {
        console.log(`The animal ${this.name} is eating plants and meat.`);
    }
}

let herbivoreAnimal = new Herbivore ('Parrot', 'Herbivore', 4, 'small');
herbivoreAnimal.clgHerbivore();

let omnivoreAnimal = new Omnivore ('Racoon', 'Omnivore', 5, 'small');
omnivoreAnimal.clgOmnivore();

let randomAnimal = new Animal ('Bear', 'Carnivore', 3, 'large');
randomAnimal.eatAnimal(omnivoreAnimal);