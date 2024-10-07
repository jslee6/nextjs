

// // 'use client'

// // import { TextField, Button, Grid, Typography, Box } from '@mui/material';
// // import React from 'react';

// // const InputTrouble = () => {
// //     return (
// //         <Box sx={{ padding: 2 }}>
// //             <Typography variant="h4" gutterBottom>장애 관리 리포트</Typography>

// //             <Box sx={{ border: '1px solid black', borderRadius: '0.5px', padding: 2 }}>
// //                 <Grid container spacing={2}>
// //                     <Grid item xs={4}>
// //                         <Typography variant="body1">문서번호</Typography>
// //                         <TextField fullWidth variant="outlined" placeholder="문서번호를 입력하세요." />
// //                     </Grid>
// //                     <Grid item xs={4}>
// //                         <Typography variant="body1">작성일</Typography>
// //                         <TextField fullWidth variant="outlined" placeholder="작성일을 입력하세요." />
// //                     </Grid>

// //                     <Grid item xs={4}>
// //                         <Typography variant="body1">구분</Typography>
// //                         <TextField fullWidth variant="outlined" placeholder="구분을 입력하세요." />
// //                     </Grid>
// //                     <Grid item xs={4}>
// //                         <Typography variant="body1">작성자</Typography>
// //                         <TextField fullWidth variant="outlined" placeholder="점검자를 입력하세요." />
// //                     </Grid>
// //                     <Grid item xs={4}>
// //                         <Typography variant="body1">확인자</Typography>
// //                         <TextField fullWidth variant="outlined" placeholder="확인자를 입력하세요." />
// //                     </Grid>
// //                     <Grid item xs={12}>
// //                         <Typography variant="body1">장애 내용</Typography>
// //                         <TextField
// //                             fullWidth
// //                             variant="outlined"
// //                             multiline
// //                             rows={4}
// //                             placeholder="장애 내용을 입력하세요."
// //                         />
// //                     </Grid>
// //                     <Grid item xs={12}>
// //                         <Typography variant="body1">특이 사항</Typography>
// //                         <TextField
// //                             fullWidth
// //                             variant="outlined"
// //                             multiline
// //                             rows={4}
// //                             placeholder="특이 사항을 입력하세요."
// //                         />
// //                     </Grid>
// //                     <Grid item xs={12}>
// //                         <Button variant="contained" color="primary">저장</Button>
// //                     </Grid>
// //                 </Grid>
// //             </Box>
// //         </Box>
// //     );
// // }

// // export default InputTrouble;


// //app/network/troubleshooting/page.js

// import React from 'react';
// import { TextField, Button, Select, MenuItem, Grid, Container, Typography, Paper, Box, FormControl, InputLabel } from '@mui/material';

// const InputTrouble = () => {
//     return (
//         <Container maxWidth="xl" >




//             <Paper elevation={3} sx={{ padding: '20px', marginTop: '15px', }}>
//                 <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
//                     장애관리
//                 </Typography>


//                 <Paper elevation={3} sx={{ padding: '20px', marginTop: '15px', }}>

//                     {/* Document Section */}
//                     <Grid container spacing={1}>
//                         <Grid item xs={6}>
//                             <Typography variant="body1">문서번호</Typography>
//                             <TextField fullWidth variant="outlined" />
//                         </Grid>
//                         <Grid item xs={6}>
//                             <Typography variant="body1">작성일자</Typography>
//                             <TextField fullWidth variant="outlined" type="date" />
//                         </Grid>

