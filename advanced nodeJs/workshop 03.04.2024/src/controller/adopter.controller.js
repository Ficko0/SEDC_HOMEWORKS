import AdopterService from "../service/adopter.service.js";
import { adopterSchema } from "../schema/adopter.schema.js";

export default class AdopterController {
    static async getAdopters (req, res) {
        try {
            const adopters = await AdopterService.getAdopters();

            res.send(adopters);
        }

        catch (err) {
            res.status(500).send({msg: err.msg});
        }
    }

    static async getAdopterByID (req, res) {
        try {
            const adopter = await AdopterService.getAdopterByID(req.params.id);

            res.send(adopter);
        }

        catch (err) {
            res.status(500).send({msg: err.msg});
        }
    }

    static async createAdopter (req, res) {
        try {
            const adopterData = req.body;

            await adopterSchema.validateAsync(adopterData, {
                abortEarly: false,
            })

            const newAdopter = await AdopterService.createAdopter(adopterData);

            res.send(newAdopter);
        }
        
        catch (err) {
            res.status(500).send({msg: err.msg});
        }
    }

    static async adoptAnimal (req, res) {
        try {
            const animal = req.params.animalId;
            const adopter = req.params.adopterId;

            const adopted = await AdopterService.adoptAnimal(animal, adopter);

            res.send(adopted);
        }

        catch (err) {
            res.status(500).send({msg: err.msg});
        }
    }
}