// 미구현,  애는 불필요할듯

import React from 'react';
import { Stack, Pagination } from '@mui/material';

function PaginationComp({ totalPages, currentPage, handlePageChange }) {
    return (
        <Stack spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
            />
        </Stack>
    );
}

export default PaginationComp;