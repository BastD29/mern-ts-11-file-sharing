import express from "express";
import { downloadFile, getFiles, uploadFile } from "../controllers/file";
import { upload } from "../middlewares/file";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);
router.get("/", getFiles);
router.get("/download/:filename", downloadFile);

export default router;
