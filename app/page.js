// import { connectDB } from "/util/database.js"
// import { MongoClient } from "mongodb"




// export default async function Home() {

//   // await 쓰려면 async 써야함
// // 중요!!! DB 입출력코드는 서버컴포넌트에서만 씀

// const client = await connectDB;
// const db = client.db('forum');
// // 위에 두줄을  아래처럼 축약가능

// // const db = (await connectDB).client.db('forum');



// let result = await db.collection('post').find().toArray();
// // console.log(result)
// // 컬렉션의 모든 document를 가져오세요 .그걸 result 변수에 담음


//   return (
//    <div>
//       <h1 className="title">Programming log</h1>
//       <h2 className="minititle">TEST PAGE</h2>
//       <p className="title-sub">by dev JSLEE </p>

//      </div>
   
//   )
// }

import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const HomePage = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'common.white',
          py: 8,
            height: '20v'
            // height: '300px'

        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Test Programming by jslee
          </Typography>
          <Typography variant="h5" gutterBottom>
            Home
          </Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
            Get Started
          </Button>
        </Container>
      </Box>


      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography variant="h5" gutterBottom>
                    Grid 1 & Accodion
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">
                    Accodion 테스트
                  </Typography>
                </AccordionDetails>
                <AccordionActions>
                  <Button size="small">Learn More</Button>
                </AccordionActions>
              </Accordion>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} >
            <Box
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                p: 4,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Grid2
              </Typography>
              <Typography variant="body1">
                 Typography 바디 테스트2 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                p: 4,
              }}
            >
              <Typography variant="h4" gutterBottom>
                Grid 3
              </Typography>
              <Typography variant="body1">
              Typography 바디 테스트3
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
