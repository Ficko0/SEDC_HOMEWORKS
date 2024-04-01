import Post from "../model/post.model.js";

export default class PostService {
    static getAllPosts () {
        return Post.find();
    }

    static getPostById (id) {
        return Post.findById(id);
    }

    static createPost (postData) {
        const post = new Post (postData);

        return post.save();
    }
    
    static updatePost (postId, updateData) {
        return Post.findByIdAndUpdate(postId, updateData, {new: true});
    }

    static deletePost (postId) {
        return Post.findByIdAndDelete(postId);
    }
}