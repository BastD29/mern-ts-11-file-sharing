import { Document } from "mongoose";

type FileType = Document & {
  filename: string;
  path: string;
};

export type { FileType };
