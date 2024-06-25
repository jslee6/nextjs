'use client'

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination, TablePagination } from '@mui/material';


export default function PTablePage() {
    const [users, setUsers] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    // const handlePageChange = (event, value) => {
    //   setCurrentPage(value);
    //   // 페이지 변경 시 필요한 데이터 로드 로직 추가
    // };

    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

     // 여기에서 Rows per page 옵션을 정의합니다.
        
    const rowsPerPageOptions = [5, 10, 15];


////////////////////

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
      count={20}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}                            

    />
                {/* <Pagination  //페이지네이션
  count={5} // 총 페이지 수
  page={currentPage} // 현재 페이지
  onChange={handlePageChange} // 페이지 변경 시 실행될 함수
  color="primary" // 페이지네이션 컴포넌트의 색상 설정
/> */}

            </TableContainer>
        </Container>
    );
}
