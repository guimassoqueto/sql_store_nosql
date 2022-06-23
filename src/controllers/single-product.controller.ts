import { Request, Response } from "express";
import { Product } from "../models/product.model";

export function getSingleProduct(req: Request, res: Response) {
    const { id } = req.params;

    Product.getProduct(id)
        .then(product => res.render('shop/single-product', { product }))
        .catch(error => {
            console.error(error);
            res.redirect('/404');
        })
}