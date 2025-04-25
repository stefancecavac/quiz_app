import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:8080/api" : "/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
