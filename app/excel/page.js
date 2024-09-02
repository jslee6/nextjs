
// 임의데이터 엑셀 내보내기
// 'use client'


// import React from 'react';
// import { Button } from '@mui/material';
// import * as XLSX from 'xlsx';


// const MyTableComponent = () => {
//   const data = [
//     { id: 1, name: 'Alice', age: 30 },
//     { id: 2, name: 'Bob', age: 25 },
//     { id: 3, name: 'Charlie', age: 35 },
//   ]; 
//   //임의 데이터

//   const exportToExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, 'data.xlsx');
//   };

//   return (
//     <div>

//       <Button variant="contained" onClick={exportToExcel}>
//         엑셀로 내보내기
//       </Button>
//       {/* MUI 테이블 컴포넌트 코드 추가 */}
//     </div>
//   );
// };

// export default MyTableComponent;


// get , api 에서 엑셀 내보내기 
'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import * as XLSX from 'xlsx';


const MyTableComponent = () => {
  // 상태를 관리하기 위한 useState 훅: 초기값은 빈 배열
  const [data, setData] = useState([]);

  // 컴포넌트가 마운트될 때 API에서 데이터를 가져오기 위한 useEffect 훅
  useEffect(() => {
    // 비동기 함수 정의
    const fetchData = async () => {
      try {
        
        const response = await fetch('/api/user/get');// API 요청을 통해 데이터 가져오기
        const result = await response.json(); // 응답을 JSON 형식으로 변환
        setData(result); // 가져온 데이터를 상태에 저장
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);// 에러 발생 시 콘솔에 에러 메시지 출력
      }
    };

    // 데이터 가져오기 함수 호출
    fetchData();
  }, []); // 빈 배열을 의존성으로 주어 컴포넌트가 처음 렌더링될 때만 실행됨

  // 엑셀 파일로 내보내기 함수
  const exportToExcel = () => {

    const worksheet = XLSX.utils.json_to_sheet(data);    // 가져온 데이터를 엑셀 워크시트로 변환
    const workbook = XLSX.utils.book_new();  // 새로운 워크북 생성
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');  // 워크시트를 워크북에 추가
    XLSX.writeFile(workbook, 'data.xlsx');   // 워크북을 'data.xlsx'라는 이름으로 파일로 저장
  };

  return (
    <div>
      {/* 엑셀로 내보내기 버튼, 데이터가 없으면 비활성화 */}
      <Button 
        variant="contained" 
        onClick={exportToExcel} 
        // disabled={data.length === 0} // 데이터가 없으면 버튼 비활성화
      >
        엑셀로 내보내기
      </Button>
      {/* MUI 테이블 컴포넌트 코드 추가 공간 */}
    </div>
  );
};

export default MyTableComponent;
