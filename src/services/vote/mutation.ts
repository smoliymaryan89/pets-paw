import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFavourite, createVote, deleteFavourite } from "./api";
import { FavData, VoteData } from "../../types/vote";

import toast from "react-hot-toast";

export const useCreateVote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: VoteData) => createVote(data),

    onError: () => {
      toast.error("Something went wrong, please try again!");
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["randomImage"],
      });
      await queryClient.invalidateQueries({
        queryKey: ["votes"],
      });
    },
  });
};

export const useAddFavourite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FavData) => addFavourite(data),

    onError: () => {
      toast.error("Something went wrong, please try again!");
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["favourites"],
      });
    },
  });
};

export const useDeleteFavourite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteFavourite(id),

    onError: () => {
      toast.error("Something went wrong, please try again!");
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["favourites"],
      });
    },
  });
};
