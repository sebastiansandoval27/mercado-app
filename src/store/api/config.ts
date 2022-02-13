import axios from "axios";

const URL =
  process.env.API ||
  "https://run.mocky.io/v3/729fdd53-f365-49b4-bd55-f7e10bcc9a4b";

const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 2500,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
