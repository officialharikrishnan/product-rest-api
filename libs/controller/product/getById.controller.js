
export const getByIdController = (dependencies) => {
  

  const {
    useCase: { getByIdUseCase },
  } = dependencies;
  const getById = async (req, res) => {
        const id = req.params.id
      const data = await getByIdUseCase(dependencies).execute(id);
      res.send(data)
  };
  return getById;
};
