import dotenv from "dotenv";

const env = process.env.NODE_ENV || "development";

dotenv.config({ path: `./environments/.env.${env}` });

const {
  NODE_ENV,
  ALLOWED_ORIGIN,
  PORT,
  MONGO_URI,

  // aws
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  S3_BUCKET_NAME,
} = process.env as {
  NODE_ENV: string;
  ALLOWED_ORIGIN: string;
  PORT: string;
  MONGO_URI: string;

  // aws
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_REGION: string;
  S3_BUCKET_NAME: string;
};

if (
  !NODE_ENV ||
  !ALLOWED_ORIGIN ||
  !PORT ||
  !MONGO_URI ||
  // aws
  !AWS_ACCESS_KEY_ID ||
  !AWS_SECRET_ACCESS_KEY ||
  !AWS_REGION ||
  !S3_BUCKET_NAME
) {
  throw new Error("environment variables are not properly defined");
}

export {
  NODE_ENV,
  ALLOWED_ORIGIN,
  PORT,
  MONGO_URI,

  // aws
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  S3_BUCKET_NAME,
};
