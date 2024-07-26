// SearchBar.js
import React from 'react';
import { TextField, Button, Stack } from '@mui/material';
import RoleSelect from './RoleSelect';

function SearchBar({ role, setRole, searchId, setSearchId, searchTerm, setSearchTerm, handleSearchBoth }) {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ width: '60%' }}>
            <RoleSelect role={role} setRole={setRole} />
            <TextField
                variant="outlined"
                label="ID 검색"
                fullWidth
                sx={{ width: '300%', mt: 2 }}
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
            />
            <TextField
                variant="outlined"
                label="전체검색"
                fullWidth
                sx={{ width: '300%', mt: 2 }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="contained" onClick={handleSearchBoth} sx={{ mt: 2 }}>검색</Button>
        </Stack>
    );
}

export default SearchBar;