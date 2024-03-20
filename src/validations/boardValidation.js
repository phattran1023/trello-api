import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async ( req, res, next ) => {
  const correctCondition = Joi.object ({
    title: Joi.string().required().min(3).max(50).trim().strict().message({
      'any.required': 'Title is a required field (phat)',
      'string.empty': 'Title cannot be empty (phat)',
      'string.min': 'Title must have at least 3 characters long (phat)',
      'string.max': 'Title must have at most 50 characters (phat)',
      'string.trim': 'Title cannot have leading or trailing whitespace (phat)'
    }),
    description: Joi.string().required().min(3).max(256).trim().strict()
  })
  try {

    //set abortEarly: false để trả về tất cả các lỗi, mặc định là true
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    // Validate dữ liệu xong thì chạy sang controller
    next()
  } catch (error) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message
    })
  }
}

export const boardValidation = {
  createNew
}