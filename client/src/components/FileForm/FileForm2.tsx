import { ChangeEvent, FC, FormEvent, useState } from "react";
import { uploadFile } from "../../services/file2";
import { toast } from "react-toastify";
import style from "./FileForm.module.scss";

const FileForm: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  console.log("file:", file);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      setFile(files[0]);
      console.log("file has been set");
    } else {
      console.log("file has not been set");
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (file) {
      console.log("file:", file);
      try {
        const { data } = await uploadFile({ file });
        toast.success(data?.message || "File upload done");
      } catch (error) {
        console.error(error);
        toast.error((error as Error).message || "Error upload not done");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style["file-form"]}>
      <h2>File form</h2>
      <input type="file" name="file" onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileForm;
