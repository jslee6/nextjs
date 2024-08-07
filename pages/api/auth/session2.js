//24.08.07 4 세션확인 api 

export default function handler(req, res) {
    const cookie = req.headers.cookie || '';
    const sessionCookie = cookie.split('; ').find(row => row.startsWith('session='));
    const userId = sessionCookie ? sessionCookie.split('=')[1] : null;
  
    if (!userId) {
      return res.status(200).json({ loggedIn: false });
    }
  
    return res.status(200).json({ loggedIn: true, userId });
  }
  