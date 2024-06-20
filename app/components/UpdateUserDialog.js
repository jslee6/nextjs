import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const UpdateUserDialog = ({ open, onClose, selectedUser, onSaveUpdate }) => {
  const [updatedUser, setUpdatedUser] = useState(selectedUser);

  const handleInputChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSaveUpdate = async () => {
    try {
      const response = await fetch('/api/user/put', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...updatedUser, age: parseInt(updatedUser.age, 10) }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedUserData = await response.json();
      onSaveUpdate(updatedUserData);
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>사용자 정보 수정</DialogTitle>
      <DialogContent>
        <TextField
          name="firstName"
          label="First Name"
          value={updatedUser?.firstName || ''}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={updatedUser?.lastName || ''}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          value={updatedUser?.email || ''}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          name="age"
          label="Age"
          value={updatedUser?.age || ''}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          name="address"
          label="Address"
          value={updatedUser?.address || ''}
          onChange={handleInputChange}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSaveUpdate} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateUserDialog;
