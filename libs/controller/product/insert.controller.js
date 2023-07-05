import Joi from "joi";

export const insertController = (dependencies) => {
  const logSchema = Joi.object({
    productName: Joi.string().required(),
    company: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number().required(),
    storage: Joi.string(),
    ram: Joi.string()
  });
  const {
    useCase: { insertUseCase },
  } = dependencies;
  const insert = async (req, res) => {
    const { error, value } = logSchema.validate(req.body);
    if (error) {
      res.send(error.details[0].message);
    } else {
      const data = await insertUseCase(dependencies).execute(value,req.files?.image);
      if (data) {
        res.status(200).send(data);
      } else {
        res.send("inavlide entry");
      }
    }
  };
  return insert;
};
