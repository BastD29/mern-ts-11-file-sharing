import { Request, Response } from "express";
import File from "../models/file";
import path from "path";

const uploadFile = async (req: Request, res: Response) => {
  try {
    const file = req.file as Express.MulterS3.File | undefined; // location property does not exist on Express.Multer.File
    console.log("Uploaded file details:", req.file);

    const newFile = new File({
      filename: file?.originalname,
      path: file?.location, // ex: 'https://file-bucket-test-bd29.s3.us-east-1.amazonaws.com/email_nodemailer_vs_sendgrid_1.png',
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
