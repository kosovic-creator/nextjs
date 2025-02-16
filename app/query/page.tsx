/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/lib/prisma";
import { getUser } from "@prisma/client/sql";

const page = async () => {
    const users = await prisma.$queryRawTyped(getUser());
  return (
    console.log(users)
  )

}

export default page