import { FC } from "react";
import { useFileContext } from "../../hooks/useFileContext";
import FileCard from "../FileCard/FileCard";
import style from "./FileList.module.scss";

const FileList: FC = () => {
  const {
    state: { uploadedFiles },
  } = useFileContext();

  if (uploadedFiles) {
    return (
      <div className={style["file-list"]}>
        {uploadedFiles.map((file) => (
          <FileCard key={file.filename} file={file} />
        ))}
      </div>
    );
  } else {
    return <div>No file in database. Please upload one</div>;
  }
};

export default FileList;
