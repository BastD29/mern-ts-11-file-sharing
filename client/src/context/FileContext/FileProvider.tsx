import { FC, ReactNode, useReducer } from "react";
import { initialState, reducer } from "../../reducers/file";
import { FileContext } from "./FileContext";

type FileProviderProps = {
  children: ReactNode;
};
const FileProvider: FC<FileProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state:", state);

  return (
    <FileContext.Provider value={{ state, dispatch }}>
      {children}
    </FileContext.Provider>
  );
};

export { FileProvider };
