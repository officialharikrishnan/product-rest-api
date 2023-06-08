import { insertUseCase, getAllProductUseCase,getByIdUseCase } from "../libs/usecase/index.js";
import { productRepository } from "../libs/app/repository/index.js";
const useCase = {
  insertUseCase,
  getAllProductUseCase,
  getByIdUseCase
};
const repository = {
  productRepository,
};

export default {
  useCase,
  repository,
};
