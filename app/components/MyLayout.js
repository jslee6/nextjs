import React from 'react';

const MyLayout = ({ children }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      <h1>My Custom Layout</h1>
      {children}
    </div>
  );
};

export default MyLayout;
