import React from 'react';
import { List, ListItem, ListItemText, Divider, Link, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Sitelink(){
    return (
      <Accordion>
      <AccordionSummary className="Accordion-Bg" expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{fontSize: "25px"}} >  
        Site Link
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
          <ListItem component={Link} href="https://redmine.idis.co.kr" target="_blank">
            <ListItemText primary="레드마인" />
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
        );
};
