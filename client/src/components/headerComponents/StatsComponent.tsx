import { CurrencyIcon } from "../ui/icons/CurrencyIcon";
import { LifeIcon } from "../ui/icons/LifeIcon";
import { TrophyIcon } from "../ui/icons/TrophyIcon";

export const StatsComponent = () => {
  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-2 ">
        <LifeIcon />
        <p className="text-error font-medium">5</p>
      </div>

      <div className="flex items-center gap-2">
        <TrophyIcon />
        <p className="text-yellow-500 font-medium">5</p>
      </div>

      <div className="flex items-center gap-2">
        <CurrencyIcon />
        <p className="text-secondary font-medium">400</p>
      </div>
    </div>
  );
};
