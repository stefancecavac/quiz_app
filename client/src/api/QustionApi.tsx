import { useParams } from "react-router";
import { axiosInstance } from "../config/ApiClient";
import { CreateQuestionData, QuizData } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateQustion = () => {
  const { quizId } = useParams();
  const queryClient = useQueryClient();
  const createQuestionApi = async (data: CreateQuestionData) => {
    const response = await axiosInstance.post(`/questions/${quizId}`, data);
    return response.data as { content: string };
  };

  const { mutate: createQuestion } = useMutation({
    mutationKey: ["quizzes"],
    mutationFn: createQuestionApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["quiz", quizId], (oldData: QuizData) => {
        return {
          ...oldData,
          questions: [...oldData.questions, data],
        };
      });
    },
  });

  return { createQuestion };
};
