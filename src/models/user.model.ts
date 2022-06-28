import { prisma } from "../utils/prismaConnector.util";
import { IUser, ILogin } from "../interfaces/interfaces";

export class User {
    static async createUser(new_user_data: IUser) {
        try {
            await prisma.$connect();

            const user_exists = await prisma.user.findUnique({
                where: {
                    email: new_user_data.email.toLowerCase()
                }
            })

            if (user_exists) throw Error("User email already exists");
            
            const created_user = await prisma.user.create({
                data: {
                    name: new_user_data.name,
                    email: new_user_data.email,
                    password: new_user_data.password
                }
            })
            return created_user
            
        } catch (error) {
            return error;
        }
    }

    static async loginUser(email: string) {
        try {
            await prisma.$connect();
            const user = await prisma.user.findUnique({
                where: {
                    email
                }
            })
            return user
        } catch (error) {
            return error
        }
    }
}