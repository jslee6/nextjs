'use client'

import React, { useEffect, useState } from 'react';
import { TableSortLabel, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Stack } from '@mui/material';
import axios from 'axios';
import RoleSelect from './components/RoleSelect';
import Link from '@mui/material';

export default function PTablePage() {
    const [users, setUsers] = useState([]);
    const [role, setRole] = useState('all'); // 기본값은 'user'
    const [searchTerm, setSearchTerm] = useState(''); // 모든 검색어 상태 추가
    const [searchId, setSearchId] = useState(''); // ID 검색어 상태 추가
    const [filteredUsers, setFilteredUsers] = useState([]); // 필터링된 사용자 상태

    const [sortColumn, setSortColumn] = useState('userId'); // 테이블 소팅 초기 상태 설정
    const [sortDirection, setSortDirection] = useState('asc'); // 테이블 소팅 초기 상태 설정

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('/api/accounthistroy/get');
                console.log('get data:', response.data);
                setUsers(response.data);
                setFilteredUsers(response.data); // 초기 상태로 전체 사용자 설정
            } catch (error) {
                console.error('get error:', error);
            }
        };
        getUser();
    }, []); // 의존성 배열 비워서 한번만 실행하도록 함

    // 테이블 소팅 함수
    const handleSort = (column) => {
        const isAsc = sortColumn === column && sortDirection === 'asc';
        setSortDirection(isAsc ? 'desc' : 'asc');
        setSortColumn(column);
    };

    // 정렬된 데이터를 렌더링하기 위해 users 배열을 정렬합니다.
    const sortedUsers = [...filteredUsers].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    // 통합된 검색 핸들러
    const handleSearchBoth = () => {
        const filtered = users.filter(user => {
            const matchesSearchTerm =
                Object.values(user).some(value =>
                    value.toString().includes(searchTerm)
                ); // 전체 검색 및 문자 변환

            const matchesSearchId =
                user.userId.includes(searchId) || user.password.includes(searchId);
            // ID 컬럼 검색

            const matchesRole = role === 'all' || user.role === role; // "전체"를 포함한 역할 필터링

            return matchesSearchTerm && matchesSearchId && matchesRole;
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
                    onChange={(e) => setSearchId(e.target.value)} // 입력값 업데이트
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
                <Button variant="contained" sx={{ width: '100%', mt: 2 }} component={Link} href="/accounttest">계정관리<br />돌아가기</Button>
            </Stack>

            <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'id'}
                                    direction={sortColumn === 'id' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('id')}
                                >
                                    ID(숨김처리예정)
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'userId'}
                                    direction={sortColumn === 'userId' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('userId')}
                                >
                                    userId
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'password'}
                                    direction={sortColumn === 'password' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('password')}
                                >
                                    password
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Update day</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedUsers.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.userId}</TableCell>
                                <TableCell>{user.password}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>{user.createdAt}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
