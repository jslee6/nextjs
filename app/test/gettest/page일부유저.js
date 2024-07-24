// 일부유저만 검색

'use client'

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';
import axios from 'axios';
import RoleSelect from './components/RoleSelect';

export default function PTablePage() {
    const [users, setUsers] = useState([]);  // api get할떄 사용
    const [role, setRole] = useState('user'); // 기본값은 'user'
    const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 추가
    const [filteredUsers, setFilteredUsers] = useState([]); // 필터링된 사용자 상태

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('/api/account/get');
                console.log('get data:', response.data);
                setUsers(response.data);
                setFilteredUsers(response.data); // 초기 상태로 전체 사용자 설정
            } catch (error) {
                console.error('get error:', error);
            }
        };
        getUser();
    }, []);

// searchTerm 을 컬럼에 포함한걸 검색
    const handleSearch = () => {
        const filtered = users.filter(user => 
            (user.userId.includes(searchTerm) || user.password.includes(searchTerm)) && user.role === role
            // searchTerm 을 포함함
        );
        setFilteredUsers(filtered);
    };
// searchTerm 을 컬럼에 포함한걸 검색

    return (
        <Container>
            {/* Role 선택 드롭다운을 RoleSelect 컴포넌트로 변경 */}
            <RoleSelect role={role} setRole={setRole} />

            {/* 검색 필드 추가 */}
            <TextField
                variant="outlined"
                label="검색어 입력"
                fullWidth
                sx={{ mt: 2 }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // 입력값 업데이트
            />
            <Button variant="contained" onClick={handleSearch} sx={{ mt: 2 }}>검색</Button>

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
                        {filteredUsers.map((user) => (
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


// 검색어 상태 추가: searchTerm이라는 상태를 추가하여 사용자가 입력한 검색어를 저장합니다.
// 검색 필드 추가: TextField 컴포넌트를 추가하여 사용자가 검색어를 입력할 수 있도록 했습니다.
// 검색 로직: handleSearch 함수에서 users 배열을 필터링하여 userId에 입력된 검색어가 포함되어 있고, 선택된 role과 일치하는 사용자만 filteredUsers 상태에 저장합니다.