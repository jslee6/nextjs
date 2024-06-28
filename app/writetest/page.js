'use client'

{/* 폼테그 쓰는게 겟,포스트 제일쓰기 쉬움**** */ }
import Link from "@/minimalOrigin/src/theme/overrides/Link";
// 풋과 딜리트는 안됨
import { Button, Input, Stack } from "@mui/material";



export default function Write() {


  return (
    <div className="p-20">
      <form action="/api/user/post" method="POST">
        <Stack direction="row" spacing={2}>
          <div>
            <Input type="text" name="firstName" placeholder="이름" required />
            <br></br>
            <Input type="text" name="lastName" placeholder="성" />
          </div>
          <div>
            <Input type="text" name="email" placeholder="이메일" required />
            <br></br>
            <Input type="text" name="age" placeholder="나이" required />
          </div>
          <div>
            <Input type="number" name="age" placeholder="나이" />
            <br></br>
            <Input type="text" name="address" placeholder="주소" />
          </div>
          <Button variant="contained" color="success" type="submit">전송<br></br>하기</Button>
          
        </Stack>
      </form>
    </div>
  );
}

// 인풋 태그

// import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, TextField, Button } from '@mui/material';
// import { useState } from 'react';

// export default function Write() {
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     age: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const response = await fetch('/api/user/post', { // 여기를 수정
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);
//     } else {
//       console.error('Error:', response.status);
//     }
//   };

//   return (
//     <div className="p-20">
//       <form onSubmit={handleSubmit}>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableBody>
//               <TableRow>
//                 <TableCell>
//                   <TextField
//                     name="email"
//                     placeholder="이메일"
//                     required
//                     fullWidth
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     name="firstName"
//                     placeholder="이름"
//                     required
//                     fullWidth
//                     value={formData.firstName}
//                     onChange={handleChange}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     name="lastName"
//                     placeholder="성"
//                     fullWidth
//                     value={formData.lastName}
//                     onChange={handleChange}
//                   />
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>
//                   <TextField
//                     name="address"
//                     placeholder="주소"
//                     fullWidth
//                     value={formData.address}
//                     onChange={handleChange}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <TextField
//                     name="age"
//                     placeholder="나이"
//                     type="number"
//                     fullWidth
//                     value={formData.age}
//                     onChange={handleChange}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <Button type="submit" variant="contained" fullWidth>
//                     전송
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </form>
//     </div>
//   );
// }



///클라이언트 ,  리다이렉트는  api/user/post  에서 추가함