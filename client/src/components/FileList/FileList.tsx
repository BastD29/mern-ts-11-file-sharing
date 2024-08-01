import { FC } from "react";
import style from "./FileList.module.scss";
import { useFileContext } from "../../hooks/useFileContext";

const FileList: FC = () => {
  const {
    state: { uploadedFile },
  } = useFileContext();

  return (
    <div className={style["file-list"]}>
      {uploadedFile && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={uploadedFile.path} alt={uploadedFile.filename} />
        </div>
      )}
    </div>
  );
};

export default FileList;
