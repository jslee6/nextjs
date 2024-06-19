// app/components/DeleteButton.js
import React from 'react';
import { Button } from '@mui/material';

const DeleteButton = ({ userId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch('/api/user/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId }),
      });

      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // } 
      //네트워크 응답확인


      const { message } = await response.json();
      console.log(message);
      onDelete(userId);
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <Button variant="contained" color="error" onClick={handleDelete}>
      삭제
    </Button>
  );
};

export default DeleteButton;
