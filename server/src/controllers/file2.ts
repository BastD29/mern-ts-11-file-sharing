import { Request, Response } from "express";
import File from "../models/file";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../config/aws";

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
    const { filename } = req.params;
    console.log("filename:", filename);

    // Find the file in the database
    const file = await File.findOne({ filename });
    console.log("file:", file);

    if (!file) {
      return res.status(404).send({ message: "File not found" });
    }

    // name of the S3 bucket
    const bucket = file.path.split("https://")[1].split(".s3.")[0];
    console.log("bucket:", bucket);

    // the path to the file within that bucket
    const key = file.path.split(".com/")[1];
    console.log("key:", key);

    // Get the file from S3
    // Ex:
    // input: {
    //   Bucket: 'file-bucket-test-bd29',
    //   Key: 'fetch_api_request_credentials_property_definition_2.png'
    // }
    const params = {
      Bucket: bucket,
      Key: key,
    };

    const command = new GetObjectCommand(params);
    console.log("command:", command);
    const s3Response = await s3Client.send(command);
    console.log("s3Response:", s3Response);

    // const str = await s3Response.Body?.transformToString("base64");
    // console.log("str:", str);

    if (!s3Response.Body) {
      throw new Error("No s3 response body");
    }

    // Stream the file to the response using Web Streams API
    const readableStream: ReadableStream =
      s3Response.Body!.transformToWebStream();
    console.log("readableStream:", readableStream);
    const reader = readableStream.getReader();
    console.log("reader:", reader);

    // Create a readable stream from the reader
    const stream = new ReadableStream({
      async pull(controller) {
        const { done, value } = await reader.read();
        if (done) {
          controller.close();
          return;
        }
        controller.enqueue(value);
      },
      cancel() {
        reader.releaseLock();
      },
    });

    // Pipe the readable stream to the response
    stream.pipeTo(
      new WritableStream({
        write(chunk) {
          res.write(chunk);
        },
        close() {
          res.end();
        },
        abort(err) {
          console.error("Stream aborted due to an error:", err);
          res.end();
        },
      })
    );
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error downloading file" });
  }
};

export { uploadFile, getFiles, downloadFile };
