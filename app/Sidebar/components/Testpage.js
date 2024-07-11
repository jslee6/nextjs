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
            <ListItem component={Link} href="/test/temp5">
            <ListItemText primary="temp5" />
            </ListItem>
            <Divider />
         
          </List>
        </AccordionDetails>
        </Accordion>
        );
};
