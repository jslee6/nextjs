// app/components/EditButton.js
import React from 'react';
import { Button } from '@mui/material';

const EditButton = ({ user, onEdit }) => {
  const handleEdit = () => {
    onEdit(user);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleEdit}>
      Edit
    </Button>
  );
};

export default EditButton;
