import DataService from "../service/data.service.js";
import path from 'path';

const usersPath = path.join(import.meta.dirname, '..', 'data', 'users.json');

export default class UserModel {
    static getAll () {
        return DataService.readData(usersPath);
    }

    static async getByUsername (username) {
        const users = await DataService.readData(usersPath);

        return users.find(user => user.username === username);
    }

    static async getById(id) {
        const users = await this.getAll();

        return users.find(user => user.id === id);
    }

    static async create (user) {
        const users = await this.getAll();

        users.push(user);

        await DataService.writeData(usersPath, users);

        return user;
    }
}