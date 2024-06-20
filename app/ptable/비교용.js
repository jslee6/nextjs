// app/ptable/page.js
// 업데이트, 딜리트 추가했는데 따로 뺄예정
//삭제+ 업데이트 코드

'use client'

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

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
    /////// get

    /// 삭제 컴포넌트 시작~
    const handleDelete = async (userId) => {
        try {
            const response = await fetch('/api/user/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: userId }),
            });

            //   if (!response.ok) {
            //     throw new Error('Network response was not ok');
            //   }

            const { message } = await response.json();
            console.log(message);

            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Delete error:', error);
        }
    }; ///삭제 기능 끝

    //수정시작

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
    //수정끝

    //   handleUpdate 함수:
    //   선택된 사용자 정보를 setSelectedUser를 통해 상태에 저장합니다.
    //   setOpen을 통해 수정 모달을 열어줍니다.
    //   handleSaveUpdate 함수:
    //   /api/user/put 엔드포인트로 PUT 요청을 보내 사용자 정보를 업데이트합니다.
    //   요청 시 age 값을 문자열에서 숫자로 변환합니다.
    //   업데이트된 사용자 정보를 받아와 setUsers를 통해 상태를 업데이트합니다.
    //   수정 모달을 닫습니다.
    //   handleInputChange 함수:
    //   사용자가 입력한 값을 selectedUser 상태에 반영합니다.
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
                                    <br />
                                    {/* <DeleteButton userId={user.id} onDelete={handleDelete} /> */}
                                    {/* 컴포넌트로뺴면 위에꺼 */}
                                    <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>삭제</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>사용자 정보 수정</DialogTitle>
                <DialogContent>
                    {/* 필드시작 */}
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
                    {/* 필드끝 */}
                </DialogContent>
                {/* // 저장 삭제 버튼 */}
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleSaveUpdate} color="primary">
                        Save
                    </Button>
                </DialogActions>
                {/* // 저장 삭제 버튼 */}
            </Dialog>
        </Container>
    );
}

//20일 자기전 코드 

