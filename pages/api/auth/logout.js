//24.08.08 로그아웃 

export default function handler(req, res) {
    if (req.method === 'POST') {
      // 로그아웃 시 세션 쿠키 삭제
      res.setHeader('Set-Cookie', 'session=; HttpOnly; Path=/; Max-Age=0');
      res.status(200).json({ message: '로그아웃 성공' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  