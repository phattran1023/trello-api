import { StatusCodes } from 'http-status-codes'
// import ApiError from '~/utils/ApiError'

const createNew = async ( req, res, next ) => {
  try {
    // console.log('req.body: ', req.body)
    // console.log('req.query: ', req.query)
    // console.log('req.params: ', req.params)
    // console.log('req.files: ', req.files)
    // console.log('req.coookies: ', req.cookies)
    // console.log('req.jwtDecoded: ', req.jwtDecoded)

    // Điều hướng dữ liệu sang tầng Service
    // throw new ApiError(StatusCodes.BAD_REQUEST, 'Error from controller')

    // Sau khi Service xử lý xong thì trả về kết quả về client
    res.status(StatusCodes.CREATED).json({ message: 'POST from controller : API create' })
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew
}