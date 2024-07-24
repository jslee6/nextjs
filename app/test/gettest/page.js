// 모든 컬럼 검색: 
//handleSearch 함수에서 Object.values(user)를 사용하여 사용자 객체의 모든 값을 배열로 가져옵니다.
// .some() 메서드 사용: 이 배열에 대해 .some() 메서드를 호출하여, 각 값이 searchTerm을 포함하는지 확인합니다. 이 방식으로 모든 컬럼에서 검색어를 찾을 수 있습니다.
// toString() 메서드 사용: 값이 숫자일 경우에도 검색이 가능하도록 각 값을 문자열로 변환합니다.
'use client'

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Stack } from '@mui/material';
import axios from 'axios';
import RoleSelect from './components/RoleSelect';

export default function PTablePage() {
    const [users, setUsers] = useState([]);
    const [role, setRole] = useState('user'); // 기본값은 'user'
    const [searchTerm, setSearchTerm] = useState(''); // 모든 검색어 상태 추가
    const [searchId, setsearchId] = useState(''); // ID 검색어 상태 추가
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
    }, []); // 의존성 배열 비워서 한번만 실행하도록 함

    // 통합된 검색 핸들러
    const handleSearchBoth = () => {
        const filtered = users.filter(user => { 
            
            const matchesSearchTerm = 
            Object.values(user).some(value =>
                value.toString().includes(searchTerm)
            ); //전체검색 및 문자 변환

            const matchesSearchId =
            user.userId.includes(searchId) || user.password.includes(searchId);
            // ID 컬럼 검색
            return matchesSearchTerm && matchesSearchId && user.role === role;
        });
        setFilteredUsers(filtered);
    };


    return (
        <Container>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                sx={{ width: '70%', }}
            >
                <RoleSelect role={role} setRole={setRole} />
                
                <TextField
                    variant="outlined"
                    label="ID 검색"
                    fullWidth
                    sx={{ width: '300%', mt: 2 }}
                    value={searchId}
                    onChange={(e) => setsearchId(e.target.value)} // 입력값 업데이트
                />
                <TextField
                    variant="outlined"
                    label="전체검색"
                    fullWidth
                    sx={{ width: '300%', mt: 2 }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // 입력값 업데이트
                />
                <Button variant="contained" onClick={handleSearchBoth} sx={{ mt: 2 }}>검색</Button>
            </Stack>

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
