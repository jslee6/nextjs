
// // app/ptable/page.js
// //map 부분 수정, 전체 데이터 정렬 후 , 페이지네이션해야함, 안그러면 오류생김

// 'use client'

// import React, { useEffect, useState } from 'react';
// import { Grid, Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Pagination } from '@mui/material';
// import UserDialog from '@/app/components/UserDialog';
// import TableSortLabel from '@mui/material/TableSortLabel'; // 테이블소팅관련
// import axios from 'axios';
// import PostBt from './componets/PostBt';


// export default function PTablePage() {
//     const [users, setUsers] = useState([]);   // 조회관련(삭제관련)
//     const [selectedUser, setSelectedUser] = useState(null);  //수정관련
//     const [open, setOpen] = useState(false);  // 수정관련

//     const [currentPage, setCurrentPage] = useState(1); //페이징 ,초기값 1
//     const usersPerPage = 10;   //페이징  로우수 ok

//     const [sortColumn, setSortColumn] = useState(null);   //테이블 소팅관련
//     const [sortDirection, setSortDirection] = useState(null);  //테이블 소팅관련



//     // get 엑시오스로 바꿈

//     useEffect(() => {
//         const getUser = async () => {
//             try {
//                 const response = await axios.get('/api/user/get');
//                 console.log('get data:', response.data);
//                 setUsers(response.data);
//             } catch (error) {
//                 console.error('get error:', error);
//             }
//         };
//         getUser();
//     }, []);

//     /////// get

//     // 테이블소팅
//     // handleSort 함수를 구현하여 정렬 기준과 방향을 업데이트합니다.
//     const handleSort = (column) => {
//         if (sortColumn === column) {
//             setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
//         } else {
//             setSortColumn(column);
//             setSortDirection('asc');
//         }
//     };

//     // 정렬된 데이터를 렌더링하기 위해 users 배열을 정렬합니다.
//     let sortedUsers = [...users];
//     if (sortColumn) {
//         sortedUsers.sort((a, b) => {
//             if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
//             if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
//             return 0;
//         });
//     }
//     //     데이터를 정렬합니다.
//     // 정렬된 데이터를 페이지네이션에 적용합니다. 그렇지않으면 오류발생

//     //paging
//     const handlePageChange = (event, value) => {
//         setCurrentPage(value);
//     };  //페이지 변경을 핸들링하는 함수 , value 는 사용자가 클릭한 페이지

//     const indexOfLastUser = currentPage * usersPerPage;
//     const indexOfFirstUser = indexOfLastUser - usersPerPage;
//     const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
//     const totalPages = Math.ceil(users.length / usersPerPage);  //전체유저 길이(수) / 1페이지의 로우수로 나눔
//     //paging , 배열러 페이지정리

//     // fetch 기존삭제


//     //axious 삭제로 바꿈
//     const handleDelete = async (userId) => {
//         try {
//             const response = await axios.delete('/api/user/delete', {
//                 data: { id: userId },
//             });

//             // 삭제가 성공했을 경우
//             console.log(response.data.message);
//             setUsers(users.filter(user => user.id !== userId));

//         } catch (error) {
//             // ********권한이 없을 경우 리다이렉트 처리***********
//             if (error.response && error.response.status === 403) {
//                 const redirectUrl = error.response.data.redirect;   // /api/user/delete' 에서 가져온 redirect 값을 리다이렉트

//                 if (redirectUrl) {
//                     window.location.href = redirectUrl;
//                     window.location.href = '/roleDeny';    //1회성 리다이렉트 클라이언트에서 함
//                 }
//             } else {
//                 console.error('Delete error:', error);
//             }
//             // ********권한이 없을 경우 리다이렉트 처리**********

//         }
//     };
//     //axious 삭제로 바꿈

//     // axious 수정
//     const handleUpdate = (user) => {
//         setSelectedUser(user);
//         setOpen(true);
//     };

//     const handleSaveUpdate = async () => {
//         try {
//             const response = await axios.put('/api/user/put', { ...selectedUser, age: parseInt(selectedUser.age, 10) });
//             //.selectedUser: 이 부분은 spread 연산자를 사용하여 selectedUser 객체의 모든 속성을 복사하는 것입니다.
//             // 이렇게 하면 selectedUser 객체의 모든 속성이 새로운 객체에 포함

//             //parseInt를 통해 10진수 정수로 변환
//             const updatedUser = response.data;
//             setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
//             setOpen(false);
//         } catch (error) {
//             console.error('Update error:', error);
//         }
//     };

//     const handleInputChange = (e) => {
//         setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
//     };
//     //axious 수정
//     return (

//             <Container maxWidth="xl" > {/* maxWidth를 설정하여 전체 너비를 조정 */}
//                 <TableContainer component={Paper} style={{ marginTop: '30px' }}>
                       
//                             <PostBt></PostBt>
//                             {/* <Table> */}
//                             <Table sx={{ '& .MuiTableCell-root': { padding: '8px' } }}>
//                                 {/* 테이블패딩 간격조정, 멀티셀  패딩 전체적용 복붙쓰자. 못 외우겟다.*/}

