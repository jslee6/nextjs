import React from 'react';
import { Box, Grid, Typography,Button } from '@mui/material';

const HomePage = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid container >
          <Grid item xs={12}>
            <Box bgcolor="darkgrey" height="150px" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Typography variant="h5" color="white">
                C 구역
              </Typography>
              <Typography variant="body1" color="white">
                - 상단 네브바
              </Typography>
            </Box>
          </Grid>
        </Grid>


        <Grid item xs={3}>
          <Box bgcolor="primary.main" display="flex" height="700px" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant="h5" color="white">
              A 구역
            </Typography>
            <Typography variant="body1" color="white">
                좌측 설명구역
            </Typography>
          </Box>
        </Grid>


        <Grid item xs={9}>
          <Box bgcolor="primary.main" display="flex" height="700px" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant="h5" color="white">
              B 구역
            </Typography>
            <Typography variant="body1" color="white">
                우측 구역
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
