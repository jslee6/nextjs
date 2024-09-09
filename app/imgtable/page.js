// app/imgtable/page.js 기존
// 유즈이펙트 두개로 타이핑시 바로변함 24.09.09

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
//                 const response = await axios.get('/api/image/get');
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
//             await axios.delete('/api/image/delete', { data: { id: userId } });
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






'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import SearchBar from './componets/SearchBar';
import ImgTable from './componets/imgTable';
import { Grid, Container, Stack, Pagination, Box } from '@mui/material';

export default function PTablePage() {
    // 상태 변수 선언
    const [users, setUsers] = useState([]); // 전체 사용자 데이터 저장
    const [filteredUsers, setFilteredUsers] = useState([]); // 검색 및 필터링된 사용자 데이터
    const [searchTerm, setSearchTerm] = useState(''); // 전체 검색어
    const [searchId, setSearchId] = useState(''); // 검색 ID
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
    const usersPerPage = 11; // 페이지당 사용자 수
    const [sortColumn, setSortColumn] = useState(null); // 정렬할 열
    const [sortDirection, setSortDirection] = useState(null); // 정렬 방향 (오름차순/내림차순)
    const [selectedFile, setSelectedFile] = useState(null); // 선택된 파일 URL
    const [fileType, setFileType] = useState(null); // 파일 유형 (PDF 또는 이미지)

    // 쿼리스트링에서 'id' 파라미터를 가져오기 위한 hook
    const params = useSearchParams();
    const queryId = params.get('id'); // 'id' 쿼리 파라미터 값

    // 사용자 데이터 가져오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/image/get'); // 사용자 데이터 API 호출
                setUsers(response.data); // 전체 사용자 데이터 저장
                // 쿼리 ID로 초기 필터링
                if (queryId) {
                    const lowerCaseQueryId = queryId.toLowerCase();
                    const initialFiltered = response.data.filter(user =>
                        user.title.toLowerCase().includes(lowerCaseQueryId) // ID로 필터링
                    );
                    setFilteredUsers(initialFiltered); // 필터링된 사용자 데이터 저장
                } else {
                    setFilteredUsers(response.data); // 모든 사용자 데이터 저장
                }
            } catch (error) {
                console.error('Error fetching data:', error); // 오류 처리
            }
        };
        fetchData();
    }, [queryId]); // queryId가 변경될 때마다 데이터 재가져오기

    // 검색 버튼 클릭 시 검색 처리
    const handleSearchBoth = () => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const lowerCaseSearchId = searchId.toLowerCase();

        const filtered = users.filter(user => {
            const matchesSearchTerm = Object.values(user).some(value =>
                value !== null && value !== undefined && value.toString().toLowerCase().includes(lowerCaseSearchTerm) // 전체 검색
            );
            //   object.values(user)를 사용하여 user 객체의 모든 값을 배열로 가져옵니다.
            // some 메서드를 통해 배열의 값 중 하나라도 조건을 만족하는지 확인합니다.
            // 값이 null이나 undefined가 아니고, 해당 값을 문자열로 변환하여 소문자로 변환한 후, 검색어가 포함되어 있는지를 검사


            const matchesSearchId = user.id && user.id.toString().toLowerCase().includes(lowerCaseSearchId); // ID 검색
            //user.id가 존재할 경우, 이를 문자열로 변환하여 소문자로 변환한 후, 검색 ID가 포함되어 있는지를 검사합니다

            return matchesSearchTerm && matchesSearchId; // 두 조건 모두 만족해야 필터링
        });

        setFilteredUsers(filtered); // 필터링된 사용자 데이터 저장
        // setCurrentPage(1); // 페이지를 1로 초기화
    };

    // 정렬 처리 함수
    const handleSort = (column) => {
        if (sortColumn === column) { // 같은 열 클릭 시 정렬 방향 변경
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column); // 새로운 열로 정렬
            setSortDirection('asc'); // 기본 정렬 방향을 오름차순으로 설정
        }
    };

    // 정렬된 사용자 데이터
    let sortedUsers = [...filteredUsers];
    if (sortColumn) {
        sortedUsers.sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1; // 오름차순 정렬
            if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1; // 내림차순 정렬
            return 0; // 동일한 값 처리
        });
    }

    // 페이지 변경 처리 함수
    const handlePageChange = (event, value) => {
        setCurrentPage(value); // 현재 페이지 번호 업데이트
    };

    // 페이지네이션 계산
    const indexOfLastUser = currentPage * usersPerPage; // 마지막 사용자 인덱스
    const indexOfFirstUser = indexOfLastUser - usersPerPage; // 첫 번째 사용자 인덱스
    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser); // 현재 페이지의 사용자 데이터
    const totalPages = Math.ceil(sortedUsers.length / usersPerPage); // 총 페이지 수

    // 사용자 삭제 처리 함수
    const handleDelete = async (userId) => {
        try {
            await axios.delete('/api/image/delete', { data: { id: userId } }); // 사용자 삭제 API 호출
            // 삭제 후 사용자 데이터 업데이트
            setUsers(users.filter(user => user.id !== userId)); // 전체 사용자 데이터에서 삭제
            setFilteredUsers(filteredUsers.filter(user => user.id !== userId)); // 필터링된 사용자 데이터에서 삭제
        } catch (error) {
            console.error('Delete error:', error); // 오류 처리
        }
    };

    // 파일 클릭 처리 함수
    const handleFileClick = (event, fileUrl) => {
        event.preventDefault(); // 기본 동작 방지
        const fileType = fileUrl.endsWith('.pdf') ? 'pdf' : 'image'; // 파일 유형 확인
        setSelectedFile(fileUrl); // 선택된 파일 URL 저장
        setFileType(fileType); // 파일 유형 저장
    };

    return (
        <Container maxWidth="xl">
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                searchId={searchId}
                setSearchId={setSearchId}
                handleSearchBoth={handleSearchBoth}
            />

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <ImgTable
                        users={currentUsers}
                        sortColumn={sortColumn}
                        sortDirection={sortDirection}
                        handleSort={handleSort}
                        handleDelete={handleDelete}
                        handleFileClick={handleFileClick}
                    />
                    <Stack spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
                        <Pagination
                            count={totalPages} // 총 페이지 수
                            page={currentPage} // 현재 페이지
                            onChange={handlePageChange} // 페이지 변경 처리
                            color="primary"
                        />
                    </Stack>
                </Grid>

                <Grid item xs={6}>
                    {selectedFile ? ( // 파일이 선택된 경우
                        fileType === 'pdf' ? ( // PDF 파일인 경우
                            <iframe
                                src={selectedFile}
                                style={{ width: '100%', height: '650px', marginTop: '30px' }}
                                title="PDF Viewer"
                            />
                        ) : ( // 이미지 파일인 경우
                            <img
                                src={selectedFile}
                                alt="Selected"
                                style={{ maxWidth: '100%', height: '660px', borderRadius: '8px', marginTop: '30px' }}
                            />
                        )
                    ) : (
                        <Box className='Box-url'>
                            파일 URL을 선택 하세요.
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
}
