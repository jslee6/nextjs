// // components/AccountDialog.js
// import React from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

// // const AccountDialog = ({ open, onClose, user, onChange, onSave }) => {
// const testDialog = ({ open, onClose, sw, onChange, onSave }) => {
//     return (
//         <Dialog open={open} onClose={onClose}>
//             <DialogTitle>사용자 정보 수정</DialogTitle>
//             <DialogContent>
//                 {/* <TextField
//                     name="userId"
//                     label="아이디"
//                     value={account?.userId || ''}
//                     onChange={onChange}
//                     margin="normal"
//                 /> */}

//                 <TextField
//                     name="id"
//                     label="아이디"
//                     value={sw?.id || ''}
//                     onChange={onChange}
//                     margin="normal" 무명

//                     disabled // 아이디 수정불가
//                 />

//                 <TextField
//                     name="docsNumber"
//                     label="문서번호"
//                     value={sw?.docsNumber || ''}
//                     onChange={onChange}
//                     margin="normal"
//                 />

//                 <TextField
//                     name="SwuserID"
//                     label="유저ID"
//                     value={sw?.SwuserID || ''}
//                     onChange={onChange}
//                     margin="normal"
//                 />
//                 <TextField
//                     name="name"
//                     label="이름"
//                     value={sw?.name || ''}
//                     onChange={onChange}
//                     margin="normal"
//                 />

//                 <TextField
//                     name="Department"
//                     label="부서"
//                     value={sw?.Department || ''}
//                     onChange={onChange}
//                     margin="normal"
//                 />

//                 <TextField
//                     name="SwName"
//                     label="SW명"
//                     value={sw?.SwName || ''}
//                     onChange={onChange}
//                     margin="normal"
//                 />

//                 <TextField
//                     name="period"
//                     label="기간여부"
//                     value={sw?.period || ''}
//                     onChange={onChange}
//                     margin="normal"
//                 />

//                 <TextField
//                     name="licensKey"
//                     label="라이센스"
//                     value={sw?.licensKey || ''}
//                     onChange={onChange}
//                     margin="normal"
//                 />

//                 <TextField
//                     name="madeCompany"
//                     label="제조사"
//                     value={sw?.madeCompany || ''}
//                     onChange={onChange}
//                     margin="normal"
//                 />

//                 <TextField
//                     name="etc"
//                     label="기타내역"
//                     value={sw?.etc || ''}
//                     onChange={onChange}
//                     margin="normal"
//                 />


//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={onClose}>Cancel</Button>
//                 <Button onClick={onSave} color="primary">
//                     Save
//                 </Button>
//             </DialogActions>
//         </Dialog>
//     );
// };

// export default testDialog;


// components/AccountDialog.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

// const AccountDialog = ({ open, onClose, user, onChange, onSave }) => {
const TestDialog = ({ open, onClose, sw, onChange, onSave }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>사용자 정222보 수정</DialogTitle>
            <DialogContent>
                {/* <TextField
                    name="userId"
                    label="아이디"
                    value={account?.userId || ''}
                    onChange={onChange}
                    margin="normal"
                /> */}

                <TextField
                    name="id"
                    label="아이디"
                    value={sw?.id || ''}
                    onChange={onChange}
                    margin="normal"

                    disabled // 아이디 수정불가
                />

                <TextField
                    name="docsNumber"
                    label="문서번호"
                    value={sw?.docsNumber || ''}
                    onChange={onChange}
                    margin="normal"
                />

                <TextField
                    name="SwuserID"
                    label="유저ID"
                    value={sw?.SwuserID || ''}
                    onChange={onChange}
                    margin="normal"
                />
                <TextField
                    name="name"
                    label="이름"
                    value={sw?.name || ''}
                    onChange={onChange}
                    margin="normal"
                />

                <TextField
                    name="Department"
                    label="부서"
                    value={sw?.Department || ''}
                    onChange={onChange}
                    margin="normal"
                />

                <TextField
                    name="SwName"
                    label="SW명"
                    value={sw?.SwName || ''}
                    onChange={onChange}
                    margin="normal"
                />

                <TextField
                    name="period"
                    label="기간여부"
                    value={sw?.period || ''}
                    onChange={onChange}
                    margin="normal"
                />

                <TextField
                    name="licensKey"
                    label="라이센스"
                    value={sw?.licensKey || ''}
                    onChange={onChange}
                    margin="normal"
                />

                <TextField
                    name="madeCompany"
                    label="제조사"
                    value={sw?.madeCompany || ''}
                    onChange={onChange}
                    margin="normal"
                />

                <TextField
                    name="etc"
                    label="기타내역"
                    value={sw?.etc || ''}
                    onChange={onChange}
                    margin="normal"
                />


            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onSave} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TestDialog;
