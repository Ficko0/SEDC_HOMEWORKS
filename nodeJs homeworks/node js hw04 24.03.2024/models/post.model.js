import DataService from "../service/data.service.js";
import path from 'path';
import { BadRequest } from "../const/error.const.js";

const postsPath = path.join(import.meta.dirname, '..', 'data', 'posts.json');

export default class PostsModel {
    static getAll () {
        return DataService.readData(postsPath);
    }

    static async getById (id) {
        const posts = await this.getAll();

        const post = posts.find (post => post.id === id);
        console.log(post);
        if (!post) {
            throw new BadRequest(`Post doesn't exist`);
        }

        return post;
    }

    static async create (post) {
        const posts = await this.getAll();

        posts.push(post);

        await DataService.writeData(postsPath, posts);

        return post;
    }

    static async update (id, post) {
        const posts = await this.getAll();

        const index = posts.findIndex (post => post.id === id);

        posts[index] = post;

        await DataService.writeData(postsPath, posts);

        return post;
    }

    static async delete (id) {
        const posts = await this.getAll();

        const toDelete = posts.filter (post => post.id !== id);

        await DataService.writeData(postsPath, toDelete);
    }

    static async deleteByUserId (userId) {
        const posts = await this.getAll();

        const toDelete = posts.filter (post => post.userId !== userId);

        await DataService.writeData(postsPath, toDelete);
    }
}