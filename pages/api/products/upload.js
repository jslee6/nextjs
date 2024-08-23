//pages\api\products
// 파일업로드 를 위한 api  24.08.23

import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const prisma = new PrismaClient();
const uploadDir = 'public/uploads';

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer to store files in the 'public/uploads' directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}${ext}`;
    cb(null, filename);
  },
});

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
        const product = await prisma.productUpload.create({
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
