import { FC, FormEvent } from "react";
import style from "./FileForm.module.scss";

const FileForm: FC = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={style["file-form"]}>
      <h2>File form</h2>
    </form>
  );
};

export default FileForm;
