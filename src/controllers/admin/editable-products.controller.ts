import { Request, Response } from "express";
import { Product } from "../../models/product.model";

export function getEditableProducts(req: Request, res: Response) {
    if (!req.session.isLoggedIn) return res.redirect('/user/login');
    
    Product.getAllProducts()
        .then(products => res.render('admin/editable-products', { products: products }))
        .catch(error => {
            console.error(error);
            res.redirect('/404');
        })
}
