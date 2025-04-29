import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../config/ApiClient";
import { CreateQuizData, QuizData } from "../types";
import { useNavigate, useParams } from "react-router";
import { getErrorMessage } from "../util/getErrorMessage";

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

export const useGetSingleQuiz = () => {
  const { quizId } = useParams();
  const getSingleQuizApi = async () => {
    const response = await axiosInstance.get(`/quizzes/${quizId}`);
    return response.data as QuizData;
  };

  const { data: quiz } = useQuery({
    queryKey: ["quiz", quizId],
    queryFn: getSingleQuizApi,
  });

  return { quiz };
};

export const useCreateQuiz = () => {
  const navigate = useNavigate();

  const createQuizApi = async (data: CreateQuizData) => {
    const response = await axiosInstance.post("/quizzes/", data);
    return response.data as QuizData;
  };

  const { mutate: createQuiz } = useMutation({
    mutationKey: ["quizzes"],
    mutationFn: createQuizApi,
    onSuccess: (data) => {
      navigate(`/create-quiz/${data.id}/add-question`);
    },
  });

  return { createQuiz };
};


export const useMarkQuizForCompletion = () => {
  const navigate = useNavigate();
  const {quizId} = useParams()

  const markQuizForCompletionApi = async () => {
    const response = await axiosInstance.put(`/quizzes/${quizId}`);
    return response.data as QuizData;
  };

  const { mutate: markQuizForCompletion , error } = useMutation({
    mutationKey: ["quizzes"],
    mutationFn: markQuizForCompletionApi,
    onSuccess: (data) => {
      navigate('/')
    },
  });


  const markQuizForCompletionError =getErrorMessage(error)
  return { markQuizForCompletion , markQuizForCompletionError };
};