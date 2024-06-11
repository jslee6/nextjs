import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function get({}) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: '5a837cd7-bbb6-4aca-b0ef-03171772e166' // UUID 문자열로 변경
      }
      
    });



    //ID 가 특정한것만 출력

    return (
      <div>
        <h4>상세페이지임</h4>
        <div>
          <h4>아이디: {user.id}, </h4>
          <h4>이메일: {user.email}</h4>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div>
        <h4>데이터를 가져오는 중에 오류가 발생했습니다.</h4>
      </div>
    );
  }
}





// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// export default async function get({ }) {
//     const users = await prisma.user.findMany();
//     console.log(users.map(user => user.id)); // 사용자의 id만 콘솔에 출력
//     // console.log(users.map(user=>user)); // 전체 출력

//     return (
//         <div>
//             <h4>상세페이지임</h4>
//             {
//             users.map((user) => (
//                 <div key={user.id}>
//                     <h4>아이디: {user.id}, </h4>
//                     <h4>이메일: {user.email}</h4>
//                 </div>
//             ))
//             }
//             {/* 애로우 펑션 */}
//         </div>
//     );
// }  --> 트라이 캐치 빠진내역

