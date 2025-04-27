import { Link } from "react-router";
import { useGetAllQuizzes } from "../api/QuizApi";

export const HomePage = () => {
  const { quizzes } = useGetAllQuizzes();

  return (
    <div className="w-full h-full flex flex-col m-5">
      <div className="flex">
        <Link
          to={"/create"}
          className="p-1 px-3 bg-primary rounded-lg cursor-pointer select-none
      active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
      active:border-b-[0px]
      transition-all duration-110
    [box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-primary)_80%,black),0_10px_0_0_color-mix(in_srgb,var(--color-primary)_30%,transparent)]
      border-b-[0.5px] border-white/10"
        >
          <span className="flex flex-col justify-center items-center h-full text-white font-bold ">Create Quiz</span>
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <p>All quizzes</p>
        <div className="grid grid-cols-3 gap-5">
          {quizzes?.map((quiz) => (
            <div className=" rounded-lg  p-5 border border-base-content/20 hover:cursor-pointer hover:scale-105 transition-all [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]">
              <p className="text-xl font-medium text-base-content">{quiz.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
