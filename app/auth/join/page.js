//가입하기 + 

import { Button, TextField, Stack, Box, Typography ,Grid} from "@mui/material";
import Accjoin from "../component/accjoin";

export default function join(){
    return(
  
        <Grid container>
        {/* **********************왼쪽 그리드**************************** */}
        <Grid item xs={8}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "100vh",
              bgcolor: "#f7f8f8",
              boxShadow: 3,
            }}
          >
            <img src="/main.jpg" alt="Logo" style={{ width: '90%', height: '80%', padding: '40px' }} />
          </Box>
        </Grid>
  
        {/* **********************오른쪽 그리드**************************** */}
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "60vh",
            }}
          >
  {/* 
            회원가입 폼
            <Accjoin/>
            유저 회원가입은 사용하지않아 비활성 */}
  
            {/* 로그인 폼 */}
            <Accjoin/>
          
  
          </Box>
        </Grid>
      </Grid>
    );
  }
  
  
  
  
  
  