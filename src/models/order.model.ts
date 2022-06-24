import { prisma } from "../utils/prismaConnector.util";

interface IOrderObject {
    title: string;
    image: string;
    price: number;
    orderDate: Date;
}

export class Order {
    static async createOrder(userId: string) {
        try {
            await prisma.$connect()
            const cart = await prisma.cart.findMany({
                where: {
                    userId: userId
                },
                select: {
                    product: true
                }
            });

            const order_products: IOrderObject[] = cart.map(product => {
                const { title, price, image } = product.product;
                return { title, price, image, orderDate: new Date()}
            })

            const order = await prisma.order.create({
                data: {
                    userId,
                    products: JSON.stringify(order_products)
                }
            })

            await prisma.cart.deleteMany({
                where: {
                    userId: userId
                }
            })

            return order
            
        } catch (error) {
            return error;
        }
    }
}