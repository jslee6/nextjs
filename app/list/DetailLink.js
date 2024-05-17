'use client'

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink(){
    let router = useRouter()
    let a = usePathname()
    // --> 현재  url 출력
    let b = useSearchParams()
    let c = useParams()
    //  --> 다이나믹 라우트





    return (
        <button onClick={ ()=> { router.push('/')} } >버튼</button>
    )
    // userRouter 이동방법 router.push 
    // 링크랑 다른기능은  push.back , forward, refresh ,prefetch (링크에는 프리패치 내장)같은 기능 제공
    // 유저 컴포넌트에서만 사용가능

}