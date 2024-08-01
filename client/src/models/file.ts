import { SET_FILE, SET_UPLOADED_FILE } from "../constants/actions";

// services

type UploadFileParamsType = {
  file: File;
};

type FileType = {
  filename: string;
  path: string;
};

type FileResponseType = {
  message: string;
  newFile: FileType;
};

// actions

type SetFileActionType = {
  type: typeof SET_FILE;
  payload: File;
};

type SetUploadedFileActionType = {
  type: typeof SET_UPLOADED_FILE;
  payload: FileType;
};

type FileActionType = SetFileActionType | SetUploadedFileActionType;

// reducer

type FileStateType = {
  file: File | null;
  uploadedFile: FileType | null;
};

export type {
  // services
  UploadFileParamsType,
  FileType,
  FileResponseType,

  // actions
  SetFileActionType,
  SetUploadedFileActionType,
  FileActionType,

  // reducer
  FileStateType,
};
