// pages/api/user/delete.js

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.body // 사용자 ID를 'id'로 받습니다.

    try {
      await prisma.user.delete({
        where: {
          id: id // 'id'로 삭제 조건을 설정합니다.
        }
      })
      res.status(200).json({ message: '사용자가 삭제되었습니다.' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  } else {
    res.status(405).json({ error: '허용되지 않는 HTTP 메서드입니다.' })
  }
}
