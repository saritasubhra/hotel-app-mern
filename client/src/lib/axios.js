import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://paradise-palms-backend.onrender.com/api",
  withCredentials: true, // send cookies to the server
});

export default axiosInstance;
