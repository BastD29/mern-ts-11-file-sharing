import { FC } from "react";
import style from "./DownloadForm.module.scss";

const DownloadForm: FC = () => {
  return (
    <form className={style["download-form"]}>
      <h2>Download form</h2>
    </form>
  );
};

export default DownloadForm;
