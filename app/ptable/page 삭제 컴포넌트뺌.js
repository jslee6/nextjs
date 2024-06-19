// app/ptable/page.js
'use client'
//삭제만 컴포넌트뻄

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeleteButton from '../components/DeleteButton';

export default function PTablePage() {
  const [users, setUsers] = useState([]);

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

  const handleDelete = async(userId) => {
    setUsers(users.filter(user => user.id !== userId));
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
              <TableCell>update</TableCell>
              <TableCell>Delete</TableCell>
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
                  <DeleteButton userId={user.id} onDelete={handleDelete} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
