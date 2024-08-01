import { FC } from "react";
import { FileType } from "../../models/file";
import { downloadFile } from "../../services/downloadFile";
import style from "./FileCard.module.scss";

type FileCardProps = {
  file: FileType;
};

const FileCard: FC<FileCardProps> = ({ file }) => {
  const handleDownload = async () => {
    await downloadFile(file.filename);
  };

  return (
    <div className={style["file-card"]}>
      <h3>{file.filename}</h3>
      <img src={file.path} alt={file.filename} />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default FileCard;
