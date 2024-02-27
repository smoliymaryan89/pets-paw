import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  getAllBreeds,
  getBreedByName,
  getBreedByParams,
  getRandomImage,
} from "./api";
import { BreedParams } from "../../types/breed";

export const useBreedByName = (name: string) => {
  return useQuery({
    queryKey: ["breedByName", name],
    queryFn: () => getBreedByName(name),
    select: ({ data }) => data,
  });
};

export const useAllBreeds = () => {
  return useQuery({
    queryKey: ["allBreeds"],
    queryFn: () => getAllBreeds(),
    select: ({ data }) =>
      data.map(({ id, name }) => ({ value: id, label: name })),
    staleTime: Infinity,
  });
};

export const useBreedByParams = (params: BreedParams) => {
  return useQuery({
    queryKey: ["breedsByParams", params],
    queryFn: () => getBreedByParams(params),
    select: ({ data }) => data,
    placeholderData: keepPreviousData,
  });
};

export const useRandomImage = () => {
  return useQuery({
    queryKey: ["randomImage"],
    queryFn: getRandomImage,
    select: ({ data }) => data,
  });
};
