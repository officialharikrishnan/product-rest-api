import { getFile } from "../../../config/s3.config.js";

export const getByIdUseCase = (dependencies) => {
  const {
    repository: { productRepository },
  } = dependencies;
  const execute = async (data) => {
    try {
      const product = await productRepository.getById(data);
      if (product) {
        const getObjectParams = {
            Bucket:process.env.S3_NAME,
            Key:product.image
        }
        const url = await getFile(getObjectParams)
        product.image=url
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
