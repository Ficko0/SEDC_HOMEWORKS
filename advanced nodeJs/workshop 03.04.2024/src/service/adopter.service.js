import Adopter from "../model/adopter.model.js";

export default class AdopterService {
    static getAdopters() {
        return Adopter.find().populate('animal');
    }

    static getAdopterByID(id) {
        return Adopter.findById(id).populate('animal');
    }

    static createAdopter(adopterData) {
        const adopter = new Adopter(adopterData);

        return adopter.save();
    }

    static async adoptAnimal(animalId, adopterId) {
        const adopter = await Adopter.findById(adopterId);

        if (!adopter) {
            throw new Error('User not found');
        }

        const animalIndex = adopter.animal.findIndex(animal => animal.toString() === animalId);

        if (animalIndex === -1) {
            adopter.animal.push(animalId);
        }
        else {
            adopter.animal.splice(animalIndex, 1);
        }

        return adopter.save();
    }
}