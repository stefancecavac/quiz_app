import { useParams } from "react-router";
import { axiosInstance } from "../config/ApiClient";
import { CreateQuestionData } from "../types";
import { useMutation } from "@tanstack/react-query";

export const useCreateQustion = () => {
  const { quizId } = useParams();
  const createQuestionApi = async (data: CreateQuestionData) => {
    const response = await axiosInstance.post(`/questions/${quizId}`, data);
    return response.data;
  };

  const { mutate: createQuestion } = useMutation({
    mutationKey: ["quizzes"],
    mutationFn: createQuestionApi,
  });

  return { createQuestion };
};
