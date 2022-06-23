import { Request, Response } from "express";
import { Product } from "../models/product.model";

export function getAllProducts(req: Request, res: Response) {
    Product.getAllProducts()
        .then(products => res.render('shop/all-products', { products: products }))
        .catch(error => {
            console.error(error);
            res.redirect('/404');
        })
}