// 권한 안맞을시 리다이렉트 되는 페이지

'use client'

import { Typography } from "@mui/material";


export default function RoleDeny() {
    return (

        <>
            
            <br></br>
            <br></br>
            <Typography className="typo-sidebar" component="span">관리자만 접속 가능 합니다.</Typography> {/* 스타일 적용 */}

        </>

    );
}