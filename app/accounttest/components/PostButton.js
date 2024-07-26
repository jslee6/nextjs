// PostButton.js
import React, { useState } from 'react';
import { Button } from '@mui/material';
import Enroll from '../enroll/page';

function PostButton() {
    const [post, setpost] = useState(false); // 상태값 Ture/False state
    //작성 닫기버튼으로 인해 [추가 !=preState]
    const handlePostButtonClick = () => {
        setpost((prevState) => !prevState);
    }; //닫기버튼으로 인해 추가


    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handlePostButtonClick}
            >
                {post ? '닫기' : '작성하기'}
                {/* 삼항연산자로 처리 */}
            </Button>
            {post && <Enroll />}
            {/* 이게 잘이해안됨 -> post, state 상태값 T/F 로 삼항연산자 표기*/}


        </div>
    );
}

export default PostButton;

