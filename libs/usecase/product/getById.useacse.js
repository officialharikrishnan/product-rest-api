export const getByIdUseCase = (dependencies) => {

    const {repository:{productRepository}}=dependencies
    const execute =async (data) => {
        return await productRepository.getById(data)
    }
    return {execute}
}