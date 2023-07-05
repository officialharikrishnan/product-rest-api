import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import dotenv from "dotenv";

dotenv.config();

const access = process.env.S3_ACCESS_KEY;
const secret = process.env.S3_SECRET_KEY;
const region = process.env.S3_REGION;

const client = new S3Client({
  region: region,
  endpoint: "https://s3.ap-south-1.amazonaws.com",
  credentials: {
    accessKeyId: access,
    secretAccessKey: secret,
  },
});
export const uploadFile = async (file) => {
  console.log(file, "file>>>>>>>>>");
  const command = new PutObjectCommand(file);
  try {
    const data = await client.send(command);
    // process data.
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    // error handling.
    return null;
  }
};
export const getFile = async (getObjectParams) => {
  const command = new GetObjectCommand(getObjectParams);

  const url = await getSignedUrl(client, command, { expiresIn: 1000 * 60 });
  return url;
};

export const deleteFile = async (file) => {
  const command = new DeleteObjectCommand(file);
  try {
    const data = await client.send(command);
    // process data.
    return data;
  } catch (error) {
    console.log(error);
    // error handling.
    return null;
  }
};
