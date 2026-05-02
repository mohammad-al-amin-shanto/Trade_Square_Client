import axios from "axios";

const api = axios.create({
  baseURL: "https://trade-square-server.onrender.com",
  withCredentials: true,
});

export default api;