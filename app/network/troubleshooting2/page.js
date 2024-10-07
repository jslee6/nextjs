
'use client'

// import React, { useEffect, useState } from 'react';

// components/ReportForm.js
import { useEffect, useState } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';

const ReportForm = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            const response = await fetch('/api/reports');
            const data = await response.json();
            setReports(data);
        };

        fetchReports();
    }, []);

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>장애 관리 리포트</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField fullWidth label="문서번호" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="작성자" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="장애 내용"
                        variant="outlined"
                        multiline
                        rows={4}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="특이 사항"
                        variant="outlined"
                        multiline
                        rows={4}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary">저장</Button>
                </Grid>
            </Grid>
            <Box mt={4}>
                <Typography variant="h5">리포트 목록</Typography>
                <ul>
                    {reports.map((report) => (
                        <li key={report.id}>{report.reportNo} - {report.details}</li>
                    ))}
                </ul>
            </Box>
        </Box>
    );
};

export default ReportForm;
