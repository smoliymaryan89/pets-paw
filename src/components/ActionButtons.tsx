import { FavData, FavouriteRes, VoteData, VoteType } from "../types/vote";

import clsx from "clsx";
import Button from "./ui/Button";

interface ActionButtonsProps {
  handleVote: (data: VoteData | FavData, type: VoteType) => void;
  imageId: string;
  userId: string;
  favourites: FavouriteRes[];
}

const ActionButtons = ({
  handleVote,
  imageId,
  userId,
  favourites,
}: ActionButtonsProps) => {
  const isFavourite = favourites?.find((fav) => fav?.image?.id === imageId);

  return (
    <ul className="absolute -bottom-[34px] left-1/2 -translate-x-1/2 flex items-center gap-[3px] border-[4px] border-white dark:border-[#282828] w-max rounded-10 dark:rounded-14 bg-white md:rounded-20 md:-bottom-[44px] dark:md:rounded-24">
      <li>
        <Button
          icon="icon-like"
          iconStyles="fill-white group-hover:fill-green md:w-[30px] md:h-[30px]"
          btnStyles="!bg-green rounded-l-10 rounded-r-[0px] w-[60px] h-[60px] hover:!bg-green-30 md:w-[80px] md:h-[80px] md:rounded-l-20"
          onClick={() =>
            handleVote(
              {
                image_id: imageId,
                sub_id: userId,
                value: 1,
              },
              VoteType.Like
            )
          }
        />
      </li>
      <li>
        <Button
          icon="icon-fav-img"
          iconStyles={clsx(
            "w-[25px] stroke-[2px]  md:w-[30px] md:h-[27px]",
            isFavourite
              ? "fill-white"
              : "fill-transparent stroke-white group-hover:stroke-pink"
          )}
          btnStyles="bg-pink rounded-[0px] w-[60px] h-[60px] hover:bg-pink-30 md:w-[80px] md:h-[80px]"
          onClick={() =>
            handleVote(
              {
                image_id: imageId,
                sub_id: userId,
              },
              VoteType.Fav
            )
          }
        />
      </li>
      <li>
        <Button
          icon="icon-dislike"
          iconStyles="fill-white group-hover:fill-yellow md:w-[30px] md:h-[30px]"
          btnStyles="bg-yellow rounded-r-10 rounded-l-[0px] w-[60px] h-[60px] hover:bg-yellow-30 md:w-[80px] md:h-[80px] md:rounded-r-20"
          onClick={() =>
            handleVote(
              {
                image_id: imageId,
                sub_id: userId,
                value: -1,
              },
              VoteType.Dislike
            )
          }
        />
      </li>
    </ul>
  );
};

export default ActionButtons;
