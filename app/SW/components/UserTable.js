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
                                active={sortColumn === 'docsNumber'}
                                direction={sortColumn === 'docsNumber' ? sortDirection : 'asc'}
                                onClick={() => handleSort('docsNumber')}
                            >
                                docsNumber
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortColumn === 'name'}
                                direction={sortColumn === 'name' ? sortDirection : 'asc'}
                                onClick={() => handleSort('name')}
                            >
                                name
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortColumn === 'Department'}
                                direction={sortColumn === 'Department' ? sortDirection : 'asc'}
                                onClick={() => handleSort('Department')}
                            >
                                Department
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortColumn === 'SwName'}
                                direction={sortColumn === 'SwName' ? sortDirection : 'asc'}
                                onClick={() => handleSort('SwName')}
                            >
                                SwName
                            </TableSortLabel>
                        </TableCell>

                        <TableCell>
                            <TableSortLabel
                                active={sortColumn === 'period'}
                                direction={sortColumn === 'period' ? sortDirection : 'asc'}
                                onClick={() => handleSort('period')}
                            >
                                period
                            </TableSortLabel>
                        </TableCell>

                

                        <TableCell>
                            <TableSortLabel
                                active={sortColumn === 'licensKey'}
                                direction={sortColumn === 'licensKey' ? sortDirection : 'asc'}
                                onClick={() => handleSort('licensKey')}
                            >
                                licensKey
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

                             
               

                        

                        <TableCell sx={{ width: '10px' }}>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.docsNumber}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.Department}</TableCell>
                            <TableCell>{user.SwName}</TableCell>
                            <TableCell>{user.period}</TableCell>
                            <TableCell>{user.licensKey}</TableCell>
                            
                            <TableCell>{user.madeCompany}</TableCell>
                            <TableCell>{user.etc}</TableCell>
                            <TableCell>{user.createdAt}</TableCell>
                            

                        

                        
                            
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