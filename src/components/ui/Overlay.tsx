import { useLocation } from "react-router-dom";
import { useDeleteFavourite } from "@services/vote/mutation";
import { useFavouriteContext } from "@hooks/useFavouriteContext";

import clsx from "clsx";
import Button from "./Button";
import addFavLog from "@utils/helpers/addFavLog";

interface OverlayProps {
  text: string;
  imageId?: string;
  userId?: string;
}

const Overlay = ({ text, imageId }: OverlayProps) => {
  const { pathname } = useLocation();

  const { favourites, toggleFavourite } = useFavouriteContext() ?? {};
  const deleteFavorite = useDeleteFavourite();

  const isFavorite = favourites?.some((fav) => fav?.image?.id === imageId);

  return (
    <div
      className={clsx(
        "absolute top-0 left-1/2 -translate-x-1/2 flex text-center w-full h-full px-[10px] py-[10px] bg-pink-60 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-350",
        text && "items-end justify-center",
        pathname === "/gallery" || pathname === "/favourites"
          ? "items-center justify-center"
          : "items-end"
      )}
    >
      {pathname === "/favourites" || pathname === "/gallery" ? (
        <Button
          icon="icon-fav-img"
          iconStyles={clsx(
            "stroke-[2px]",
            isFavorite || pathname === "/favourites"
              ? "!fill-pink"
              : "!fill-transparent stroke-pink"
          )}
          btnStyles="bg-white"
          onClick={() =>
            pathname === "/favourites" && imageId
              ? deleteFavorite.mutate(imageId, {
                  onSuccess: () => addFavLog("delete", imageId),
                })
              : toggleFavourite && toggleFavourite({ image_id: imageId ?? "" })
          }
        />
      ) : (
        <p className="text-pink rounded-10 py-[5px] bg-white w-full">{text}</p>
      )}
    </div>
  );
};

export default Overlay;
