import { Link } from "react-router";
import { useGetAllQuizzes } from "../api/QuizApi";
import { QuizCard } from "../components/QuizCard";

export const HomePage = () => {
  const { quizzes } = useGetAllQuizzes();

  return (
    <div className=" grow h-full flex flex-col ">
      <div className="flex items-center justify-between">
        <p className="text-base-content font-medium text-3xl">All quizzes</p>

        <Link
          to={"/create-quiz"}
          className="p-2 px-3 rounded-2xl bg-primary hover:bg-primary/80 cursor-pointer select-none
      active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
      active:border-b-[0px]
      transition-all duration-110
    [box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-primary)_80%,black),0_10px_0_0_color-mix(in_srgb,var(--color-primary)_30%,transparent)]
      border-b-[0.5px] border-white/10"
        >
          <span className="flex flex-col justify-center text-lg items-center h-full text-white font-bold ">Create Quiz</span>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-10">
        {quizzes?.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};
