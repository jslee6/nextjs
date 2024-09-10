//app\test\component\onoff.js

// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, FormControlLabel } from '@mui/material';

// const DataTable = ({ columns: initialColumns }) => {
//   const [columns, setColumns] = useState(initialColumns);
  
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
//             <TableRow>
//               {columns.map((column) => (
//                 column.isEnabled && (
//                   <TableCell key={column.id}>
//                     {/* 데이터 예시 */}
//                     {column.id === 'name' && '홍길동'}
//                     {column.id === 'age' && '30'}
//                     {column.id === 'email' && 'hong@example.com'}
//                   </TableCell>
//                 )
//               ))}
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default DataTable;

'use client'

import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const ColumnToggle = ({ columns, toggleColumn }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      {columns.map((column) => (
        <FormControlLabel
          key={column.id}
          control={
            <Checkbox
              checked={column.isEnabled}
              onChange={() => toggleColumn(column.id)}
            />
          }
          label={column.label}
        />
      ))}
    </div>
  );
};

export default ColumnToggle;
