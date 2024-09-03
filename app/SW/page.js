//map 부분 수정, 전체 데이터 정렬 후 , 페이지네이션해야함, 안그러면 오류생김

// 'use client'

// import React, { useEffect, useState } from 'react';
// import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Stack, Pagination } from '@mui/material';
// // import AccountDialog from '@/app/components/AccountDialog';
// import AccountDialog from './components/AccountDialog';
// import TableSortLabel from '@mui/material/TableSortLabel'; // 테이블소팅관련
// import axios from 'axios';
// import PostButton from './components/PostButton';  // 컴포넌트로 뻄 등록기능
// // import RoleSelect from './components/RoleSelect';  //role 관련 , 직접쓰지않고 SearchBar에서 사용
// import SearchBar from './components/SearchBar'; // 검색 컴포넌트
// import UserTable from './components/UserTable'; // 유저 테이블 컴포넌트
// import PaginationComp from './components/PaginationComp'; //페이지네이션 컴포넌트
// import ResetPassword from './components/resetPw'; // 암호 초기화
// // import ExcelExport from './componets/excel'; //엑셀 라이브러리
// import ExcelExport from './components/excel';


// export default function PTablePage() {
//     const [users, setUsers] = useState([]);   // 조회관련(삭제관련)
//     const [selectedUser, setSelectedUser] = useState(null);  //수정관련
//     const [open, setOpen] = useState(false);  // 수정관련

//     const [currentPage, setCurrentPage] = useState(1); //페이징 ,초기값 1
//     const usersPerPage = 10;   //페이징  로우수 

//     const [sortColumn, setSortColumn] = useState(null);   //테이블 소팅관련
//     const [sortDirection, setSortDirection] = useState(null);  //테이블 소팅관련

//     const [searchTerm, setSearchTerm] = useState(''); // 모든 검색어 상태 추가
//     const [searchId, setSearchId] = useState(''); // ID 검색어 상태 추가
//     const [filteredUsers, setFilteredUsers] = useState([]); // 필터링된 사용자 상태

//     const [role, setRole] = useState('all'); // 기본값은 'user' 롤 관련선택 

//     useEffect(() => {
//         const getUser = async () => {
//             try {
//                 const response = await axios.get('/api/account/get');
//                 console.log('get data:', response.data);
//                 setUsers(response.data);
//                 setFilteredUsers(response.data); // 초기 상태로 전체 사용자 설정
//             } catch (error) {
//                 console.error('get error:', error);
//             }
//         };
//         getUser();
//     }, []);

//     /////// get
//     // 테이블소팅 ,handleSort 함수를 구현하여 정렬 기준과 방향을 업데이트합니다.
//     const handleSort = (column) => {
//         if (sortColumn === column) {
//             setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
//         } else {
//             setSortColumn(column);
//             setSortDirection('asc');
//         }
//     };

//     // 정렬된 데이터를 렌더링하기 위해 users 배열을 정렬합니다.
//     let sortedUsers = [...filteredUsers];
//     if (sortColumn) {
//         sortedUsers.sort((a, b) => {
//             if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
//             if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
//             return 0;
//         });
//     }
//     //     데이터를 정렬합니다. 정렬된 데이터를 페이지네이션에 적용합니다. 그렇지않으면 오류발생

//     // 통합된 검색 핸들러
//     const handleSearchBoth = () => {
//         const filtered = users.filter(user => {
//             const matchesSearchTerm =
//                 Object.values(user).some(value =>
//                     value !== null && value !== undefined && value.toString().includes(searchTerm)
//                 );
//             // 값이 널이나 언디파인드면 오류가 발생할수잇음.
//             //전체검색 및 문자 변환

//             const matchesRole =
//                 role === 'all' || user.role === role; // "전체"를 포함한 역할 필터링

//             const matchesSearchId =
//                 user.userId.includes(searchId) || user.password.includes(searchId);
//             // ID 컬럼 검색

//             return matchesSearchTerm && matchesSearchId && matchesRole;

//         });
//         setFilteredUsers(filtered);
//     };

//     //paging
//     const handlePageChange = (event, value) => {
//         setCurrentPage(value);
//     };  //페이지 변경을 핸들링하는 함수 , value 는 사용자가 클릭한 페이지(SortedUser ,CurrentUser)

