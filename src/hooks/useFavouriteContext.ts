import { useContext } from "react";
import { FavouriteContext } from "@context/FavouriteContext";

export const useFavouriteContext = () => useContext(FavouriteContext);
