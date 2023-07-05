export const getByIdController = (dependencies) => {
  const {
    useCase: { getByIdUseCase },
  } = dependencies;
  const getById = async (req, res) => {
    const id = req.query.id;
    const data = await getByIdUseCase(dependencies).execute(id);
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send("Item not found");
    }
  };
  return getById;
};
