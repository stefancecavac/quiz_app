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
      <form onSubmit={handleSubmit(handleCreateQuiz)} className="w-4/5">
        <h1 className="text-base-content font-medium text-5xl text-center">Create Quiz!</h1>
        <p className="text-base-content/70 font-medium text-center mt-2">
          Start by giving your quiz a title. This will help users know what your quiz is about. Once you’ve created it, you can add questions and
          build a fun, engaging experience!
        </p>
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
