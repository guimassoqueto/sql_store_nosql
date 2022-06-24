import { Request, Response } from "express";
import { Cart } from "../models/cart.model";

export function postRemoveFromCart(req: Request, res: Response) {
    const { cart_id } = req.body;

    Cart.removeProdFromCart(cart_id)
        .then(removed_item => {
            console.log(removed_item);
            res.redirect('/shop/cart');
        })
        .catch(error => {
            console.error(error);
            res.redirect('/404');
        })
}