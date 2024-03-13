import DataService from "../services/db.service.js";
import path from 'path';
import ProductService from "../services/product.service.js";

const productsPath = path.join(import.meta.dirname, '..', 'data', 'products.json');

export default class ProductController {
    static async getProducts(req, res) {
        const products = ProductService.getProducts(productsPath);
        res.send(products);
    }

    static async createProduct(req, res) {
        const productBody = req.body;

        const products = await DataService.readData(productsPath);

        products.push(productBody);

        await DataService.writeData(productsPath, products);

        res.status(201).send(productBody);
    }
}