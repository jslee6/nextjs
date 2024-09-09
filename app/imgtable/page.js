//  // app/imgtable/page.js 기존


// 'use client'


// import React, { useEffect, useState } from 'react';
// import { Grid, Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Pagination } from '@mui/material';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import axios from 'axios'; // 데이터 요청을 위한 라이브러리
// import { useSearchParams } from 'next/navigation'; // URL 쿼리 파라미터를 읽기 위한 hook**********
// import SearchBar from './componets/SearchBar';
// import ImgTable from './componets/imgTable';



// // PTablePage 컴포넌트를 정의합니다.
// export default function PTablePage() {
//     // 사용자 데이터를 저장할 상태 변수
//     const [users, setUsers] = useState([]);
//     // 현재 페이지 번호를 저장할 상태 변수
//     const [currentPage, setCurrentPage] = useState(1);
//     // 한 페이지에 표시할 사용자 수
//     const usersPerPage = 11;
//     // 현재 정렬된 열과 정렬 방향을 저장할 상태 변수
//     const [sortColumn, setSortColumn] = useState(null);
//     const [sortDirection, setSortDirection] = useState(null);
//     // 선택된 파일의 URL과 파일 타입을 저장할 상태 변수
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [fileType, setFileType] = useState(null);

//     // 쿼리스트링에서 'id'를 가져오기 위한 hook
//     const params = useSearchParams();
//     const id = params.get('id'); // 'id' 파라미터 값
//     const [searchTerm, setSearchTerm] = useState(''); // 전체 검색어 상태
//     const [searchId, setSearchId] = useState(''); // ID 검색어 상태

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

//     // 통합된 검색 핸들러 함수
//     const handleSearchBoth = () => {
//         const lowerCaseSearchTerm = searchTerm.toLowerCase();
//         const lowerCaseSearchId = searchId.toLowerCase();

//         const filtered = users.filter(user => {
//             const matchesSearchTerm =
//                 Object.values(user).some(value =>
//                     value !== null && value !== undefined && value.toString().toLowerCase().includes(lowerCaseSearchTerm)
//                     //모두 소문자로 보냄 .검색을 위함
//                 );

//             // const matchesRole =
//             //     role === 'all' || user.role === role;

//             const matchesSearchId =
//                 user.name && user.name.toLowerCase().includes(lowerCaseSearchId); // name 이름으로 검색 
//             //모두 소문자로 보냄 .검색을 위함


//             return matchesSearchTerm && matchesSearchId && matchesRole;
//         });
//         setFilteredUsers(filtered);
//     };


//     return (
//         <Container maxWidth="xl">
//             <SearchBar
//             setSearchTerm={setSearchTerm}
//             // setSearchId={setSearchId}

//             // role={role}
//             // setRole={setRole}
//             // searchId={searchId}
//             // setSearchId={setSearchId}
//             // searchTerm={searchTerm}
//             // setSearchTerm={setSearchTerm}
//             // handleSearchBoth={handleSearchBoth}
//             // handleButtonClick={handleButtonClick}

//             ></SearchBar>

//             <Grid container spacing={2}>
//                 {/* 왼쪽에 테이블을 표시하는 Grid */}
//                 {/* <Grid item xs={6}> */}

//                 <Grid item xs={6}>
//                     <ImgTable
//                         users={currentUsers}
//                         sortColumn={sortColumn}
//                         sortDirection={sortDirection}
//                         handleSort={handleSort}
//                         handleDelete={handleDelete}
//                         handleFileClick={handleFileClick}
//                     />

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

//                 {/* // 오른쪽에 파일 미리보기 및 선택된 파일을 표시하는 Grid */}
//                 <Grid item xs={6}>
//                     {selectedFile ? (
//                         fileType === 'pdf' ? (
//                             <iframe
//                                 src={selectedFile}
//                                 style={{ width: '100%', height: '650px', marginTop: '30px' }}
//                                 title="PDF Viewer"
//                             />
//                         ) : (
//                             <img
//                                 src={selectedFile}
//                                 alt="Selected"
//                                 style={{ maxWidth: '100%', height: '660px', borderRadius: '8px', marginTop: '30px' }}
//                             />
//                         )
//                     ) : (
//                         <Box className='Box-url'>
//                             파일 URL을 선택 하세요
//                         </Box>
//                     )}
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// }

