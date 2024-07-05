
// 'use client'


// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import { Accordion, AccordionDetails } from "@mui/material";



// const App = () => {
//   const [state, setState] = useState(false);
//   const handleClick = () => {
//     setState(prev => !prev);
//   }
//   return (
//     <>
//       <Button onClick={handleClick}>click</Button>
//       {state && (
//         <Accordion>
//           <AccordionDetails>
//             asdf
//           </AccordionDetails>
//         </Accordion>
//       )}
//     </>
//   );
// };

// export default App;

//버튼안에 아코디언 상훈씨가 샘플



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
