// 유저 테이블 컴포넌트 //토글없음
// app/components/UserTable.js

// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Input } from '@mui/material';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import { format } from 'date-fns';

// function UserTable({ users, sortColumn, sortDirection, handleSort, handleUpdate, handleDelete, handleFileUpload, handleButtonClick }) {
//     return (
//         <TableContainer component={Paper}
//             style={{
//                 marginTop: '20px',
//             }}>
//             <Table sx={{ '& .MuiTableCell-root': { padding: '8px' } }}>
//                 {/* 테이블 간격 패딩 전체조정 '8px' */}
//                 <TableHead>
//                     <TableRow  >
//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'id'}
//                                 direction={sortColumn === 'id' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('id')}
//                             >
//                                 ID
//                             </TableSortLabel>
//                         </TableCell>

//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'docsNumber'}
//                                 direction={sortColumn === 'docsNumber' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('docsNumber')}
//                             >
//                                 문서번호
//                             </TableSortLabel>
//                         </TableCell>

//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'SwuserID'}
//                                 direction={sortColumn === 'SwuserID' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('SwuserID')}
//                             >
//                                 유저ID
//                             </TableSortLabel>
//                         </TableCell>

//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'name'}
//                                 direction={sortColumn === 'name' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('name')}
//                             >
//                                 이름
//                             </TableSortLabel>
//                         </TableCell>

//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'Department'}
//                                 direction={sortColumn === 'Department' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('Department')}
//                             >
//                                 부서
//                             </TableSortLabel>
//                         </TableCell>
//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'SwName'}
//                                 direction={sortColumn === 'SwName' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('SwName')}
//                             >
//                                 Sw명
//                             </TableSortLabel>
//                         </TableCell>

//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'period'}
//                                 direction={sortColumn === 'period' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('period')}
//                             >
//                                 기간
//                             </TableSortLabel>
//                         </TableCell>

//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'licensKey'}
//                                 direction={sortColumn === 'licensKey' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('licensKey')}
//                             >
//                                 라이센스키
//                             </TableSortLabel>
//                         </TableCell>

//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'madeCompany'}
//                                 direction={sortColumn === 'madeCompany' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('madeCompany')}
//                             >
//                                 제조사
//                             </TableSortLabel>
//                         </TableCell>

//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'etc'}
//                                 direction={sortColumn === 'etc' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('etc')}
//                             >
//                                 기타내역
//                             </TableSortLabel>
//                         </TableCell>

//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'createdAt'}
//                                 direction={sortColumn === 'createdAt' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('createdAt')}
//                             >
//                                 생성일
//                             </TableSortLabel>
//                         </TableCell>
//                         <TableCell className='table-header' sx={{ width: '10px' }}>수정</TableCell>
//                         <TableCell className='table-header'>삭제</TableCell>
//                         <TableCell className='table-header'>첨부</TableCell>
//                         <TableCell className='table-header'>조회</TableCell>
//                         {/* <TableCell className='table-header'>TEST</TableCell> */}

//                     </TableRow>
//                 </TableHead>

//                 <TableBody>
//                     {users.map(user => (
//                         <TableRow key={user.id}>
//                             <TableCell>{user.id}</TableCell>
//                             <TableCell>{user.docsNumber}</TableCell>
//                             <TableCell>{user.SwuserID}</TableCell>
//                             <TableCell>{user.name}</TableCell>
//                             <TableCell>{user.Department}</TableCell>
//                             <TableCell>{user.SwName}</TableCell>
//                             <TableCell>{user.period}</TableCell>
//                             <TableCell>{user.licensKey}</TableCell>

//                             <TableCell>{user.madeCompany}</TableCell>
//                             <TableCell>{user.etc}</TableCell>
//                             <TableCell>  {format(new Date(user.createdAt), 'yyyy-MM-dd HH:mm')} {/* 날짜 포맷팅 */}</TableCell>


//                             <TableCell>
//                                 <Button className='button-blue' onClick={() => handleUpdate(user)}>
//                                     수정
//                                 </Button>
//                             </TableCell>

//                             <TableCell>
//                                 <Button className='button-red' onClick={() => handleDelete(user.id)}>삭제</Button>
//                             </TableCell>

//                             {/* <TableCell>
//                                 <Input
//                                     type="file"
//                                     onChange={(e) => handleFileUpload(e, user.id)}
//                                     style={{ display: 'none' }}
//                                     id={`upload-button-${user.id}`}
//                                 />
//                                 <label htmlFor={`upload-button-${user.id}`}>
//                                     <Button className='button-bg' component="span">
//                                         첨부
//                                     </Button>
//                                 </label>
//                             </TableCell> */}

//                             <TableCell>
//                                 <input
//                                     type="file"
//                                     onChange={(e) => handleFileUpload(e, user.id)}
//                                     style={{ display: 'none' }}
//                                     id={`upload-button-${user.id}`}
//                                 />
//                                 <label htmlFor={`upload-button-${user.id}`}>
//                                     <Button className='button-orange' variant="contained" component="span">
//                                         첨부
//                                     </Button>
//                                 </label>
//                             </TableCell>

