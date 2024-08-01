// import { ChangeEvent, FC, FormEvent, useState } from "react";
// import { uploadFile } from "../../services/file2";
// import { toast } from "react-toastify";
// import { FileType } from "../../models/file";
// import style from "./UploadForm.module.scss";

// const UploadForm: FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [uploadedFile, setUploadedFile] = useState<FileType | null>(null);
//   console.log("uploadedFile?.path:", uploadedFile?.path);

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { files } = event.target;
//     if (files) {
//       setFile(files[0]);
//     }
//   };

//   const handleSubmit = async (event: FormEvent) => {
//     event.preventDefault();

//     if (file) {
//       console.log("file:", file);
//       try {
//         const { data } = await uploadFile({ file });
//         toast.success(data?.message || "File upload done");
//         setUploadedFile(data?.newFile || null);
//       } catch (error) {
//         console.error(error);
//         toast.error((error as Error).message || "Error upload not done");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={style["upload-form"]}>
//       <h2>Upload form</h2>
//       <input type="file" name="file" onChange={handleFileChange} />
//       <button type="submit">Upload file</button>
//       {uploadedFile && (
//         <div>
//           <h3>Uploaded Image:</h3>
//           <img src={uploadedFile.path} alt={uploadedFile.filename} />
//         </div>
//       )}
//     </form>
//   );
// };

// export default UploadForm;
