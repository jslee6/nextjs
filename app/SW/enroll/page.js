
// //app\SW\enroll\page.js
// 'use client'

// // 풋과 딜리트는 안됨
// import { Button, Input, Stack, Box, TextField } from "@mui/material";

// export default function Enroll() {

//   return (
//     // <Box sx={{ width: '100%' }}> {/* Box를 사용하여 폭을 100%로 설정 */}
//     <Box 
//     sx={{backgroundColor: '#f9f7f8' }} // 배경색
//   >
//       <form action="/api/sw/post" method="POST">
//         <Stack direction="row" spacing={1}>
//           <div>
//             <Input type="text" name="docsNumber" placeholder="문서번호" />
//             <br />
//             <Input type="text" name="SwName" placeholder="SW명" />
//           </div>

//           <div>
//             <Input type="text" name="Department" placeholder="부서" />
//             <br />
//             <Input type="text" name="period" placeholder="기간여부" />
//           </div>

//           <div>
//             <Input type="text" name="SwuserID" placeholder="유저ID" />
//             <br />
//             <Input type="text" name="licensKey" placeholder="라이센스키" />
//           </div>
//           <div>
//             <Input type="text" name="name" placeholder="이름" required />
//             <br />
//             <TextField type="text" name="madeCompany" placeholder="제조사" />
//           </div>
//           <div>
//             <TextField 
//               name="etc" 
//               placeholder="기타사항" 
//               multiline   
//               rows={1.5} // 높이를 조정할 수 있는 속성
//               sx={{ width: '600px' }} // 원하는 너비로 설정 (예: 500px)
//             />
//           </div>
          
//           <Button className="button-blue" variant="contained" color="info" type="submit">전송<br></br>하기</Button>
//           {/* <Button className="button-red" variant="contained" color="info" type="submit">전송<br></br>완료</Button> */}
//         </Stack>
//       </form>
//     </Box>
//   );
// }


'use client'

import { Button, Input, Stack, Box, TextField } from "@mui/material";
import { useState } from "react";

export default function Enroll() {
  const [formData, setFormData] = useState({
    docsNumber: '',
    SwName: '',
    Department: '',
    period: '',
    SwuserID: '',
    licensKey: '',
    name: '',
    madeCompany: '',
    etc: ''
  });

  // 폼 데이터 변경 처리 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 폼 제출 처리 함수
  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 제출 방지

    try {
      const response = await fetch('/api/swa/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // 폼 데이터를 JSON으로 변환
      });

      if (response.ok) {
        const newUser = await response.json();
        console.log('User created:', newUser);
        // 성공 메시지나 추가 작업 수행
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <Box sx={{ backgroundColor: '#f9f7f8' }}>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={1}>
          <div>
            <Input type="text" name="docsNumber" placeholder="문서번호" onChange={handleChange} />
            <br />
            <Input type="text" name="SwName" placeholder="SW명" onChange={handleChange} />
          </div>

          <div>
            <Input type="text" name="Department" placeholder="부서" onChange={handleChange} />
            <br />
            <Input type="text" name="period" placeholder="기간여부" onChange={handleChange} />
          </div>

          <div>
            <Input type="text" name="SwuserID" placeholder="유저ID" onChange={handleChange} />
            <br />
            <Input type="text" name="licensKey" placeholder="라이센스키" onChange={handleChange} />
          </div>
          <div>
            <Input type="text" name="name" placeholder="이름" required onChange={handleChange} />
            <br />
            <Input type="text" name="madeCompany" placeholder="제조사" onChange={handleChange} />
          </div>
          <div>
            <TextField 
              name="etc" 
              placeholder="기타사항" 
              multiline   
              rows={1.5} 
              sx={{ width: '600px' }} 
              onChange={handleChange}
            />
          </div>
          
          <Button className="button-blue" variant="contained" color="info" type="submit">전송<br />하기</Button>
        </Stack>
      </form>
    </Box>
  );
}
