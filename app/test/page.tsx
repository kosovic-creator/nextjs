/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "@/lib/prisma";

export default async function Test() {
    const users: any[][] = await prisma.$queryRaw`SELECT   id,name,price*6 as total FROM "Item" `;
   // const posts = await prisma.post.findMany();
   return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Superblog
      </h1>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user:any) => (
          <li key={user.id} className="mb-2">
            {user.name}
            <p> total </p>
            {user.total}
          </li>


        ))}
      </ol>
    </div>
  );
}