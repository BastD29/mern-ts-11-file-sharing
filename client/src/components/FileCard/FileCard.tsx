import { FC } from "react";
import { FileType } from "../../models/file";
import { downloadFile } from "../../services/file2";
import style from "./FileCard.module.scss";

type FileCardProps = {
  file: FileType;
};

const FileCard: FC<FileCardProps> = ({ file }) => {
  const handleDownload = async () => {
    try {
      const filename = file.filename;
      console.log("filename:", filename);
      const { data } = await downloadFile({ filename });
      console.log("data:", data);

      if (data) {
        const blob = data;
        console.log("blob:", blob);
        const downloadUrl = window.URL.createObjectURL(blob);
        console.log("downloadUrl:", downloadUrl);
        const a = document.createElement("a");
        console.log("a:", a);
        a.href = downloadUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        throw new Error("Failed to download file");
      }
    } catch (error) {
      console.error("Error downloading file:", error);
    }
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
