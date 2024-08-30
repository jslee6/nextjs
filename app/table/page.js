//유즈라우터 학습

'use client';

import { useRouter } from 'next/navigation'; // App Router에서는 next/navigation 사용
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  { id: 1, name: 'Row 1', value: 'Value 1' },
  { id: 2, name: 'Row 2', value: 'Value 2' },
  { id: 3, name: 'Row 3', value: 'Value 3' },
];

export default function BasicTable() {

  //** 유즈 라우터를 이용해서 id값 전달 */

  const router = useRouter();

  const handleRowClick = (id) => {
    // 특정 페이지로 이동하면서 id 값을 전달
    router.push(`/details/${id}`);
  };
  //** 유즈 라우터를 이용해서 id값 전달 */

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              hover
              onClick={() => handleRowClick(row.id)} // 행 클릭 시 handleRowClick 호출
              sx={{ cursor: 'pointer' }} // 커서 모양 변경
            >


              
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
