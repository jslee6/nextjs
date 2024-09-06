// app/imgtable/page.js
//map 부분 수정, 전체 데이터 정렬 후 , 페이지네이션해야함, 안그러면 오류생김
// 'use client'

// import React, { useEffect, useState } from 'react';
// import { Grid, Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Pagination } from '@mui/material';
// import { useRouter } from 'next/navigation';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import axios from 'axios';
// import { useSearchParams } from 'next/navigation';

// export default function PTablePage() {
//     const router = useRouter();

//     const [users, setUsers] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const usersPerPage = 10;
//     const [sortColumn, setSortColumn] = useState(null);
//     const [sortDirection, setSortDirection] = useState(null);
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [fileType, setFileType] = useState(null); 


//     // 쿼리스트링을 이용한, ******
//     const params = useSearchParams();
//     const id = params.get('id');
//     // 쿼리스트링을 이용한, **********

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

//     const filteredUsers = id ? sortedUsers.filter(user => user.title.includes(id)) : sortedUsers;

//     const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
//     const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

//     const handleDelete = async (userId) => {
//         try {
//             await axios.delete('/api/imgtest/delete', { data: { id: userId } });
//             setUsers(users.filter(user => user.id !== userId));
//         } catch (error) {
//             console.error('Delete error:', error);
//         }
//     };

//     const handleFileClick = (event, fileUrl) => {
//         event.preventDefault(); // Prevent default link behavior
//         const fileType = fileUrl.endsWith('.pdf') ? 'pdf' : 'image';
//         setSelectedFile(fileUrl);
//         setFileType(fileType);
//     };



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
//                                             <a href="#" onClick={(e) => handleFileClick(e, user.imageUrl)} style={{ textDecoration: 'none' }}>
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
//                     {selectedFile && (
//                         <Box sx={{ mt: '100px', textAlign: 'center' }}>
//                             {fileType === 'pdf' ? (
//                                 <iframe
//                                     src={selectedFile}
//                                     style={{ width: '100%', height: '500px' }}
//                                     title="PDF Viewer"
//                                 />
//                             ) : (
//                                 <img
//                                     src={selectedFile}
//                                     alt="Selected"
//                                     style={{ maxWidth: '100%', borderRadius: '8px' }}
//                                 />
//                             )}
//                         </Box>
//                     )}
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// }

// 'use client'


// import React, { useEffect, useState } from 'react';
// import { Grid, Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Pagination } from '@mui/material';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import axios from 'axios'; // 데이터 요청을 위한 라이브러리
// import { useSearchParams } from 'next/navigation'; // URL 쿼리 파라미터를 읽기 위한 hook**********

// // PTablePage 컴포넌트를 정의합니다.
// export default function PTablePage() {
//     // 사용자 데이터를 저장할 상태 변수
//     const [users, setUsers] = useState([]);
//     // 현재 페이지 번호를 저장할 상태 변수
//     const [currentPage, setCurrentPage] = useState(1);
//     // 한 페이지에 표시할 사용자 수
//     const usersPerPage = 12;
//     // 현재 정렬된 열과 정렬 방향을 저장할 상태 변수
//     const [sortColumn, setSortColumn] = useState(null);
//     const [sortDirection, setSortDirection] = useState(null);
//     // 선택된 파일의 URL과 파일 타입을 저장할 상태 변수
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [fileType, setFileType] = useState(null);

//     // 쿼리스트링에서 'id'를 가져오기 위한 hook
//     const params = useSearchParams();
//     const id = params.get('id'); // 'id' 파라미터 값

//     // 컴포넌트가 마운트될 때 사용자 데이터를 가져오는 함수
//     useEffect(() => {
//         const getUser = async () => {
//             try {
//                 // API 호출을 통해 사용자 데이터를 가져옵니다.
//                 const response = await axios.get('/api/imgtest/get');
//                 setUsers(response.data); // 가져온 데이터를 상태에 저장합니다.
//             } catch (error) {
//                 console.error('get error:', error); // 오류 발생 시 콘솔에 출력합니다.
//             }
//         };
//         getUser();
//     }, []); // 빈 배열을 의존성으로 설정하여 컴포넌트가 처음 렌더링될 때만 실행됩니다.

//     // 테이블의 열을 클릭하면 정렬을 처리하는 함수
//     const handleSort = (column) => {
//         if (sortColumn === column) {
//             // 현재 정렬된 열이 같은 경우, 정렬 방향을 변경합니다.
//             setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
//         } else {
//             // 다른 열을 클릭한 경우, 새로 정렬할 열과 기본 정렬 방향을 설정합니다.
//             setSortColumn(column);
//             setSortDirection('asc');
//         }
//     };

