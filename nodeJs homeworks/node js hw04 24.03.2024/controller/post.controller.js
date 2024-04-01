import { BadRequest, NotFound } from "../const/error.const.js";
import PostService from "../service/post.service.js";

export default class PostController {

    static async getUserPosts (req, res) {
        try {
            const posts = await PostService.getByUserID(req.params.userId);

            res.send(posts);
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

    static async getPost (req, res) {
        try {
            const post = await PostService.getPost(req.params.id);

            res.send(post);
        }

        catch (err) {
            console.log(err);
            if (err instanceof NotFound) {
                res.status(404).send({message: err.message});
            }
            else {
                res.status(500).send({message: err.message});
            }
        }
    }

    static async createPost (req, res) {
        try {
            const post = await PostService.createPost(req.body, req.session.userId);

            res.status(201).send(post);
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

    static async updatePostTitle (req, res) {
        try {
            const post = await PostService.updatePostTitle(req.params.id, req.body.title);

            res.send(post);
        }

        catch (err) {
            res.status(500).send({message: err.message});
        }
    }

    static async updatePostContent (req, res) {
        try {
            const post = await PostService.updatePostContent(req.params.id, req.body.content);
    
            res.send(post);
        }

        catch (err) {
            res.status(500).send({message: err.message});
        }
    }

    static async likeUserPost (req, res) {
        try {
            const post = await PostService.likeUserPost(req.params.id, req.session.userId);

            res.send(post);
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

    static async deletePost (req, res) {
        try {
            await PostService.deletePost(req.params.userId);

            res.sendStatus(204);
        }

        catch (err) {
            res.status(500).send({message: err.message});
        }
    }

    static async deletePostUserId (req, res) {
        try {
            await PostService.deletePostByUserID(req.params.userId);

            res.sendStatus(204);
        }

        catch (err) {
            res.status(500).send({message: err.message});
        }
    }
}