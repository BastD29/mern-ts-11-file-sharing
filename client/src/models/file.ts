import {
  ADD_UPLOADED_FILE,
  SET_FILE,
  SET_UPLOADED_FILE,
  SET_UPLOADED_FILES,
} from "../constants/actions";

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
  payload: FileType | null;
};

type SetUploadedFilesActionType = {
  type: typeof SET_UPLOADED_FILES;
  payload: FileType[] | null;
};

type AddUploadedFileActionType = {
  type: typeof ADD_UPLOADED_FILE;
  payload: FileType;
};

type FileActionType =
  | SetFileActionType
  | SetUploadedFileActionType
  | SetUploadedFilesActionType
  | AddUploadedFileActionType;

// reducer

type FileStateType = {
  file: File | null;
  uploadedFile: FileType | null;
  uploadedFiles: FileType[] | null;
};

export type {
  // services
  UploadFileParamsType,
  FileType,
  FileResponseType,

  // actions
  SetFileActionType,
  SetUploadedFileActionType,
  SetUploadedFilesActionType,
  AddUploadedFileActionType,
  FileActionType,

  // reducer
  FileStateType,
};
