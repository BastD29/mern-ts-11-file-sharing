import express from "express";
import { /* downloadFile, */ uploadFile } from "../controllers/file";
import { upload } from "../middlewares/file";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);
// router.get("/download/:filename", downloadFile);

export default router;
