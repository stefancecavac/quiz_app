import { AxiosError } from "axios";
import { axiosInstance } from "../config/ApiClient";
import { LoginData } from "../types";

export const registerUser = async ({ username, password }: { username: string; password: string }) => {
  try {
    const response = await axiosInstance.post(`auth/register`, { username, password });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    throw new Error(axiosError.response?.data?.message || "Registration failed");
  }
};

export const loginUser = async (data: LoginData) => {
  try {
    const response = await axiosInstance.post(`auth/login`, data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;

    throw new Error(axiosError.response?.data?.message || "Login failed");
  }
};

export const logoutUser = async () => {
  try {
    const response = await axiosInstance.post(`auth/logout`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;

    throw new Error(axiosError.response?.data?.message || "Logout failed");
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get(`auth/current-user`);
    return response.data as { username: string; id: string };
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;

    throw new Error(axiosError.response?.data?.message || "Error fetching user");
  }
};
