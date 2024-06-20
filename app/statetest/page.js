'use client'

import { useState } from "react"




export default function statetest (){
let [작명, 작명변경] = useState(1)

    return (
        <div>
            <h1>안녕</h1>
            <button onClick={()=>{ 작명변경(작명+1) }}>증가 버튼</button> 
            <span>{작명 }</span>
            <button onClick={()=>{ 작명변경(작명-1) }} >감소 버튼</button> 
            
            
        </div>
    )
}

// 'use client'

// import { useState } from "react"
// import styled from 'styled-components'

// const StyledSpan = styled.span`
//   font-size: 24px; /* 폰트 크기 조절 */
//   font-weight: bold; /* 폰트 굵기 조절 */
// `

// export default function statetest() {
//   let [작명, 작명변경] = useState(1)

//   return (
//     <div>
//       <h1>안녕</h1>
//       <button onClick={() => { 작명변경(작명 + 1) }}>증가 버튼</button>
//       <StyledSpan>{작명}</StyledSpan>
//       <button onClick={() => { 작명변경(작명 - 1) }}>감소 버튼</button>
//     </div>
//   )
// } 컴포넌트 적용한 것
