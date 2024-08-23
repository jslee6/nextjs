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

                    </Typography>
                    <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
                        Welcome
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
                                        Login 완료
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
                                엑셀 내보내기 구현중
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
                                SW 페이지 구성중
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
