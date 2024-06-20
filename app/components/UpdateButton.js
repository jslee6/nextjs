// app/components/UpdateButton.js
import React, { useState } from 'react';

const UpdateButton = ({ id, data }) => {
  const [updatedData, setUpdatedData] = useState(data);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`/api/data/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const updatedData = await response.json();
        console.log('Data updated:', updatedData);
      } else {
        console.error('Error updating data:', response.status);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h3>Update Data</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
      }}>
        {Object.keys(updatedData).map((key) => (
          <div key={key}>
            <label htmlFor={key}>{key}:</label>
            <input
              type="text"
              id={key}
              name={key}
              value={updatedData[key]}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateButton;
