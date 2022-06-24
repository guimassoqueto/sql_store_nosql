import { prisma } from "../utils/prismaConnector.util";

export class Cart {
    static async getCart(userId: string) {
        try {
            const cart_items = await prisma.cart.findMany({
                where: {
                    userId: userId
                },
                select: {
                    id: true,
                    product: true
                }
            })
            return cart_items
        } catch (error) {
            return error
        }
    }

    static async addToCart(productId: string, userId: string) {
        try {
            await prisma.$connect()
            const product_added = await prisma.cart.create({
                data: {
                    productId,
                    userId
                }  
            })
            return product_added
        }
        catch (error) {
            return error
        }
    }

    static async removeProdFromCart(cartId: string) {
        try {
            await prisma.$connect()
            const removed_item = await prisma.cart.delete({
                where: {
                    id: cartId
                }
            })
            return removed_item
        } catch (error) {
            return error
        }
    }
}