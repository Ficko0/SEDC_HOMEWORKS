import { Router } from "express";
import postRouter from '../router/post.router.js';

const router = Router();

router.use('/posts', postRouter);

export default router;