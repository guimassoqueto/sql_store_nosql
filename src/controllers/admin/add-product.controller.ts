import { Request, Response } from "express";
import { IProduct } from "../../interfaces/interfaces";
import { Product } from "../../models/product.model";


export function getAddProduct(req: Request, res: Response) {
    return res.redirect('/user/login');
}


export function postAddProduct(req: Request, res: Response) {
    const { title, description, image, price, available }: IProduct = req.body;
    const new_product: IProduct = {
        title: title,
        description: description,
        image: image,
        price: +price,
        available: +available
    }

    Product.createProduct(new_product, req.session.currentUserId!)
        .then(added_product => {
            res.redirect('/admin/editable-products');
        })
        .catch(error => {
            console.error(error);
            res.redirect('/404');
        });
}
