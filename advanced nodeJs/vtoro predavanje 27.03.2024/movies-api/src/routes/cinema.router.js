import { Router } from "express";
import CinemaController from "../controllers/cinema.controller.js";

const router = Router();

// cinema
router.post('/', CinemaController.createCinema);
router.patch('/:cinemaId/movie/:movieId', CinemaController.toggleMovie);
router.get('/:id', CinemaController.getCinema);

export default router;