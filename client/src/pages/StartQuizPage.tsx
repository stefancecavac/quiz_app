import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";
import { QuestionData } from "../types";
import { useSubmitQuiz } from "../api/QuizApi";
import { RewardModal } from "../components/modal/RewardModal";

type Answer = { questionId: string; optionId: string };

export const StartQuizPage = () => {
  const navigate = useNavigate();

  const { submitQuiz, successData } = useSubmitQuiz();
  const [questions, setQuestions] = useState<QuestionData[] | undefined>();
  const [selectedOptions, setSelectedOptions] = useState<Answer[]>([]);

  const handleSetOption = (questionId: string, optionId: string) => {
    setSelectedOptions((prev) => {
      const filtered = prev.filter((p) => p.questionId !== questionId);
      return [...filtered, { questionId, optionId }];
    });
  };

  useLayoutEffect(() => {
    const storedQuestions = localStorage.getItem("startQuiz");
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    } else {
      navigate("/");
    }
  }, []);

  const handleExitQuiz = () => {
    navigate("/");
    localStorage.removeItem("startQuiz");
  };

  const handleSubmitQuiz = () => {
    if (!questions) return;
    submitQuiz({ answers: selectedOptions, id: questions[0]?.quizId });
  };

  return (
    <div className="w-full flex flex-col items-center mb-10  justify-center ">
      <div className="p-5 w-fit self-start">
        <button onClick={() => handleExitQuiz()} className="flex items-center gap-5">
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
        </button>
      </div>
      <div className="w-2/5 flex flex-col gap-10 mt-10">
        {questions?.map((question, index) => (
          <div key={index} className="w-full flex flex-col items-center  justify-center ">
            <div className="w-4/5">
              <h1 className="text-base-content font-medium text-3xl text-center">{question.content}?</h1>
              <div className="flex flex-col mt-10 gap-5">
                {question.options.map((option) => (
                  <label key={option.id} className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option.id}
                      checked={selectedOptions.find((o) => o.questionId === question.id && o.optionId === option.id) !== undefined}
                      onChange={() => handleSetOption(question.id, option.id)}
                      className="peer hidden"
                    />
                    <div
                      className={`w-full rounded-2xl px-5 py-2  font-medium border-2 transition  border-base-content/10 border-b-transparent  [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]
                        ${
                          selectedOptions.find((o) => o.questionId === question.id && o.optionId === option.id)
                            ? "border-secondary bg-secondary text-white"
                            : "border-base-content/10"
                        } `}
                    >
                      {option.content}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => handleSubmitQuiz()}
          className="p-2 px-3 rounded-2xl bg-primary hover:bg-primary/80 cursor-pointer select-none
      active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
      active:border-b-[0px]
      transition-all duration-110
    [box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-primary)_80%,black),0_10px_0_0_color-mix(in_srgb,var(--color-primary)_30%,transparent)]
      border-b-[0.5px] border-white/10"
        >
          <span className="flex flex-col justify-center text-lg items-center h-full text-white font-bold ">Submit Quiz</span>
        </button>
      </div>
      <RewardModal />
    </div>
  );
};
