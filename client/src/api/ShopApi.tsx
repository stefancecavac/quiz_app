import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../config/ApiClient";
import { useSetAtom } from "jotai";
import { InfoModalAtom } from "../atoms/infoModalAtom";
import { AxiosError } from "axios";

export const usePurchaseHeart = () => {
  const queryClient = useQueryClient();
  const setInfoModal = useSetAtom(InfoModalAtom);

  const purchaseHeartApi = async () => {
    try {
      const response = await axiosInstance.put("/shop/");
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      throw new Error(axiosError.response?.data?.message || "Error fetching user");
    }
  };

  const { mutate: purchaseHeart } = useMutation({
    mutationKey: ["shop"],
    mutationFn: purchaseHeartApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
    onError: (error) => {
      setInfoModal({ text: error.message });
    },
  });

  return { purchaseHeart };
};
