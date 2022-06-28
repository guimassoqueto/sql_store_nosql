import { Request, Response } from "express";
import { Cart } from "../../models/cart.model";

export function postAddToCart(req: Request, res: Response) {
    const { product_id } = req.body;

    Cart.addToCart(product_id, req.session.currentUserId!)
        .then(prod_added => res.redirect('/shop/cart'))
        .catch(error => res.redirect('/404'))
}