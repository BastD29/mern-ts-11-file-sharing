import { BASE_URL } from "../constants/endpoints";

const downloadFile = async (filename: string) => {
  try {
    const url = `${BASE_URL}/api/files/download/${filename}`;
    console.log("url:", url);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const blob = await response.blob();
    console.log("blob:", blob);

    const downloadUrl = window.URL.createObjectURL(blob);
    console.log("downloadUrl:", downloadUrl);

    const a = document.createElement("a");
    console.log("a:", a);

    a.href = downloadUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};

export { downloadFile };
