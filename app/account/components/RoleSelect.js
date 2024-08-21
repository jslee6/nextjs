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
                  <MenuItem sx={{ minWidth: '100%' }} value="all">All</MenuItem> 
                  {/* 최소 픽셀 설정했어도, 상단에서 비율로 설정하면 적용되지않음 */}
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
            </Select>
        </FormControl>
    );
};

export default RoleSelect;
