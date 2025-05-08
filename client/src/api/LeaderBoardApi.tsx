import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../config/ApiClient";
import { UserData } from "../types";

export const useGetLeaderboards = () => {
  const getAllUsersForLeaderboardApi = async () => {
    const response = await axiosInstance.get("/leaderboards/");
    return response.data as UserData[];
  };

  const { data: leaderBoardData } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getAllUsersForLeaderboardApi,
  });

  return { leaderBoardData };
};
