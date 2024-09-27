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
      body: JSON.stringify({ id }), // 삭제할 ID를 body에 포함
    });

    if (response.ok) {
      setRowData((prevData) => prevData.filter(row => row.id !== id)); // 삭제 후 상태 업데이트
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
    { headerName: "Created At", field: "createdAt", valueGetter: params => new Date(params.data.createdAt).toLocaleString() },
    { headerName: "Updated At", field: "updatedAt", valueGetter: params => new Date(params.data.updatedAt).toLocaleString() },
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
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
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


// 1. cellRendererFramework 사용 방법 수정
// AG Grid에서 버튼을 포함한 셀을 렌더링할 때는 cellRenderer 또는 cellRendererFramework 속성을 사용할 수 있습니다. 아래의 코드를 사용하여 삭제 버튼을 올바르게 렌더링하도록 수정하겠습니다

// 주요 수정 사항
// cellRenderer 속성 사용: cellRendererFramework 대신 cellRenderer를 사용하여 삭제 버튼을 생성합니다. 이 방식은 간단한 JSX를 반환하는 데 적합합니다.
// 버튼이 제대로 렌더링되도록 설정: 버튼이 클릭되었을 때 handleDelete 함수가 호출되도록 설정합니다.