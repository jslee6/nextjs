// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

// export default function BasicPagination() {
//   return (
//     <Stack spacing={4}>
//       {/* <Pagination count={10} /> */}
//       <Pagination count={10} color="primary" />
//       {/* <Pagination count={10} color="secondary" /> */}
//       {/* <Pagination count={10} disabled /> */}
//     </Stack>
//   );
// }




//components/paging.js

import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({ count, page, onPageChange }) {
  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} onChange={onPageChange} />
    </Stack>
  );
}
