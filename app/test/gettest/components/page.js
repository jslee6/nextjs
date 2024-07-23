'use client'
// 필터 검색 테스트

import { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

export default function Role() {
  // const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // 기본값으로 'admin' 설정
  const [users, setUsers] = useState([]);

  const userGet = async () => {
    try {
      const res = await axios.get(`/api/account/get`);
      setUsers(res.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      {/* <TextField
        label="Name"
        variant="outlined"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value); // 상태 업데이트
        }}
      /> */}
      
      <Button variant="contained" onClick={userGet}>Search</Button>

      {/* Role 선택 드롭다운 추가 */}
      <FormControl variant="outlined" fullWidth sx={{ mt: 2 }}>
        <InputLabel>권한 선택</InputLabel>
        <Select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        
          label="Role"
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="user">User</MenuItem>
        </Select>
      </FormControl>

      <List>
        {users.filter(user => user.role === role).map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.role} secondary={user.email}/>
            {/* <ListItemText primary={user.id} secondary={user.role}/> */}
          </ListItem>
        ))}
      </List>
      {/* ID 검색함 */}
    </div>
  );
}







//이전꺼

// 'use client'
//필터 검색 테스트
// import { useState } from 'react';
// import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
// import axios from 'axios';

// export default function Role() {
//   const [password, setPassword] = useState('');
//   const [users, setUsers] = useState([]);

//   const userGet = async () => {
//     try {
//       const res = await axios.get(`/api/account/get`);
//       setUsers(res.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   return (
//     <div>
//       <TextField
//         label="Name"
//         variant="outlined"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button variant="contained" onClick={userGet}>Search</Button>

//       <List>
//         {users.map((user) => (
//           <ListItem key={user.id}>
//             <ListItemText 
//               primary={`ID: ${user.id}`} 
//               secondary={`Role: ${user.role}, Email: ${user.email}`} 
//             />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// }

// ------------------

// import { useState } from 'react';
// import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
// import axios from 'axios';

// export default function Role() {
//   const [password, setPassword] = useState(''); // 입력값을 저장
//   const [users, setUsers] = useState([]); // 사용자 목록을 저장

//   const userGet = async () => {
//     try {
//       const res = await axios.get(`/api/account/get`);
//       setUsers(res.data); // API에서 사용자 데이터 가져오기
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   // 입력값에 따라 필터링된 사용자 목록 생성
//   const filteredUsers = users.filter(user =>
//     user.role.toLowerCase().includes(password.toLowerCase()) // 입력값이 포함된 사용자 필터링
//   );

//   return (
//     <div>
//       <TextField
//         label="Role"
//         variant="outlined"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)} // 입력값 상태 업데이트
//       />
//       <Button variant="contained" onClick={userGet}>Search</Button>

//       <List>
//         {filteredUsers.map((user) => (
//           <ListItem key={user.id}>
//             <ListItemText 
//               primary={`ID: ${user.id}`} 
//               secondary={`Role: ${user.role}, Email: ${user.email}`} 
//             />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// }
