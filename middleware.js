// // middleware.js
// 기본 리다이렉트

// import { NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';

// export async function middleware(req) {
//   const token = await getToken({ req, secret: 'git6579!!' });

//    // 토큰 객체를 로그로 출력
//    console.log('Token:', token); // 여기서 token 객체를 출력합니다.



//   // 토큰이 없거나 role이 admin이 아니면 로그인 페이지로 리다이렉트
//   if (!token || token.user.role !== 'admin') {
//     return NextResponse.redirect(new URL('/roleDeny', req.url));
//   }

//   return NextResponse.next();
// }

// // /auth/join 경로에 대해 미들웨어 적용
// export const config = {
//   matcher: ['/auth/join','/SW','/imgtable'],
// };




///****************** 경로 별 미들웨어 설정*/
//middleware.js

import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const token = await getToken({ req, secret: 'git6579!!' });

  // 토큰 객체를 로그로 출력
  console.log('Token:', token); // 여기서 token 객체를 출력합니다.

  // 경로에 따른 접근 제어
  if (
    req.nextUrl.pathname === '/auth/join' || req.nextUrl.pathname === '/ResetPassword' || req.nextUrl.pathname === '/account' || req.nextUrl.pathname === '/register') {
    // 토큰이 없거나 롤이 관리자가 아닌경우,  roleDeny 로 리다이렉트
    if (!token || token.user.role !== 'admin') {
      return NextResponse.redirect(new URL('/roleDeny', req.url));
    }
  }
  // 로그인 여부가 필요한 경로
  else if (
    req.nextUrl.pathname === '/imgtable' || req.nextUrl.pathname === '/SW') {
      if (!token || !(token.user.role === 'admin' || token.user.role === 'user')) { 
         // 토큰이 없거나 어드민도, 유저도 아닌경우, needLogin 으로 리다이렉트
      return NextResponse.redirect(new URL('/needLogin', req.url));
    }
  }
   // 경로에 따른 접근 제어

  return NextResponse.next();
}
