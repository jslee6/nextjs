// //app\test\checkoff\page.js
// 'use client'

// import React from 'react';
// import DataTable from '../component/onoff';

// const ParentComponent = () => {
//   const columns = [
//     { id: 'name', label: '이름', isEnabled: true },
//     { id: 'age', label: '나이', isEnabled: true },
//     { id: 'email', label: '이메일', isEnabled: true },
//   ];

//   return (
//     <div>
//       <h1>데이터 테이블</h1>
//       <DataTable columns={columns} />
//     </div>
//   );
// };

// export default ParentComponent;


//********** */
// 'use client'
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, FormControlLabel } from '@mui/material';

// const DataTable = () => {
//   const [data, setData] = useState([]);
//   const [columns, setColumns] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/sw/get');
//         setData(response.data);

//         // 데이터의 첫 번째 객체를 기반으로 컬럼 설정
//         if (response.data.length > 0) {
//           const columnKeys = Object.keys(response.data[0]);
//           const initialColumns = columnKeys.map((key) => ({
//             id: key,
//             label: key.charAt(0).toUpperCase() + key.slice(1), // 첫 글자 대문자로
//             isEnabled: true,
//           }));
//           setColumns(initialColumns);
//         }
//       } catch (error) {
//         console.error('API 요청 실패:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const toggleColumn = (id) => {
//     setColumns((prevColumns) =>
//       prevColumns.map((column) =>
//         column.id === id ? { ...column, isEnabled: !column.isEnabled } : column
//       )
//     );
//   };

//   return (
//     <div>
//       <div style={{ marginBottom: '16px' }}>
//         {columns.map((column) => (
//           <FormControlLabel
//             key={column.id}
//             control={
//               <Checkbox
//                 checked={column.isEnabled}
//                 onChange={() => toggleColumn(column.id)}
//               />
//             }
//             label={column.label}
//           />
//         ))}
//       </div>
      
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 column.isEnabled && (
//                   <TableCell key={column.id}>
//                     {column.label}
//                   </TableCell>
//                 )
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((row, index) => (
//               <TableRow key={index}>
//                 {columns.map((column) => (
//                   column.isEnabled && (
//                     <TableCell key={column.id}>
//                       {row[column.id]}
//                     </TableCell>
//                   )
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default DataTable;


'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ColumnToggle from '../component/ColumnToggle';
const DataTable = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/sw/get');
        setData(response.data);

        // 데이터의 첫 번째 객체를 기반으로 컬럼 설정
        if (response.data.length > 0) {
          const columnKeys = Object.keys(response.data[0]);
          const initialColumns = columnKeys.map((key) => ({
            id: key,
            label: key.charAt(0).toUpperCase() + key.slice(1), // 첫 글자 대문자로
            isEnabled: true,
          }));
          setColumns(initialColumns);
        }
      } catch (error) {
        console.error('API 요청 실패:', error);
      }
    };

    fetchData();
  }, []);

  const toggleColumn = (id) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === id ? { ...column, isEnabled: !column.isEnabled } : column
      )
    );
  };

  return (
    <div>
      <ColumnToggle columns={columns} toggleColumn={toggleColumn} /> {/* ColumnToggle 사용 */}
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                column.isEnabled && (
                  <TableCell key={column.id}>
                    {column.label}
                  </TableCell>
                )
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  column.isEnabled && (
                    <TableCell key={column.id}>
                      {row[column.id]}
                    </TableCell>
                  )
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
