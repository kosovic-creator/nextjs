/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/lib/prisma";
import { getUser } from "@prisma/client/sql";

const page = async () => {
    const users = await prisma.$queryRawTyped(getUser());
    // const data = JSON.parse(JSON.stringify(users))
    const result = await prisma.$queryRaw`SELECT * FROM "Post"`;

    const email = "emelie@prisma.io";
const result1 = await prisma.$queryRaw`SELECT * FROM "User" WHERE email = ${email}`;
const result2 = await prisma.$queryRaw`SELECT   id,name,price*2 as total FROM "Item" `;
  return (

    // console.log(users),
    // console.log(result),
    console.log(result2)
  )

}

export default page