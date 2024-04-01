import PostService from "../service/post.service.js";
import postSchema from "../schemas/post.schema.js";

export default class PostController {
    static async getPosts (req, res) {
        try {
            const posts = await PostService.getAllPosts();

            res.send(posts);
        }

        catch (err) {
            res.status(500).send({msg: err.msg});
        }
    }

    static async getPostById (req, res) {
        try {
            const post = await PostService.getPostById(req.params.id);

            res.send(post);
        }

        catch (err) {
            res.status(404).send({msg: err.msg});
        }
    }

    static async createPost (req, res) {
        try {
            const postData = req.body;

            await postSchema.validateAsync(postData, {
                abortEarly: false,
            })

            const post = await PostService.createPost(postData);

            res.status(204).send(post);
        }

        catch (err) {
            res.status(400).send({msg: err.msg});
        }
    }

    static async updatePost (req, res) {
        try {
            const postData = req.body;

            await postSchema.validateAsync(postData, {
                abortEarly: false,
            })

            const updatedPost = await PostService.updatePost(req.params.id, postData);

            res.send(updatedPost);
        }

        catch (err) {
            res.status(400).send({msg: err.msg});
        }
    }

    static async deletePost (req, res) {
        try {
            await PostService.deletePost(req.params.id);

            res.sendStatus(204);
        }

        catch (err) {
            res.status(404).send({msg: err.msg});
        }
    }
}