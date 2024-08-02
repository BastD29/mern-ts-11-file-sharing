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

    res.status(200).send({ message: "File uploaded successfully", newFile });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error uploading file" });
  }
};

const getFiles = async (req: Request, res: Response) => {
  try {
    const files = await File.find();
    res.status(200).send(files);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error retrieving files" });
  }
};

const downloadFile = async (req: Request, res: Response) => {
  try {
    const filename = req.params.filename;
    const file = await File.findOne({ filename });
    // console.log("file:", file);

    if (!file) {
      return res.status(404).send({ message: "File not found" });
    }

    const filePath = path.join(__dirname, "../../uploads", filename);
    res.download(filePath, filename, (err) => {
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

export { uploadFile, getFiles, downloadFile };
