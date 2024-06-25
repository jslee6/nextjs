'use client'

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination, TablePagination } from '@mui/material';


export default function PTablePage() {
        const [users, setUsers] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
        const rowsPerPageOptions = [5, 10, 15];
    
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
    
        const handleChangePage = (event, newPage) => {
            setPage(newPage);
            setCurrentPage(newPage + 1); // 페이지 번호 업데이트
        };
    
        const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
            setCurrentPage(1); // 페이지 번호 초기화
        };
    
    
        return (
        <Container>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID(숨김처리예정)</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>LastNAme</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Create</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
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

<TablePagination
    component="div"
    count={users.length} // 전체 데이터 개수
    page={page} // 0부터 시작하므로 page - 1
    onPageChange={handleChangePage}
    rowsPerPage={rowsPerPage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    rowsPerPageOptions={rowsPerPageOptions}
/>
</TableContainer>
</Container>
);
}