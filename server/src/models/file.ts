import { Schema, model } from "mongoose";
import { FileType } from "../types/file";

const fileSchema = new Schema<FileType>({
  filename: { type: String, required: true },
  path: { type: String, required: true },
});

export default model<FileType>("File", fileSchema);
