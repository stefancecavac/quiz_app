import { Link } from "react-router";

export const LandingPage = () => {
  return (
    <div className="w-4/6 h-screen  mx-auto flex flex-col ">
      <div className="flex items-center p-3 ">
        <h1 className="text-primary font-semibold text-4xl m-2 tracking-wide text-shadow-primary/10 text-shadow-lg  ">Quizzy</h1>
      </div>
      <div className="mt-40 flex ">
        <div className="w-2/4">
          <div className="mockup-window bg-neutral border border-base-300">
            <div className="grid place-content-center h-80">Hello!</div>
          </div>
        </div>
        <div className="flex flex-col w-2/4">
          <p className="text-base-content text-4xl  tracking-wider font-medium text-center">
            Create quizzes instantly, challenge yourself and others, and master any topic.
          </p>
          <div className="flex flex-col items-center mt-14 gap-5 w-80 mx-auto">
            <Link
              to={"/login"}
              className="py-3 w-full px-10 bg-primary hover:bg-primary/70 rounded-2xl cursor-pointer select-none
      active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
      active:border-b-[0px]
      transition-all duration-110
    [box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-primary)_80%,black),0_10px_0_0_color-mix(in_srgb,var(--color-primary)_30%,transparent)]
      border-b-[0.5px] border-white/10"
            >
              <span className="flex flex-col justify-center items-center h-full text-xl text-white font-bold ">Get started</span>
            </Link>

            <Link
              to={"/create"}
              className="py-3 w-full px-10 bg-secondary rounded-2xl hover:bg-secondary/70 cursor-pointer select-none
      active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
      active:border-b-[0px]
      transition-all duration-110
    [box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-secondary)_80%,black),0_10px_0_0_color-mix(in_srgb,var(--color-secondary)_30%,transparent)]
      border-b-[0.5px] border-white/10"
            >
              <span className="flex flex-col justify-center items-center h-full text-xl text-white font-bold ">I already have an account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
