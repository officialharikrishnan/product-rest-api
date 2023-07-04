import randomSring from 'randomstring'
import { uploadFile } from '../../../config/s3.config.js';
import { ProductEnt } from '../../entity/index.js';


export const insertUseCase = (dependencies) => {
  const {
    repository: { productRepository },
  } = dependencies;
  const execute = async (data,file) => {
    const imageName = randomSring.generate(5)

    const params = {
        Bucket:process.env.S3_NAME,
        Key:imageName,
        Body:file.data,
        ContentType:file.mimetype
    }
    let upload = await uploadFile(params)
    data.image=imageName
    const product = new ProductEnt(data)
    console.log(product,">>>product>>",file);
    let res = await productRepository.insert(product);
    return res;
  };
  return { execute };
};
