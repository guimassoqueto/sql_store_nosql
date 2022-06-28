import { Request, Response } from "express";
import { Product } from "../../models/product.model";

export function postDeleteProduct(req: Request, res: Response) {
    if (!req.session.isLoggedIn) return res.redirect('/user/login');
    
    const { id } = req.body;
    
    Product.deleteProduct(id)
        .then(deleted_product => res.redirect('/admin/editable-products'))
        .catch(error => {
            console.error(error);
            res.redirect('/404');
        })
}