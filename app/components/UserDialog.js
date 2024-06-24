// components/UserDialog.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const UserDialog = ({ open, onClose, user, onChange, onSave }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>사용자 정보 수정</DialogTitle>
            <DialogContent>
                <TextField
                    name="firstName"
                    label="First Name"
                    value={user?.firstName || ''}
                    onChange={onChange}
                    margin="normal"
                />
                <TextField
                    name="lastName"
                    label="Last Name"
                    value={user?.lastName || ''}
                    onChange={onChange}
                    margin="normal"
                />
                <TextField
                    name="email"
                    label="Email"
                    value={user?.email || ''}
                    onChange={onChange}
                    margin="normal"
                />
                <TextField
                    name="age"
                    label="Age"
                    value={user?.age || ''}
                    onChange={onChange}
                    margin="normal"
                />
                <TextField
                    name="address"
                    label="Address"
                    value={user?.address || ''}
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

export default UserDialog;
