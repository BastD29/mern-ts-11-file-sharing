import { FileResponseType, UploadFileParamsType } from "../models/file";
import { ApiResponseType, fetcher } from "./index2";

const uploadFile = async (
  body: UploadFileParamsType
): Promise<ApiResponseType<FileResponseType>> => {
  const formData = new FormData();
  formData.append("file", body.file);

  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

  return fetcher({
    method: "post",
    url: "/api/files/upload",
    body: formData,
    headers: {
      // No need to set 'Content-Type': 'multipart/form-data' as it is set automatically
    },
  });
};

export { uploadFile };
