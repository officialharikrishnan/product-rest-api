export const getAllProductsController = (dependencies) => {
  const {
    useCase: { getAllProductUseCase },
  } = dependencies;
  const getAllProduct = async (req, res) => {
    const data = await getAllProductUseCase(dependencies).execute();
    if (data.length !== 0) {
      res.send(data);
    } else {
      res.status(404).send("items not found");
    }
  };
  return getAllProduct;
};
