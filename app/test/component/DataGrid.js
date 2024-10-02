// // app/test/component/DataGrid.js
// 'use client'; // 클라이언트 컴포넌트로 설정, ag-grid

// import { useEffect, useState } from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

// const DataGrid = () => {
//   const [rowData, setRowData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('/api/sw/get');
//       const data = await response.json();
//       setRowData(data);
//     };

//     fetchData();
//   }, []);

//   const columnDefs = [
//     { headerName: "ID", field: "id" },
//     { headerName: "Document Number", field: "docsNumber", filter: true },
//     { headerName: "User ID", field: "SwuserID" },
//     { headerName: "Name", field: "name", filter: true },
//     { headerName: "Department", field: "Department" },
//     { headerName: "Software Name", field: "SwName" },
//     { headerName: "Period", field: "period" },
//     { headerName: "Made Company", field: "madeCompany" },
//     { headerName: "License Key", field: "licensKey" },
//     { headerName: "ETC", field: "etc" },
//     { headerName: "Created At", field: "createdAt", valueGetter: params => new Date(params.data.createdAt).toLocaleString() },
//     { headerName: "Updated At", field: "updatedAt", valueGetter: params => new Date(params.data.updatedAt).toLocaleString() },
//   ];

//   return (
//     <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
//       <AgGridReact
//         rowData={rowData}
//         columnDefs={columnDefs}
//         pagination={true}
//         paginationPageSize={10}
//       />
//     </div>
//   );
// };

// export default DataGrid;
// app/test/component/DataGrid.js

'use client'; // 클라이언트 컴포넌트로 설정

import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


const DataGrid = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/sw/get');
      const data = await response.json();
      setRowData(data);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch('/api/sw/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      setRowData((prevData) => prevData.filter(row => row.id !== id));
      alert('사용자가 삭제되었습니다.');
    } else {
      const errorData = await response.json();
      alert(`삭제 실패: ${errorData.error}`);
    }
  };

  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Document Number", field: "docsNumber", filter: true },
    { headerName: "User ID", field: "SwuserID" },
    { headerName: "Name", field: "name", filter: true },
    { headerName: "Department", field: "Department" },
    { headerName: "Software Name", field: "SwName" },
    { headerName: "Period", field: "period" },
    { headerName: "Made Company", field: "madeCompany" },
    { headerName: "License Key", field: "licensKey" },
    { headerName: "ETC", field: "etc" },
    { headerName: "Created At", valueGetter: params => new Date(params.data.createdAt).toLocaleString() },
    { headerName: "Updated At", valueGetter: params => new Date(params.data.updatedAt).toLocaleString() },
    {
      headerName: "Actions",
      cellRenderer: (params) => {
        return (
          <button onClick={() => handleDelete(params.data.id)}>삭제</button>
        );
      },
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  );
};

export default DataGrid;
