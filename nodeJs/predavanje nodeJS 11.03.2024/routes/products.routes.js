import { Router } from "express";
import ProductController from "../controllers/products.controller.js";
import path from 'path';


const router = Router();

router.get('', ProductController.getProducts);
router.post('', ProductController.createProduct);

export default router;