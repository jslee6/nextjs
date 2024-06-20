// app/ptable/page.js
// 업데이트 컴포넌트 뺼예정
//삭제 컴포넌트 분리+ 업데이트 코드

'use client'

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import DeleteButton from '../components/DeleteButton';

export default function PTablePage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);

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


  const handleUpdate = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleSaveUpdate = async () => {
    try {
      const response = await fetch('/api/user/put', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...selectedUser, age: parseInt(selectedUser.age, 10) }),
      });  // age를 숫자형으로 바꿈. 안바꿀시 문자형으로 오류발생함

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedUser = await response.json();
      setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
      setOpen(false);
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const handleInputChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
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
              <TableCell>Update<br />Delete</TableCell>
              {/* <TableCell>Delete</TableCell> */}
              {/* 수정,삭제 한줄로 바꿈 */}
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
                  <Button variant="contained" color="primary" onDelete={() => handleUpdate(user)}>
                    수정
                  </Button>
                  <br />
                  {/* </TableCell> */}
                  {/* <TableCell> */}
                  <DeleteButton userId={user.id} onDelete={handleDelete} />  
                  {/* 삭제 컴포넌트를 가져옴 온클릭대신 onClick  쓰면 삭제시 새로고침 해야 보임*/}

                  {/* <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>삭제</Button> */}
                  {/* 컨포넌트 가져오기전 코드 */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>사용자 정보 수정</DialogTitle>
        <DialogContent>
          <TextField
            name="firstName"
            label="First Name"
            value={selectedUser?.firstName || ''}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={selectedUser?.lastName || ''}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            name="email"
            label="Email"
            value={selectedUser?.email || ''}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            name="age"
            label="Age"
            value={selectedUser?.age || ''}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            name="address"
            label="Address"
            value={selectedUser?.address || ''}
            onChange={handleInputChange}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSaveUpdate} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