//                         <Grid item xs={6}>
//                             <Typography variant="body1">작성자</Typography>
//                             <TextField fullWidth variant="outlined" />
//                         </Grid>
//                         <Grid item xs={6}>
//                             <FormControl fullWidth variant="outlined">
//                                 <Typography variant="body1">구분</Typography>
//                                 <Select defaultValue="" displayEmpty>
//                                     <MenuItem value="" disabled>
//                                         ==선택==
//                                     </MenuItem>
//                                     <MenuItem value="Option 1">서버</MenuItem>
//                                     <MenuItem value="Option 2">네트워크</MenuItem>
//                                     <MenuItem value="Option 3">DB</MenuItem>
//                                     <MenuItem value="Option 4">기타</MenuItem>
//                                 </Select>
//                             </FormControl>
//                         </Grid>
//                         <Grid item xs={6}>
//                             <Typography variant="body1">점검자</Typography>
//                             <TextField fullWidth variant="outlined" />
//                         </Grid>
//                         <Grid item xs={6}>
//                             <Typography variant="body1">확인자</Typography>
//                             <TextField fullWidth variant="outlined" />
//                         </Grid>
//                     </Grid>

//                     {/* Reception Section */}|

//                     <Box mt={2}>
//                         <Typography variant="h5" gutterBottom >접수 시 기재사항</Typography>
//                         <Grid container spacing={1}>
//                             <Grid item xs={6}>
//                                 <Typography variant="body1">접수일자</Typography>
//                                 <TextField
//                                     fullWidth
//                                     variant="outlined"
//                                     type="date"
//                                     InputLabelProps={{
//                                         shrink: true,
//                                     }}
//                                 />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <Typography variant="body1">발생일자</Typography>
//                                 <TextField
//                                     fullWidth
//                                     variant="outlined"
//                                     type="date"  //달력형태로 바꿔줌
//                                     InputLabelProps={{
//                                         shrink: true,
//                                     }}
//                                 />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <Typography variant="body1">요청부서</Typography>
//                                 <TextField fullWidth variant="outlined" />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <Typography variant="body1">요청자</Typography>
//                                 <TextField fullWidth variant="outlined" />
//                             </Grid>
//                             <Grid item xs={6}>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <Typography variant="body1">장애 내용</Typography>
//                                 <TextField
//                                     fullWidth
//                                     label="샘플TEXT: 외부 DNS 장애발생"
//                                     variant="outlined"
//                                     multiline
//                                     rows={2}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <Typography variant="body1">특이 사항</Typography>
//                                 <TextField
//                                     fullWidth
//                                     label=" 샘플 TEXT: 24.05 유사 이슈발생 "
//                                     variant="outlined"
//                                     multiline
//                                     rows={2}
//                                 />
//                             </Grid>
//                         </Grid>
//                     </Box>

//                     <Box mt={3}>
//                         <Typography variant="h5" gutterBottom >조치 시 기재사항</Typography>
//                         <Grid container spacing={1}>
//                             <Grid item xs={6}>
//                                 <Typography variant="body1">조치일자</Typography>
//                                 <TextField
//                                     fullWidth
//                                     variant="outlined"
//                                     type="date"  //달력형태로 바꿔줌
//                                     InputLabelProps={{
//                                         shrink: true,
//                                     }}
//                                 />
//                             </Grid>


//                             <Grid item xs={12}>
//                                 <Typography variant="body1">장애 원인</Typography>
//                                 <TextField
//                                     fullWidth
//                                     label="샘플TEXT: 외부 DNS 장애발생"
//                                     variant="outlined"
//                                     multiline
//                                     rows={2}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <Typography variant="body1">조치</Typography>
//                                 <TextField
//                                     fullWidth
//                                     label=" 샘플 TEXT: 24.05 유사 이슈발생 "
//                                     variant="outlined"
//                                     multiline
//                                     rows={3}
//                                 />
//                             </Grid>
//                         </Grid>
//                     </Box>

//                     {/* Buttons */}
//                     <Box mt={4} display="flex" justifyContent="space-between">
//                         <Button variant="contained" color="primary">
//                             저장
//                         </Button>
//                     </Box>

//                 </Paper>
//             </Paper>
//         </Container>
//     );
// };

// export default InputTrouble;


// import React from 'react';
// import { TextField, Button, Select, MenuItem, Grid, Container, Typography, Paper, Box, FormControl } from '@mui/material';

