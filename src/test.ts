import { prisma } from "./utils/prismaConnector.util";
import { Cart } from "./models/cart.model";

async function getUsers() {
    try {
        await prisma.$connect()
        const users = await prisma.user.findMany({
            include: {
                cart: true,
                created_products: true
            }
        });
        return users
    } catch (error) {
        return error
    }
}

async function getProds() {
    try {
        await prisma.$connect()
        const users = await prisma.product.findMany();
        return users
    } catch (error) {
        return error
    }
}

async function createCart() {
    try {
        await prisma.$connect()
        const users = await prisma.cart.create({
            data: {
                productId: '62b4a6309b4cfedd33f9bebe',
                userId: '62b4a1b1539d1fc76cca547f'
            }
        });
        return users
    } catch (error) {
        return error
    }
}

async function deleteCart() {
    try {
        await prisma.$connect()
        const users = await prisma.cart.deleteMany({
            where: {
                userId: '62b4a1b1539d1fc76cca547f'
            }
        });
        return users
    } catch (error) {
        return error
    }
}

async function deleteProducts() {
    try {
        await prisma.$connect()
        const users = await prisma.product.deleteMany({
            where: {
                createdBy: '62b4a1b1539d1fc76cca547f'
            }
        });
        return users
    } catch (error) {
        return error
    }
}

async function deleteProduct(prod_id: string) {
    try {
        await prisma.$connect()
        const cart = await prisma.cart.deleteMany({
            where: {
                productId: prod_id
            }
        })

        const users = await prisma.product.deleteMany({
            where: {
                id: prod_id
            }
        });
        return [cart, users]
    } catch (error) {
        return error
    }
}
// getUsers()
// getProds()
// createCart()
deleteCart()
// deleteProducts()
    .then(cart => console.log(cart))
    .catch(error => console.error(error))


/*
                data: {
                    // cart: {
                    //     // connect or create the new features
                    //     connectOrCreate: [
                    //         {
                    //             where: {
                    //                 cartId: 
                    //             }, create: {
                    //                 description: "'first feature'"
                    //             }
                    //         }
                    //     ]
                    // }
                }
*/