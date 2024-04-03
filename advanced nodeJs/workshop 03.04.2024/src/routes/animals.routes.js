import { Router } from "express";
import AnimalController from '../controller/animals.controller.js';

const router = Router();

router.get('', AnimalController.getAnimals);
router.get('/:id', AnimalController.getAnimalByID);

router.post('', AnimalController.createAnimal);
router.put('/:id', AnimalController.updateAnimal);

router.delete('/:id', AnimalController.deleteAnimal);

export default router;