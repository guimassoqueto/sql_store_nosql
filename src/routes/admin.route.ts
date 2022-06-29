import { Router } from "express";
import { getEditableProducts } from "../controllers/admin/editable-products.controller";
import { getAddProduct, postAddProduct } from "../controllers/admin/add-product.controller";
import { getEditProduct, postEditProduct } from "../controllers/admin/edit-product.controller";
import { postDeleteProduct } from "../controllers/admin/delete-product.controller";
import { onlyAuthAccess } from "../middlewares/onlyAuthAccess.middleware";
import { csrfProtection } from "../middlewares/csrfProtection.middleware";

const adminRoute = Router();

adminRoute.get('/editable-products', onlyAuthAccess, getEditableProducts);

adminRoute.get('/add-product', csrfProtection, onlyAuthAccess, getAddProduct);
adminRoute.post('/add-product', csrfProtection, onlyAuthAccess, postAddProduct);

adminRoute.get('/edit-product/:id', onlyAuthAccess, getEditProduct);
adminRoute.post('/edit-product/:id', onlyAuthAccess, postEditProduct);

adminRoute.post('/delete-product', onlyAuthAccess, postDeleteProduct);

export { adminRoute };