// const InputTrouble = () => {
//     return (
//         <Container maxWidth="xl">
//             <Paper elevation={3} sx={{ padding: '20px', marginTop: '15px' }}>
//                 <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
//                     장애관리
//                 </Typography>

//                 <Grid container spacing={2}>
//                     {/* 왼쪽 그리드: 문서 정보 */}
//                     <Grid item xs={6}>
//                         <Paper elevation={3} sx={{ padding: '20px' }}>
//                             {/* Document Section */}
//                             <Grid container spacing={1}>
//                                 <Grid item xs={12}>
//                                     <Typography variant="body1">문서번호</Typography>
//                                     <TextField fullWidth variant="outlined" />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <Typography variant="body1">작성일자</Typography>
//                                     <TextField fullWidth variant="outlined" type="date" />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <Typography variant="body1">작성자</Typography>
//                                     <TextField fullWidth variant="outlined" />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <FormControl fullWidth variant="outlined">
//                                         <Typography variant="body1">구분</Typography>
//                                         <Select defaultValue="" displayEmpty>
//                                             <MenuItem value="" disabled>==선택==</MenuItem>
//                                             <MenuItem value="Option 1">서버</MenuItem>
//                                             <MenuItem value="Option 2">네트워크</MenuItem>
//                                             <MenuItem value="Option 3">DB</MenuItem>
//                                             <MenuItem value="Option 4">기타</MenuItem>
//                                         </Select>
//                                     </FormControl>
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <Typography variant="body1">점검자</Typography>
//                                     <TextField fullWidth variant="outlined" />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <Typography variant="body1">확인자</Typography>
//                                     <TextField fullWidth variant="outlined" />
//                                 </Grid>
//                             </Grid>
//                         </Paper>
//                     </Grid>

//                     {/* 오른쪽 그리드: 접수 및 조치 정보 */}
//                     <Grid item xs={6}>
//                         <Paper elevation={3} sx={{ padding: '20px' }}>
//                             {/* Reception Section */}
//                             <Box mt={2}>
//                                 <Typography variant="h5" gutterBottom>접수 시 기재사항</Typography>
//                                 <Grid container spacing={1}>
//                                     <Grid item xs={12}>
//                                         <Typography variant="body1">접수일자</Typography>
//                                         <TextField fullWidth variant="outlined" type="date" InputLabelProps={{ shrink: true }} />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <Typography variant="body1">발생일자</Typography>
//                                         <TextField fullWidth variant="outlined" type="date" InputLabelProps={{ shrink: true }} />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <Typography variant="body1">요청부서</Typography>
//                                         <TextField fullWidth variant="outlined" />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <Typography variant="body1">요청자</Typography>
//                                         <TextField fullWidth variant="outlined" />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <Typography variant="body1">장애 내용</Typography>
//                                         <TextField fullWidth label="샘플TEXT: 외부 DNS 장애발생" variant="outlined" multiline rows={2} />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <Typography variant="body1">특이 사항</Typography>
//                                         <TextField fullWidth label="샘플 TEXT: 24.05 유사 이슈발생" variant="outlined" multiline rows={2} />
//                                     </Grid>
//                                 </Grid>
//                             </Box>

//                             {/* Action Section */}
//                             <Box mt={3}>
//                                 <Typography variant="h5" gutterBottom>조치 시 기재사항</Typography>
//                                 <Grid container spacing={1}>
//                                     <Grid item xs={12}>
//                                         <Typography variant="body1">조치일자</Typography>
//                                         <TextField fullWidth variant="outlined" type="date" InputLabelProps={{ shrink: true }} />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <Typography variant="body1">장애 원인</Typography>
//                                         <TextField fullWidth label="샘플TEXT: 외부 DNS 장애발생" variant="outlined" multiline rows={2} />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <Typography variant="body1">조치</Typography>
//                                         <TextField fullWidth label="샘플 TEXT: 24.05 유사 이슈발생" variant="outlined" multiline rows={3} />
//                                     </Grid>
//                                 </Grid>
//                             </Box>
//                         </Paper>
//                     </Grid>
//                 </Grid>

