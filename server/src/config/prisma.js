import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const prismaConnect = async () => {
  try {
    await prisma.$connect()
    console.log("✅ Prisma conectado com sucesso!")
  } catch (error) {
    console.error("❗ Erro ao conectar no prisma", error)
  }

}
export default prisma