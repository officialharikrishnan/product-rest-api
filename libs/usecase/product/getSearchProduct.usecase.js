export const getSearchProductUseCase = (dependencies)=>{
    
    const {repository:{productRepository}}=dependencies
    const execute =async (data)=>{
        return await productRepository.search(data) 
    }
    return {
        execute
    }
}