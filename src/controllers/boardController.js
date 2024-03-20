import { StatusCodes } from 'http-status-codes'

const createNew = async ( req, res, next ) => {
  try {
    console.log('req.body: ', req.body)
    console.log('req.query: ', req.query)
    console.log('req.params: ', req.params)

    // Điều hướng dữ liệu sang tầng Service

    // Sau khi Service xử lý xong thì trả về kết quả về client
    res.status(StatusCodes.CREATED).json({ message: 'POST from controller : API create' })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: error.message
    })
  }
}

export const boardController = {
  createNew
}