const {PrismaClient} = require('@prisma/client')
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()

async function main() {

    const password = bcrypt.hashSync("customer123", 10)

    const userSeed = await prisma.user.create({
        data: {
            email:"valencustomer@gmail.com",
            name: "valencustomer",
            role: "CUSTOMER",
            password
        }
    })

    console.log({userSeed})
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })