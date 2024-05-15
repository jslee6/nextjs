import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://jslee2:wlstjr1208@cluster0.wqytvou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// 접속 URL 만 잘가져옴

const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }

// next js 만든사람이 몽고db쓸떄 이렇게 쓰래. 걍붙여넣기로하세요