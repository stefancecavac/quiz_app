import { z } from "zod";

export const userSchema = z.object({
  id: z.string().uuid(),
  username: z.string(),
  trophy: z.number(),
  currency: z.number(),
});

export type UserData = z.infer<typeof userSchema>;

export const optionSchema = z.object({
  id: z.string().uuid(),
  content: z.string().min(1, { message: "This field must not be empty" }),
  isCorrect: z.boolean(),
});

export const questionSchema = z.object({
  id: z.string().uuid(),
  content: z.string(),
  options: z.array(optionSchema),
  quizId: z.string().uuid(),
});

export type QuestionData = z.infer<typeof questionSchema>;

export const quizSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  questions: z.array(questionSchema),
});

export type QuizData = z.infer<typeof quizSchema>;

const quizzesSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
  questionCount: z.number().int().min(0),
  currencyReward: z.number().int().min(0),
  trophyReward: z.number().int().min(0),
});

export type QuizzesData = z.infer<typeof quizzesSchema>;

export const createQuizSchema = z.object({
  title: z
    .string({ message: "Title must not be empty" })
    .min(3, { message: "Title must be between 3 and 100 characters" })
    .max(100, { message: "Title must be between 3 and 100 characters" }),
});

export type CreateQuizData = z.infer<typeof createQuizSchema>;

export const createOptionSchema = z.object({
  content: z.string().min(1, { message: "This field must not be empty" }),
  isCorrect: z.boolean(),
});

export const createQuestionSchema = z.object({
  content: z.string({ message: "Title must not be empty" }).min(1, { message: "Title must not be empty" }),
  options: z.array(createOptionSchema),
});

export type CreateQuestionData = z.infer<typeof createQuestionSchema>;

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type LoginData = z.infer<typeof loginSchema>;

export const submitAnswersSchema = z.object({
  id: z.string(),
  answers: z.array(z.object({ questionId: z.string(), optionId: z.string() })),
});
export type SubmitAnswerData = z.infer<typeof submitAnswersSchema>;

export const resultSchema = z.object({
  currency: z.number(),
  trophy: z.number(),
  correct: z.array(questionSchema),
  incorrect: z.array(questionSchema),
});

export type ResultData = z.infer<typeof resultSchema>;
