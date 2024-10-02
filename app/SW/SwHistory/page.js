

'use client'

import React, { useEffect, useState } from 'react';
import { TableSortLabel, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Stack, Link } from '@mui/material';
import axios from 'axios';
import RoleSelect from '../components/RoleSelect';

export default function PTablePage() {
    const [users, setUsers] = useState([]);
    const [role, setRole] = useState('all'); // 기본값은 'all'
    const [searchTerm, setSearchTerm] = useState(''); // 모든 검색어 상태 추가
    const [searchId, setSearchId] = useState(''); // ID 검색어 상태 추가
    const [filteredUsers, setFilteredUsers] = useState([]); // 필터링된 사용자 상태

    const [sortColumn, setSortColumn] = useState(null);   // 테이블 소팅 관련
    const [sortDirection, setSortDirection] = useState(null);  // 테이블 소팅 방향 상태

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('/api/swhistory/get'); // 경로 변경
                console.log('get data:', response.data);
                setUsers(response.data);
                setFilteredUsers(response.data); // 초기 상태로 전체 사용자 설정
            } catch (error) {
                console.error('get error:', error);
            }
        };
        getUser();
    }, []); // 의존성 배열 비워서 한번만 실행하도록 함

    // 테이블 소팅 핸들러
    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    // 정렬된 데이터를 렌더링하기 위해 users 배열을 정렬합니다.
    let sortedUsers = [...filteredUsers];
    if (sortColumn) {
        sortedUsers.sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
            if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }

    // 통합된 검색 핸들러
    const handleSearchBoth = () => {
        const filtered = users.filter(user => {
            const matchesSearchTerm =
                searchTerm === '' || Object.values(user).some(value =>
                    value !== null && value !== undefined && value.toString().includes(searchTerm)
                );

            const matchesSearchId =
                user.SwuserID && user.SwuserID.includes(searchId); // ID 컬럼 검색

            const matchesRole = role === 'all' || user.role === role; // "전체"를 포함한 역할 필터링

            return matchesSearchTerm && matchesSearchId && matchesRole;
        });
        setFilteredUsers(filtered);
    };

    return (
        <Container maxWidth="xl">
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                sx={{ width: '70%', }}
            >
                {/* <RoleSelect role={role} setRole={setRole} /> */}
                {/* 롤 셀렉트 미사용 */}

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
                <Button variant="contained" sx={{ width: '60%', mt: 2 }} component={Link} href="/account">SW관리<br />돌아가기</Button>
            </Stack>

            <TableContainer component={Paper} sx={{ width: '100%', textAlign: 'c', mt: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'id'}
                                    direction={sortColumn === 'id' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('id')}
                                >
                                    ID
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'docsNumber'}
                                    direction={sortColumn === 'docsNumber' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('docsNumber')}
                                >
                                    문서번호
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'SwuserID'}
                                    direction={sortColumn === 'SwuserID' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('SwuserID')}
                                >
                                    유저ID
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'name'}
                                    direction={sortColumn === 'name' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('name')}
                                >
                                    이름
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'Department'}
                                    direction={sortColumn === 'Department' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('Department')}
                                >
                                    부서
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'SwName'}
                                    direction={sortColumn === 'SwName' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('SwName')}
                                >
                                    Sw명
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'period'}
                                    direction={sortColumn === 'period' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('period')}
                                >
                                    기간
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'madeCompany'}
                                    direction={sortColumn === 'madeCompany' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('madeCompany')}
                                >
                                    제조사
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'licensKey'}
                                    direction={sortColumn === 'licensKey' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('licensKey')}
                                >
                                    라이센스키
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'etc'}
                                    direction={sortColumn === 'etc' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('etc')}
                                >
                                    기타내역
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'createdAt'}
                                    direction={sortColumn === 'createdAt' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('createdAt')}
                                >
                                    생성일
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedUsers.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.docsNumber}</TableCell>
                                <TableCell>{user.SwuserID}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.Department}</TableCell>
                                <TableCell>{user.SwName}</TableCell>
                                <TableCell>{user.period}</TableCell>
                                <TableCell>{user.madeCompany}</TableCell>
                                <TableCell>{user.licensKey}</TableCell>
                                <TableCell>{user.etc}</TableCell>
                                <TableCell>{user.createdAt}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
