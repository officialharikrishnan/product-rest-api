import { insertUseCase, getAllProductUseCase,getByIdUseCase,getSearchProductUseCase } from "../libs/usecase/index.js";
import { productRepository } from "../libs/app/repository/index.js";
const useCase = {
  insertUseCase,
  getAllProductUseCase,
  getByIdUseCase,
  getSearchProductUseCase
};
const repository = {
  productRepository,
};

export default {
  useCase,
  repository,
};
