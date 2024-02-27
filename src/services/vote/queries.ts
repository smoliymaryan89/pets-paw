import { useQuery } from "@tanstack/react-query";
import { getFavourite, getVote } from "./api";

export const useVote = (id: string) => {
  return useQuery({
    queryKey: ["votes", id],
    queryFn: () => getVote(id),
    select: ({ data }) => data,
    staleTime: Infinity,
  });
};

export const useFavourite = (id: string) => {
  return useQuery({
    queryKey: ["favourites", id],
    queryFn: () => getFavourite(id),
    select: ({ data }) => data,
    staleTime: Infinity,
  });
};
