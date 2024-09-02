// ExcelExportButton.js
import React from 'react';
import { Button } from '@mui/material';
import * as XLSX from 'xlsx';

const ExcelExport = ({ users }) => {
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(users);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, 'users_data.xlsx');
    };

    return (
        <Button variant="outlined" onClick={exportToExcel}>
            엑셀로 내보내기
        </Button>
    );
};

export default ExcelExport;
