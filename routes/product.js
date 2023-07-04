import express from 'express'
import productController from '../libs/controller/index.js'
const router = express.Router()
export default (dependencies)=>{
    const {insert,getAllProduct,getById,home,search} = productController(dependencies)
    
    router.post('/insert',insert)
    router.get('/all',getAllProduct)
    router.get('/item',getById)
    router.get('/search',search)
    // router.get('/',home)
    return router
}