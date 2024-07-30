import { BASE_URL } from "../constants/endpoints";

const uploadFile = async (file: File) => {
  console.log("file:", file);

  const formData = new FormData();
  formData.append("file", file);
  //   console.log("formData:", formData);

  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

  const response = await fetch(`${BASE_URL}/api/files/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload file");
  }

  return await response.json();
};

export { uploadFile };
