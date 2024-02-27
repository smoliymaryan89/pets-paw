import { AxiosResponse } from "axios";
import { Breed, BreedByParams, BreedParams, Image } from "../../types/breed";

import instance from "@services/instance";

export const getBreedByName = async (
  name: string
): Promise<AxiosResponse<Breed[]>> => {
  return await instance.get<Breed[]>(`/breeds/search?q=${name}`);
};

export const getAllBreeds = async (): Promise<AxiosResponse<Breed[]>> => {
  return await instance.get<Breed[]>("/breeds");
};

export const getBreedByParams = async (
  params: BreedParams
): Promise<AxiosResponse<BreedByParams[]>> => {
  return await instance.get<BreedByParams[]>("/images/search", { params });
};

export const getRandomImage = async (): Promise<AxiosResponse<Image[]>> => {
  return await instance.get<Image[]>("/images/search?size=thumb");
};
