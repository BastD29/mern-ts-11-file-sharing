import express from "express";
import cors from "cors";
import { NODE_ENV, PORT } from "./config/environments";
import { connectDB } from "./config/db";
import { corsOptions } from "./config/cors";
import file from "./routes/file";
import path from "path";

connectDB();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/files", file);
const uploadsPath = path.join(__dirname, "../uploads");
console.log("uploadsPath:", uploadsPath);
app.use("/uploads", express.static(uploadsPath));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, ${NODE_ENV} environment`);
});
