// app/components/DeleteButton.js
// user에서 쓰는 딜리트 컴포넌트

import React from 'react';
import { Button } from '@mui/material';

const DeleteButton = ({ userId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch('/api/user/delete', {
        method: 'DELETE',
        // headers: {
        //   'Content-Type': 'application/json', 
        // }, 
        // 필요없을거같은데, 요청 본문의 데이터 형식을 서버에 알려주기 위해서입니다. 이렇게 하면 서버 측에서 요청 데이터를 올바르게 처리할 수 있습니다. 
        body: JSON.stringify({ id: userId }),
      });
      //       JSON.stringify() 함수는 JavaScript 객체를 JSON 형식의 문자열로 변환해줍니다.

      // 이렇게 변환된 JSON 문자열은 fetch 호출의 body 옵션에 포함됩니다.
      // 이 코드에서는 { id: userId } 객체를 JSON 문자열로 변환하여 요청 본문으로 보내고 있습니다.
      // 즉, 이 요청은 DELETE /api/user/delete 엔드포인트로 보내지며, 요청 본문에는 { "id": "사용자ID" } 형태의 JSON 데이터가 포함됩니다.
      // 서버 측에서는 이 요청 본문의 id 값을 사용하여 해당 사용자를 삭제하는 작업을 수행할 수 있습니다.
      // 이렇게 fetch API 호출 시 body 옵션을 사용하면 요청 본문에 데이터를 포함시킬 수 있습니다. 주로 POST, PUT, PATCH 등의 메서드에서 요청 본문을 사용합니다.


      
      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // } 
      //네트워크 응답확인


      const { message } = await response.json();
      // const 의 중괄호는 함수 선언 부분에 사용된 것이 아니라, 함수 내부에서 사용된 것입니다.

      // 구조 분해 할당을 통해 response.json() 메서드가 반환한 객체에서 message 속성의 값을 직접 변수 message에 할당하는 것입니다.
      // 이렇게 하면 response.json() 결과에서 message 속성의 값을 간단히 추출할 수 있습니다.
      // 중괄호 { } 는 객체 또는 구조 분해 할당 시 사용되는 문법이며, 함수 선언 부분에서 사용된 것이 아닙니다.
      // 즉, 이 코드는 서버 응답에서 message 속성의 값을 추출하여 변수 message에 저장하고 있습니다.


      console.log(message);
      onDelete(userId);
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <Button variant="contained" color="error" onClick={handleDelete}>
      삭제
    </Button>
  );
};

export default DeleteButton;
