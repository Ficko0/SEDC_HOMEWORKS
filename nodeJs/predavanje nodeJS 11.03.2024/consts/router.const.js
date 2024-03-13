import { Router } from "express";
import productsRouter from '../routes/products.routes.js'

const router = Router();

router.use('/products', productsRouter)

export default router;