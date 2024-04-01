import { BadRequest } from "../const/error.const.js";
import PostsModel from "../models/post.model.js";
import UserModel from "../models/user.model.js";
import { v4 as uuidv4 } from 'uuid';

export default class PostService {

    static getPosts () {
        return PostsModel.getAll();
    }

    static async getPost (id) {
        return PostsModel.getById(id);
    }

    static async getByUserID (userId) {
        const posts = await PostsModel.getAll();

        return posts.filter (post => post.userId === userId);
    }

    static async createPost (body, userId) {
        await UserModel.getById(body.userId);

        const post = {
            ...body,
            userId,
            id: uuidv4(),
            created: new Date().toISOString(),
        }

        await PostsModel.create(post);

        return post;
    }

    static async updatePostTitle (id, title) {
        const post = await this.getPost(id);

        const toUpdate = {
            ...post,
            title,
            id,
            updated: new Date().toISOString(),
        }

        const updatedPost = await PostsModel.update(id, toUpdate);

        return updatedPost;
    }

    static async updatePostContent (id, content) {
        const post = await this.getPost(id);

        const toUpdate = {
            ...post,
            content,
            id,
            updated: new Date().toISOString()
        }

        const updatedPost = await PostsModel.update(id, toUpdate);

        return updatedPost;
    }

    static async likeUserPost (id, userId) {
        const post = await this.getPost(id);

        const postCreator = post.userId;

        if (userId === postCreator) {
            throw new BadRequest (`User can't like their own posts.`);
        }

        const liked = post.likedBy.includes(userId);

        if (liked) {
            post.likedBy = post.likedBy.filter(like => like !== userId);
        }
        else {
            post.likedBy.push(userId);
        }

        const likedPost = await PostsModel.update(id, post);

        return likedPost;
    }

    static deletePost (id) {
        return PostsModel.delete(id);
    }

    static deletePostByUserID (userId) {
        return PostsModel.deleteByUserId(userId);
    }
}