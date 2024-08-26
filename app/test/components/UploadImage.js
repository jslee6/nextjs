'use client';

import { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function UploadImage() {
  const [userId, setUserId] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('file', file);

    await fetch('/api/uploadTest', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div>
      <TextField
        label="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Upload Image</Button>
    </div>
  );
}