// 'use client'

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useSearchParams } from 'next/navigation';
// import SearchBar from './componets/SearchBar';
// import ImgTable from './componets/imgTable';
// import { Grid, Container, Stack, Pagination, Box } from '@mui/material';

// export default function PTablePage() {
//     // 상태 변수 선언
//     const [users, setUsers] = useState([]); // 전체 사용자 데이터
//     const [filteredUsers, setFilteredUsers] = useState([]); // 검색 및 필터링된 사용자 데이터
//     const [searchTerm, setSearchTerm] = useState(''); // 검색어 (전체검색)
//     const [searchId, setSearchId] = useState(''); // 검색 ID
//     const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
//     const usersPerPage = 11; // 페이지당 사용자 수
//     const [sortColumn, setSortColumn] = useState(null); // 정렬할 열
//     const [sortDirection, setSortDirection] = useState(null); // 정렬 방향 (오름차순/내림차순)
//     const [selectedFile, setSelectedFile] = useState(null); // 선택된 파일 URL
//     const [fileType, setFileType] = useState(null); // 파일 유형 (PDF 또는 이미지)

//     // 쿼리스트링에서 'id' 파라미터를 가져오기 위한 hook *******
//     const params = useSearchParams();
//     const queryId = params.get('id'); // 'id' 쿼리 파라미터 값

//     // 컴포넌트가 마운트될 때 사용자 데이터 가져오기
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('/api/imgtest/get');
//                 setUsers(response.data); // 사용자 데이터를 상태에 저장
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);

//     // 검색어, ID, 쿼리 ID, 사용자 데이터가 변경될 때마다 검색 및 필터링 적용
//     useEffect(() => {
//         handleSearchBoth();
//     }, [searchTerm, searchId, queryId, users]);

//     // 전체 검색 및 ID 검색을 처리하는 함수
//     const handleSearchBoth = () => {
//         const lowerCaseSearchTerm = searchTerm.toLowerCase();
//         const lowerCaseSearchId = searchId.toLowerCase();
//         const lowerCaseQueryId = queryId ? queryId.toLowerCase() : '';

//         // 사용자 데이터를 필터링하여 검색 조건에 맞는 사용자만 추출
//         const filtered = users.filter(user => {
//             const matchesSearchTerm =
//                 Object.values(user).some(value =>
//                     value !== null && value !== undefined && value.toString().toLowerCase().includes(lowerCaseSearchTerm)
//                 );

//             const matchesSearchId =
//                 user.id && user.id.toString().toLowerCase().includes(lowerCaseSearchId);

//             const matchesQueryId =
//                 queryId ? user.title.toLowerCase().includes(lowerCaseQueryId) : true;

//             return matchesSearchTerm && matchesSearchId && matchesQueryId;
//         });

//         setFilteredUsers(filtered); // 필터링된 사용자 데이터를 상태에 저장
//         setCurrentPage(1); // 검색 시 페이지를 1로 초기화
//     };

//     // 정렬 처리 함수
//     const handleSort = (column) => {
//         if (sortColumn === column) {
//             setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
//         } else {
//             setSortColumn(column);
//             setSortDirection('asc');
//         }
//     };

//     // 정렬된 사용자 데이터
//     let sortedUsers = [...filteredUsers];
//     if (sortColumn) {
//         sortedUsers.sort((a, b) => {
//             if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
//             if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
//             return 0;
//         });
//     }

//     // 페이지 변경 처리 함수
//     const handlePageChange = (event, value) => {
//         setCurrentPage(value);
//     };

