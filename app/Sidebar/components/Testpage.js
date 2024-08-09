'use client'

import React from 'react';
import { List, ListItem, ListItemText, Divider, Link, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Testpage() {
  return (
    //defaultExpanded 추가하면 기본으로 확장상태로 열림
    <Accordion defaultExpanded>
      <AccordionSummary className="Accordion-Bg" expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{fontSize: "25px"}} >
          Test Page
        </Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <List>
          <ListItem component={Link} className="listItem-sidebar" href="/test/temp">
            <ListItemText primary="temp" />
          </ListItem>
          <Divider />
          <ListItem component={Link} className="listItem-sidebar" href="/test/temp2">
            <ListItemText primary="temp2" />
          </ListItem>
          <Divider />
          <ListItem component={Link} className="listItem-sidebar" href="/test/temp3">
            <ListItemText primary="temp3" />
          </ListItem>
          <Divider />
          <ListItem component={Link}  className="listItem-sidebar" href="/test/temp4">
            <ListItemText primary="temp4" />
          </ListItem>
          <Divider />
          <ListItem component={Link} className="listItem-sidebar" href="/accounttest">
            <ListItemText primary="accounttest" />
          </ListItem>
          <Divider />
          <ListItem component={Link} className="listItem-sidebar" href="/test/accountHistory">
            <ListItemText primary=
              //jsx 프래그먼트 사용
              {<>
                account<br />
                History
              </>
              }
            />
          </ListItem>
          <Divider />

          <Divider />
          <ListItem component={Link} className="listItem-sidebar" href="/test/gettest">
            <ListItemText primary="gettest" />
          </ListItem>
          <Divider />

          <ListItem component={Link}  className="listItem-sidebar" href="/logInOut/signup">
            <ListItemText primary="signup" />
          </ListItem>
          <Divider />

          <ListItem component={Link} className="listItem-sidebar" href="/logInOut/login">
            <ListItemText primary="login" />
          </ListItem>
          <Divider />

          <ListItem component={Link} className="listItem-sidebar" href="/logInOut/logout">
            <ListItemText primary="logOut" />
          </ListItem>
          
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
