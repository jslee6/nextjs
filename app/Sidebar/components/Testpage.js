'use client'

import React from 'react';
import { List, ListItem, ListItemText, Divider, Link, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Testpage() {
  return (
    //    <Accordion defaultExpanded> 을 기본으로 확장상태로 열림
    <Accordion defaultExpanded>
      <AccordionSummary className="Accordion-Bg" expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontSize: "25px" }} >
          Test Page
        </Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <List>
{/* 
        <ListItem className="typo-sidebar" component={Link} href="/test/datagrid">
            <Typography className="typo-sidebar" component="span">데이타그리드</Typography> 
          </ListItem> */}

        <ListItem className="typo-sidebar" component={Link} href="/test/chartStack">
            <Typography className="typo-sidebar" component="span">chartStack</Typography> {/* 스타일 적용 */}
          </ListItem>

          <ListItem className="typo-sidebar" component={Link} href="/test/chartVertical">
            <Typography className="typo-sidebar" component="span">수직차트</Typography> {/* 스타일 적용 */}
          </ListItem>

          <ListItem className="typo-sidebar" component={Link} href="/test/chartStock">
            <Typography className="typo-sidebar" component="span">재고차트</Typography> {/* 스타일 적용 */}
          </ListItem>


          <ListItem className="typo-sidebar" component={Link} href="/test/chartHorizon">
            <Typography className="typo-sidebar" component="span">수평차트</Typography> {/* 스타일 적용 */}
          </ListItem>

          <ListItem className="typo-sidebar" component={Link} href="/test/chart">
            <Typography className="typo-sidebar" component="span">더미 데이터</Typography> {/* 스타일 적용 */}
          </ListItem>

          <ListItem className="typo-sidebar" component={Link} href="/test/checkoff">
            <Typography className="typo-sidebar" component="span">컬럼On/Off</Typography> {/* 스타일 적용 */}
          </ListItem>

          <ListItem className="typo-sidebar" component={Link} href="/test/table">
            <Typography className="typo-sidebar" component="span">마스킹</Typography> {/* 스타일 적용 */}
          </ListItem>

          <ListItem className="typo-sidebar" component={Link} href="/test/img">
            <Typography className="typo-sidebar" component="span">img</Typography> {/* 스타일 적용 */}
          </ListItem>

          <ListItem className="typo-sidebar" component={Link} href="/imgtable">
            <Typography className="typo-sidebar" component="span">imgtable</Typography> {/* 스타일 적용 */}
          </ListItem>

          <Divider />
          <ListItem className="typo-sidebar" component={Link} href="/test/temp">
            {/* <ListItemText primary="temp" /> */}
            <Typography className="typo-sidebar" component="span">temp</Typography> {/* 스타일 적용 */}
          </ListItem>

          <Divider />
          <ListItem className="typo-sidebar" component={Link} href="/test/temp2">
            <Typography className="typo-sidebar" component="span">temp2</Typography>
          </ListItem>
          <Divider />

          <ListItem className="typo-sidebar" component={Link} href="/register">
            <Typography className="typo-sidebar" component="span">register</Typography>
          </ListItem>
          <Divider />
          <ListItem className="typo-sidebar" component={Link} href="/test/temp4">
            <Typography className="typo-sidebar" component="span">temp4</Typography>
          </ListItem>
          <Divider />

          <ListItem className="typo-sidebar" component={Link} href="/accounttest">
            <Typography className="typo-sidebar" component="span">accounttest</Typography>
          </ListItem>
          <Divider />

          <ListItem className="typo-sidebar" component={Link} href="/test/accountHistory">
            <Typography className="typo-sidebar" component="span">account<br />history</Typography>
          </ListItem>
          <Divider />

          <Divider />
          <ListItem className="typo-sidebar" component={Link} href="/test/gettest">
            <Typography className="typo-sidebar" component="span">gettest</Typography>
          </ListItem>
          <Divider />

          <ListItem className="typo-sidebar" component={Link} href="/logInOut/signup">
            <Typography className="typo-sidebar" component="span">signup</Typography>
          </ListItem>
          <Divider />

          <ListItem className="typo-sidebar" component={Link} href="/logInOut/login">
            <Typography className="typo-sidebar" component="span">login</Typography>
          </ListItem>
          <Divider />

          <ListItem className="typo-sidebar" component={Link} href="/logInOut/logout">
            <Typography className="typo-sidebar" component="span">login</Typography>
          </ListItem>

          <ListItem className="typo-sidebar" component={Link} href="/logInOut/logout">
            <Typography className="typo-sidebar" component="span">logout</Typography>
          </ListItem>

        </List>
      </AccordionDetails>
    </Accordion>
  );
}
