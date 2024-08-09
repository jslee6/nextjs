'use client'


import { useState } from 'react';
import Button from '@mui/material/Button';
import { Accordion, AccordionDetails } from "@mui/material";



const App = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(prev => !prev);
  }
  return (
    <>

      <Button onClick={handleClick}>click</Button>
      {state && (
        <Accordion>
          <AccordionDetails>
            asdf
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

export default App;
