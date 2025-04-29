import { AxiosError } from "axios";

export const getErrorMessage = (error: unknown) => {
  if (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    return axiosError.response?.data?.message || "Something went wrong";
  }
};