//     const indexOfLastUser = currentPage * usersPerPage;   // 현재페이지의 마지막 사용자 인덱스 계산
//     const indexOfFirstUser = indexOfLastUser - usersPerPage;  //현재 페이지에서 첫번째 사용인덱스 계산  마지믹인덱스 -페이지 유저수
//     const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser); //slice 메서드를 사용해 indexOfFirstUser부터 indexOfLastUser까지의 사용자들을 가져옵니다.
//     const totalPages = Math.ceil(filteredUsers.length / usersPerPage);  //전체유저 길이(수) / 1페이지의 로우수로 나눔

//     // const indexOfLastUser = currentPage * usersPerPage;
//     // const indexOfFirstUser = indexOfLastUser - usersPerPage;
//     // const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
//     // const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

//     //axious 삭제

//     const handleDelete = async (userId) => {
//         try {
//             const response = await axios.delete('/api/account/delete', {
//                 data: { id: userId },
//             });
//             const { message } = response.data;
//             console.log(message);

//             setUsers(users.filter(user => user.id !== userId));
//             setFilteredUsers(filteredUsers.filter(user => user.id !== userId));
//         } catch (error) {
//             console.error('Delete error:', error);
//         }
//     };
//     //axious 삭제

//     // axious 수정
//     const handleUpdate = (user) => {
//         setSelectedUser(user);
//         setOpen(true);
//     };
//     const handleSaveUpdate = async () => {
//         try {
//             const response = await axios.put('/api/account/put', { ...selectedUser, age: parseInt(selectedUser.age, 10) });
//             //.selectedUser: 이 부분은 spread 연산자를 사용하여 selectedUser 객체의 모든 속성을 복사하는 것입니다.
//             // 이렇게 하면 selectedUser 객체의 모든 속성이 새로운 객체에 포함
//             //parseInt를 통해 10진수 정수로 변환
//             const updatedUser = response.data;
//             setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
//             setFilteredUsers(filteredUsers.map(user => (user.id === updatedUser.id ? updatedUser : user)));


//             // 다른 DB에 수정된 데이터를 기록하기 위한 요청
//             await axios.post('/api/accounthistroy/post', { ...updatedUser });

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

//         <Container maxWidth="xl" sx={{ mt: 2 }}> {/* maxWidth를 설정하여 전체 너비를 조정 */}
//             <Stack direction={{ md: 'column', lg: 'row' }} spacing={2}>

//                 {/*  */}

//                 {/* 화면작을떄는 세로, sm 이상이면 row가로 */}

//                 <SearchBar
//                     role={role}
//                     setRole={setRole}
//                     searchId={searchId}
//                     setSearchId={setSearchId}
//                     searchTerm={searchTerm}
//                     setSearchTerm={setSearchTerm}
//                     handleSearchBoth={handleSearchBoth}

//                 /><ResetPassword />
//             </Stack>
//             {/* 서치바와 해시암호리셋을 정렬 */}


//             {/* props 로 -> Searcbar에 넘겨줌  */}
//             <TableContainer component={Paper} style={{ marginTop: '30px' }}>

//                 <Stack direction="row" justifyContent="space-between" >
//                     <PostButton /> {/* 포스트버튼 컴포넌트 */}
//                     <ExcelExport />
//                     {/* 엑셀 내보내기 */}
//                 </Stack>

//                 <UserTable
//                     users={currentUsers}
//                     sortColumn={sortColumn}
//                     sortDirection={sortDirection}
//                     handleSort={handleSort}
//                     handleUpdate={handleUpdate}
//                     handleDelete={handleDelete}
//                 />
//             </TableContainer>
//             <PaginationComp
//                 totalPages={totalPages}
//                 currentPage={currentPage}
//                 handlePageChange={handlePageChange}
//             />
//             {/* props로 전달 */}

//             {/* mui 다이알로그 페이지 가이드 */}
//             <AccountDialog
//                 open={open}
//                 onClose={() => setOpen(false)}
//                 account={selectedUser}
//                 onChange={handleInputChange}
//                 onSave={handleSaveUpdate}
//             // 다이얼로그에 전달할 프롭스
//             />
//         </Container>
//     );
// }

