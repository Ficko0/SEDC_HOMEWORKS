import userRouter from '../routes/user.routes.js';
import authSession from './session.const.js';
import { Router } from 'express';
import postRouter from '../routes/post.routes.js';
import validateSession from '../middleware/sessionValidator.middleware.js';

const router = Router();

router.use('/user', authSession, userRouter);
router.use('/post', authSession, validateSession, postRouter);

export default router;