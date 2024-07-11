import React from 'react';
import { List, ListItem, ListItemText, Divider, Link, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Sidebar() {
  return (
    <div style={{ width: '150px' }}> {/* 원하는 폭으로 설정 */} 
     {/* 사이드바 아래로 내리고 싶은데 레이아웃 만들어서 넣으면 될듯 */}

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom >  
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
    </div>
  );
};
