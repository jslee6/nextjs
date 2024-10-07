import React from 'react';
import { List, ListItem, ListItemText, Divider, Link, Accordion, AccordionSummary, AccordionDetails, Typography, colors } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sitelink from './components/Sitelink';
import Testpage from './components/Testpage';
import Adminpage from './components/Adminage';
import SwManage from './components/SwManage';
import Network from './components/Network';


export default function Sidebar() {
  return (
    <div style={{ width: '100%' }}> {/* 원하는 폭으로 설정 */}
      {/* 사이드바 아래로 내리고 싶은데 레이아웃 만들어서 넣으면 될듯 */}

      <Sitelink />
      <Adminpage />
      <SwManage />
      <Network/>
      <Testpage />
      

      {/* 컴포넌트로 사이트링크, TEST Page만듬 */}
    </div>
  );
};



