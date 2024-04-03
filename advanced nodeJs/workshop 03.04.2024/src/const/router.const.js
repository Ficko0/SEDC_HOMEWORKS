import { Router } from "express";
import animalRouter from '../routes/animals.routes.js';
import adopterRouter from '../routes/adopters.routes.js';

const router = Router();

router.use('/animals', animalRouter);
router.use('/adopters', adopterRouter);

export default router;