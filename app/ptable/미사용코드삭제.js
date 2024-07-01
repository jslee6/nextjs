//map 부분 수정, 전체 데이터 정렬 후 , 페이지네이션해야함, 안그러면 오류생김

'use client'

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Pagination } from '@mui/material';
import UserDialog from '@/app/components/UserDialog';
import TableSortLabel from '@mui/material/TableSortLabel'; // 테이블소팅관련
import axios from 'axios';


// 포스트 , writetest,  페이지 가져옴 + 닫기 버튼 추가

import Write from '@/app/writetest/page';

function PostBt() {
    const [post, setpost] = useState(false);
     
    //작성 닫기버튼으로 인해 [추가 !=preState]
    const handlePostButtonClick = () => {
      setpost((prevState) => !prevState);
    }; //닫기버튼으로 인해 추가

    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePostButtonClick}
        >
          {post ? '닫기' : '작성하기'}  
           {/* 삼항연산자로 처리 */}
        </Button>
        {post && <Write />}
        {/* 이게 잘이해안됨 */}
      </div>
    );
  }

///


export default function PTablePage() {
    const [users, setUsers] = useState([]);   // 조회관련(삭제관련)
    const [selectedUser, setSelectedUser] = useState(null);  //수정관련
    const [open, setOpen] = useState(false);  // 수정관련

    const [currentPage, setCurrentPage] = useState(1); //페이징 ,초기값 1
    const usersPerPage = 7;   //페이징  로우수 ok

    const [sortColumn, setSortColumn] = useState(null);   //테이블 소팅관련
    const [sortDirection, setSortDirection] = useState(null);  //테이블 소팅관련


    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('/api/user/get');
                console.log('get data:', response.data);
                setUsers(response.data);
            } catch (error) {
                console.error('get error:', error);
            }
        };
        getUser();
    }, []);

    /////// get

    // 테이블소팅
    // handleSort 함수를 구현하여 정렬 기준과 방향을 업데이트합니다.
    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    // 정렬된 데이터를 렌더링하기 위해 users 배열을 정렬합니다.
    let sortedUsers = [...users];
    if (sortColumn) {
        sortedUsers.sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
            if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }
    //     데이터를 정렬합니다.
    // 정렬된 데이터를 페이지네이션에 적용합니다. 그렇지않으면 오류발생

    //paging
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };  //페이지 변경을 핸들링하는 함수 , value 는 사용자가 클릭한 페이지

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(users.length / usersPerPage);  //전체유저 길이(수) / 1페이지의 로우수로 나눔

    //axious 삭제로 바꿈
    const handleDelete = async (userId) => {
        try {
            const response = await axios.delete('/api/user/delete', {
                data: { id: userId },
            });
            const { message } = response.data;
            console.log(message);
    
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Delete error:', error);
        }
    };
    //axious 삭제로 바꿈
    
     // axious 수정
    const handleUpdate = (user) => {
        setSelectedUser(user);
        setOpen(true);
    };
    
    const handleSaveUpdate = async () => {
        try {
            const response = await axios.put('/api/user/put', { ...selectedUser, age: parseInt(selectedUser.age, 10) });
            //.selectedUser: 이 부분은 spread 연산자를 사용하여 selectedUser 객체의 모든 속성을 복사하는 것입니다.
            // 이렇게 하면 selectedUser 객체의 모든 속성이 새로운 객체에 포함

            //parseInt를 통해 10진수 정수로 변환
            const updatedUser = response.data;
            setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
            setOpen(false);
        } catch (error) {
            console.error('Update error:', error);
        }
    };

    const handleInputChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
    };
    //axious 수정

    return (
        <Container>
            <TableContainer component={Paper} style={{ marginTop: '30px' }}>
            <PostBt></PostBt>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                {/* 테이블 소팅순서 예시 */}
                                <TableSortLabel
                                    active={sortColumn === 'id'}
                                    direction={sortColumn === 'id' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('id')}
                                >
                                    ID(숨김처리예정)
                                </TableSortLabel>
                                {/* 테이블 소팅순서 예시 */}
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
                            <TableCell >Update</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {/* 정렬 후 페이지네이션, 했기에 커런테트유저로 MAP */}
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
