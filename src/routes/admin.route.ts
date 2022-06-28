import { Router } from "express";
import { getEditableProducts } from "../controllers/admin/editable-products.controller";
import { getAddProduct, postAddProduct } from "../controllers/admin/add-product.controller";
import { getEditProduct, postEditProduct } from "../controllers/admin/edit-product.controller";
import { postDeleteProduct } from "../controllers/admin/delete-product.controller";

const adminRoute = Router();

adminRoute.get('/editable-products', getEditableProducts);

adminRoute.get('/add-product', getAddProduct);
adminRoute.post('/add-product', postAddProduct);

adminRoute.get('/edit-product/:id', getEditProduct);
adminRoute.post('/edit-product/:id', postEditProduct);

adminRoute.post('/delete-product', postDeleteProduct);

export { adminRoute };