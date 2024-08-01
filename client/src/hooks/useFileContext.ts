import { useContext } from "react";
import { FileContext } from "../context/FileContext/FileContext";

const useFileContext = () => {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error("useFileContext must be used within a FileProvider");
  }

  return context;
};

export { useFileContext };
