'use client'

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import RoleSelect from './components/RoleSelect';

export default function PTablePage() {
    const [users, setUsers] = useState([]);
    const [role, setRole] = useState('user'); // 기본값은 'user' 부모컴포넌트 -> 자식 컴포넌트(Role Select로 전달)

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
              {/* Role 선택 드롭다운을 RoleSelect 컴포넌트로 변경 */}
              <RoleSelect role={role} setRole={setRole} />
               {/* 요거없으면 기본 Gettest */}

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
