import Cinema from "../models/cinema.model.js";
import cinemaSchema from "../schemas/cinema.schema.js";
import CinemaService from "../services/cinema.service.js";

export default class CinemaController {
    static async createCinema(req, res) {
        try {
            await cinemaSchema.validateAsync(req.body, {
                abortEarly: false,
            });

            const cinema = await CinemaService.createCinema(req.body);

            res.send(cinema);
        }

        catch (err) {
            res.status(500).send({ msg: err.msg });
        }
    }

    static async toggleMovie(req, res) {
        try {
            const cinemaId = req.params.cinemaId;
            const movieId = req.params.movieId;

            const updatedCinema = await CinemaService.toggleMovie(cinemaId, movieId);

            res.send(updatedCinema);
        }

        catch (err) {
            res.status(500).send({ msg: err.msg });
        }
    }

    static async getCinema(req, res) {
        try {
            const cinema = CinemaService.getCinema(req.params.id);

            res.send(cinema)
        }

        catch (err) {
            res.status(500).send({ msg: err.msg });
        }
    }
}