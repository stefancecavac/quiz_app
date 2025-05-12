import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../config/ApiClient";

export const usePurchaseHeart = () => {
  const queryClient = useQueryClient();
  const purchaseHeartApi = async () => {
    const response = await axiosInstance.put("/shop/");
    return response.data;
  };

  const { mutate: purchaseHeart } = useMutation({
    mutationKey: ["shop"],
    mutationFn: purchaseHeartApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });

  return { purchaseHeart };
};
