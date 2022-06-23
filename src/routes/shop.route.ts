import { Router } from "express";
import { getAllProducts } from "../controllers/all-products.controller";
import { getSingleProduct } from "../controllers/single-product.controller";

const shopRoute: Router = Router();

shopRoute.get('/all-products', getAllProducts);
shopRoute.get('/product/:id', getSingleProduct)

export { shopRoute };