//     // 페이지네이션 계산
//     const indexOfLastUser = currentPage * usersPerPage;
//     const indexOfFirstUser = indexOfLastUser - usersPerPage;
//     const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
//     const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

//     // 사용자 삭제 처리 함수
//     const handleDelete = async (userId) => {
//         try {
//             await axios.delete('/api/imgtest/delete', { data: { id: userId } });
//             // 삭제 후 사용자 데이터 업데이트
//             setUsers(users.filter(user => user.id !== userId));
//             setFilteredUsers(filteredUsers.filter(user => user.id !== userId));
//         } catch (error) {
//             console.error('Delete error:', error);
//         }
//     };

//     // 파일 클릭 처리 함수
//     const handleFileClick = (event, fileUrl) => {
//         event.preventDefault();
//         const fileType = fileUrl.endsWith('.pdf') ? 'pdf' : 'image';
//         setSelectedFile(fileUrl);
//         setFileType(fileType);
//     };

//     return (
//         <Container maxWidth="xl">
//             <SearchBar
//                 searchTerm={searchTerm}
//                 setSearchTerm={setSearchTerm}
//                 searchId={searchId}
//                 setSearchId={setSearchId}
//                 handleSearchBoth={handleSearchBoth}
//             />

//             <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                     <ImgTable
//                         users={currentUsers}
//                         sortColumn={sortColumn}
//                         sortDirection={sortDirection}
//                         handleSort={handleSort}
//                         handleDelete={handleDelete}
//                         handleFileClick={handleFileClick}
//                     />
//                     <Stack spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
//                         <Pagination
//                             count={totalPages}
//                             page={currentPage}
//                             onChange={handlePageChange}
//                             color="primary"
//                         />
//                     </Stack>
//                 </Grid>

//                 <Grid item xs={6}>
//                     {selectedFile ? (
//                         fileType === 'pdf' ? (
//                             <iframe
//                                 src={selectedFile}
//                                 style={{ width: '100%', height: '650px', marginTop: '30px' }}
//                                 title="PDF Viewer"
//                             />
//                         ) : (
//                             <img
//                                 src={selectedFile}
//                                 alt="Selected"
//                                 style={{ maxWidth: '100%', height: '660px', borderRadius: '8px', marginTop: '30px' }}
//                             />
//                         )
//                     ) : (
//                         <Box className='Box-url'>
//                             파일 URL을 선택 하세요
//                         </Box>
//                     )}
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// }



// 'use client'

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useSearchParams } from 'next/navigation';
// import SearchBar from './componets/SearchBar';
// import ImgTable from './componets/imgTable';
// import { Grid, Container, Stack, Pagination, Box } from '@mui/material';

// export default function PTablePage() {
//     // 상태 변수 선언
//     const [users, setUsers] = useState([]); // 전체 사용자 데이터
//     const [filteredUsers, setFilteredUsers] = useState([]); // 검색 및 필터링된 사용자 데이터
//     const [searchTerm, setSearchTerm] = useState(''); // 검색어 (전체검색)
//     const [searchId, setSearchId] = useState(''); // 검색 ID
//     const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
//     const usersPerPage = 11; // 페이지당 사용자 수
//     const [sortColumn, setSortColumn] = useState(null); // 정렬할 열
//     const [sortDirection, setSortDirection] = useState(null); // 정렬 방향 (오름차순/내림차순)
//     const [selectedFile, setSelectedFile] = useState(null); // 선택된 파일 URL
//     const [fileType, setFileType] = useState(null); // 파일 유형 (PDF 또는 이미지)

//     // 쿼리스트링에서 'id' 파라미터를 가져오기 위한 hook *******
//     const params = useSearchParams();
//     const queryId = params.get('id'); // 'id' 쿼리 파라미터 값

