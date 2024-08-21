// 유저 테이블 컴포넌트

// UserTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import TableSortLabel from '@mui/material/TableSortLabel';

function UserTable({ users, sortColumn, sortDirection, handleSort, handleUpdate, handleDelete }) {
    return (
        <TableContainer component={Paper} style={{ marginTop: '30px' }}>
           <Table sx={{ '& .MuiTableCell-root': { padding: '8px' } }}>
            {/* 테이블 간격 패딩 전체조정 '8px' */}
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
                                active={sortColumn === 'role'}
                                direction={sortColumn === 'role' ? sortDirection : 'asc'}
                                onClick={() => handleSort('role')}
                            >
                                role
                            </TableSortLabel>
                        </TableCell>
                        <TableCell sx={{ width: '10px' }}>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.userId}</TableCell>
                            <TableCell>{user.password}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={() => handleUpdate(user)}>
                                    수정
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>삭제</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UserTable;