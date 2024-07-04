// 'use client'

// import React, { useState } from 'react';
// import { Accordion, AccordionSummary, AccordionDetails, Button, Box } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Link from '@mui/material';


// const MyAccordion = () => {
//   const [expanded, setExpanded] = useState(false);

//   const handleAccordionChange = (event, isExpanded) => {
//     setExpanded(isExpanded);
//   };

//   return (
//     <Accordion expanded={expanded} onChange={handleAccordionChange}>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel1a-content"
//         id="panel1a-header"
//       >
//         <Button variant="contained" color="primary">
//           Button 1
//         </Button>
//       </AccordionSummary>

//       <AccordionDetails>
//         <Box sx={{ display: 'flex', gap: 1 }}>
//         <Button component={Link} href="https://gw.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="contained" >그룹웨어 </Button>
//           <Button component={Link} href="https://book.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="contained" >북스택 </Button>
//           <Button component={Link} href="http://zabbix.idis.co.kr/zabbix" target="_blank" rel="noopener noreferrer" variant="contained" >자빅스 </Button>
//           <Button component={Link} href="https://redmine.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="contained" >레드마인 </Button>  
//         </Box>
//       </AccordionDetails>
//     </Accordion>
//   );
// };

// export default MyAccordion;


'use client'

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, Link, Box } from '@mui/material';



export default function AccordionSitelink2() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"

          id="panel1-header"
        >
          <Button variant="contained" > 사이트 링크 </Button>

        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {/* 버튼을 box로 묶고 사이간격 추가 */}
            <Button component={Link} href="https://gw.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="contained" >Group Ware </Button>
            <Button component={Link} href="https://book.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="contained" >bookstack </Button>
            <Button component={Link} href="http://zabbix.idis.co.kr/zabbix/zabbix.php?action=dashboard.view" target="_blank" rel="noopener noreferrer" variant="contained" >자빅스 </Button>
            <Button component={Link} href="https://redmine.idis.co.kr" target="_blank" rel="noopener noreferrer" variant="contained" >redmine </Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
