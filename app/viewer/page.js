import React from 'react';

const PDFViewer = () => {
  return (
    <div>
      <h2>PDF 미리보기</h2>
      <iframe
        src="/sample.pdf"
        width="100%"
        height="600"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default PDFViewer;
