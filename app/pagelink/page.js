'use client'

import * as React from 'react';
import { Container, Stack, Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';

export default function LeftLayout() {
    return (
        <Container maxWidth="sm">
            <Stack direction="row" spacing={2} >
                <Box flex={1}>
                    {/* 왼쪽 레이아웃 */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Button variant="contained"><Typography>업무용 사이트</Typography></Button>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack direction="column" spacing={2}>
                                <Button href="https://gw.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="outlined">
                                    Group Ware
                                </Button>
                                <Button href="https://book.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="outlined">
                                    bookstack
                                </Button>
                                <Button href="https://redmine.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="outlined">
                                    redmine
                                </Button>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                               아코디언2 
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box flex={1}>
                    {/* 오른쪽 레이아웃 */}
                </Box>
            </Stack>
        </Container>
    );
}
