import { FC } from "react";
import { useFileContext } from "../../hooks/useFileContext";
import style from "./FileList.module.scss";

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
