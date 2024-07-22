import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const RoleSelect = ({ role, setRole }) => {
    return (
        <FormControl variant="outlined" fullWidth sx={{ mt: 2 }}>
            <InputLabel>권한 선택</InputLabel>
            <Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                label="Role"
            >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
            </Select>
        </FormControl>
    );
};

export default RoleSelect;