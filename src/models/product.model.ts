import { prisma } from "../utils/prismaConnector.util";
import { IProduct } from "../interfaces/interfaces";

export class Product {
    static async createProduct(product: IProduct, adminID: string): Promise<Product | unknown> {
        try {
            await prisma.$connect();
            const new_product = await prisma.product.create({
                data: {
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    description: product.description,
                    available: product.available,
                    createdBy: adminID
                }
            });
            return new_product
        }
        catch(error) {
            return error;
        }
    }

    static async getAllProducts(): Promise<Product[] | unknown> {
        try {
            await prisma.$connect();
            const all_products = await prisma.product.findMany();
            return all_products
        }
        catch(error) {
            return error;
        }
    }

    static async getProduct(product_id: string): Promise<Product | unknown> {
        try {
            await prisma.$connect();
            const product = await prisma.product.findUnique({
                where: {
                    id: product_id
                }
            });
            return product
        }
        catch(error) {
            return error;
        }
    }

    static async updateProduct(product: IProduct): Promise<Product | unknown> {
        try {
            await prisma.$connect();
            const updated_product = await prisma.product.update({
                where: {
                    id: product.id
                },
                data: {
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    description: product.description,
                    available: product.available
                }
            })
            return updated_product
        }
        catch(error) {
            return error;
        }
    }

    static async deleteProduct(product_id: string): Promise<Product | unknown> {
        try {
            await prisma.$connect()
            const cart = await prisma.cart.deleteMany({
                where: {
                    productId: product_id
                }
            })
    
            const users = await prisma.product.deleteMany({
                where: {
                    id: product_id
                }
            });
            return [cart, users]
        } catch (error) {
            return error
        }
    }
}