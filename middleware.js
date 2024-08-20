// middleware.js

import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const token = await getToken({ req, secret: 'git6579!!' });

  // 토큰이 없거나 role이 admin이 아니면 로그인 페이지로 리다이렉트
  if (!token || token.user.role !== 'admin') {
    return NextResponse.redirect(new URL('/roleDeny', req.url));
  }

  return NextResponse.next();
}

// /auth/join 경로에 대해 미들웨어 적용
export const config = {
  matcher: ['/auth/join'],
};


//이전 페이지로 돌아가기 버튼






// import { NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';

// export async function middleware(req) {
//   const token = await getToken({ req, secret: 'git6579!!' });

//   // /ptable 경로에서 DELETE 요청이 들어온 경우
//   if (req.method === 'DELETE' && req.nextUrl.pathname.startsWith('/ptable')) {
//     // 토큰이 없거나 role이 admin이 아닌 경우
//     if (!token || token.user.role !== 'admin') {
//       return NextResponse.redirect(new URL('/roleDeny', req.url));
//     }
//   }

//   // /auth/join 경로 및 기타 요청에 대한 처리
//   if (!token || token.user.role !== 'admin') {
//     return NextResponse.redirect(new URL('/roleDeny', req.url));
//   }

//   return NextResponse.next();
// }

// // /auth/join 및 /api/user/delete 경로에 대해 미들웨어 적용
// export const config = {
//   matcher: ['/auth/join', '/api/user/delete'],
// };