//     // 정렬된 사용자 목록을 만듭니다.
//     let sortedUsers = [...users];
//     if (sortColumn) {
//         sortedUsers.sort((a, b) => {
//             if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
//             if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
//             return 0;
//         });
//     }

//     // 페이지 변경 시 호출되는 함수
//     const handlePageChange = (event, value) => {
//         setCurrentPage(value); // 현재 페이지 상태를 업데이트합니다.
//     };

//     // 현재 페이지에서 보여줄 사용자 목록의 시작과 끝 인덱스를 계산합니다.
//     const indexOfLastUser = currentPage * usersPerPage;
//     const indexOfFirstUser = indexOfLastUser - usersPerPage;

//     // 'id' 쿼리 파라미터에 맞는 사용자만 필터링합니다.
//     const filteredUsers = id ? sortedUsers.filter(user => user.title.includes(id)) : sortedUsers;
//     // 현재 페이지에 표시할 사용자 목록을 가져옵니다.
//     const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
//     // 총 페이지 수를 계산합니다.
//     const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

//     // 사용자를 삭제하는 함수
//     const handleDelete = async (userId) => {
//         try {
//             // 사용자 삭제 요청을 보냅니다.
//             await axios.delete('/api/imgtest/delete', { data: { id: userId } });
//             // 삭제한 사용자 제외하고 상태를 업데이트합니다.
//             setUsers(users.filter(user => user.id !== userId));
//         } catch (error) {
//             console.error('Delete error:', error); // 오류 발생 시 콘솔에 출력합니다.
//         }
//     };

//     // 파일 클릭 시 호출되는 함수
//     const handleFileClick = (event, fileUrl) => {
//         event.preventDefault(); // 기본 링크 동작을 방지합니다.(필요한가?)
//         const fileType = fileUrl.endsWith('.pdf') ? 'pdf' : 'image'; // 파일 타입을 결정합니다.
//         setSelectedFile(fileUrl); // 선택된 파일의 URL을 상태에 저장합니다.
//         setFileType(fileType); // 파일 타입을 상태에 저장합니다.
//     };

//     return (
//         <Container maxWidth="xl">
//             <Grid container spacing={2}>
//                 {/* 왼쪽에 테이블을 표시하는 Grid */}
//                 <Grid item xs={6}>
//                     <TableContainer component={Paper} sx={{ marginTop: '30px' }}>
//                         <Table sx={{ '& .MuiTableCell-root': { padding: '8px' } }}>
//                             <TableHead>
//                                 <TableRow>
//                                     {/* 각 열의 제목과 정렬 기능을 제공하는 TableSortLabel */}
//                                     <TableCell className='table-header'>
//                                         <TableSortLabel
//                                             active={sortColumn === 'id'}
//                                             direction={sortColumn === 'id' ? sortDirection : 'asc'}
//                                             onClick={() => handleSort('id')}
//                                         >
//                                             ID
//                                         </TableSortLabel>
//                                     </TableCell>
//                                     <TableCell className='table-header'>
//                                         <TableSortLabel
//                                             active={sortColumn === 'title'}
//                                             direction={sortColumn === 'title' ? sortDirection : 'asc'}
//                                             onClick={() => handleSort('title')}
//                                         >
//                                             Title
//                                         </TableSortLabel>
//                                     </TableCell>
//                                     <TableCell className='table-header'>
//                                         <TableSortLabel
//                                             active={sortColumn === 'imageUrl'}
//                                             direction={sortColumn === 'imageUrl' ? sortDirection : 'asc'}
//                                             onClick={() => handleSort('imageUrl')}
//                                         >
//                                             파일 URL
//                                         </TableSortLabel>
//                                     </TableCell>
//                                     <TableCell className='table-header'>삭제</TableCell>
//                                 </TableRow>
//                             </TableHead>

//                             <TableBody>
//                                 {/* 현재 페이지에 표시할 사용자 목록 */}
//                                 {currentUsers.map((user) => (
//                                     <TableRow key={user.id}>
//                                         <TableCell>{user.id}</TableCell>
//                                         <TableCell>{user.title}</TableCell>
//                                         <TableCell>
//                                             <a href="#" onClick={(e) => handleFileClick(e, user.imageUrl)} style={{ textDecoration: 'none' }}>
//                                                 {user.imageUrl}
//                                             </a>
//                                         </TableCell>
//                                         <TableCell align="center">
//                                             <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>삭제</Button>
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>

