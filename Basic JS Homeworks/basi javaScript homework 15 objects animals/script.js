class Animal {

    constructor(name, kind) {
        this.animalName = name;
        this.animalKind = kind;
    }

    speak() {
        let inputPrompt = prompt(`What will ${this.animalName} say?`);

        if (inputPrompt == 0) {
            alert("You haven't entered anything.")
            this.speak()
        }
        else {
            alert(`The animal ${this.animalKind} with the name ${this.animalName} says: ${inputPrompt}!`)
        }
    }
}

const animal1 = new Animal('Buco', 'Dog');
const animal2 = new Animal('Kicho', 'Cat');
const animal3 = new Animal('Nikolce', 'Bravos');
const animal4 = new Animal('Tikva', 'Tiger')

animal1.speak();
animal2.speak();
animal3.speak();
animal4.speak();