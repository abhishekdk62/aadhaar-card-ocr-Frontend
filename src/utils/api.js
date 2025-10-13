import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_MODE == "dev"
    ? import.meta.env.VITE_API_BASE_URL
    : import.meta.env.VITE_API_PROD_URL;

export const processOCR = async (frontImage, backImage) => {
  const formData = new FormData();
  formData.append("frontImage", frontImage);
  formData.append("backImage", backImage);
  return await axios.post(`${API_BASE_URL}/ocr/process`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
        timeout: 80000, // ✅ 50 seconds timeout

  });
};
