import { Request, Response } from "express";
import File from "../models/file";

const uploadFile = async (req: Request, res: Response) => {
  try {
    console.log("Uploaded file details:", req.file);

    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
      req.file?.filename
    }`;
    // console.log("fileUrl:", fileUrl);

    const newFile = new File({
      filename: req.file?.originalname,
      // path: req.file?.path,
      path: fileUrl,
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

export { uploadFile, getFiles };
