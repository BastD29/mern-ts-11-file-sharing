import { Context, Dispatch, createContext } from "react";
import { FileActionType, FileStateType } from "../../models/file";

type FileContextType = {
  state: FileStateType;
  dispatch: Dispatch<FileActionType>;
};

const FileContext: Context<FileContextType | undefined> = createContext<
  FileContextType | undefined
>(undefined);

export { FileContext };
