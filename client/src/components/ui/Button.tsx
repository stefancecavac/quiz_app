export const Button = () => {
  return (
    <div
      className="p-1 px-3 bg-primary rounded-lg cursor-pointer select-none
      active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
      active:border-b-[0px]
      transition-all duration-110
    [box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-primary)_80%,black),0_10px_0_0_color-mix(in_srgb,var(--color-primary)_30%,transparent)]
      border-b-[0.5px] border-white/10"
    >
      <span className="flex flex-col justify-center items-center h-full text-white font-bold ">Create Quiz</span>
    </div>
  );
};
