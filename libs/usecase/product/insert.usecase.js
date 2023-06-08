export const insertUseCase = (dependencies) => {
  const {
    repository: { productRepository },
  } = dependencies;
  const execute = async (data) => {
    let res = await productRepository.insert(data);
    return res;
  };
  return { execute };
};
