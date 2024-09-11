// 권한 안맞을시 리다이렉트 되는 페이지

'use client'

import { Typography } from "@mui/material";

export default function RoleDeny() {
    return (
        <> 
            <br />
            <br />     
            <Typography sx={{
                fontSize: "70px",
                textAlign: "center", 
                color: "#5e7bc9",
                mt: 20
            }}>
                로그인 후 사용 하세요.
            </Typography>
          
            {/* <Typography sx={{
                fontSize: "50px",
                textAlign: "center",
                // color: "#1976D2",
                mt: 5, }}>
                권한을 확인하세요.
            </Typography> */}
        </>
    );
}
