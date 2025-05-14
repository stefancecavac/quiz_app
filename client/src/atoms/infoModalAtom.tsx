import { atom } from "jotai";

type InfoModalAtomProps = {
  text: string;
};
export const InfoModalAtom = atom<InfoModalAtomProps | null>(null);
