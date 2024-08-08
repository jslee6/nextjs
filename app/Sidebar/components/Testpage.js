import React from 'react';
import { List, ListItem, ListItemText, Divider, Link, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Testpage(){
    return (
        <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom >  
          Test Page
          </Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <List>
            <ListItem component={Link} href="/test/temp">
              <ListItemText primary="temp" />
            </ListItem>
            <Divider />
            <ListItem component={Link} href="/test/temp2">
            <ListItemText primary="temp2" />
            </ListItem>
            <Divider />
            <ListItem component={Link} href="/test/temp3">
            <ListItemText primary="temp3" />
            </ListItem>
            <Divider />
            <ListItem component={Link} href="/test/temp4">
            <ListItemText primary="temp4" />
            </ListItem>
            <Divider />
            <ListItem component={Link} href="/accounttest">
            <ListItemText primary="accounttest" />
            </ListItem>
            <ListItem component={Link} href="/test/accountHistory">
            <ListItemText primary="accountHistory" />
            </ListItem>
            <Divider />
            <ListItem component={Link} href="/test/gettest">
            <ListItemText primary="gettest" />
            </ListItem>
            <Divider />

            <ListItem component={Link} href="/logInOut/signup">
            <ListItemText primary="signup" />
            </ListItem>
            <Divider />
            <ListItem component={Link} href="/logInOut/login">
            <ListItemText primary="login" />
            </ListItem>
            <Divider />
            <ListItem component={Link} href="/logInOut/logOut">
            <ListItemText primary="login" />
            </ListItem>
            <Divider />
         
          </List>
        </AccordionDetails>
        </Accordion>
        );
};
