import express from "express";
import { uploadFile } from "../controllers/file";
import { upload } from "../middlewares/file";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);

export default router;
