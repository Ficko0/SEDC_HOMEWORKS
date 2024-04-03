import { Router } from "express";
import AdopterController from "../controller/adopter.controller.js";

const router = Router();

router.get('', AdopterController.getAdopters);
router.get('/:id', AdopterController.getAdopterByID);

router.post('', AdopterController.createAdopter);

router.patch('/:adopterId/animals/:animalId', AdopterController.adoptAnimal);

export default router;