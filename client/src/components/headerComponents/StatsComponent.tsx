import { UseAuthContext } from "../../context/AuthContext";
import { CurrencyIcon } from "../ui/icons/CurrencyIcon";
import { LifeIcon } from "../ui/icons/LifeIcon";
import { TrophyIcon } from "../ui/icons/TrophyIcon";

export const StatsComponent = () => {
  const { user } = UseAuthContext();
  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-2 ">
        <div className="size-5">
          <LifeIcon />
        </div>
        <p className="text-error font-medium">{user?.hearts}</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="size-5">
          <TrophyIcon />
        </div>
        <p className="text-yellow-500 font-medium">{user?.trophy}</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="size-5">
          <CurrencyIcon />
        </div>
        <p className="text-secondary font-medium">{user?.currency}</p>
      </div>
    </div>
  );
};
