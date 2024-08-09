//24.08.07 4 세션확인 api  JSON 형식으로 응답을 반환

//pages\api\auth\session.js

export default function handler(req, res) {
    const cookie = req.headers.cookie || '';
    //요청헤더에서 쿠키 정보를 가져옴. 쿠키가 없으면 빈 문자열로 설정합니다.
    const sessionCookie = cookie.split('; ').find(row => row.startsWith('session='));
    //쿠키 문자열을 ; 기준으로 분리하여 배열로 만든 후, session=으로 시작하는 쿠키를 찾아 sessionCookie에 저장합니다.
    const userId = sessionCookie ? sessionCookie.split('=')[1] : null;
    //sessionCookie가 존재하면 그 값을 =로 분리하여 두 번째 요소(사용자 ID)를 가져오고, 존재하지 않으면 null로 설정합니다.
  
    if (!userId) {
      return res.status(200).json({ loggedIn: false });
    }
    //userId가 null인 경우, 즉 사용자가 로그인하지 않은 경우 loggedIn: false를 JSON 형식으로 응답합니다.
  
    return res.status(200).json({ loggedIn: true, userId });
    //userId가 존재하는 경우, loggedIn: true와 함께 사용자 ID를 포함한 JSON 응답을 반환합니다.
  }
  