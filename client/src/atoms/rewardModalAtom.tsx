import { atom } from "jotai";

type RewardModalProps = {
  currency: number;
  trophy: number;
  status: "PASSED" | "FAILED";
};

export const isRewardModalOpen = atom<RewardModalProps | null>(null);
