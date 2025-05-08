import { useStartQuiz } from "../api/QuizApi";
import { QuizzesData } from "../types";
import { CurrencyIcon } from "./ui/icons/CurrencyIcon";
import { LifeIcon } from "./ui/icons/LifeIcon";
import { TrophyIcon } from "./ui/icons/TrophyIcon";

type QuizCardProps = {
  quiz: QuizzesData;
};

export const QuizCard = ({ quiz }: QuizCardProps) => {
  const { startQuiz, quizStarting } = useStartQuiz();

  return (
    <div
      className={`rounded-lg flex flex-col overflow-auto  bg-white    border border-base-content/20  hover:scale-105 transition-all  [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]`}
    >
      <div
        className={`flex justify-between p-3 py-5
          ${quiz.difficulty === "EASY" && "bg-green-400"}
          ${quiz.difficulty === "MEDIUM" && "bg-yellow-500"}
          ${quiz.difficulty === "HARD" && "bg-red-400"}`}
      >
        <p className="text-2xl font-medium text-white">{quiz.title}</p>
        <div className="flex  items-center gap-3">
          <div className={`flex  flex-col gap-1 rounded px-2 py-1 bg-white/20`}>
            <p className="text-white font-medium text">{quiz.difficulty.toLocaleLowerCase()}</p>
          </div>
        </div>
      </div>
      <div className="mt-2 px-3 flex items-center justify-between   ">
        <div className="flex flex-col gap-1">
          <p className="text-base-content/50 font-medium text-sm">Questions:</p>
          <span className="flex font-medium text-base-content/50">{quiz.questionCount} Total</span>
        </div>
        <div className="pl-5 flex flex-col pt-1 items-start p-1 rounded-lg ">
          <p className="font-medium text-base-content/50 text-sm ">Rewards:</p>
          <div className="flex items-center gap-4">
            <p className=" flex items-center gap-1 font-medium text-lg text-secondary">
              + {quiz.currencyReward}
              <div className="size-4">
                <CurrencyIcon />
              </div>
            </p>

            <p className="text-yellow-400 flex items-center gap-1 font-medium text-lg">
              + {quiz.trophyReward}
              <div className="size-5">
                <TrophyIcon />
              </div>
            </p>
          </div>
        </div>
      </div>

      <div className=" items-center justify-center flex flex-col  p-3 ">
        <button
          disabled={quizStarting}
          onClick={() => startQuiz(quiz.id)}
          type="submit"
          className="py-1 w-full px-4 bg-secondary hover:bg-secondary/80   rounded-2xl cursor-pointer select-none
      active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
      active:border-b-[0px]
      transition-all duration-110
 [box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-secondary)_80%,black),0_10px_0_0_color-mix(in_srgb,var(--color-secondary)_30%,transparent)]
      border border-base-content/20"
        >
          <span className="flex   justify-center items-center h-full  text-white font-bold ">
            {!quizStarting ? "Start Quiz" : <span className="loading loading-spinner size-4"></span>}
          </span>
        </button>
        <div className=" font-medium text-red-400  flex items-center gap-2 pl-3 mt-3">
          <div className="size-4">
            <LifeIcon />
          </div>
          <p>1</p>
          <p>Required</p>
        </div>
      </div>
    </div>
  );
};
