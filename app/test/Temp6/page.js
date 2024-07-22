

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
            Layout test jslee
          </Typography>
          <Typography variant="h5" gutterBottom>
            테스트 페이지 /test/temp5
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
                    Feature 1
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                Feature 2
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
              <Typography variant="h5" gutterBottom>
                Feature 3
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
