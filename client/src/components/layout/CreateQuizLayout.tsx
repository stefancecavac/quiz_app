import React from "react";
import { Link } from "react-router";

export const CreateQuizLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col items-center mb-10  justify-center ">
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
      <div className="w-3/5 flex flex-col gap-10 mt-10">
        {/* <ul className="steps affte:bg-red-500">
          <li className={`step after:!rounded-lg  ${location.pathname.includes("create-quiz") && "step-primary"} `}>Create Quiz</li>
          <li
            className={`step after:!rounded-lg ${
              location.pathname.includes("add-question") ? "step-primary" : "before:!bg-base-content/10 after:!bg-base-"
            } `}
          >
            Add a question
          </li>
          <li className={`step  after:!rounded-lg ${location.pathname.includes("add-option") ? "step-primary" : "before:!bg-base-content/10"} `}>
            Add options
          </li>
          <li className={`step after:!rounded-lg ${location.pathname.includes("finalize") ? "step-primary" : "before:!bg-base-content/10"} `}>
            Finalize
          </li>
        </ul> */}

        {children}
      </div>
    </div>
  );
};
