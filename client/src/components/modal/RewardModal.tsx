import { useAtom } from "jotai";
import { isRewardModalOpen } from "../../atoms/rewardModalAtom";
import { CurrencyIcon } from "../ui/icons/CurrencyIcon";
import { TrophyIcon } from "../ui/icons/TrophyIcon";
import { useNavigate } from "react-router";

export const RewardModal = () => {
  const [modal, setModalOpen] = useAtom(isRewardModalOpen);
  const navigate = useNavigate();

  if (!modal) return null;

  const handleClaimRewards = () => {
    navigate("/");
    setModalOpen(null);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white overflow-hidden  flex flex-col items-center rounded-lg w-96 relative border border-base-content/50">
        <div className={`${modal.status === "PASSED" ? "bg-primary" : "bg-error"}  w-full p-5 items-center flex-col justify-center flex`}>
          <h2 className="text-3xl font-medium text-white "> {modal.status === "PASSED" ? "Congratulations!" : "Bummer"}</h2>
          <p className="text-white/80 font-medium text-sm pt-2">
            {modal.status === "PASSED" ? "You've completed the quiz! Collect your rewards." : "Better luck next time"}
          </p>
        </div>
        <div className=" flex flex-col items-center p-2 my-3">
          <p className="text-base-content font-medium text-xl ">Rewards earned!</p>
          <div className="flex items-center  justify-center gap-2 pt-5 mx-auto">
            <div className=" flex flex-col h-full  items-center  font-medium text-lg text-secondary border  rounded-lg   p-5">
              <div className="flex items-center gap-2">
                {modal.status === "PASSED" ? "+" : "-"} {modal.currency}
                <div className="size-4">
                  <CurrencyIcon />
                </div>
              </div>
              <p className="text-sm font-medium">Currency</p>
            </div>

            <div className="text-yellow-400 h-full  flex flex-col items-center  font-medium text-lg border  rounded-lg   p-5">
              <div className="flex items-center gap-2">
                {modal.status === "PASSED" ? "+" : "-"} {modal.trophy}
                <div className="size-5">
                  <TrophyIcon />
                </div>
              </div>
              <p className="text-sm font-medium">Trophies</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleClaimRewards}
          className="py-2 mb-7 w-fit px-10 bg-secondary rounded-2xl hover:bg-secondary/70 cursor-pointer select-none
      active:translate-y-1 active:[box-shadow:0_0px_0_0_,0_0px_0_0_]
      active:border-b-[0px]
      transition-all duration-110
    [box-shadow:0_5px_0_0_color-mix(in_srgb,var(--color-secondary)_80%,black),0_10px_0_0_color-mix(in_srgb,var(--color-secondary)_30%,transparent)]
      border-b-[0.5px] border-white/10"
        >
          <span className=" text-white font-medium"> {modal.status === "PASSED" ? "Claim your rewards" : "Better luck next time"}</span>
        </button>
      </div>
    </div>
  );
};
