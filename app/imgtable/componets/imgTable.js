// app/imgtable/componets/imgTable.js

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import TableSortLabel from '@mui/material/TableSortLabel';

const ImgTable = ({ users, sortColumn, sortDirection, handleSort, handleDelete, handleFileClick }) => {
    return (
        <TableContainer component={Paper} sx={{ marginTop: '30px' }}>
            <Table sx={{ '& .MuiTableCell-root': { padding: '8px' } }}>
                <TableHead>
                    <TableRow>
                        <TableCell className='table-header'>
                            <TableSortLabel
                                active={sortColumn === 'id'}
                                direction={sortColumn === 'id' ? sortDirection : 'asc'}
                                onClick={() => handleSort('id')}
                            >
                                ID
                            </TableSortLabel>
                        </TableCell>
                        <TableCell className='table-header'>
                            <TableSortLabel
                                active={sortColumn === 'title'}
                                direction={sortColumn === 'title' ? sortDirection : 'asc'}
                                onClick={() => handleSort('title')}
                            >
                                Title
                            </TableSortLabel>
                        </TableCell>
                        <TableCell className='table-header'>
                            <TableSortLabel
                                active={sortColumn === 'imageUrl'}
                                direction={sortColumn === 'imageUrl' ? sortDirection : 'asc'}
                                onClick={() => handleSort('imageUrl')}
                            >
                                파일 URL
                            </TableSortLabel>
                        </TableCell>
                        <TableCell className='table-header'>삭제</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.title}</TableCell>
                            <TableCell>
                                <a href="#" onClick={(e) => handleFileClick(e, user.imageUrl)} style={{ textDecoration: 'none' }}>
                                    {user.imageUrl}
                                </a>
                            </TableCell>
                            <TableCell align="center">
                                <Button className='button-red' variant="contained" color="error" onClick={() => handleDelete(user.id)}>삭제</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ImgTable;
