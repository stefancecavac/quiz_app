import { UseAuthContext } from "../context/AuthContext";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { LoginData, RegisterData, registerSchema } from "../types";

export const RegisterPage = () => {
  const { register: registerUser, isRegistering, registerError } = UseAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: zodResolver(registerSchema) });

  const handleLogin = (data: LoginData) => {
    registerUser(data);
  };
  return (
    <div className="w-full flex flex-col items-center  justify-center ">
      <div className="p-5 w-fit self-start">
        <Link to={"/welcome"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="size-8 text-base-content/50 font-bold"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col w-3/4 md:w-2/4 xl:w-1/4 items-center mt-20">
        <h1 className="text-3xl text-base-content font-semibold">Create an account</h1>

        <div className="flex flex-col gap-10 mt-10 w-full">
          <label className="flex flex-col gap-3">
            <input
              autoComplete="new-password"
              {...register("username")}
              className=" rounded-2xl px-5 py-3 text-xl font-medium  focus-within:border-secondary focus-within:outline-none w-full placeholder:font-medium placeholder:text-xl p-3 border-2 border-base-content/10 border-b-transparent [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]
       "
              placeholder="Username"
            ></input>
            {(registerError?.message || errors.username?.message) && (
              <span className="text-error font-medium ">{registerError?.message || errors.username?.message}</span>
            )}
          </label>

          <label className="flex flex-col gap-3">
            <input
              type="password"
              autoComplete="current-password"
              {...register("password")}
              className=" rounded-2xl px-5 py-3 text-xl font-medium  focus-within:border-secondary focus-within:outline-none w-full placeholder:font-medium placeholder:text-xl p-3 border-2 border-base-content/10 border-b-transparent  [box-shadow:0_7px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)]
       "
              placeholder="Password"
            ></input>
            {(registerError?.message || errors.password?.message) && (
              <span className="text-error font-medium ">{registerError?.message || errors.password?.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="py-3 w-full px-10 bg-secondary hover:bg-secondary/70 rounded-2xl cursor-pointer select-none
      active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
      active:border-b-[0px]
      transition-all duration-110
    [box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-secondary)_80%,black),0_10px_0_0_color-mix(in_srgb,var(--color-secondary)_30%,transparent)]
      border-b-[0.5px] border-white/10"
          >
            <span className="flex flex-col justify-center items-center h-full text-xl text-white font-bold ">
              {isRegistering ? <span className="loading loading-spinner py-3"></span> : "Register"}
            </span>
          </button>
        </div>
        <div className="divider my-8 text-base-content/50 font-medium text-lg ">OR</div>

        <Link
          to={"/login"}
          className="py-3 w-full px-10 bg-primary hover:bg-primary/70 rounded-2xl cursor-pointer select-none
      active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
      active:border-b-[0px]
      transition-all duration-110
    [box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-primary)_80%,black),0_10px_0_0_color-mix(in_srgb,var(--color-primary)_30%,transparent)]
      border-b-[0.5px] border-white/10"
        >
          <span className="flex flex-col justify-center items-center h-full text-xl text-white font-bold ">Login</span>
        </Link>
      </form>
    </div>
  );
};
