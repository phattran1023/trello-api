
import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'

let trelloDatabaseInstance = null

// Khởi tạo kết nối đến MongoDB
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  // Nếu đã có kết nối thì trả về kết nối đó
  await mongoClientInstance.connect()
  // Kết nối thành công thì lấy ra database theo tên và lưu vào biến trelloDatabaseInstance
  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

// Function này có nhiệm vụ export ra trelloDatabaseInstance sau khi đã kết nối thành công để sử dụng ở các file khác
// Lưu ý: chỉ gọi GET_DB khi đã kết nối thành công
export const GET_DB = () => {
  if (!trelloDatabaseInstance) {
    throw new Error('Connect to database first')
  }
  return trelloDatabaseInstance
}

// Đóng kết nối đến MongoDB
export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}