//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell>
//                                             {/* 테이블 소팅순서 예시 */}
//                                             <TableSortLabel
//                                                 active={sortColumn === 'id'}
//                                                 direction={sortColumn === 'id' ? sortDirection : 'asc'}
//                                                 onClick={() => handleSort('id')}
//                                             >
//                                                 ID(숨김처리예정)
//                                             </TableSortLabel>
//                                             {/* 테이블 소팅순서 예시 */}
//                                         </TableCell>
//                                         <TableCell>
//                                             <TableSortLabel
//                                                 active={sortColumn === 'firstName'}
//                                                 direction={sortColumn === 'firstName' ? sortDirection : 'asc'}
//                                                 onClick={() => handleSort('firstName')}
//                                             >
//                                                 FirstName
//                                             </TableSortLabel>
//                                         </TableCell>
//                                         <TableCell>
//                                             <TableSortLabel
//                                                 active={sortColumn === 'lastName'}
//                                                 direction={sortColumn === 'lastName' ? sortDirection : 'asc'}
//                                                 onClick={() => handleSort('lastName')}
//                                             >
//                                                 LastName
//                                             </TableSortLabel>
//                                         </TableCell>
//                                         <TableCell>
//                                             <TableSortLabel
//                                                 active={sortColumn === 'email'}
//                                                 direction={sortColumn === 'email' ? sortDirection : 'asc'}
//                                                 onClick={() => handleSort('email')}
//                                             >
//                                                 Email
//                                             </TableSortLabel>
//                                         </TableCell>
//                                         <TableCell>
//                                             <TableSortLabel
//                                                 active={sortColumn === 'age'}
//                                                 direction={sortColumn === 'age' ? sortDirection : 'asc'}
//                                                 onClick={() => handleSort('age')}
//                                             >
//                                                 Age
//                                             </TableSortLabel>
//                                         </TableCell>
//                                         <TableCell>
//                                             <TableSortLabel
//                                                 active={sortColumn === 'address'}
//                                                 direction={sortColumn === 'address' ? sortDirection : 'asc'}
//                                                 onClick={() => handleSort('address')}
//                                             >
//                                                 Address
//                                             </TableSortLabel>
//                                         </TableCell>
//                                         <TableCell>
//                                             <TableSortLabel
//                                                 active={sortColumn === 'createdAt'}
//                                                 direction={sortColumn === 'createdAt' ? sortDirection : 'asc'}
//                                                 onClick={() => handleSort('createdAt')}
//                                             >
//                                                 Create
//                                             </TableSortLabel>
//                                         </TableCell>
//                                         <TableCell >Update</TableCell>
//                                         <TableCell>Delete</TableCell>
//                                         <TableCell>첨부파일</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {/* 필터 ,텍스트필드, 키프레스, 이벤트핸들러 */}

//                                     {/* 정렬 후 페이지네이션, 했기에 커런테트유저로 MAP */}
//                                     {currentUsers.map((user) => (
//                                         <TableRow key={user.id}>
//                                             <TableCell>{user.id}</TableCell>
//                                             <TableCell>{user.firstName}</TableCell>
//                                             <TableCell>{user.lastName}</TableCell>
//                                             <TableCell>{user.email}</TableCell>
//                                             <TableCell>{user.age}</TableCell>
//                                             <TableCell>{user.address}</TableCell>
//                                             <TableCell>{user.createdAt}</TableCell>
//                                             <TableCell>
//                                                 <Button variant="contained" color="primary" onClick={() => handleUpdate(user)}>
//                                                     수정
//                                                 </Button>
//                                             </TableCell>
//                                             <TableCell>
//                                                 <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>삭제</Button>
//                                             </TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                 </TableContainer>

//                 {/* mui 페이지 가이드 */}
//                 <Stack spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
//                     <Pagination
//                         count={totalPages}
//                         page={currentPage}
//                         onChange={handlePageChange}
//                         color="primary"
//                     />
//                 </Stack>

//                 {/* mui 페이지 가이드 */}
//                 <UserDialog
//                     open={open}
//                     onClose={() => setOpen(false)}
//                     user={selectedUser}
//                     onChange={handleInputChange}
//                     onSave={handleSaveUpdate}
//                 // props 로 UserDialog 로 전달
//                 />
//             </Container>
      
//     );
// }




//******* 업로드추가**********
'use client'

import React, { useEffect, useState } from 'react';
import { Grid, Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Pagination } from '@mui/material';
import UserDialog from '@/app/components/UserDialog';
import TableSortLabel from '@mui/material/TableSortLabel';
import axios from 'axios';
import PostBt from './componets/PostBt';

export default function PTablePage() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [open, setOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('/api/imgtest/get');
                setUsers(response.data);
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

    let sortedUsers = [...users];
    if (sortColumn) {
        sortedUsers.sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
            if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(users.length / usersPerPage);

    const handleDelete = async (userId) => {
        try {
            await axios.delete('/api/user/delete', { data: { id: userId } });
            setUsers(users.filter(user => user.id !== userId));
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
            setOpen(false);
        } catch (error) {
            console.error('Update error:', error);
        }
    };

    const handleInputChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
    };

    const handleFileUpload = async (e, userId) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);
        formData.append('title', `User ${userId}`);

        try {
            const response = await axios.post('/api/products/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            const updatedProduct = response.data;
            setUsers(users.map(user => (user.id === userId ? { ...user, imageUrl: updatedProduct.imageUrl } : user)));
        } catch (error) {
            console.error('File upload error:', error);
        }
    };

    return (
        <Container maxWidth="xl">
            <TableContainer component={Paper} style={{ marginTop: '30px' }}>
                <PostBt />
                <Table sx={{ '& .MuiTableCell-root': { padding: '8px' } }}>
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
                                    active={sortColumn === 'title'}
                                    direction={sortColumn === 'title' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('title')}
                                >
                                    Title
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={sortColumn === 'imageUrl'}
                                    direction={sortColumn === 'imageUrl' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('imageUrl')}
                                >
                                    Image URL
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Update</TableCell>
                            <TableCell>Delete</TableCell>
                            <TableCell>첨부파일</TableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {currentUsers.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.title}</TableCell>
                                <TableCell>{user.imageUrl}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => handleUpdate(user)}>
                                        수정
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>삭제</Button>
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
                                            Upload
                                        </Button>
                                    </label>
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
                    onChange={handlePageChange}
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
