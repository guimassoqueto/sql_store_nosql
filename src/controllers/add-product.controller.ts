import { Request, Response } from "express";
import { IProduct } from "../interfaces/interfaces";
import { Product } from "../models/product.model";


export function getAddProduct(_: Request, res: Response) {
    res.render('admin/add-product');
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

    Product.createProduct(new_product, req.currentUserId)
        .then(added_product => {
            res.redirect('/admin/editable-products');
        })
        .catch(error => {
            console.log(error);
            res.redirect('/404');
        });
}
