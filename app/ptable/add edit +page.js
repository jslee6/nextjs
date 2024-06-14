// app/ptable/page.js

'use client'

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import EditUserModal from './EditUserModal';

export default function PTablePage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('/api/user')
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

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleSave = (updatedUser) => {
    fetch(`/api/user/${updatedUser.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(users.map(user => user.id === data.id ? data : user));
        handleModalClose();
      })
      .catch(error => console.error('Update error:', error));
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Create</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Actions</TableCell>
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
                <TableCell>{user.updatedAt}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEditClick(user)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedUser && (
        <EditUserModal
          open={isModalOpen}
          handleClose={handleModalClose}
          user={selectedUser}
          handleSave={handleSave}
        />
      )}
    </Container>
  );
}