'use client'
// 0.users 데이터를 가져옴.
// 1. 필터링을 먼저 수행하여 filteredUsers를 만듦.
// 2. filteredUsers를 정렬하여 sortedUsers를 만듦.
// 3.sortedUsers를 페이지네이션으로 잘라내어 currentUsers를 만듦.
// 4. UserTable 컴포넌트로 currentUsers를 전달함.

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Stack, Pagination } from '@mui/material';
// import AccountDialog from '@/app/components/AccountDialog';
import AccountDialog from './components/AccountDialog';
import TableSortLabel from '@mui/material/TableSortLabel'; // 테이블소팅관련
import axios from 'axios';
import PostButton from './components/PostButton';  // 컴포넌트로 뻄 등록기능
// import RoleSelect from './components/RoleSelect';  //role 관련 , 직접쓰지않고 SearchBar에서 사용
import SearchBar from './components/SearchBar'; // 검색 컴포넌트
import UserTable from './components/UserTable'; // 유저 테이블 컴포넌트
import PaginationComp from './components/PaginationComp'; //페이지네이션 컴포넌트
import ResetPassword from './components/resetPw'; // 암호 초기화
// import ExcelExport from './componets/excel'; //엑셀 라이브러리
import ExcelExport from './components/excel';
import * as XLSX from 'xlsx';



