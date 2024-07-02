function Cart() {
    const text= `컴포넌트 상수(변수)`; // 상수에 내역남어서  -> 리턴에서 씀 
    return (
      <div>
        <p>컴포넌트 테스트</p>
        <p>{text}</p>
        <br></br>
        <CartItem 작명문자="20"/>
        <br></br>
        <CartItem 작명={text}/>
        <br></br>
        {/* <컴포넌트 작명 = "문자"/> or */}
        {/* <컴포넌트 작명 = "문자"/> or */}
      </div>
    );
  }

// props 사용법
//  1. 자식컴포넌트 사용하는 곳(부모컴포넌트)에 가서 <자식컴포넌트 작명={전해줄데이터} /> 
// 2. 자식컴포넌트 정의부분으로 가서 props라는 파라미터 등록 후 props.작명 사용
// 이러면 부모가 자식에게 변수나 데이터를 전송해줄 수 있습니다. 

  function CartItem(props){
    return(
        <div>
            <p>props 테스트{props.작명문자}</p>
            <p>props 테스트{props.작명}</p>
            <p>고정텍스트</p>
            
        </div>

    )
  }  // 이건 props 테스트


  export default Cart;
  
// 1. 컴포넌트 만들고 싶으면 우선 function을 만들고 작명합니다. 관습적으로 영어 대문자로 시작합니다. 
// 2. function의 return ( ) 안에 축약할  html을 담습니다. 
// 3. 원하는 곳에서 <작명/> 을 사용합니다. 
// 그럼 그 자리에 return( ) 안에 있던 html들이 붙여넣어집니다. 

