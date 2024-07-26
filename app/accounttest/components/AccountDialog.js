// components/AccountDialog.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

// const AccountDialog = ({ open, onClose, user, onChange, onSave }) => {
const AccountDialog = ({ open, onClose, account, onChange, onSave }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>사용자 정보 수정</DialogTitle>
            <DialogContent>
                <TextField
                    name="userId"
                    label="아이디"
                    value={account?.userId || ''}
                    onChange={onChange}
                    margin="normal"
                />
                <TextField
                    name="password"
                    label="암호"
                    value={account?.password || ''}
                    onChange={onChange}
                    margin="normal"
                />
                <TextField
                    name="role"
                    label="역활"
                    value={account?.role || ''}
                    onChange={onChange}
                    margin="normal"
                />
                <TextField
                    name="email"
                    label="이메일"
                    value={account?.email || ''}
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

export default AccountDialog;
