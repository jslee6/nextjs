'use client'

import { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import UserDialog from '@/app/components/UserDialog';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const DataGridPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/user/get');
      const data = await response.json();
      setRows(data);
    };
    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await fetch('/api/user/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId }),
      });

      const { message } = await response.json();
      console.log(message);

      setRows(rows.filter(row => row.id !== userId));
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleSaveUpdate = async () => {
    try {
      const response = await fetch('/api/user/put', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...selectedUser, age: parseInt(selectedUser.age, 10) }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedUser = await response.json();
      setRows(rows.map(user => (user.id === updatedUser.id ? updatedUser : user)));
      setOpen(false);
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const handleInputChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const cuserColumns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 100 },
    { field: 'age', headerName: 'Age', width: 90 },
    { field: 'address', headerName: 'Address', width: 150 },
    { field: 'createdAt', headerName: 'Created At', width: 200 },
    { field: 'updatedAt', headerName: 'Updated At', width: 200 },
    {
      field: 'actions', headerName: 'Actions', width: 180,
      renderCell: (params) => (
        <div>
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={() => handleUpdate(params.row)}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDelete(params.row.id)}
          />
        </div>
      ),
    },
  ];

  return (
    <Container style={{ width: '100%', maxWidth: '80%', marginTop: '50px' }}>
      <div style={{ width: '100%' }}>
       {/* slots={{ toolbar: GridToolbar }} excel export  */}
        <DataGrid  slots={{ toolbar: GridToolbar }} 
        
        // slots={{ toolbar: GridToolbar }} excel export 
          rows={rows}
          columns={cuserColumns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 7 },
            },
          }}
          pageSizeOptions={[7, 10, 15, 20]}
        />
      </div>
      <UserDialog 
        open={open}
        onClose={() => setOpen(false)}
        user={selectedUser}
        onChange={handleInputChange}
        onSave={handleSaveUpdate}
      />
    </Container>
  );
};

export default DataGridPage;
