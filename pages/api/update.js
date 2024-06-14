import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id, firstName, lastName, email, address, age } = req.body

    try {
      const updatedUser = await prisma.user.update({
        where: { id },
        data: { firstName, lastName, email, address, age }
      })

      res.status(200).json(updatedUser)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
