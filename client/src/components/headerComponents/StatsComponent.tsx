import { useEffect, useState } from "react";
import { UseAuthContext } from "../../context/AuthContext";
import { CurrencyIcon } from "../ui/icons/CurrencyIcon";
import { LifeIcon } from "../ui/icons/LifeIcon";
import { TrophyIcon } from "../ui/icons/TrophyIcon";
import { useQueryClient } from "@tanstack/react-query";

export const StatsComponent = () => {
  const { user } = UseAuthContext();
  const [minutesLeft, setMinutesLeft] = useState({ minutes: 0, seconds: 0 });
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!user?.lastHeartUpdate) return;
    if (user.hearts === 5) return;
    const regenInterval = 20 * 60 * 1000;

    const updateTimer = () => {
      const now = new Date().getTime();
      const lastUpdate = new Date(user.lastHeartUpdate).getTime();

      const timePassed = now - lastUpdate;
      const timeRemaining = regenInterval - timePassed;

      if (timeRemaining <= 0) {
        setMinutesLeft({ minutes: 0, seconds: 0 });
        console.log("ran time remaining");
        queryClient.invalidateQueries({ queryKey: ["auth"] });
      } else {
        const minutes = Math.floor(timeRemaining / 1000 / 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        setMinutesLeft({ minutes, seconds });
      }
    };

    updateTimer();

    const intervalId = setInterval(() => {
      updateTimer();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [user?.lastHeartUpdate]);

  return (
    <div className="flex  items-center  gap-10">
      <div className="flex items-center gap-2 flex-col relative ">
        <div className="flex items-center gap-2">
          <div className="size-5">
            <LifeIcon />
          </div>
          <p className="text-error font-medium">
            {user?.hearts} <span className="text-base-content/50">/ 5</span>
          </p>
        </div>

        {user?.hearts! !== 5 && (
          <div className="flex items-center gap-1 text-sm absolute top-7">
            <p className="text-error font-medium">{minutesLeft.minutes.toString().padStart(2, "0")}</p>
            <span className="text-error font-medium">:</span>
            <p className="text-error font-medium"> {minutesLeft.seconds.toString().padStart(2, "0")}</p>
          </div>
        )}
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
