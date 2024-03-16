/* eslint-disable no-console */
import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { APIs_v1 } from '~/routes/v1'

const START_SERVER = () => {

  const app = express()

  app.use('/v1', APIs_v1)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`3. Hello ${env.AUTHOR}, I am running at ${env.APP_HOST}:${env.APP_PORT}/`)
  })

  exitHook(() => {
    console.log('4. Closing MongoDB connection...')
    CLOSE_DB()
  })
}

(async () => {
  try {
    console.log('1. Connecting to MongoDB...')
    await CONNECT_DB()
    console.log('2. Connected to MongoDB !')
    START_SERVER()
  } catch (error) {
    console.error('Error: ', error)
    process.exit(0)
  }
})()

// Chỉ khi kết nối thành công thì mới khởi động server
// console.log('1. Connecting to MongoDB...')
// CONNECT_DB()
//   .then(() => console.log('2. Connected to MongoDB !'))
//   .then(() => START_SERVER())
//   .catch(
//     (error) => {
//       console.error('Error: ', error)
//       process.exit(0)
//     }
//   )