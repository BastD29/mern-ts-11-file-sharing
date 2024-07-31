import { Request, Response } from "express";
import File from "../models/file";
import path from "path";

const uploadFile = async (req: Request, res: Response) => {
  try {
    console.log("Uploaded file details:", req.file);
    const newFile = new File({
      filename: req.file?.originalname,
      path: req.file?.path,
    });

    await newFile.save();
    // res.json(newFile);
    res.status(200).send({ message: "File uploaded successfully", newFile });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error uploading file" });
  }
};

const downloadFile = async (req: Request, res: Response) => {
  try {
    console.log("Downloaded file details:", req.file);
    const filename = req.file?.filename;
    console.log("filename:", filename);
    const file = await File.findOne({ filename });
    console.log("file:", file);

    if (!file) {
      return res.status(404).send({ message: "File not found" });
    }

    const filePath = path.resolve(file.path);
    console.log("filePath:", filePath);

    res.download(filePath, file.filename, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: "Error downloading file" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error downloading file" });
  }
};

export { uploadFile, downloadFile };
