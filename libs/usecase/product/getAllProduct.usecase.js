export const getAllProductUseCase = (dependencies) => {

    const {repository:{productRepository}}=dependencies
    const execute =async () => {
        return await productRepository.getAll()
    }
    return {execute}
}