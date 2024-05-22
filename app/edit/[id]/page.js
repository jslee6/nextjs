import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js"

export default async function Edit(props) {
    
  let db = (await connectDB).db('forum')
  let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});
    //DB 에서접속해서 findone 으로 id가져옴)

    await db.collection('post').updateOne({_id : new ObjectId(props.params.id)},{$set: {title :'내용'}});


  
//   console.log(props.params.id)

  return (

      <div className="p-20">
        <h4>수정페이지</h4>

        <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title}/>
        <input name="content" defaultValue={result.content}/>
        <input style={{display: 'none'}} name="_id" defaultValue={result._id.toString()}/>
         <button type="submit">전송</button>
        </form>
      </div>
    )
  } 


