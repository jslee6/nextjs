// 'use client' 

// import React from 'react';
// import { Drawer, List, ListItem, ListItemText, Divider, Link, Accordion, AccordionSummary, AccordionDetails, Typography, Button,Container, Grid, Box } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// // import Link from 'next/link';



// // const Sidebar = () => {
// export default function Sidebar() {
//   return (


//     <Drawer variant="permanent" anchor="left">
//       {/* anchor 는 Drawer 위치를 나타냄 */}
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           // aria-controls="panel1-content"
//           // id="panel1-header"
//         > 
//         {/* <Button>업무 Site Link</Button> */}

//           <Typography variant="h5" gutterBottom>
//             업무 Site Link
//           </Typography>

//         </AccordionSummary>
//         <Divider />
//         <AccordionDetails>
//             <List>
//               <ListItem component={Link} href="https://gw.idis.co.kr" target="_blank">
//                 <ListItemText primary="그룹웨어" />
//               </ListItem>
//               <Divider />
//               <ListItem component={Link} href="https://book.idis.co.kr" target="_blank">
//                 <ListItemText primary="북스택" />
//               </ListItem>
//               <Divider />
//               <ListItem component={Link} href="http://zabbix.idis.co.kr/zabbix/" target="_blank">
//                 <ListItemText primary="자빅스" />
//               </ListItem>
//               <Divider />
//               <ListItem component={Link} href="https://redmine.idis.co.kr" target="_blank" >
//                 <ListItemText primary="레드마인" />
//               </ListItem>
//             </List>
//         </AccordionDetails>
//       </Accordion>
//     </Drawer>

//   );
// };



'use client'

import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, Link, Accordion, AccordionSummary, AccordionDetails, Typography, Button, Container, Grid, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import Link from 'next/link';



// const Sidebar = () => {
export default function Sidebar() {
  return (


    <Drawer variant="permanent" anchor="left">
      {/* anchor 는 Drawer 위치를 나타냄 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        // aria-controls="panel1-content"
        // id="panel1-header"
        >
          {/* <Button>업무 Site Link</Button> */}

          <Typography variant="h5" gutterBottom>
            업무 Site Link
          </Typography>

        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <List>
            <ListItem component={Link} href="https://gw.idis.co.kr" target="_blank">
              <ListItemText primary="그룹웨어" />
            </ListItem>
          
          
            <Divider />
            <ListItem component={Link} href="https://book.idis.co.kr" target="_blank">
              <ListItemText primary="북스택" />
            </ListItem>
            <Divider />
            <ListItem component={Link} href="http://zabbix.idis.co.kr/zabbix/" target="_blank">
              <ListItemText primary="자빅스" />
            </ListItem>
            <Divider />
            <ListItem component={Link} href="https://redmine.idis.co.kr" target="_blank" >
              <ListItemText primary="레드마인" />
            </ListItem>
          </List>



        </AccordionDetails>
      </Accordion>
    </Drawer>

  );
};

