import { ChangeEvent, FC, FormEvent } from "react";
import { uploadFile } from "../../services/file2";
import { toast } from "react-toastify";
import { useFileContext } from "../../hooks/useFileContext";
import { SET_FILE, SET_UPLOADED_FILE } from "../../constants/actions";
import style from "./UploadForm.module.scss";

const UploadForm: FC = () => {
  const {
    state: { file },
    dispatch,
  } = useFileContext();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      dispatch({ type: SET_FILE, payload: files[0] });
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (file) {
      console.log("file:", file);
      try {
        const { data } = await uploadFile({ file });
        toast.success(data?.message || "File upload done");
        dispatch({ type: SET_UPLOADED_FILE, payload: data?.newFile || null });
      } catch (error) {
        console.error(error);
        toast.error((error as Error).message || "Error upload not done");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style["upload-form"]}>
      <h2>Upload form</h2>
      <input type="file" name="file" onChange={handleFileChange} />
      <button type="submit">Upload file</button>
    </form>
  );
};

export default UploadForm;
