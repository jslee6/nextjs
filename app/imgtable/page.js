// // app/imgtable/page.js
// // // //map 부분 수정, 전체 데이터 정렬 후 , 페이지네이션해야함, 안그러면 오류생김
// 'use client'


// import React, { useEffect, useState } from 'react';
// import { Grid, Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Pagination } from '@mui/material';
// import UserDialog from '@/app/components/UserDialog';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import axios from 'axios';


// export default function PTablePage() {
//     const [users, setUsers] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const usersPerPage = 10;
//     const [sortColumn, setSortColumn] = useState(null);
//     const [sortDirection, setSortDirection] = useState(null);
//     const [selectedImage, setSelectedImage] = useState(null); // 추가된 상태, 이미지 URL 을 저장

//     useEffect(() => {
//         const getUser = async () => {
//             try {
//                 const response = await axios.get('/api/imgtest/get');
//                 setUsers(response.data);
//             } catch (error) {
//                 console.error('get error:', error);
//             }
//         };
//         getUser();
//     }, []);

//     const handleSort = (column) => {
//         if (sortColumn === column) {
//             setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
//         } else {
//             setSortColumn(column);
//             setSortDirection('asc');
//         }
//     };

//     let sortedUsers = [...users];
//     if (sortColumn) {
//         sortedUsers.sort((a, b) => {
//             if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
//             if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
//             return 0;
//         });
//     }

//     const handlePageChange = (event, value) => {
//         setCurrentPage(value);
//     };

//     const indexOfLastUser = currentPage * usersPerPage;
//     const indexOfFirstUser = indexOfLastUser - usersPerPage;
//     const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
//     const totalPages = Math.ceil(users.length / usersPerPage);

//     const handleDelete = async (userId) => {
//         try {
//             await axios.delete('/api/imgtest/delete', { data: { id: userId } });
//             setUsers(users.filter(user => user.id !== userId));
//         } catch (error) {
//             console.error('Delete error:', error);
//         }
//     };

//     //이미지 URL을 클릭했을 때, 해당 이미지를 선택하는 핸들러가 추가
//     const handleImageClick = (imageUrl) => {
//         setSelectedImage(imageUrl); 
//     };

//     //이미지 URL을 클릭했을 때, 해당 이미지를 선택하는 핸들러가 추가

//     return (
//         <Container maxWidth="xl">
//             <Grid container spacing={2}>
//                 <Grid item xs={8}>
//                     <TableContainer component={Paper} style={{ marginTop: '30px' }}>
//                         <Table sx={{ '& .MuiTableCell-root': { padding: '8px' } }}>
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell>
//                                         <TableSortLabel
//                                             active={sortColumn === 'id'}
//                                             direction={sortColumn === 'id' ? sortDirection : 'asc'}
//                                             onClick={() => handleSort('id')}
//                                         >
//                                             ID(숨김처리예정)
//                                         </TableSortLabel>
//                                     </TableCell>
//                                     <TableCell>
//                                         <TableSortLabel
//                                             active={sortColumn === 'title'}
//                                             direction={sortColumn === 'title' ? sortDirection : 'asc'}
//                                             onClick={() => handleSort('title')}
//                                         >
//                                             Title
//                                         </TableSortLabel>
//                                     </TableCell>
//                                     <TableCell>
//                                         <TableSortLabel
//                                             active={sortColumn === 'imageUrl'}
//                                             direction={sortColumn === 'imageUrl' ? sortDirection : 'asc'}
//                                             onClick={() => handleSort('imageUrl')}
//                                         >
//                                             Image URL
//                                         </TableSortLabel>
//                                     </TableCell>
                                    
//                                     <TableCell>Delete</TableCell>
                           
//                                 </TableRow>
//                             </TableHead>

//                             <TableBody>
//                                 {currentUsers.map((user) => (
//                                     <TableRow key={user.id}>
//                                         <TableCell>{user.id}</TableCell>
//                                         <TableCell>{user.title}</TableCell>

//                                         <TableCell>
//                                             <a href="#" onClick={() => handleImageClick(user.imageUrl)} style={{ textDecoration: 'none' }}>
//                                                 {user.imageUrl}
//                                             </a>
//                                         </TableCell>

                                        

//                                         <TableCell>
//                                             <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>삭제</Button>
//                                         </TableCell>
                            
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>


//                     <Stack spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
//                         <Pagination
//                             count={totalPages}
//                             page={currentPage}
//                             onChange={handlePageChange}
//                             color="primary"
//                         />
//                     </Stack>
                  
//                 </Grid>
//                 <Grid item xs={4}>
//                     {selectedImage && (
//                         <Box sx={{ mt: '100px', textAlign: 'center' }}> 
//                             <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', borderRadius: '8px' }} />
//                         </Box>
//                     )}
//                 </Grid>
//                 {/* 그리드 4/12 적용 및 mt 100px 적용, 가운데 정렬 */}
//             </Grid>
//         </Container>
//     );
// }


//지피티가 알려준거 안됨..
'use client'

import React, { useEffect, useState } from 'react';
import { Grid, Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Pagination } from '@mui/material';
import { useRouter } from 'next/navigation';
import TableSortLabel from '@mui/material/TableSortLabel';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

export default function PTablePage() {
    const router = useRouter();

    // const { id } = router.query; // URL에서 'id' 쿼리 파라미터 가져오기

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    // 쿼리스트링을 이용한, ******
    const params = useSearchParams();
    const id = params.get('id');
    // 쿼리스트링을 이용한, **********

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
    
    // 'id'가 URL 쿼리 파라미터와 일치하는 사용자만 필터링 포함한다면,
    const filteredUsers = id ? sortedUsers.filter(user => user.title.includes(id)) : sortedUsers;

    // const filteredUsers = id ? sortedUsers.filter(user => user.title === id) : sortedUsers;
    // 이건 완전 동일

    // 'id'가 URL 쿼리 파라미터와 일치하는 사용자만 필터링
    
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const handleDelete = async (userId) => {
        try {
            await axios.delete('/api/imgtest/delete', { data: { id: userId } });
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Delete error:', error);
        }
    };

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl); 
    };

    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TableContainer component={Paper} style={{ marginTop: '30px' }}>
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
                                    <TableCell>Delete</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {currentUsers.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>{user.title}</TableCell>
                                        <TableCell>
                                            <a href="#" onClick={() => handleImageClick(user.imageUrl)} style={{ textDecoration: 'none' }}>
                                                {user.imageUrl}
                                            </a>
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
                            onChange={handlePageChange}
                            color="primary"
                        />
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    {selectedImage && (
                        <Box sx={{ mt: '100px', textAlign: 'center' }}> 
                            <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', borderRadius: '8px' }} />
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
}

