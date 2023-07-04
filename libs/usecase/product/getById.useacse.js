export const getByIdUseCase = (dependencies) => {

    const {repository:{productRepository}}=dependencies
    const execute =async (data) => {
        const product = await productRepository.getById(data)
        if(product){
            return product
        }else{
            return null
        }
    }
    return {execute}
}