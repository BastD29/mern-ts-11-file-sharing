import { FC } from "react";
import { FileType } from "../../models/file";
import style from "./FileCard.module.scss";

type FileCardProps = {
  file: FileType;
};

const FileCard: FC<FileCardProps> = ({ file }) => {
  return (
    <div className={style["file-card"]}>
      <h3>{file.filename}</h3>
      <img src={file.path} alt={file.filename} />
      <button>Download</button>
    </div>
  );
};

export default FileCard;
