import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default  async function handler(req, res) {
  const prisma = new PrismaClient()
  const categorias = await prisma.categoria.findMany()

  res.status(200).json(categorias)
}
