import { Router } from "express";
import { movieRouter } from "../routes/movies.routes.js";

export const globalRouter = Router();

globalRouter.use('/movies', movieRouter);