// app/imgtable/componets/SearchBar.js

import React from 'react';
import { TextField, Button, Stack, Link } from '@mui/material';
import RoleSelect from './RoleSelect';
import AccountHistoryComponent from '@/app/test/temp5/page';

function SearchBar({ role, setRole, searchId, setSearchId, searchTerm, setSearchTerm, handleSearchBoth }) {
    return (
        <Stack direction="row" spacing={2} sx={{ width: '49.5%' }}>
            {/* <RoleSelect role={role} setRole={setRole} /> */}
            <TextField
                variant="outlined"
                label="ID 검색"
                fullWidth
                sx={{ width: '200%', mt: 2 }}
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
            />
            
            <TextField
                variant="outlined"
                label="전체검색"
                fullWidth
                sx={{ width: '200%', mt: 2 }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className='button-blue' variant="contained" onClick={handleSearchBoth} sx={{ mt: 2 }}>검색</Button>
            {/* <Button className='button-blue' variant="contained" sx={{ width: '50px', mt: 2 }} component={Link} href="/account/accountHistory">수정이력</Button> */}
            {/* D:\self\nextjs\app\account\accountHistory\page.js */}
        </Stack>
    );
}

export default SearchBar;