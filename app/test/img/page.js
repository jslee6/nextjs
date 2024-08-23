'use client'; // Ensure this is a client-side component

import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(''); // Use 'title' instead of 'name'
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title); // Use 'title' field

    try {
      const res = await fetch('/api/products/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(`Product uploaded with ID: ${data.id}`);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('Error uploading product');
    }
  };

  return (
    <div>
      <h1>Upload Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Title" // Update placeholder to match 'title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
