import { Button } from "../ui/Button";

export const Header = () => {
  return (
    <div className="h-20 flex items-center  justify-between px-3">
      <Button />
      <div className="bg-base-200  rounded-lg p-2 [box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-base-content)_40%,white),0_10px_0_0_color-mix(in_srgb,var(--color-base-content)_20%,white)] border-b-[1px]  border-white/30">
        Stefan Cecavac
      </div>
    </div>
  );
};
