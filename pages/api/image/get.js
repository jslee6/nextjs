
///GET ,과 post 한번에 구현 //기존
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const users = await prisma.productupload.findMany();
    res.json(users);
    //get

  } else if (req.method === 'POST') {
    const { name } = req.body;
    const newuser = await prisma.productupload.create({
      data: { name }
    });
    res.status(201).json(newuser);
  }
}

