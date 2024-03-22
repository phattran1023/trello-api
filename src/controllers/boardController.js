import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'

const createNew = async ( req, res, next ) => {
  try {
    // console.log('req.body: ', req.body)
    // console.log('req.query: ', req.query)
    // console.log('req.params: ', req.params)
    // console.log('req.files: ', req.files)
    // console.log('req.coookies: ', req.cookies)
    // console.log('req.jwtDecoded: ', req.jwtDecoded)

    // Điều hướng dữ liệu sang tầng Service
    const createdBoard = await boardService.createNew(req.body)

    // Sau khi Service xử lý xong thì trả về kết quả về client
    res.status(StatusCodes.CREATED).json(createdBoard)
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew
}