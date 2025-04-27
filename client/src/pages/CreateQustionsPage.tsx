import { useCreateQustion } from "../api/QustionApi";
import { useForm } from "react-hook-form";
import { CreateQuestionData, createQuestionSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useGetSingleQuiz } from "../api/QuizApi";
import { useState } from "react";

export const CreateQuestionsPage = () => {
  const { quiz } = useGetSingleQuiz();
  const { createQuestion } = useCreateQustion();
  const [correctIndex, setCorrectIndex] = useState<number>(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateQuestionData>({
    resolver: zodResolver(createQuestionSchema),
    defaultValues: {
      content: "",
      options: [
        { content: "", isCorrect: false },
        { content: "", isCorrect: false },
        { content: "", isCorrect: false },
      ],
    },
  });

  const handleCreateQuestion = (data: CreateQuestionData) => {
    const formatedOptions = data.options.map((option, index) => ({
      ...option,
      isCorrect: index === correctIndex ? true : false,
    }));
    createQuestion({ content: data.content, options: formatedOptions });
  };

  const watchedOptions = watch("options");

  return (
    <div className="w-full flex flex-col items-center  justify-center  ">
      <h1 className="text-base-content font-medium text-5xl text-center">Add Questions!</h1>
      <p className="text-base-content/70 font-medium text-center mt-2">
        Now it's time to add questions to your quiz. Make each one clear and interesting to keep players engaged. Don't forget to set the correct
        answer for each!
      </p>

      <form onSubmit={handleSubmit(handleCreateQuestion)} className="w-4/5">
        <div className="flex flex-col w-full  mt-10 gap-10">
          {quiz?.questions.map((question) => (
            <div
              key={question.id}
              className="rounded-2xl flex flex-col text-base-content font-medium text-lg  p-4 border border-base-content/20 [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]"
            >
              <p className="text-xl font-medium text-base-content">{question.content}?</p>
              <div className="flex flex-col gap-3 mt-5">
                {question.options.map((option, index) => (
                  <div className={`flex items-center gap-3  rounded-2xl border border-base-content/20 p-4 ${option.isCorrect && "bg-primary/20"}`}>
                    <p className="text-base-content/50  text-sm">{index + 1}</p>
                    <p className="text-base-content  text-sm">{option.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center gap-5  w-full  ">
            <label className="flex flex-col gap-3 w-full">
              <input
                autoComplete="current-password"
                {...register("content")}
                className=" rounded-2xl px-5 py-3 text-xl font-medium  focus-within:border-secondary focus-within:outline-none  placeholder:font-medium  p-3 border-2 border-base-content/10 border-b-transparent  [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]
   "
                placeholder="Quiz question goes here"
              ></input>
              {errors?.content?.message && <span className="text-error font-medium ">{errors.content.message}</span>}
            </label>
            <div className="flex items-center w-full justify-between">
              {watchedOptions?.map((_, index) => (
                <label key={index} className="flex flex-col">
                  <label className="flex items-center gap-2 text-base-content font-medium my-2">
                    <input onChange={() => setCorrectIndex(index)} checked={correctIndex === index} type="radio" name="answer" className="checkbox" />
                    Correct answer
                  </label>
                  <input
                    {...register(`options.${index}.content`)}
                    autoComplete="current-password"
                    className=" rounded-2xl px-5 py-3  font-medium  focus-within:border-secondary focus-within:outline-none  placeholder:font-medium  p-3 border-2 border-base-content/10 border-b-transparent  [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]
"
                    placeholder={`Option ${index + 1} goes here`}
                  ></input>
                  {errors?.options?.[index]?.content?.message && (
                    <span className="text-error font-medium mt-3 ">{errors?.options![index]?.content?.message}</span>
                  )}
                </label>
              ))}
            </div>
            <button
              type="submit"
              className="py-2 self-end w-fit px-5  bg-secondary hover:bg-secondary/70 rounded-2xl cursor-pointer select-none
active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
active:border-b-[0px]
transition-all duration-110
[box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-secondary)_80%,black),0_10px_0_0_color-mix(in_srgb,var(--color-secondary)_30%,transparent)]
border-b-[0.5px] border-white/10"
            >
              <span className="flex flex-col justify-center items-center  truncate h-full text-lg text-white font-bold ">
                Add Question {/* {isLogging ? <span className="loading loading-spinner py-3"></span> : "Login"} */}
              </span>
            </button>
          </div>
        </div>
      </form>

      <div className="flex items-center gap-5 mt-10">
        <button
          type="submit"
          className="py-2 self-end w-fit px-5  bg-primary hover:bg-primary/70 rounded-2xl cursor-pointer select-none
active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
active:border-b-[0px]
transition-all duration-110
[box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-primary)_80%,black),0_10px_0_0_color-mix(in_srgb,var(--color-primary)_30%,transparent)]
border-b-[0.5px] border-white/10"
        >
          <span className="flex flex-col justify-center items-center  truncate h-full text-lg text-white font-bold ">
            Finish Creating quiz {/* {isLogging ? <span className="loading loading-spinner py-3"></span> : "Login"} */}
          </span>
        </button>
      </div>
    </div>
  );
};
