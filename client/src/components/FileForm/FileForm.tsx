import { FC, FormEvent } from "react";
import style from "./FileForm.module.scss";

const FileForm: FC = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className={style["file-form"]}>
      <h2>File form</h2>
      <label htmlFor="file">File:</label>
      <input type="file" id="file" name="file" required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default FileForm;
