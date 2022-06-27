import { Request, Response } from "express";
import { Order } from "../models/order.model";


export function getNewOrder(_: Request, res: Response) {
    res.render('shop/new-order');
}


export function postNewOrder(req: Request, res: Response) {
    Order.createOrder(req.session.currentUserId!)
        .then(order => res.redirect('/shop/new-order'))
        .catch(error => {
            console.error(error);
            res.redirect('/404');
        })
}