import express from 'express'
import userRouter from './product.js'
const router = express.Router()

export const routes = (dependencies) => {

    router.use('/product',userRouter(dependencies))
    return router
}