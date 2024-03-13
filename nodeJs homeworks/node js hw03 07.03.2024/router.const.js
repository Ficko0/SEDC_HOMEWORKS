import { Router } from "express";
import trainersPath from './routes/trainer.route.js';

const router = Router();

router.use('/trainers', trainersPath);

export default router;