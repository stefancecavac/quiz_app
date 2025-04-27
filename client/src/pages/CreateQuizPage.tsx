import { Link } from "react-router";
import { useCreateQuiz } from "../api/QuizApi";
import { useForm } from "react-hook-form";
import { CreateQuizData, createQuizSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

export const CreateQuizPage = () => {
  const { createQuiz } = useCreateQuiz();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<CreateQuizData>({ resolver: zodResolver(createQuizSchema) });

  const handleCreateQuiz = (data: CreateQuizData) => {
    createQuiz(data);
  };

  return (
    <div className="w-full flex flex-col items-center  justify-center ">
      <div className="p-5 w-fit self-start">
        <Link to={"/"} className="flex items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="size-8 text-base-content/50"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          <p className=" text-base-content/50 font-medium text-xl">Back to Dashboard</p>
        </Link>
      </div>
      <form onSubmit={handleSubmit(handleCreateQuiz)} className="w-2/5">
        <h1 className="text-4xl text-base-content font-medium">Create a Quizz</h1>
        <div className="flex flex-col mt-10 gap-10">
          <label className="flex flex-col gap-3">
            <input
              autoComplete="current-password"
              {...register("title")}
              className=" rounded-2xl px-5 py-3 text-xl font-medium  focus-within:border-secondary focus-within:outline-none w-full placeholder:font-medium placeholder:text-xl p-3 border-2 border-base-content/10 border-b-transparent  [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]
       "
              placeholder="Quiz name"
            ></input>
            {errors?.title && <span className="text-error font-medium ">{errors.title.message}</span>}
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
              Create Quiz {/* {isLogging ? <span className="loading loading-spinner py-3"></span> : "Login"} */}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