//     useEffect(() => {
//         const getUser = async () => {
//             try {
//                 const response = await axios.get('/api/imgtest/get');
//                 console.log('get data:', response.data);
//                 setUsers(response.data);
//                 setFilteredUsers(response.data); // 초기 상태로 전체 유저 설정
//             } catch (error) {
//                 console.error('get error:', error);
//             }
//         };
//         getUser();
//     }, []);


//     // // // 컴포넌트가 마운트될 때 사용자 데이터 가져오기, 
//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             const response = await axios.get('/api/imgtest/get');
//     //             setUsers(response.data); // 사용자 데이터를 상태에 저장
//     //         } catch (error) {
//     //             console.error('Error fetching data:', error);
//     //         }
//     //     };
//     //     fetchData();
//     // }, []);


//     // // 검색어, ID, 쿼리 ID, 사용자 데이터가 변경될 때마다 검색 및 필터링 적용**** 검색어 변경할때마다 적용
//     // useEffect(() => {
//     //     handleSearchBoth();
//     // }, [searchTerm, searchId, queryId, users]);

//     // 전체 검색 및 ID 검색을 처리하는 함수
//     const handleSearchBoth = () => {
//         const lowerCaseSearchTerm = searchTerm.toLowerCase();
//         const lowerCaseSearchId = searchId.toLowerCase();
//         const lowerCaseQueryId = queryId ? queryId.toLowerCase() : '';

//         const filtered = users.filter(user => {
//             const matchesSearchTerm =
//                 Object.values(user).some(value =>
//                     value !== null && value !== undefined && value.toString().toLowerCase().includes(lowerCaseSearchTerm)
//                 );

//             const matchesSearchId =
//                 user.id && user.id.toString().toLowerCase().includes(lowerCaseSearchId);

//             const matchesQueryId =
//                 queryId ? user.title.toLowerCase().includes(lowerCaseQueryId) : true;

//             return matchesSearchTerm && matchesSearchId && matchesQueryId;
//         });

//         setFilteredUsers(filtered);
//         setCurrentPage(1);
//     };


//     // 정렬 처리 함수
//     const handleSort = (column) => {
//         if (sortColumn === column) {
//             setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
//         } else {
//             setSortColumn(column);
//             setSortDirection('asc');
//         }
//     };

//     // 정렬된 사용자 데이터
//     let sortedUsers = [...filteredUsers];
//     if (sortColumn) {
//         sortedUsers.sort((a, b) => {
//             if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
//             if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
//             return 0;
//         });
//     }

//     // 페이지 변경 처리 함수
//     const handlePageChange = (event, value) => {
//         setCurrentPage(value);
//     };

//     // 페이지네이션 계산
//     const indexOfLastUser = currentPage * usersPerPage;
//     const indexOfFirstUser = indexOfLastUser - usersPerPage;
//     const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
//     const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

//     // 사용자 삭제 처리 함수
//     const handleDelete = async (userId) => {
//         try {
//             await axios.delete('/api/imgtest/delete', { data: { id: userId } });
//             // 삭제 후 사용자 데이터 업데이트
//             setUsers(users.filter(user => user.id !== userId));
//             setFilteredUsers(filteredUsers.filter(user => user.id !== userId));
//         } catch (error) {
//             console.error('Delete error:', error);
//         }
//     };

//     // 파일 클릭 처리 함수
//     const handleFileClick = (event, fileUrl) => {
//         event.preventDefault();
//         const fileType = fileUrl.endsWith('.pdf') ? 'pdf' : 'image';
//         setSelectedFile(fileUrl);
//         setFileType(fileType);
//     };

//     return (
//         <Container maxWidth="xl">
//             <SearchBar
//                 searchTerm={searchTerm}
//                 setSearchTerm={setSearchTerm}
//                 searchId={searchId}
//                 setSearchId={setSearchId}
//                 handleSearchBoth={handleSearchBoth}
//             />

