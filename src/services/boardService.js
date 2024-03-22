/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
const createNew = async ( reqBody ) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    // Gọi tầng model để lưu vào DB


    // Gửi email, notification về cho admin khi có 1 board mới được tạo

    return newBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}