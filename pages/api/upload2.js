
// 아래쭉 미사용 24.08.26 집에서한거
// pages/api/upload2.js
import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // formidable을 사용하기 위해 bodyParser를 비활성화합니다.
  },
};

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), 'public/uploads');
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: '파일 업로드 실패' });
    }

    const { productId } = fields;

    const photoPromises = Object.keys(files).map(async (key) => {
      const file = files[key];
      const filePath = path.join('/uploads', path.basename(file.filepath));

      await prisma.photo.create({
        data: {
          url: filePath,
          productId: parseInt(productId, 10),
        },
      });
    });

    await Promise.all(photoPromises);

    res.status(200).json({ message: '사진이 업로드되었습니다.' });
  });
}
