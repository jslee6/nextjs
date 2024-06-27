'use client'

{/* 폼테그 쓰는게 겟,포스트 제일쓰기 쉬움**** */}
// 풋과 딜리트는 안됨
import { Input, Stack } from "@mui/material";

export default function Write() {
  return (
<Stack direction="row" spacing={2}>
  <Input>test</Input>
  <Input>test</Input>
  <Input>test</Input>
  <Input>test</Input>
{/* 
<div className="p-20">
      <form action="/api/user/post" method="POST">
        <input type="text" name="email" placeholder="이메일" required />
        <input type="text" name="firstName" placeholder="이름" required />
        <input type="text" name="lastName" placeholder="성"  />
        <input type="text" name="address" placeholder="주소"/>
        <input type="number" name="age" placeholder="나이" />
        <button type="submit">전송</button>
      </form>
    </div> */}
    </Stack>
    
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