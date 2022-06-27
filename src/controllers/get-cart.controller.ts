import { Cart } from "../models/cart.model";
import { Request, Response } from "express";
import { IProduct } from "../interfaces/interfaces";

interface ICartItems {
    product: IProduct
}

export function getCart(req: Request, res: Response) {
    Cart.getCart(req.session.currentUserId!)
        .then(_cart_items => {
            const items_in_cart = <ICartItems[]>_cart_items;
            
            const cart_total: number = items_in_cart.reduce((prev, curr) => prev + (curr.product.price || 0), 0);
            res.render('shop/cart', { cart: items_in_cart, total: cart_total });
        })
        .catch(_ => res.redirect('/404'))
}