// import { ChangeEvent, FC, FormEvent, useState } from "react";
// import { uploadFile } from "../../services/file";
// import style from "./FileForm.module.scss";

// const FileForm: FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   // console.log("file:", file);

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//       // console.log("file has been set");
//     } else {
//       // console.log("file has not been set");
//     }
//   };

//   const handleSubmit = async (event: FormEvent) => {
//     event.preventDefault();

//     if (file) {
//       // console.log("file:", file);
//       try {
//         await uploadFile(file);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={style["file-form"]}>
//       <h2>File form</h2>
//       <input type="file" name="file" onChange={handleFileChange} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FileForm;
