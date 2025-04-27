import { z } from "zod";

export const quizSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
});

export type QuizData = z.infer<typeof quizSchema>;

export const createQuizSchema = z.object({
  title: z
    .string({ message: "Title must not be empty" })
    .min(3, { message: "Title must be between 3 and 100 characters" })
    .max(100, { message: "Title must be between 3 and 100 characters" }),
});

export type CreateQuizData = z.infer<typeof createQuizSchema>;

export const questionSchema = z.object({
  id: z.string().uuid(),
  content: z.string(),
});

export type QuestionData = z.infer<typeof questionSchema>;

export const createQuestionSchema = z.object({
  content: z.string({ message: "Title must not be empty" }),
});

export type CreateQuestionData = z.infer<typeof createQuestionSchema>;

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type LoginData = z.infer<typeof loginSchema>;
