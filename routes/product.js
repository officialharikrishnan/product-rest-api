import express from 'express'
import productController from '../libs/controller/index.js'
const router = express.Router()
export default (dependencies)=>{
    const {insert,getAllProduct,getById} = productController(dependencies)
    
    router.post('/insert',insert)
    router.get('/all',getAllProduct)
    router.get('/:id',getById)
    return router
}