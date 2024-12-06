//pages\api\products\up
// 파일업로드 를 위한 api  24.08.23

import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import path from 'path';
import fs from 'fs'; //파일시스템 관련 모듈(node js)

const prisma = new PrismaClient();
const uploadDir = 'public/uploads';

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer to store files in the 'public/uploads' directory

//파일 이름 변경하여 저장
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir); // 파일을 저장할 디렉토리
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname); // 파일 확장자
//     const filename = `${Date.now()}${ext}`; // 현재 시간과 확장자를 조합한 파일 이름
//     cb(null, filename); // 새로운 파일 이름 설정
//   },
// });
//파일이름 변경하여 저장



//파일 이름 그대로 저장
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // 파일을 저장할 디렉토리
  },
  filename: (req, file, cb) => {
    // 원래 파일 이름을 그대로 사용
    // const filename = file.originalname; 기존코드
    const filename = Buffer.from(file.originalname, 'latin1').toString('utf8');   //utf-8 로 인코딩해서 한글이 깨지지 않게함
    cb(null, filename); // 변환된 파일 이름 설정
  },
});
//파일 이름 그대로 저장


const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Disable the default body parser
  },
};

const handler = async (req, res) => {
  if (req.method === 'POST') {
    upload.single('image')(req, res, async (err) => {
      if (err) {
        console.error('File upload error:', err);
        return res.status(500).json({ error: 'Error uploading file' });
      }

      const { title } = req.body;
      const image = req.file;

      if (!image) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const imageUrl = `/uploads/${image.filename}`;

      try {
        const product = await prisma.productupload.create({
          data: {
            title,    // Using 'title' instead of 'name'
            imageUrl, // Storing the URL of the uploaded image
          },
        });
        res.status(200).json(product);
      } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Error creating product' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
