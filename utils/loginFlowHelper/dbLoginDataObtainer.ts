import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const getUser: object | null = await prisma.testTable.findMany({
        where: {
            Name: "AlexTest"
        },
        select: {
            idTestTable: true
        },
    });
    console.log(getUser)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })