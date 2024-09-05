// // 유저 테이블 컴포넌트

// // app/components/UserTable.js
// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import { format } from 'date-fns';



// function UserTable({ users, sortColumn, sortDirection, handleSort, handleUpdate, handleDelete,handleOpenAnotherDialog }) {
//     return (
//         <TableContainer component={Paper}
//             style={{
//                 marginTop: '30px',
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
//                                 docsNumber
//                             </TableSortLabel>
//                         </TableCell>
//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'name'}
//                                 direction={sortColumn === 'name' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('name')}
//                             >
//                                 name
//                             </TableSortLabel>
//                         </TableCell>
//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'Department'}
//                                 direction={sortColumn === 'Department' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('Department')}
//                             >
//                                 Department
//                             </TableSortLabel>
//                         </TableCell>
//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'SwName'}
//                                 direction={sortColumn === 'SwName' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('SwName')}
//                             >
//                                 SwName
//                             </TableSortLabel>
//                         </TableCell>

//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'period'}
//                                 direction={sortColumn === 'period' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('period')}
//                             >
//                                 period
//                             </TableSortLabel>
//                         </TableCell>

//                         <TableCell className='table-header'>
//                             <TableSortLabel
//                                 active={sortColumn === 'licensKey'}
//                                 direction={sortColumn === 'licensKey' ? sortDirection : 'asc'}
//                                 onClick={() => handleSort('licensKey')}
//                             >
//                                 licensKey
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
//                         <TableCell className='table-header' sx={{ width: '10px' }}>Update</TableCell>
//                         <TableCell className='table-header'>Delete</TableCell>
//                         <TableCell className='table-header'>첨부</TableCell>
//                         <TableCell className='table-header'>조회</TableCell>

//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {users.map(user => (
//                         <TableRow key={user.id}>
//                             <TableCell>{user.id}</TableCell>
//                             <TableCell>{user.docsNumber}</TableCell>
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
//                                 {/* <Button onClick={handleOpenAnotherDialog}>다른 다이얼로그 열기</Button> */}
//                                 <Button className='button-blue' onClick={() => handleOpenAnotherDialog(user)}>
//                                     모달test
//                                 </Button>
//                             </TableCell>

//                             <TableCell>
//                                 <Button className='button-red' onClick={() => handleDelete(user.id)}>삭제</Button>
//                             </TableCell>

//                             <TableCell>
//                                 <input
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

//추가전
// 유저 테이블 컴포넌트

// app/components/UserTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import TableSortLabel from '@mui/material/TableSortLabel';
import { format } from 'date-fns';



function UserTable({ users, sortColumn, sortDirection, handleSort, handleUpdate, handleDelete }) {
    return (
        <TableContainer component={Paper}
            style={{
                marginTop: '30px',
            }}>
            <Table sx={{ '& .MuiTableCell-root': { padding: '8px' } }}>
                {/* 테이블 간격 패딩 전체조정 '8px' */}
                <TableHead>
                    <TableRow  >
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
                                active={sortColumn === 'docsNumber'}
                                direction={sortColumn === 'docsNumber' ? sortDirection : 'asc'}
                                onClick={() => handleSort('docsNumber')}
                            >
                                문서번호
                            </TableSortLabel>
                        </TableCell>
                        <TableCell className='table-header'>
                            <TableSortLabel
                                active={sortColumn === 'name'}
                                direction={sortColumn === 'name' ? sortDirection : 'asc'}
                                onClick={() => handleSort('name')}
                            >
                                이름
                            </TableSortLabel>
                        </TableCell>
                        <TableCell className='table-header'>
                            <TableSortLabel
                                active={sortColumn === 'Department'}
                                direction={sortColumn === 'Department' ? sortDirection : 'asc'}
                                onClick={() => handleSort('Department')}
                            >
                                부서
                            </TableSortLabel>
                        </TableCell>
                        <TableCell className='table-header'>
                            <TableSortLabel
                                active={sortColumn === 'SwName'}
                                direction={sortColumn === 'SwName' ? sortDirection : 'asc'}
                                onClick={() => handleSort('SwName')}
                            >
                                Sw명
                            </TableSortLabel>
                        </TableCell>

                        <TableCell className='table-header'>
                            <TableSortLabel
                                active={sortColumn === 'period'}
                                direction={sortColumn === 'period' ? sortDirection : 'asc'}
                                onClick={() => handleSort('period')}
                            >
                                기간
                            </TableSortLabel>
                        </TableCell>

                        <TableCell className='table-header'>
                            <TableSortLabel
                                active={sortColumn === 'licensKey'}
                                direction={sortColumn === 'licensKey' ? sortDirection : 'asc'}
                                onClick={() => handleSort('licensKey')}
                            >
                                라이센스키
                            </TableSortLabel>
                        </TableCell>

                        <TableCell className='table-header'>
                            <TableSortLabel
                                active={sortColumn === 'madeCompany'}
                                direction={sortColumn === 'madeCompany' ? sortDirection : 'asc'}
                                onClick={() => handleSort('madeCompany')}
                            >
                                제조사
                            </TableSortLabel>
                        </TableCell>

                        <TableCell className='table-header'>
                            <TableSortLabel
                                active={sortColumn === 'etc'}
                                direction={sortColumn === 'etc' ? sortDirection : 'asc'}
                                onClick={() => handleSort('etc')}
                            >
                                기타내역
                            </TableSortLabel>
                        </TableCell>

                        <TableCell className='table-header'>
                            <TableSortLabel
                                active={sortColumn === 'createdAt'}
                                direction={sortColumn === 'createdAt' ? sortDirection : 'asc'}
                                onClick={() => handleSort('createdAt')}
                            >
                                생성일
                            </TableSortLabel>
                        </TableCell>
                        <TableCell className='table-header' sx={{ width: '10px' }}>수정</TableCell>
                        <TableCell className='table-header'>삭제</TableCell>
                        <TableCell className='table-header'>첨부</TableCell>
                        <TableCell className='table-header'>조회</TableCell>
                        {/* <TableCell className='table-header'>TEST</TableCell> */}

                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.docsNumber}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.Department}</TableCell>
                            <TableCell>{user.SwName}</TableCell>
                            <TableCell>{user.period}</TableCell>
                            <TableCell>{user.licensKey}</TableCell>

                            <TableCell>{user.madeCompany}</TableCell>
                            <TableCell>{user.etc}</TableCell>
                            <TableCell>  {format(new Date(user.createdAt), 'yyyy-MM-dd HH:mm')} {/* 날짜 포맷팅 */}</TableCell>


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
                                    <Button className='button-bg' component="span">
                                        첨부
                                    </Button>
                                </label>
                            </TableCell>
                            <TableCell>
                                <Button
                                    className='button-orange'
                                    // variant="contained"
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
