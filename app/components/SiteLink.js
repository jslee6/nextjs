'use client'

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, Link, Box } from '@mui/material';



export default function AccordionSitelink() {
  return (
    <div>
      <Accordion sx={{ background:"transparent"  }}>
      {/* sx={{ background:"transparent, width: '170px'"}} 배경을 투명하게 해줌,  */}
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Button variant="contained" > 사이트 링크test </Button>

        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', gap: 1 }}>
          
            {/* 버튼을 box로 묶고 사이간격 추가 */}
            <Button href="https://gw.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="contained" >Group Ware </Button>
            <Button href="https://book.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="contained" >bookstack </Button>
            <Button href="http://zabbix.idis.co.kr/zabbix/zabbix.php?action=dashboard.view" target="_blank" rel="noopener noreferrer" variant="contained" >자빅스 </Button>
            <Button href="https://redmine.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="contained" >redmine </Button>
            <Button href="http://10.0.102.195/" target="_blank" rel="noopener noreferrer" variant="contained" >UPS </Button>
            
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
