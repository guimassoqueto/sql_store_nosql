import { prisma } from "./utils/prismaConnector.util";

async function main() {
    prisma.$connect()
    const user = await prisma.user.update({
        where: {
            id: '62b35c1c9e75fca725faade8'
        },
        data: {
            name: 'Guillian Massoqueto'
        },
        select: {
            name: true,
            email: true
        }
    });
    return user
}

main()
    .then(data => console.log(data))
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })