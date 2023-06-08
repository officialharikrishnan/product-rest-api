
export const getAllProductsController = (dependencies) => {
  

  const {
    useCase: { getAllProductUseCase },
  } = dependencies;
  const getAllProduct = async (req, res) => {
    
      const data = await getAllProductUseCase(dependencies).execute();
      res.send(data)
  };
  return getAllProduct;
};
