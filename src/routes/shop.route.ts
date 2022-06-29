import { Router } from "express";
import { getAllProducts } from "../controllers/shop/all-products.controller";
import { getSingleProduct } from "../controllers/shop/single-product.controller";
import { getCart } from "../controllers/shop/get-cart.controller";
import { postAddToCart } from "../controllers/shop/add-to-cart.controller";
import { postRemoveFromCart } from "../controllers/shop/remove-from-cart.controller";
import { postNewOrder, getNewOrder } from "../controllers/shop/new-order.controller";
import { onlyAuthAccess } from "../middlewares/onlyAuthAccess.middleware";

const shopRoute: Router = Router();

shopRoute.get('/all-products', getAllProducts);
shopRoute.get('/product/:id', getSingleProduct);
shopRoute.post('/product/:id', onlyAuthAccess, postAddToCart);

shopRoute.get('/cart', onlyAuthAccess, getCart);
shopRoute.post('/cart', onlyAuthAccess, postRemoveFromCart);

shopRoute.get('/new-order', onlyAuthAccess, getNewOrder);
shopRoute.post('/new-order', onlyAuthAccess, postNewOrder);

export { shopRoute };
