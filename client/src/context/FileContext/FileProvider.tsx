import { FC, ReactNode, useEffect, useReducer } from "react";
import { initialState, reducer } from "../../reducers/file";
import { FileContext } from "./FileContext";
import { fetchFiles } from "../../services/file2";
import { SET_UPLOADED_FILE } from "../../constants/actions";

type FileProviderProps = {
  children: ReactNode;
};
const FileProvider: FC<FileProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state:", state);

  useEffect(() => {
    const getFiles = async () => {
      try {
        const { data } = await fetchFiles();
        if (data && data.length > 0) {
          dispatch({ type: SET_UPLOADED_FILE, payload: data[0] });
        }
      } catch (error) {
        console.error(error);
      }
    };

    getFiles();
  }, []);

  return (
    <FileContext.Provider value={{ state, dispatch }}>
      {children}
    </FileContext.Provider>
  );
};

export { FileProvider };
