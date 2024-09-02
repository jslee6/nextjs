// app/components/UserTable.js

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TableSortLabel } from '@mui/material';

function UserTable({
    users,
    sortColumn,
    sortDirection,
    handleSort,
    handleUpdate,
    handleDelete,
    handleFileUpload,
    handleButtonClick,
}) {



    return (
        <TableContainer>
            <Table sx={{ '& .MuiTableCell-root': { padding: '8px' } }}>
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
                                active={sortColumn === 'firstName'}
                                direction={sortColumn === 'firstName' ? sortDirection : 'asc'}
                                onClick={() => handleSort('firstName')}
                            >
                                First Name
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortColumn === 'lastName'}
                                direction={sortColumn === 'lastName' ? sortDirection : 'asc'}
                                onClick={() => handleSort('lastName')}
                            >
                                Last Name
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
                        <TableCell>
                            <TableSortLabel
                                active={sortColumn === 'address'}
                                direction={sortColumn === 'address' ? sortDirection : 'asc'}
                                onClick={() => handleSort('address')}
                            >
                                Address
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortColumn === 'createdAt'}
                                direction={sortColumn === 'createdAt' ? sortDirection : 'asc'}
                                onClick={() => handleSort('createdAt')}
                            >
                                Created At
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                        <TableCell>Attach File</TableCell>
                        <TableCell>View</TableCell>
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
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={() => handleUpdate(user)}>
                                    수정
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>
                                    삭제
                                </Button>
                            </TableCell>
                            <TableCell>
                                <input
                                    type="file"
                                    onChange={(e) => handleFileUpload(e, user.id)}
                                    style={{ display: 'none' }}
                                    id={`upload-button-${user.id}`}
                                />
                                <label htmlFor={`upload-button-${user.id}`}>
                                    <Button variant="contained" component="span">
                                        첨부
                                    </Button>
                                </label>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleButtonClick(user.id);
                                    }}
                                >
                                    조회
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
