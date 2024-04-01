import UserModel from "../models/user.model.js";
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { BadRequest } from "../const/error.const.js";

export default class AuthService {
    static async register ({username, password}) {
        const existingUser = await UserModel.getByUsername(username);

        if (existingUser) {
            throw new BadRequest('User already exists');
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const user = {
            username,
            password: hashedPass,
            id: uuidv4(),
            created: new Date().toISOString(),
        }

        const {password: notNeeded, ...restOfUser} = await UserModel.create(user);

        return restOfUser;
    }

    static async login ({username, password}) {
        const user = await UserModel.getByUsername(username);

        if (!user) {
            throw new BadRequest('Incorrect username')
        }

        const matched = await bcrypt.compare(password, user.password);

        if (!matched) {
            throw new BadRequest('Incorrect password');
        }

        const {password: notNeeded, ...restOfUser} = user;

        return restOfUser;
    }
}