//                     <Stack spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
//                         {/* 페이지 네비게이션 */}
//                         <Pagination
//                             count={totalPages}
//                             page={currentPage}
//                             onChange={handlePageChange}
//                             color="primary"
//                         />
//                     </Stack>
//                 </Grid>
//                 {/* 오른쪽에 파일 미리보기 및 선택된 파일을 표시하는 Grid */}
//                 <Grid item xs={6}>
//                     {selectedFile && (
//                         <Box sx={{ mt: '30px', textAlign: 'center' }}>
//                             {fileType === 'pdf' ? (
//                                 <iframe
//                                     src={selectedFile}
//                                     style={{ width: '100%', height: '700px' }}
//                                     title="PDF Viewer"
//                                 />
//                             ) : (
//                                 <img
//                                     src={selectedFile}
//                                     alt="Selected"
//                                     style={{ maxWidth: '100%', height: '700px', borderRadius: '8px' }}
//                                 />
//                             )}
//                         </Box>
//                     )}
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// }



'use client'


import React, { useEffect, useState } from 'react';
import { Grid, Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Pagination } from '@mui/material';
import TableSortLabel from '@mui/material/TableSortLabel';
import axios from 'axios'; // 데이터 요청을 위한 라이브러리
import { useSearchParams } from 'next/navigation'; // URL 쿼리 파라미터를 읽기 위한 hook**********
import SearchBar from './componets/SearchBar';



