'use client'

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TableSortLabel from '@mui/material/TableSortLabel'; // 테이블소팅관련

export default function PTablePage() {
    const [users, setUsers] = useState([]);
    const [sortColumn, setSortColumn] = useState(null);   //테이블 소팅관련
    const [sortDirection, setSortDirection] = useState(null);  //테이블 소팅관련

    useEffect(() => {
        fetch('/api/user/get')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data);
                setUsers(data);
            })
            .catch(error => console.error('Fetch error:', error));
    }, []);

    
    // 테이블소팅
    // handleSort 함수를 구현하여 정렬 기준과 방향을 업데이트합니다.

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };
        
    // 테이블소팅
    // handleSort 함수를 구현하여 정렬 기준과 방향을 업데이트합니다.
    
    //정렬된 데이터를 렌더링하기 위해 users 배열을 정렬합니다.
    let sortedUsers = [...users];
    if (sortColumn) {
        sortedUsers.sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
            if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }
    //정렬된 데이터를 렌더링하기 위해 users 배열을 정렬합니다.

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                {/* 테이블 소팅순서 예시 */}
                                <TableSortLabel 
                                    active={sortColumn === 'id'}
                                    direction={sortColumn === 'id' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('id')}
                                >
                                    ID(숨김처리예정)
                                </TableSortLabel>
                                {/* 테이블소팅 순서예시 */}
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'firstName'}
                                    direction={sortColumn === 'firstName' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('firstName')}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'lastName'}
                                    direction={sortColumn === 'lastName' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('lastName')}
                                >
                                    LastName
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'email'}
                                    direction={sortColumn === 'email' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('email')}
                                >
                                    Email
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'age'}
                                    direction={sortColumn === 'age' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('age')}
                                >
                                    Age
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'createdAt'}
                                    direction={sortColumn === 'createdAt' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('createdAt')}
                                >
                                    Create
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedUsers.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.firstName}</TableCell>
                                <TableCell>{user.lastName}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.age}</TableCell>
                                <TableCell>{user.address}</TableCell>
                                <TableCell>{user.createdAt}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

