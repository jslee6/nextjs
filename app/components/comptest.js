function Cart() {
    const text= `컴포넌트`; // 상수에 내역남어서  -> 리턴에서 씀 
    return (
      <div>
        <p>컴포넌트 테스트</p>
        <p>{text}</p>
      </div>
    );
  }
  
  export default Cart;
  
// 1. 컴포넌트 만들고 싶으면 우선 function을 만들고 작명합니다. 관습적으로 영어 대문자로 시작합니다. 
// 2. function의 return ( ) 안에 축약할 길고 더러운 html을 담습니다. 
// 3. 원하는 곳에서 <작명/> 을 사용합니다. 
// 그럼 그 자리에 return( ) 안에 있던 html들이 붙여넣어집니다. 