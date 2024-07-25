'use client'

import React, { useEffect, useState } from 'react';
import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Pagination, TextField } from '@mui/material';
import UserDialog from '@/app/components/UserDialog';
import TableSortLabel from '@mui/material/TableSortLabel';
import axios from 'axios';
import TableWrite from '../ptable/componets/TableWrite';


function PostBt() {
    const [post, setpost] = useState(false);

    const handlePostButtonClick = () => {
        setpost((prevState) => !prevState);
    };

    return (
        <Box>
            <Button
                variant="contained"
                color="primary"
                onClick={handlePostButtonClick}
            >
                {post ? '닫기' : '작성하기'}
            </Button>
            {post && <TableWrite />}
        </Box>
    );
}

export default function PTablePage() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [open, setOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 7;

    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchId, setSearchId] = useState('');

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('/api/user/get');
                console.log('get data:', response.data);
                setUsers(response.data);
                setFilteredUsers(response.data);
            } catch (error) {
                console.error('get error:', error);
            }
        };
        getUser();
    }, []);

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    // 검색어에 따라 필터링된 사용자 목록을 정렬합니다.
    let sortedUsers = [...filteredUsers];
    if (sortColumn) {
        sortedUsers.sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
            if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }

    // 페이지네이션을 적용하여 현재 페이지에 표시할 사용자 목록을 가져옵니다.
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const handleDelete = async (userId) => {
        try {
            const response = await axios.delete('/api/user/delete', {
                data: { id: userId },
            });
            const { message } = response.data;
            console.log(message);
    
            setUsers(users.filter(user => user.id !== userId));
            setFilteredUsers(filteredUsers.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Delete error:', error);
        }
    };

    const handleUpdate = (user) => {
        setSelectedUser(user);
        setOpen(true);
    };

    const handleSaveUpdate = async () => {
        try {
            const response = await axios.put('/api/user/put', { ...selectedUser, age: parseInt(selectedUser.age, 10) });
            const updatedUser = response.data;
            setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
            setFilteredUsers(filteredUsers.map(user => (user.id === updatedUser.id ? updatedUser : user)));
            setOpen(false);
        } catch (error) {
            console.error('Update error:', error);
        }
    };

    const handleInputChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        const filtered = users.filter(user =>
            Object.values(user).some(value =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setFilteredUsers(filtered);
    };

    const handleSearchId = () => {
        const filtered = users.filter(user =>
            user.id.toString().includes(searchId)
        );
        setFilteredUsers(filtered);
    };

    const handleSearchBoth = () => {
        const filtered = users.filter(user =>
            (user.id.toString().includes(searchId) || Object.values(user).some(value =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            ))
        );
        setFilteredUsers(filtered);
    };

    return (
        <Container maxWidth="xl">
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ width: '70%', marginTop: 2 }}>
                <TextField
                    variant="outlined"
                    label="ID 검색"
                    fullWidth
                    sx={{ width: '300%', mt: 2 }}
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    label="전체검색"
                    fullWidth
                    sx={{ width: '300%', mt: 2 }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="contained" onClick={handleSearchBoth} sx={{ mt: 2 }}>검색</Button>
            </Stack>

            <TableContainer component={Paper} style={{ marginTop: '30px' }}>
                <PostBt />
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
                                    active={sortColumn === 'firstName'}
                                    direction={sortColumn === 'firstName' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('firstName')}
                                >
                                    FirstName
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
                                    Create
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Update</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentUsers.map((user) => (
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
                                    <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>삭제</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Stack spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={(event, value) => setCurrentPage(value)}
                    color="primary"
                />
            </Stack>

            <UserDialog
                open={open}
                onClose={() => setOpen(false)}
                user={selectedUser}
                onChange={handleInputChange}
                onSave={handleSaveUpdate}
            />
        </Container>
    );
}
