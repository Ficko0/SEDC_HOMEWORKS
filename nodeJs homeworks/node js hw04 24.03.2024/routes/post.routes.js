import { Router } from "express";
import PostController from "../controller/post.controller.js";

const router = Router();

router.get('/user/:userId', PostController.getUserPosts);

router.get('/:id', PostController.getPost);

router.post('', PostController.createPost);

router.patch('/:id/title', PostController.updatePostTitle);

router.patch('/:id/content', PostController.updatePostContent);

router.patch('/:id/like', PostController.likeUserPost);

router.delete('/:id', PostController.deletePost);

router.delete('/:userId', PostController.deletePostUserId);

export default router;