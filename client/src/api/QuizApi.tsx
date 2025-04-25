import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../config/ApiClient";

export const useGetAllQuizzes = () => {
  const getAllQuizzesApi = async () => {
    const response = await axiosInstance.get("/quizzes/");
    return response.data;
  };

  const { data: quizzes } = useQuery({
    queryKey: ["quizzes"],
    queryFn: getAllQuizzesApi,
  });

  return { quizzes };
};