export default function PTablePage() {
    const [users, setUsers] = useState([]);   // 조회관련(삭제관련)
    const [selectedUser, setSelectedUser] = useState(null);  //수정관련
    const [open, setOpen] = useState(false);  // 수정관련

    const [currentPage, setCurrentPage] = useState(1); //페이징 ,초기값 1
    const usersPerPage = 10;   //페이징  로우수 

    const [sortColumn, setSortColumn] = useState(null);   //테이블 소팅관련
    const [sortDirection, setSortDirection] = useState(null);  //테이블 소팅관련

    const [searchTerm, setSearchTerm] = useState(''); // 모든 검색어 상태 추가
    const [searchId, setSearchId] = useState(''); // ID 검색어 상태 추가
    const [filteredUsers, setFilteredUsers] = useState([]); // 필터링된 사용자 상태

    const [role, setRole] = useState('all'); // 기본값은 'user' 롤 관련선택 

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('/api/sw/get');
                console.log('get data:', response.data);
                setUsers(response.data);
                setFilteredUsers(response.data); // 초기 상태로 전체 사용자 설정
            } catch (error) {
                console.error('get error:', error);
            }
        };
        getUser();
    }, []);


    /////// get
    // 테이블소팅 ,handleSort 함수를 구현하여 정렬 기준과 방향을 업데이트합니다.
    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };



    //1. 데이터 필터링
    // 통합된 검색 핸들러   필터링된 데이터를 상태에 저장합니다. 
    const handleSearchBoth = () => {
        const filtered = users.filter(user => { // `users` 배열에서 필터링을 수행합니다.
            const matchesSearchTerm =
                Object.values(user).some(value =>
                    value !== null && value !== undefined && value.toString().includes(searchTerm)
                );
            // 값이 널이나 언디파인드면 오류가 발생할 수 있음.
            // 전체검색 및 문자 변환

            const matchesRole =
                role === 'all' || user.role === role; // "전체"를 포함한 역할 필터링

            const matchesSearchId =
                user.userId.includes(searchId) || user.password.includes(searchId);
            // ID 컬럼 검색

            return matchesSearchTerm && matchesSearchId && matchesRole;
        });
        setFilteredUsers(filtered); // 필터링된 데이터를 상태에 저장합니다.
    };

    //2 .filteredUsers를 정렬하여 sortedUsers를 만듦.
    // 정렬된 데이터를 렌더링하기 위해 users 배열을 정렬합니다.
    let sortedUsers = [...filteredUsers];  // `filteredUsers` 배열을 사용하여 필터링된 사용자만 정렬합니다.
    if (sortColumn) {
        sortedUsers.sort((a, b) => {  // 필터링된 데이터에 대해 정렬을 수행합니다.
            if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
            if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }
    // 데이터를 정렬합니다. 정렬된 데이터를 페이지네이션에 적용합니다. 그렇지 않으면 오류 발생




    //3. sortedUsers를 페이지네이션으로 잘라내어 currentUsers를 만듦.
    //paging
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };  //페이지 변경을 핸들링하는 함수 , value 는 사용자가 클릭한 페이지(SortedUser ,CurrentUser)

    const indexOfLastUser = currentPage * usersPerPage;   // 현재페이지의 마지막 사용자 인덱스 계산
    const indexOfFirstUser = indexOfLastUser - usersPerPage;  //현재 페이지에서 첫번째 사용인덱스 계산  마지믹인덱스 -페이지 유저수
    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser); //slice 메서드를 사용해 indexOfFirstUser부터 indexOfLastUser까지의 사용자들을 가져옵니다.
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);  //전체유저 길이(수) / 1페이지의 로우수로 나눔




    // axious 삭제 user.id 는 필터링된 값의 id.  그거랑 딜리트  api의 id랑 비교
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete('/api/sw/delete', {
                data: { id: id },
            });
            const { message } = response.data;
            console.log(message);

            setUsers(users.filter(user => user.id !== id));
            setFilteredUsers(filteredUsers.filter(user => user.id !== id));  // 필터링된 사용자 목록에서 삭제
        } catch (error) {
            console.error('Delete error:', error);
        }
    };
    // axious 삭제





    // axious 수정
    const handleUpdate = (user) => {
        setSelectedUser(user);
        setOpen(true);
    };
    const handleSaveUpdate = async () => {
        try {
            const response = await axios.put('/api/account/put', { ...selectedUser, age: parseInt(selectedUser.age, 10) });
            //.selectedUser: 이 부분은 spread 연산자를 사용하여 selectedUser 객체의 모든 속성을 복사하는 것입니다.
            // 이렇게 하면 selectedUser 객체의 모든 속성이 새로운 객체에 포함
            //parseInt를 통해 10진수 정수로 변환
            const updatedUser = response.data;
            setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
            setFilteredUsers(filteredUsers.map(user => (user.id === updatedUser.id ? updatedUser : user)));  // 필터링된 사용자 목록에서 수정

            // 다른 DB에 수정된 데이터를 기록하기 위한 요청
            await axios.post('/api/accounthistroy/post', { ...updatedUser });

            setOpen(false);
        } catch (error) {
            console.error('Update error:', error);
        }
    };

    const handleInputChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
    };
    // axious 수정




    return (

        <Container maxWidth="xl" sx={{ mt: 2 }}> {/* maxWidth를 설정하여 전체 너비를 조정 */}
            <Stack direction={{ md: 'column', lg: 'row' }} spacing={2}>

                {/* 화면작을때는 세로, sm 이상이면 row 가로 */}

                <SearchBar
                    role={role}
                    setRole={setRole}
                    searchId={searchId}
                    setSearchId={setSearchId}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleSearchBoth={handleSearchBoth}

                /><ResetPassword />
            </Stack>
            {/* 서치바와 해시암호리셋을 정렬 */}

            {/* props 로 -> Searcbar에 넘겨줌  */}
            <TableContainer component={Paper} style={{ marginTop: '30px' }}>

                <Stack direction="row" justifyContent="space-between">
                    <PostButton /> {/* Post button component */}
                    <ExcelExport users={filteredUsers} /> {/* 필터링 된 유저만 내보냄 */}
                </Stack>




                {/* 4. UserTable 컴포넌트로 currentUsers를 전달함. */}

                <UserTable
                    users={currentUsers}  // 정렬 및 필터링된 데이터를 전달합니다.
                    sortColumn={sortColumn}
                    sortDirection={sortDirection}
                    handleSort={handleSort}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                />
            </TableContainer>
            <PaginationComp
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {/* props로 전달 */}

            {/* mui 다이알로그 페이지 가이드 */}
            <AccountDialog
                open={open}
                onClose={() => setOpen(false)}
                account={selectedUser}
                onChange={handleInputChange}
                onSave={handleSaveUpdate}
            // 다이얼로그에 전달할 프롭스
            />
        </Container>
    );
}
