import { useCreateQustion } from "../api/QustionApi";
import { useForm } from "react-hook-form";
import { CreateQuestionData, createQuestionSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useGetSingleQuiz } from "../api/QuizApi";

export const CreateQuestionsPage = () => {
  const { quiz } = useGetSingleQuiz();
  const { createQuestion } = useCreateQustion();
  const { register, handleSubmit } = useForm<CreateQuestionData>({ resolver: zodResolver(createQuestionSchema) });

  const handleCreateQuestion = (data: CreateQuestionData) => {
    createQuestion(data);
  };

  return (
    <div className="w-full flex flex-col items-center  justify-center mt-20 ">
      <h1 className="text-base-content font-medium text-3xl">{quiz.title}</h1>

      <form onSubmit={handleSubmit(handleCreateQuestion)} className="w-2/5">
        <div className="flex flex-col mt-10 gap-10">
          <label className="flex flex-col gap-3">
            <input
              autoComplete="current-password"
              {...register("content")}
              className=" rounded-2xl px-5 py-3 text-xl font-medium  focus-within:border-secondary focus-within:outline-none w-full placeholder:font-medium placeholder:text-xl p-3 border-2 border-base-content/10 border-b-transparent  [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]
   "
              placeholder="Quiz question goes here"
            ></input>
            {/* {errors?.title && <span className="text-error font-medium ">{errors.title.message}</span>} */}
          </label>

          <button
            type="submit"
            className="py-3 w-full px-10 bg-primary hover:bg-primary/70 rounded-2xl cursor-pointer select-none
  active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
  active:border-b-[0px]
  transition-all duration-110
[box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-primary)_80%,black),0_10px_0_0_color-mix(in_srgb,var(--color-primary)_30%,transparent)]
  border-b-[0.5px] border-white/10"
          >
            <span className="flex flex-col justify-center items-center h-full text-xl text-white font-bold ">
              Add Question {/* {isLogging ? <span className="loading loading-spinner py-3"></span> : "Login"} */}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
