'use client'

import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material';


const MyAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleAccordionChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Button variant="contained" color="primary">
          Button 1
        </Button>
      </AccordionSummary>

      <AccordionDetails>
        <Box sx={{ display: 'flex', gap: 1 }}>
        <Button component={Link} href="https://gw.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="contained" >그룹웨어 </Button>
          <Button component={Link} href="https://book.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="contained" >북스택 </Button>
          <Button component={Link} href="http://zabbix.idis.co.kr/zabbix" target="_blank" rel="noopener noreferrer" variant="contained" >자빅스 </Button>
          <Button component={Link} href="https://redmine.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="contained" >레드마인 </Button>  
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default MyAccordion;
