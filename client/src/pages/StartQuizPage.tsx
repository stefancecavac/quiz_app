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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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

  const handleSubmitQuiz = () => {
    if (!questions) return;
    submitQuiz({ answers: selectedOptions, id: questions[0]?.quizId });
  };

  const currentQuestion = questions?.[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <div className="w-full max-w-xl rounded-3xl shadow-lg overflow-hidden">
        <div className="bg-primary p-4 flex justify-between items-center">
          <div className="text-white font-bold">
            {currentQuestionIndex + 1}/{questions?.length}
          </div>
        </div>{" "}
        <div className="p-6 md:p-8">
          <h2 className="text-3xl font-medium text-center text-base-content mb-8">{currentQuestion?.content}?</h2>

          <div className="space-y-4 mb-8">
            {currentQuestion?.options.map((option) => {
              const isSelected = selectedOptions.some((o) => o.questionId === currentQuestion.id && o.optionId === option.id);

              return (
                <button
                  key={option.id}
                  onClick={() => handleSetOption(currentQuestion.id, option.id)}
                  className={`w-full p-4 text-sm rounded-xl transition-all duration-200 flex items-center border hover:cursor-pointer border-base-content/20 [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]
                  ${isSelected ? "border-secondary bg-secondary/20 text-secondary shadow-md" : "hover:bg-base-content/5"}`}
                >
                  <div
                    className={`size-6 rounded-full mr-3 flex items-center justify-center
                  ${isSelected ? "bg-secondary text-white" : "bg-gray-100 text-gray-500"}`}
                  >
                    {["A", "B", "C", "D"][currentQuestion.options.indexOf(option)]}
                  </div>
                  <span className=" font-medium">{option.content}</span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-between">
            {currentQuestionIndex > 0 ? (
              <button
                onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                className={`px-8 py-3  hover:bg-base-content/10 hover:cursor-pointer rounded-xl font-medium text-base-content border border-base-content/20 [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]`}
              >
                Previous
              </button>
            ) : (
              <div></div>
            )}

            <button
              onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
              className={`px-8 py-3  hover:bg-base-content/10 hover:cursor-pointer rounded-xl font-medium text-base-content border border-base-content/20 [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]`}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
