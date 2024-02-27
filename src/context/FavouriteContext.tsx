import { ReactNode, createContext } from "react";
import { useFavourite } from "@services/vote/queries";
import { useAddFavourite, useDeleteFavourite } from "@services/vote/mutation";
import { FavData, FavouriteRes } from "../types/vote";

import addFavLog from "@utils/helpers/addFavLog";

interface FavouriteProviderProps {
  children: ReactNode;
}

interface FavouriteContextType {
  favourites: FavouriteRes[] | undefined;
  toggleFavourite: (data: FavData) => void;
  isLoading: boolean;
}

export const FavouriteContext = createContext<FavouriteContextType | undefined>(
  undefined
);

const FavouriteProvider = ({ children }: FavouriteProviderProps) => {
  const userId = localStorage.getItem("user-id") ?? "";

  const { data: favourites, isLoading } = useFavourite(userId);
  const addFavorite = useAddFavourite();
  const deleteFavorite = useDeleteFavourite();

  console.log(favourites);

  const toggleFavourite = (data: FavData) => {
    const isFavourite = favourites?.find(
      (fav) => fav.image.id === data.image_id
    );

    if (isFavourite) {
      deleteFavorite.mutate(String(isFavourite?.id), {
        onSuccess: () => addFavLog("delete", data.image_id),
      });
    } else {
      addFavorite.mutate(
        { sub_id: userId, image_id: data.image_id },
        {
          onSuccess: () => addFavLog("add", data.image_id),
        }
      );
    }
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, toggleFavourite, isLoading }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