//                             <TableCell>
//                                 <Button
//                                     className='button-orange'
//                                     // variant="contained"
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         handleButtonClick(user.id);
//                                     }}
//                                 >
//                                     조회
//                                 </Button>
//                             </TableCell>
//                         </TableRow>


//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }

// export default UserTable;



//\app\SW\components\UserTable.js

'use client';

import React, { useState } from 'react';
import { Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Box, FormControlLabel, Checkbox } from '@mui/material';
import TableSortLabel from '@mui/material/TableSortLabel';
import { format } from 'date-fns';
import ExcelExport from './excel';

function UserTable({ users, sortColumn, sortDirection, handleSort, handleUpdate, handleDelete, handleFileUpload, handleButtonClick, filteredUsers }) {

    //1. 상태관리 토글 State//
    const [isDocsNumberVisible, setDocsNumberVisible] = useState(true);
    const [isEtcVisible, setEtcVisible] = useState(true);
    const [isperiod, setperiod] = useState(true);
    const [isCreatedAtVisible, setCreatedAtVisible] = useState(true); // '생성일자' 가시성 상태 추가
    const [isSwuserIDVisible, setSwuserIDVisible] = useState(true); // '생성일자' 가시성 상태 추가
    


    // 2. 체크박스 핸들러 함수
    const toggleDocsNumberVisibility = (event) => {
        setDocsNumberVisible(event.target.checked);  // '문서번호' 토글 함수
    };

    const toggleSwuserIDVisibility = (event) => {
        setSwuserIDVisible(event.target.checked); // '유저ID' 토글 함수
    };

    const toggleperiod = (event) => {
        setperiod(event.target.checked); // 기간
    }

    const toggleEtcVisibility = (event) => {
        setEtcVisible(event.target.checked); // '기타내역' 토글 함수
    };

    const toggleCreatedAtVisibility = (event) => {
        setCreatedAtVisible(event.target.checked); // '생성일자' 토글 함수
    };




    return (
        <TableContainer component={Paper} style={{ marginTop: '5px' }}>
            <Box>
                <Stack mb={'5px'}>
                    <Stack direction={{ md: 'row', lg: 'row' }} justifyContent="space-between">



                        <Stack direction={{ md: 'row', lg: 'row' }} spacing={0.1}>
                            {/*3. 컬럼 토글 UI 체크박스 추가 */}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // <Switch
                                        checked={isDocsNumberVisible}
                                        onChange={toggleDocsNumberVisibility}
                                    />
                                }
                                label="문서번호"
                            />


                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // <Switch
                                        checked={isSwuserIDVisible}
                                        onChange={toggleSwuserIDVisibility}
                                    />
                                }
                                label="유저ID"
                            />

                            {/* 기간 토글 */}

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // <Switch
                                        checked={isperiod}
                                        onChange={toggleperiod}
                                    />
                                }
                                label="기간여부"
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // <Switch
                                        checked={isEtcVisible}
                                        onChange={toggleEtcVisibility}
                                    />
                                }
                                label="기타내역"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // <Switch
                                        checked={isCreatedAtVisible}
                                        onChange={toggleCreatedAtVisibility}
                                    />
                                }
                                label="생성일자"
                            />
                        </Stack>


                        <ExcelExport users={filteredUsers} />
                    </Stack>
                </Stack>
            </Box>

            <Table sx={{ '& .MuiTableCell-root': { padding: '8px' } }}>
                <TableHead>
                    <TableRow>
                        <TableCell className='table-header' sx={{ width: '20px' }}>
                            <TableSortLabel
                                active={sortColumn === 'id'}
                                direction={sortColumn === 'id' ? sortDirection : 'asc'}
                                onClick={() => handleSort('id')}
                            >
                                ID
                            </TableSortLabel>
                        </TableCell>

                        {isDocsNumberVisible && (
                            //4. 토글 조건부 랜더링 테이블 헤더
                            <TableCell className='table-header' sx={{ width: '120px' }}>
                                <TableSortLabel
                                    active={sortColumn === 'docsNumber'}
                                    direction={sortColumn === 'docsNumber' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('docsNumber')}
                                >
                                    문서번호
                                </TableSortLabel>
                            </TableCell>
                        )}


                        {isSwuserIDVisible && (
                            <TableCell className='table-header' sx={{ width: '100px' }}>
                                <TableSortLabel
                                    active={sortColumn === 'SwuserID'}
                                    direction={sortColumn === 'SwuserID' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('SwuserID')}
                                >
                                    유저ID
                                </TableSortLabel>
                            </TableCell>
                        )}

                        <TableCell className='table-header' sx={{ width: '80px' }}>
                            <TableSortLabel
                                active={sortColumn === 'name'}
                                direction={sortColumn === 'name' ? sortDirection : 'asc'}
                                onClick={() => handleSort('name')}
                            >
                                이름
                            </TableSortLabel>
                        </TableCell>

                        <TableCell className='table-header' sx={{ width: '80px' }}>
                            <TableSortLabel
                                active={sortColumn === 'Department'}
                                direction={sortColumn === 'Department' ? sortDirection : 'asc'}
                                onClick={() => handleSort('Department')}
                            >
                                부서
                            </TableSortLabel>
                        </TableCell>

                        <TableCell className='table-header' sx={{ width: '180px' }}>
                            <TableSortLabel
                                active={sortColumn === 'SwName'}
                                direction={sortColumn === 'SwName' ? sortDirection : 'asc'}
                                onClick={() => handleSort('SwName')}
                            >
                                Sw명
                            </TableSortLabel>
                        </TableCell>

                        {isperiod && (
                            <TableCell className='table-header' sx={{ width: '100px' }}>
                                <TableSortLabel
                                    active={sortColumn === 'period'}
                                    direction={sortColumn === 'period' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('period')}
                                >
                                    기간
                                </TableSortLabel>
                            </TableCell>
                        )}

                        <TableCell className='table-header' sx={{ width: '150px' }}>
                            <TableSortLabel
                                active={sortColumn === 'licensKey'}
                                direction={sortColumn === 'licensKey' ? sortDirection : 'asc'}
                                onClick={() => handleSort('licensKey')}
                            >
                                라이센스키
                            </TableSortLabel>
                        </TableCell>

                        <TableCell className='table-header' sx={{ width: '150px' }}>
                            <TableSortLabel
                                active={sortColumn === 'madeCompany'}
                                direction={sortColumn === 'madeCompany' ? sortDirection : 'asc'}
                                onClick={() => handleSort('madeCompany')}
                            >
                                제조사
                            </TableSortLabel>
                        </TableCell>

                        {isEtcVisible && (
                            //토글 조건부 랜더링
                            <TableCell className='table-header' sx={{ width: '250px' }}>
                                <TableSortLabel
                                    active={sortColumn === 'etc'}
                                    direction={sortColumn === 'etc' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('etc')}
                                >
                                    기타내역
                                </TableSortLabel>
                            </TableCell>
                        )}

                        {isCreatedAtVisible && (
                            //토글 조건부 랜더링
                            <TableCell className='table-header' sx={{ width: '100px' }}>
                                <TableSortLabel
                                    active={sortColumn === 'createdAt'}
                                    direction={sortColumn === 'createdAt' ? sortDirection : 'asc'}
                                    onClick={() => handleSort('createdAt')}
                                >
                                    생성일
                                </TableSortLabel>
                            </TableCell>
                        )}
                        <TableCell className='table-header' sx={{ width: '50px' }}>수정</TableCell>
                        <TableCell className='table-header' sx={{ width: '50px' }}>삭제</TableCell>
                        <TableCell className='table-header' sx={{ width: '50px' }}>첨부</TableCell>
                        <TableCell className='table-header' sx={{ width: '50px' }}>조회</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>

                            {isDocsNumberVisible && (
                                <TableCell>{user.docsNumber}</TableCell>
                            )}
                            {/* 4. 토글 조건부 랜더링 테이블 셀 */}

                            {isSwuserIDVisible && (
                                <TableCell>{user.SwuserID}</TableCell>
                            )}
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.Department}</TableCell>
                            <TableCell>{user.SwName}</TableCell>

                            {isperiod && (
                                <TableCell>{user.period}</TableCell>
                            )}

                            <TableCell>{user.licensKey}</TableCell>
                            <TableCell>{user.madeCompany}</TableCell>
                            {isEtcVisible && (
                                <TableCell>{user.etc}</TableCell>
                            )}

                            {isCreatedAtVisible && ( // '생성일자' 컬럼의 가시성 조건부 렌더링
                                <TableCell>{format(Date(user.createdAt), 'yyyy-MM-dd HH:mm')}</TableCell>
                            )}

                            <TableCell>


                                <Button className='button-blue' onClick={() => handleUpdate(user)}>
                                    수정
                                </Button>
                            </TableCell>

                            <TableCell>
                                <Button className='button-red' onClick={() => handleDelete(user.id)}>삭제</Button>
                            </TableCell>

                            <TableCell>
                                <input
                                    type="file"
                                    onChange={(e) => handleFileUpload(e, user.id)}
                                    style={{ display: 'none' }}
                                    id={`upload-button-${user.id}`}
                                />
                                <label htmlFor={`upload-button-${user.id}`}>
                                    <Button className='button-orange' variant="contained" component="span">
                                        첨부
                                    </Button>
                                </label>
                            </TableCell>

                            <TableCell>
                                <Button
                                    className='button-orange'
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleButtonClick(user.id);
                                    }}
                                >
                                    조회
                                </Button>



                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UserTable;


