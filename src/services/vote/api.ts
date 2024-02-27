import { AxiosResponse } from "axios";
import {
  FavData,
  FavouriteCreateRes,
  FavouriteDeleteRes,
  FavouriteRes,
  VoteCreateRes,
  VoteData,
  VoteRes,
} from "../../types/vote";

import instance from "@services/instance";

export const createVote = async (
  data: VoteData
): Promise<AxiosResponse<VoteCreateRes>> => {
  return await instance.post<VoteCreateRes>("/votes", data);
};

export const getVote = async (
  id: string
): Promise<AxiosResponse<VoteRes[]>> => {
  return await instance.get<VoteRes[]>(`/votes?sub_id=${id}`);
};

export const addFavourite = async (
  data: FavData
): Promise<AxiosResponse<FavouriteCreateRes>> => {
  return await instance.post<FavouriteCreateRes>("/favourites", data);
};

export const getFavourite = async (
  id: string
): Promise<AxiosResponse<FavouriteRes[]>> => {
  return await instance.get<FavouriteRes[]>(`/favourites?sub_id=${id}`);
};

export const deleteFavourite = async (
  id: string
): Promise<AxiosResponse<FavouriteDeleteRes>> => {
  return await instance.delete<FavouriteDeleteRes>(`/favourites/${id}`);
};
