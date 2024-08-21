'use client'

import React from 'react';
import { List, ListItem, ListItemText, Divider, Link, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function SwManage() {
  return (
    //defaultExpanded 추가하면 기본으로 확장상태로 열림
    <Accordion defaultExpanded>
      <AccordionSummary className="Accordion-Bg" expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontSize: "25px" }} >
          SW 관리
        </Typography>
      </AccordionSummary>
      <Divider />

      <AccordionDetails>
        <List>
          <ListItem className="typo-sidebar" component={Link} href="/auth/join">
            {/* <ListItemText primary="temp" /> */}
            <Typography className="typo-sidebar" component="span">SW 조회</Typography> {/* 스타일 적용 */}
          </ListItem>
          <Divider />

          <ListItem className="typo-sidebar" component={Link} href="/auth/join">
            {/* <ListItemText primary="temp" /> */}
            <Typography className="typo-sidebar" component="span">SW 수정</Typography> {/* 스타일 적용 */}
          </ListItem>
          <Divider />

      
   
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
