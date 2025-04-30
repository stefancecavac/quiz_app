import { QuizzesData } from "../types";
import { CurrencyIcon } from "./ui/icons/CurrencyIcon";
import { TrophyIcon } from "./ui/icons/TrophyIcon";

type QuizCardProps = {
  quiz: QuizzesData;
};

export const QuizCard = ({ quiz }: QuizCardProps) => {
  return (
    <div
      className={`rounded-lg flex flex-col overflow-auto     border border-base-content/20  hover:scale-105 transition-all  [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]`}
    >
      <div
        className={`flex justify-between p-3 py-5
          ${quiz.difficulty === "EASY" && "bg-green-400"}
          ${quiz.difficulty === "MEDIUM" && "bg-yellow-500"}
          ${quiz.difficulty === "HARD" && "bg-red-400"}`}
      >
        <p className="text-2xl font-medium text-base-content">{quiz.title}</p>
        <div className="flex  items-center gap-3">
          <div
            className={`flex  flex-col gap-1 rounded-2xl px-2 py-1
          ${quiz.difficulty === "EASY" && "bg-green-500"}
          ${quiz.difficulty === "MEDIUM" && "bg-yellow-500"}

          ${quiz.difficulty === "HARD" && "bg-red-500"}`}
          >
            <p className="text-white font-medium text">{quiz.difficulty.toLocaleLowerCase()}</p>
          </div>
        </div>
      </div>
      <div className="mt-2 px-3">
        <p className="flex items-center gap-2 font-medium text-base-content/50">
          Questions: <span className="flex font-medium">{quiz.questionCount}</span>
        </p>
      </div>

      <div className="mt-2 flex flex-col px-3">
        <p className="font-medium text-base-content/50 ">Rewards:</p>
        <div className="pl-5 flex flex-col pt-1 items-start">
          <p className=" flex items-center gap-2 font-medium text-lg text-secondary">
            + 50
            <div className="size-4">
              <CurrencyIcon />
            </div>
          </p>

          <p className="text-yellow-400 flex items-center gap-2 font-medium text-lg">
            + 1
            <div className="size-5">
              <TrophyIcon />
            </div>
          </p>
        </div>
      </div>

      <div className="mt-5 items-center justify-center flex flex-col mx-auto p-3 ">
        <button
          type="submit"
          className="py-2 w-fit px-6 bg-white hover:bg-secondary group/button  rounded-2xl cursor-pointer select-none
      active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
      active:border-b-[0px]
      transition-all duration-110
    
      hover:[box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-secondary)_60%,white)]
    [box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]
      border border-base-content/20"
        >
          <span className="flex   justify-center items-center h-full group-hover/button:text-white text-secondary font-bold ">Start Quiz </span>
        </button>
        <div className="text-base-content/50 font-medium  flex items-center gap-1 pl-3 mt-3">
          - 20
          <div className="size-4">
            <CurrencyIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
