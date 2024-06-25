'use client'

import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination, TablePagination } from '@mui/material';


export default function TablePaginationDemo() {
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    // 여기에서 Rows per page 옵션을 정의합니다.
    const rowsPerPageOptions = [5, 10, 15];
  
    return (
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        // Rows per page 옵션을 전달합니다.
        rowsPerPageOptions={rowsPerPageOptions}
      />
    );
  }
  