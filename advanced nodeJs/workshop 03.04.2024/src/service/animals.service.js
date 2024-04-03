import Animal from "../model/animals.model.js";

export default class AnimalService {
    static getAllAnimals() {
        return Animal.find();
    }

    static getAnimalByID(id) {
        return Animal.findById(id);
    }

    static createAnimal(animalData) {
        const animal = new Animal(animalData);

        return animal.save();
    }

    static updateAnimal(id, updateData) {
        return Animal.findByIdAndUpdate(id, updateData, { new: true });
    }

    static deleteAnimal(id) {
        return Animal.findByIdAndDelete(id);
    }
}