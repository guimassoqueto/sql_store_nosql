import { Router } from "express";
import { getAllProducts } from "../controllers/all-products.controller";
import { getSingleProduct } from "../controllers/single-product.controller";
import { getCart } from "../controllers/get-cart.controller";
import { postAddToCart } from "../controllers/add-to-cart.controller";
import { postRemoveFromCart } from "../controllers/remove-from-cart.controller";

const shopRoute: Router = Router();

shopRoute.get('/all-products', getAllProducts);
shopRoute.get('/product/:id', getSingleProduct);
shopRoute.post('/product/:id', postAddToCart);
shopRoute.get('/cart', getCart);
shopRoute.post('/cart', postRemoveFromCart);

export { shopRoute };
