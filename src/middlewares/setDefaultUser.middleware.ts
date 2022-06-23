import { Request, Response, NextFunction } from "express";
import { prisma } from "../utils/prismaConnector.util";

export async function setDefaultUser(req: Request, res: Response, next: NextFunction) {
    await prisma.$connect()
    const defaulUserId: { id: string } = await prisma.user.upsert({
        where: {
            email: 'gui.massoqueto@gmail.com'
        },
        update: {},
        create: {
            name: 'Gui Massoqueto',
            email: 'gui.massoqueto@gmail.com'
        },
        select: {
            id: true
        }
    })
    req.currentUserId = defaulUserId.id;
    next();
}