'use client';

import { useState } from 'react';
import Write from '@/app/writetest/page';

export default function OtherComponent() {
  const [showWriteComponent, setShowWriteComponent] = useState(false);

  const handleButtonClick = () => {
    setShowWriteComponent(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>작성하기</button>
      {showWriteComponent && <Write />}
    </div>
  );
}