//             <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                     <ImgTable
//                         users={currentUsers}
//                         sortColumn={sortColumn}
//                         sortDirection={sortDirection}
//                         handleSort={handleSort}
//                         handleDelete={handleDelete}
//                         handleFileClick={handleFileClick}
//                     />
//                     <Stack spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
//                         <Pagination
//                             count={totalPages}
//                             page={currentPage}
//                             onChange={handlePageChange}
//                             color="primary"
//                         />
//                     </Stack>
//                 </Grid>

//                 <Grid item xs={6}>
//                     {selectedFile ? (
//                         fileType === 'pdf' ? (
//                             <iframe
//                                 src={selectedFile}
//                                 style={{ width: '100%', height: '630px', marginTop: '30px' }}
//                                 title="PDF Viewer"
//                             />
//                         ) : (
//                             <img
//                                 src={selectedFile}
//                                 alt="Selected"
//                                 style={{ maxWidth: '100%', height: '630px', borderRadius: '8px', marginTop: '30px' }}
//                             />
//                         )
//                     ) : (
//                         <Box className='Box-url'>
//                             파일 URL을 선택 하세요
//                         </Box>
//                     )}
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// }



'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import SearchBar from './componets/SearchBar';
import ImgTable from './componets/imgTable';
import { Grid, Container, Stack, Pagination, Box } from '@mui/material';

