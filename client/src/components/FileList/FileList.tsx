import { FC } from "react";
import style from "./FileList.module.scss";

const FileList: FC = () => {
  return (
    <div className={style["file-list"]}>
      <h2>File list</h2>
    </div>
  );
};

export default FileList;
