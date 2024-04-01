import { BadRequest } from "../const/error.const.js";
import AuthService from "../service/auth.service.js";

export default class AuthController {

    static async register (req, res) {
        try {
            const user = await AuthService.register(req.body);

            res.send(user);
        }

        catch (err) {
            if (err instanceof BadRequest) {
                res.status(400).send({message: err.message});
            }
            else {
                res.status(500).send({message: err.message});
            }
        }
    }

    static async login (req, res) {
        try {
            const user = await AuthService.login(req.body);

            req.session.isLoggedIn = true;
            req.session.userId = user.id;

            res.send(user);
        }

        catch (err) {
            if (err instanceof BadRequest) {
                res.status(400).send({message: err.message});
            }
            else {
                res.status(500).send({message: err.message});
            }
        }
    }

    static async logout (req, res) {
        try {
            req.session.isLoggedIn = false;
            req.session.userId = null;

            res.sendStatus(204);
        }

        catch (err) {
            res.status(500).send({message: err.message});
        }
    }
}