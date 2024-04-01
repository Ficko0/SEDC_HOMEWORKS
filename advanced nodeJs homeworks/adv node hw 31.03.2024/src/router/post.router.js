import { Router } from "express";
import PostController from "../controller/post.controller.js";

const router = Router();

router.get('', PostController.getPosts);
router.get('/:id', PostController.getPostById);

router.post('', PostController.createPost);

router.put('/:id', PostController.updatePost);

router.delete('/:id', PostController.deletePost);

export default router;