// PTablePage 컴포넌트를 정의합니다.
export default function PTablePage() {
    // 사용자 데이터를 저장할 상태 변수
    const [users, setUsers] = useState([]);
    // 현재 페이지 번호를 저장할 상태 변수
    const [currentPage, setCurrentPage] = useState(1);
    // 한 페이지에 표시할 사용자 수
    const usersPerPage = 11;
    // 현재 정렬된 열과 정렬 방향을 저장할 상태 변수
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(null);
    // 선택된 파일의 URL과 파일 타입을 저장할 상태 변수
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileType, setFileType] = useState(null);

    // 쿼리스트링에서 'id'를 가져오기 위한 hook
    const params = useSearchParams();
    const id = params.get('id'); // 'id' 파라미터 값
    // const [searchTerm, setSearchTerm] = useState(''); // 전체 검색어 상태

    // 컴포넌트가 마운트될 때 사용자 데이터를 가져오는 함수
    useEffect(() => {
        const getUser = async () => {
            try {
                // API 호출을 통해 사용자 데이터를 가져옵니다.
                const response = await axios.get('/api/imgtest/get');
                setUsers(response.data); // 가져온 데이터를 상태에 저장합니다.
            } catch (error) {
                console.error('get error:', error); // 오류 발생 시 콘솔에 출력합니다.
            }
        };
        getUser();
    }, []); // 빈 배열을 의존성으로 설정하여 컴포넌트가 처음 렌더링될 때만 실행됩니다.






    // 테이블의 열을 클릭하면 정렬을 처리하는 함수
    const handleSort = (column) => {
        if (sortColumn === column) {
            // 현재 정렬된 열이 같은 경우, 정렬 방향을 변경합니다.
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            // 다른 열을 클릭한 경우, 새로 정렬할 열과 기본 정렬 방향을 설정합니다.
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    // 정렬된 사용자 목록을 만듭니다.
    let sortedUsers = [...users];
    if (sortColumn) {
        sortedUsers.sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
            if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }


    





    // 페이지 변경 시 호출되는 함수
    const handlePageChange = (event, value) => {
        setCurrentPage(value); // 현재 페이지 상태를 업데이트합니다.
    };



    // 현재 페이지에서 보여줄 사용자 목록의 시작과 끝 인덱스를 계산합니다.
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;

    // 'id' 쿼리 파라미터에 맞는 사용자만 필터링합니다.
    const filteredUsers = id ? sortedUsers.filter(user => user.title.includes(id)) : sortedUsers;
    // 현재 페이지에 표시할 사용자 목록을 가져옵니다.
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    // 총 페이지 수를 계산합니다.
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    // 사용자를 삭제하는 함수
    const handleDelete = async (userId) => {
        try {
            // 사용자 삭제 요청을 보냅니다.
            await axios.delete('/api/imgtest/delete', { data: { id: userId } });
            // 삭제한 사용자 제외하고 상태를 업데이트합니다.
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Delete error:', error); // 오류 발생 시 콘솔에 출력합니다.
        }
    };

    // 파일 클릭 시 호출되는 함수
    const handleFileClick = (event, fileUrl) => {
        event.preventDefault(); // 기본 링크 동작을 방지합니다.(필요한가?)
        const fileType = fileUrl.endsWith('.pdf') ? 'pdf' : 'image'; // 파일 타입을 결정합니다.
        setSelectedFile(fileUrl); // 선택된 파일의 URL을 상태에 저장합니다.
        setFileType(fileType); // 파일 타입을 상태에 저장합니다.
    };

    return (
        <Container maxWidth="xl">
            <SearchBar
                // setSearchTerm={setSearchTerm}

            ></SearchBar>

            <Grid container spacing={2}>
                {/* 왼쪽에 테이블을 표시하는 Grid */}
                <Grid item xs={6}>
                    <TableContainer component={Paper} sx={{ marginTop: '30px' }}>
                        <Table sx={{ '& .MuiTableCell-root': { padding: '8px' } }}>
                            <TableHead>
                                <TableRow>
                                    {/* 각 열의 제목과 정렬 기능을 제공하는 TableSortLabel */}
                                    <TableCell className='table-header'>
                                        <TableSortLabel
                                            active={sortColumn === 'id'}
                                            direction={sortColumn === 'id' ? sortDirection : 'asc'}
                                            onClick={() => handleSort('id')}
                                        >
                                            ID
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell className='table-header'>
                                        <TableSortLabel
                                            active={sortColumn === 'title'}
                                            direction={sortColumn === 'title' ? sortDirection : 'asc'}
                                            onClick={() => handleSort('title')}
                                        >
                                            Title
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell className='table-header'>
                                        <TableSortLabel
                                            active={sortColumn === 'imageUrl'}
                                            direction={sortColumn === 'imageUrl' ? sortDirection : 'asc'}
                                            onClick={() => handleSort('imageUrl')}
                                        >
                                            파일 URL
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell className='table-header'>삭제</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {/* 현재 페이지에 표시할 사용자 목록 */}
                                {currentUsers.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>{user.title}</TableCell>
                                        <TableCell>
                                            <a href="#" onClick={(e) => handleFileClick(e, user.imageUrl)} style={{ textDecoration: 'none' }}>
                                                {user.imageUrl}
                                            </a>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button className='button-red' variant="contained" color="error" onClick={() => handleDelete(user.id)}>삭제</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Stack spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
                        {/* 페이지 네비게이션 */}
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                        />
                    </Stack>
                </Grid>
                {/* 오른쪽에 파일 미리보기 및 선택된 파일을 표시하는 Grid */}
                {/* <Grid item xs={6}>
                    {selectedFile && (
                        <Box sx={{ mt: '30px', textAlign: 'center' }}>
                            {fileType === 'pdf' ? (
                                <iframe
                                    src={selectedFile}
                                    style={{ width: '100%', height: '700px' }}
                                    title="PDF Viewer"
                                />
                            ) : (
                                <img
                                    src={selectedFile}
                                    alt="Selected"
                                    style={{ maxWidth: '100%', height: '700px', borderRadius: '8px' }}
                                />
                            )}
                        </Box>
                    )}
                </Grid> */}

                {/* // 오른쪽에 파일 미리보기 및 선택된 파일을 표시하는 Grid */}
                <Grid item xs={6}>
                    {selectedFile ? (
                        fileType === 'pdf' ? (
                            <iframe
                                src={selectedFile}
                                style={{ width: '100%', height: '630px', marginTop: '30px' }}
                                title="PDF Viewer"
                            />
                        ) : (
                            <img
                                src={selectedFile}
                                alt="Selected"
                                style={{ maxWidth: '100%', height: '630px', borderRadius: '8px', marginTop: '30px' }}
                            />
                        )
                    ) : (

                        <Box
                            sx={{
                                mt: '30px',
                                display: 'flex', // Flexbox 사용
                                alignItems: 'center', // 수직 가운데 정렬
                                justifyContent: 'center', // 수평 가운데 정렬
                                textAlign: 'center',
                                fontSize: '55px',
                                color: 'gray',
                                border: '2px solid gray', // 테두리 추가
                                borderRadius: '8px', // 모서리 둥글게
                                backgroundColor: '#f9f9f9', // 배경색 추가
                                height: '630px', // 원하는 박스높이 설정
                            }}
                        >
                            파일 URL을 선택 하세요
                        </Box>

                    )}
                </Grid>

            </Grid>
        </Container>
    );
}


//setSearchTerm