//post 버튼

'use client';

import { useState } from 'react';
import Write from '@/app/writetest/page';



export default function PostBt() {
    // 함수가 여러개일떄는 export default function 이아닌 function 으로써야함
  const [post, setpost] = useState(false);

  const postButtonClick = () => {
    setpost(true);
  };

  return (
    <div>
      <Button t variant="contained" color="primary" onClick={postButtonClick}>작성하기</Button>  
      {post && <Write />}
    </div>
  );
}

// PostBt를 다른코드에서 쓰려면 import 함수명, 데이터가 들어갈곳에서 <함수명/>