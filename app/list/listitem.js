'use client'

import Link from "next/link"

export default function ListItem({result}) {
    // ListItem(props) -> ListItem({result}) 를쓰면  props.result 안써됩
  return (
    <div>
     {
            result.map((a,i)=>{
                return(
                    <div className="list-item" key={i}>
                        <h4>{result[i].title}</h4>
                  
                        <Link href={'/detail/' + result[i]._id}>
                            {result[i].title}</Link>

                        <Link href={'/edit/' + result[i]._id} className="list-btn">✏️</Link>   
       
                        {/* 폼태그 or ajax 로 삭제가능 여기선 ajax 씀 */}
                        <span onClick={(e)=> {
                           
                            // fetch('/api/post/delete', {method : 'DELETE', body : result[i]._id})
                            // .then((r) => r.json())
                            // .then((result) => {
                            //   e.target.parentElement.style.opacity = 0;
                            //   setTimeout(()=> {
                            //     e.target.parentElement.style.display = 'none'
                            //   },300)
                            // })   // 삭제이벤트 넣음 0.3초

                              // 방법1 데이터보내기.

                              fetch('/api/abc/어쩌구')


                            }}>🗑️</span>     

                                {/* <button onClick={()=>{
                                    fetch('/URL', { method : 'POST', body : '안녕' })
                                   }}>🗑️</button> 이런식으로 ajax 가능         */}

                        <p>{a.content}</p>
                    {/* <DetailLink></DetailLink> */}
      
                  </div>
                )                       
            })
        }
    </div>
  )
}