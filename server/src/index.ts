import express from "express";
import cors from "cors";
import { NODE_ENV, PORT } from "./config/environments";
import { connectDB } from "./config/db";
import { corsOptions } from "./config/cors";

connectDB();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, ${NODE_ENV} environment`);
});
