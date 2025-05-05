import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../config/ApiClient";
import { CreateQuizData, QuestionData, QuizData, QuizzesData, ResultData, SubmitAnswerData } from "../types";
import { useNavigate, useParams } from "react-router";
import { getErrorMessage } from "../util/getErrorMessage";
import { useSetAtom } from "jotai";
import { isRewardModalOpen } from "../atoms/rewardModalAtom";
import { ErrorModalAtom } from "../atoms/errorModalAtom";
import { AxiosError } from "axios";

export const useGetAllQuizzes = () => {
  const getAllQuizzesApi = async () => {
    const response = await axiosInstance.get("/quizzes/");
    return response.data as QuizzesData[];
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
  const { quizId } = useParams();

  const markQuizForCompletionApi = async () => {
    const response = await axiosInstance.put(`/quizzes/${quizId}`);
    return response.data as QuizData;
  };

  const { mutate: markQuizForCompletion, error } = useMutation({
    mutationKey: ["quizzes"],
    mutationFn: markQuizForCompletionApi,
    onSuccess: (data) => {
      navigate("/");
    },
  });

  const markQuizForCompletionError = getErrorMessage(error);
  return { markQuizForCompletion, markQuizForCompletionError };
};

export const useStartQuiz = () => {
  const navigate = useNavigate();
  const setErrorModal = useSetAtom(ErrorModalAtom);

  const startQuizApi = async (id: string) => {
    try {
      const response = await axiosInstance.post(`/quizzes/start`, id);
      return response.data as QuestionData;
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      throw new Error(axiosError.response?.data?.message || "Error fetching user");
    }
  };

  const { mutate: startQuiz, isPending: quizStarting } = useMutation({
    mutationKey: ["quizzes"],
    mutationFn: startQuizApi,
    onSuccess: (data) => {
      localStorage.setItem("startQuiz", JSON.stringify(data));
      navigate(`/start`);
    },
    onError: (error) => {
      setErrorModal({ text: error.message });
    },
  });

  return { startQuiz, quizStarting };
};

export const useSubmitQuiz = () => {
  const setRewardModal = useSetAtom(isRewardModalOpen);
  const queryClient = useQueryClient();

  const submitQuizApi = async ({ answers, id }: SubmitAnswerData) => {
    const response = await axiosInstance.post(`/quizzes/submit`, { answers, id });
    return response.data as ResultData;
  };

  const { mutate: submitQuiz, data: successData } = useMutation({
    mutationKey: ["quizzes"],
    mutationFn: submitQuizApi,
    onSuccess: (data) => {
      localStorage.removeItem("startQuiz");
      setRewardModal({ currency: data.currency, trophy: data.trophy, status: data.status });
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });

  return { submitQuiz, successData };
};