//                 {/* Buttons */}
//                 <Box mt={4} display="flex" justifyContent="space-between">
//                     <Button variant="contained" color="primary">저장</Button>
//                 </Box>
//             </Paper>
//         </Container>
//     );
// };

// export default InputTrouble;

import React from 'react';
import { TextField, Button, Select, MenuItem, Grid, Container, Typography, Paper, Box, FormControl } from '@mui/material';

const InputTrouble = () => {
    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ padding: '20px', marginTop: '10px' , border: '1px solid black',backgroundColor: '#e6f0f6' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    장애관리
                </Typography>

                <Grid container spacing={2}>
                    {/* 상단: 문서 정보 */}
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ padding: '20px' }}>

                            <Grid container spacing={2}>
                                <Grid item xs={2.4}>
                                    <Typography variant="body1">문서번호</Typography>
                                    <TextField fullWidth variant="outlined" />
                                </Grid>
                                <Grid item xs={2.4}>
                                    <Typography variant="body1">작성일자</Typography>
                                    <TextField fullWidth variant="outlined" type="date" />
                                </Grid>
                            
                                <Grid item xs={2.4}>
                                    <FormControl fullWidth variant="outlined">
                                        <Typography variant="body1">구분</Typography>
                                        <Select defaultValue="" displayEmpty>
                                            <MenuItem value="" disabled>==선택==</MenuItem>
                                            <MenuItem value="Option 1">서버</MenuItem>
                                            <MenuItem value="Option 2">네트워크</MenuItem>
                                            <MenuItem value="Option 3">DB</MenuItem>
                                            <MenuItem value="Option 4">기타</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={2.4}>
                                    <Typography variant="body1">작성자</Typography>
                                    <TextField fullWidth variant="outlined" />
                                </Grid>
                             
                                <Grid item xs={2.4}>
                                    <Typography variant="body1">확인자</Typography>
                                    <TextField fullWidth variant="outlined" />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    {/* 좌측하단: 접수 시 기재사항 */}
                    <Grid item xs={6}>
                        <Paper elevation={3} sx={{ padding: '20px' }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>접수 시 기재사항</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body1">접수일자</Typography>
                                    <TextField fullWidth variant="outlined" type="date"  />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1">발생일자</Typography>
                                    <TextField fullWidth variant="outlined" type="date"  />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1">요청부서</Typography>
                                    <TextField fullWidth variant="outlined" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1">요청자</Typography>
                                    <TextField fullWidth variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1">장애 내용</Typography>
                                    <TextField fullWidth label="샘플TEXT: 그룹웨어 접속 불가" variant="outlined" multiline rows={2} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1">특이 사항</Typography>
                                    <TextField fullWidth label="샘플 TEXT: 24.05 유사 이슈발생" variant="outlined" multiline rows={2} />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    {/* 우측하단: 조치 시 기재사항 */}
                    <Grid item xs={6}>
                        <Paper elevation={3} sx={{ padding: '20px' }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>조치 시 기재사항</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="body1">조치일자</Typography>
                                    <TextField fullWidth variant="outlined" type="date" InputLabelProps={{ shrink: true }} />
                                </Grid>



                                <Grid item xs={12}>
                                    <Typography variant="body1">장애 원인</Typography>
                                    <TextField fullWidth label="샘플TEXT: 외부 DNS 장애발생" variant="outlined" multiline rows={4} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1">조치 사항</Typography>
                                    <TextField fullWidth label="EX) 외부 DNS 서비스 재실행" variant="outlined" multiline rows={4} />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Buttons */}
            </Paper>
            <Box mt={2} display="flex" justifyContent="flex-end">
                    <Button variant="contained" color="primary">저장</Button>
                </Box>
        </Container>
    );
};

export default InputTrouble;
