// app/ptable/page.js
// 업데이트, 딜리트 추가했는데 따로 뺄예정
//삭제+ 업데이트 코드

'use client'

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Pagination, Stack } from '@mui/material';
import UserDialog from '../components/UserDialog';


export default function PTablePage() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [open, setOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(1); //페이징 ,초기값 1
    const usersPerPage = 8;   //페이징  로우수 ok



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

    //paging
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };  //페이지 변경을 핸들링하는 함수 , value 는 사용자가 클릭한 페이지

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(users.length / usersPerPage);  //전체유저 길이(수) / 1페이지의 로우수로 나눔
    //paging , 배열러 페이지정리


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
            <TableContainer component={Paper} style={{ marginTop: '50px' }}>
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
                            <TableCell >Update</TableCell>
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
                                    {/* <br /> */}
                                    {/* <DeleteButton userId={user.id} onDelete={handleDelete} /> */}
                                    {/* 컴포넌트로뺴면 위에꺼 */}
                                    <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>삭제</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>



            </TableContainer>
            {/* mui 페이지 가이드 */}
            <Stack spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Stack>
            {/* mui 페이지 가이드 */}

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

