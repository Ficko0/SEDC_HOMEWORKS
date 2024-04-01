import AuthController from "../controller/auth.controller.js";
import { Router } from "express";

const router = Router();

router.post('/register', AuthController.register);

router.post('/login', AuthController.login);

router.post('/logout', AuthController.logout);

export default router;