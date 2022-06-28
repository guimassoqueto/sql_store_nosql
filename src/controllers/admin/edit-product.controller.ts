import { Request, Response } from "express";
import { Product } from "../../models/product.model";
import { IProduct } from "../../interfaces/interfaces";

export function getEditProduct(req: Request, res: Response) {
    const { id } = req.params;

    Product.getProduct(id)
        .then(product => {
            res.render('admin/edit-product', { product })
        })
        .catch(error => {
            console.error(error);
            res.redirect('/404');
        })
}

export function postEditProduct(req: Request, res: Response) {
    const { id, title, image, description, price, available } = req.body;
    const updated_product: IProduct = {
        id: id,
        title: title,
        image: image,
        description: description,
        price: parseFloat(price),
        available: parseInt(available)
    }

    Product.updateProduct(updated_product)
        .then(_ => res.redirect('/admin/editable-products'))
        .catch(error => res.redirect('/404'))
}