'use client'

import { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridRowModesModel } from '@mui/x-data-grid';
import UserDialog from '../components/UserDialog';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const DataGridPage = () => {
  const [selectedUser, setSelectedUser] = useState(null); // get 관련
    
  const [rows, setRows] = useState([]);    // 업데이트 관련
  const [open, setOpen] = useState(false);   // 업데이트 관련



  // get , 데이터 가져옴
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/user/get');
      const data = await response.json();
      setRows(data);
    };
    fetchData();
  }, []);

  //delete , 
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
  // delete

  //삭제로직


  const cuserColumns = [
    { field: 'id', headerName: 'ID', width: 200 },
      //아이디 값을 주석 처리해서 공간확보가능
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 100 },
    { field: 'age', headerName: 'Age', width: 90 },
    { field: 'address', headerName: 'Address', width: 150 },
    { field: 'createdAt', headerName: 'Created At', width: 160 },
    { field: 'updatedAt', headerName: 'Updated At', width: 100 },
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
            //필드 Mapping 및 온클릭 이벤트 추가
        />
        </div>
      ),
    },
];

//// mui 버튼 기준

//         <div>
//           <Button variant="contained" color="error" onClick={() => handleDelete(params.row.id)}>
//             삭제
//           </Button>
//           <Button variant="contained" color="primary" onClick={() => handleUpdate(params.row)}>
//             수정
//           </Button>
//         </div>
//       ),
//     },
//   ]; 

//// mui 버튼 기준
  

  //업데이트
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
  }; // 업데이트

  // 페이지네이션 및 유저 다이얼로그 컴포넌트 사용
  return (
    <Container style={{ width: '100%', maxWidth: '80%', marginTop: '50px' }}>
      {/* <Container style={{ width: '100%', maxWidth: 'none', marginTop: '50px' }}> */}
      {/* 세로 사이즈 조정 필요시 */}
    
      <div style={{ width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={cuserColumns}
          pageSize={5}
          rowsPerPageOptions={[5]} // 페이지당 로우수 옵션
          pagination
          autoHeight
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

// 페이지네이션 및 유저 다이얼로그 컴포넌트 사용

export default DataGridPage;
