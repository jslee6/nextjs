// PostBt.js

'use client'

import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import TableWrite from './TableWrite';

export default function PostBt() {
    const [post, setPost] = useState(false);

    const handlePostButtonClick = () => {
        setPost((prevState) => !prevState);
    };

    return (
        <Box>
            <Button
                variant="contained"
                color="primary"
                onClick={handlePostButtonClick}
            >
                {post ? '닫기' : '작성하기'}
            </Button>
            {post && <TableWrite />}
        </Box>
    );
}


