import dotenv from "dotenv";

const env = process.env.NODE_ENV || "development";

dotenv.config({ path: `./environments/.env.${env}` });

const { NODE_ENV, ALLOWED_ORIGIN, PORT, MONGO_URI } = process.env;

export { NODE_ENV, ALLOWED_ORIGIN, PORT, MONGO_URI };
