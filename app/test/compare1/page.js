// Main component (PTablePage.js)
import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';
import PostButton from './PostButton';
import UserTable from './UserTable';
import SearchBar from './SearchBar';
import PaginationComponent from './PaginationComponent';
import AccountDialog from './components/AccountDialog';

const usersPerPage = 7; // 페이지당 유저 수

export default function PTablePage() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchId, setSearchId] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [role, setRole] = useState('user');

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('/api/account/get');
                setUsers(response.data);
             setFilteredUsers(response.data); // 초기 상태로 전체 사용자 설정
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

    let sortedUsers = [...filteredUsers];
    if (sortColumn) {
        sortedUsers.sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
            if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }

    const handleSearchBoth = () => {
        const filtered = users.filter(user => {
            const matchesSearchTerm =
                Object.values(user).some(value =>
                    value.toString().includes(searchTerm)
                );

            const matchesRole =
                role === 'all' || user.role === role;

            const matchesSearchId =
                user.userId.includes(searchId) || user.password.includes(searchId);

            return matchesSearchTerm && matchesSearchId && matchesRole;
        });
        setFilteredUsers(filtered);
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const handleDelete = async (userId) => {
        try {
            const response = await axios.delete('/api/account/delete', {
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
            const response = await axios.put('/api/account/put', { ...selectedUser, age: parseInt(selectedUser.age, 10) });
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

    return (
        <Container maxWidth="xl">
            <SearchBar
                role={role}
                setRole={setRole}
                searchId={searchId}
                setSearchId={setSearchId}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearchBoth={handleSearchBoth}
            />
            <PostButton />
            <UserTable
                users={currentUsers}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
                handleSort={handleSort}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
            />
            <PaginationComponent
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <AccountDialog
                open={open}
                onClose={() => setOpen(false)}
                account={selectedUser}
                onChange={handleInputChange}
                onSave={handleSaveUpdate}
            />
        </Container>
    );
}