export default function PTablePage() {
    // 상태 변수를 사용하여 애플리케이션 상태 관리
    const [users, setUsers] = useState([]); // 모든 사용자 데이터를 저장
    const [filteredUsers, setFilteredUsers] = useState([]); // 검색 조건에 맞게 필터링된 사용자 데이터를 저장
    const [searchTerm, setSearchTerm] = useState(''); // 전체 텍스트 검색어
    const [searchId, setSearchId] = useState(''); // 'id' 필드로 검색하기 위한 검색어
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
    const usersPerPage = 11; // 페이지당 표시할 사용자 수
    const [sortColumn, setSortColumn] = useState(null); // 정렬할 열
    const [sortDirection, setSortDirection] = useState(null); // 정렬 방향 ('asc' 또는 'desc')
    const [selectedFile, setSelectedFile] = useState(null); // 선택된 파일의 URL을 저장
    const [fileType, setFileType] = useState(null); // 파일 유형 ('pdf' 또는 'image')

    // URL에서 쿼리 파라미터를 가져오기 위한 hook ('id' 쿼리 파라미터)
    const params = useSearchParams();
    const queryId = params.get('id'); // 'id' 쿼리 파라미터 가져오기

    // 컴포넌트가 마운트될 때 사용자 데이터를 API에서 가져오는 effect
    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('/api/imgtest/get');
                console.log('get data:', response.data); // 디버깅을 위한 데이터 출력
                setUsers(response.data); // 모든 사용자 데이터 설정
                setFilteredUsers(response.data); // 초기 상태로 필터링된 사용자 설정
            } catch (error) {
                console.error('get error:', error); // 오류 출력
            }
        };
        getUser();
    }, []);

    // 전체 텍스트 검색과 ID 검색을 처리하는 함수
    const handleSearchBoth = () => {
        // 대소문자 구분 없는 검색을 위해 검색어를 소문자로 변환
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const lowerCaseSearchId = searchId.toLowerCase();
        const lowerCaseQueryId = queryId ? queryId.toLowerCase() : '';

        // 검색 조건에 맞는 사용자 필터링
        const filtered = users.filter(user => {
            const matchesSearchTerm =
                Object.values(user).some(value =>
                    value !== null && value !== undefined && value.toString().toLowerCase().includes(lowerCaseSearchTerm)
                );

            const matchesSearchId =
                user.id && user.id.toString().toLowerCase().includes(lowerCaseSearchId);

            const matchesQueryId =
                queryId ? user.title.toLowerCase().includes(lowerCaseQueryId) : true;

            // 모든 조건에 맞는 사용자 반환
            return matchesSearchTerm && matchesSearchId && matchesQueryId;
        });

        setFilteredUsers(filtered); // 필터링된 사용자 목록 업데이트
        setCurrentPage(1); // 검색 후 첫 페이지로 이동
    };

    // 열 정렬을 처리하는 함수
    const handleSort = (column) => {
        // 같은 열을 다시 클릭하면 정렬 방향을 변경
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            // 새로운 열을 정렬 대상으로 설정하고, 기본 정렬 방향을 오름차순으로 설정
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    // 필터링된 사용자 데이터를 정렬
    let sortedUsers = [...filteredUsers];
    if (sortColumn) {
        sortedUsers.sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
            if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }

    // 페이지 변경을 처리하는 함수
    const handlePageChange = (event, value) => {
        setCurrentPage(value); // 현재 페이지 번호 업데이트
    };

    // 페이지네이션을 위한 인덱스 계산 (각 페이지에 표시할 사용자 데이터)
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser); // 현재 페이지에 맞는 사용자 데이터
    const totalPages = Math.ceil(sortedUsers.length / usersPerPage); // 총 페이지 수 계산

    // 사용자 삭제를 처리하는 함수
    const handleDelete = async (userId) => {
        try {
            await axios.delete('/api/imgtest/delete', { data: { id: userId } });
            // 삭제 후 사용자 데이터를 업데이트
            setUsers(users.filter(user => user.id !== userId));
            setFilteredUsers(filteredUsers.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Delete error:', error); // 오류 출력
        }
    };

    // 파일 클릭 시 동작을 처리하는 함수 (이미지 또는 PDF)
    const handleFileClick = (event, fileUrl) => {
        event.preventDefault(); // 기본 동작 방지
        const fileType = fileUrl.endsWith('.pdf') ? 'pdf' : 'image'; // 파일 확장자를 통해 파일 유형 결정
        setSelectedFile(fileUrl); // 선택된 파일 URL 설정
        setFileType(fileType); // 파일 유형 설정 ('pdf' 또는 'image')
    };

    return (
        <Container maxWidth="xl">
            {/* 전체 텍스트 및 ID 검색을 위한 검색바 컴포넌트 */}
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                searchId={searchId}
                setSearchId={setSearchId}
                handleSearchBoth={handleSearchBoth} // 검색 버튼 클릭 시 검색 수행
            />

            {/* 메인 그리드 레이아웃 */}
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    {/* 사용자 데이터를 표시하는 테이블 컴포넌트 */}
                    <ImgTable
                        users={currentUsers}
                        sortColumn={sortColumn}
                        sortDirection={sortDirection}
                        handleSort={handleSort} // 열 헤더 클릭 시 정렬 수행
                        handleDelete={handleDelete} // 삭제 버튼 클릭 시 사용자 삭제
                        handleFileClick={handleFileClick} // 파일 클릭 시 파일 표시
                    />

                    {/* 페이지네이션 컴포넌트 */}
                    <Stack spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
                        <Pagination
                            count={totalPages} // 총 페이지 수
                            page={currentPage} // 현재 페이지 번호
                            onChange={handlePageChange} // 페이지 변경 시 동작 처리
                            color="primary"
                        />
                    </Stack>
                </Grid>

                {/* 선택된 파일 (PDF 또는 이미지)를 표시하는 오른쪽 영역 */}
                <Grid item xs={6}>
                    {selectedFile ? (
                        fileType === 'pdf' ? (
                            // PDF 파일을 iframe으로 표시
                            <iframe
                                src={selectedFile}
                                style={{ width: '100%', height: '630px', marginTop: '30px' }}
                                title="PDF Viewer"
                            />
                        ) : (
                            // 이미지 파일을 img 태그로 표시
                            <img
                                src={selectedFile}
                                alt="Selected"
                                style={{ maxWidth: '100%', height: '630px', borderRadius: '8px', marginTop: '30px' }}
                            />
                        )
                    ) : (
                        // 파일이 선택되지 않았을 때 표시되는 기본 메시지
                        <Box className='Box-url'>
                            파일 URL을 선택 하세요
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
}
