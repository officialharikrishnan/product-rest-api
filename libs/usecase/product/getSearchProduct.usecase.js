import { getFile } from "../../../config/s3.config.js"

export const getSearchProductUseCase = (dependencies)=>{
    
    const {repository:{productRepository}}=dependencies
    const execute =async (data)=>{
        const products  = await productRepository.search(data) 
        for(let product of products){
            const getObjectParams = {
                Bucket:process.env.S3_NAME,
                Key:product.image
            }
            const url = await getFile(getObjectParams)
            product.image=url
        }
        return products
    }
    return {
        execute
    }
}