import { atom } from "jotai";

type ErrorModalAtomProps = {
  text: string;
};
export const ErrorModalAtom = atom<ErrorModalAtomProps | null>(null);
