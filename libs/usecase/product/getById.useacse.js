export const getByIdUseCase = (dependencies) => {
  const {
    repository: { productRepository },
  } = dependencies;
  const execute = async (data) => {
    try {
      const product = await productRepository.getById(data);
      if (product) {
        return product;
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  };
  return { execute };
};
