import AnimalService from "../service/animals.service.js";
import { animalSchema } from "../schema/animals.schema.js";

export default class AnimalController {
    static async getAnimals (req, res) {
        try {
            const animals = await AnimalService.getAllAnimals();

            res.send(animals);
        }

        catch (err) {
            res.status(500).send({msg: err.msg});
        }
    }

    static async getAnimalByID (req, res) {
        try {
            const animal = await AnimalService.getAnimalByID(req.params.id);

            res.send(animal);
        }

        catch (err) {
            res.status(500).send({msg: err.msg});
        } 
    }

    static async createAnimal (req, res) {
        try {
            const animalData = req.body;

            await animalSchema.validateAsync(animalData, {
                abortEarly: false,
            })

            const newAnimal = await AnimalService.createAnimal(animalData);

            res.status(201).send(newAnimal);
        }

        catch (err) {
            res.status(500).send({msg: err.msg});
        }
    }

    static async updateAnimal (req, res) {
        try {
            const animalData = req.body;

            await animalSchema.validateAsync(animalData, {
                abortEarly: false,
            })

            const updatedAnimal = await AnimalService.updateAnimal(req.params.id, animalData);

            res.send(updatedAnimal);
        }

        catch (err) {
            res.status(500).send({msg: err.msg});
        }
    }

    static async deleteAnimal (req, res) {
        try {
            await AnimalService.deleteAnimal(req.params.id);

            res.sendStatus(204);
        }

        catch (err) {
            res.status(500).send({msg: err.msg});
        }
    }
}