// 'use client'

// import React, { useEffect, useState } from 'react';
// import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
// import axios from 'axios';


// export default function PTablePage() {
//     const [users, setUsers] = useState([]);



//     useEffect(() => {
//         const getUser = async () => {
//             try {
//                 const response = await axios.get('/api/account/get');
//                 console.log('get data:', response.data);
//                 setUsers(response.data);
//             } catch (error) {
//                 console.error('get error:', error);
//             }
//         };
//         getUser();
//     }, []);

//     return (


//         <Container>

//             <Role></Role>
//             <TableContainer component={Paper}>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>ID(숨김처리예정)</TableCell>
//                             <TableCell>UserID</TableCell>
//                             <TableCell>password</TableCell>
//                             <TableCell>email</TableCell>
//                             <TableCell>role</TableCell>
                
                            
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {users.map((user) => (
//                             <TableRow key={user.id}>
//                                 <TableCell>{user.id}</TableCell>
//                                 <TableCell>{user.userId}</TableCell>
//                                 <TableCell>{user.password}</TableCell>
//                                 <TableCell>{user.email}</TableCell>
//                                 <TableCell>{user.role}</TableCell>
                     

//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </Container>
//     );
// }



'use client'

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';

export default function PTablePage() {
    const [users, setUsers] = useState([]);
    const [role, setRole] = useState('user'); // 기본값은 'user'

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('/api/account/get');
                console.log('get data:', response.data);
                setUsers(response.data);
            } catch (error) {
                console.error('get error:', error);
            }
        };
        getUser();
    }, []);

    return (
        <Container>
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

            {/* role 인풋라벨 생성 */}

            <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID(숨김처리예정)</TableCell>
                            <TableCell>UserID</TableCell>
                            <TableCell>Password</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.filter(user => user.role === role).map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.userId}</TableCell>
                                <TableCell>{user.password}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
