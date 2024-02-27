import { useRandomImage } from "@services/breed/query";
import { useCreateVote } from "@services/vote/mutation";
import { useVote } from "@services/vote/queries";
import { useFavouriteContext } from "@hooks/useFavouriteContext";
import { FavData, VoteData, VoteType } from "../types/vote";

import BackBtn from "@components/ui/BackBtn";
import Loader from "@components/ui/Loader";
import ActionButtons from "@components/ActionButtons";
import ActionsLog from "@components/ActionsLog";

const VotingPage = () => {
  const userId = localStorage.getItem("user-id") ?? "";
  const favHistory =
    JSON.parse(localStorage.getItem("fav-history") ?? "[]") || [];

  const createVote = useCreateVote();
  const { data: votes } = useVote(userId);
  const { data: breedImage, isLoading, isRefetching } = useRandomImage();

  const { favourites, toggleFavourite } = useFavouriteContext() ?? {};

  const handleVote = (data: VoteData | FavData, type: VoteType) => {
    switch (type) {
      case VoteType.Like:
        createVote.mutate(data as VoteData);
        break;
      case VoteType.Dislike:
        createVote.mutate(data as VoteData);
        break;
      case VoteType.Fav:
        if (toggleFavourite) {
          toggleFavourite(data as FavData);
        }
        break;
      default:
        break;
    }
  };

  return (
    <section className="section">
      <BackBtn text="VOTING" />

      <div className="relative mb-[44px] md:mb-[54px] lg:mb-[52px]">
        {isLoading || isRefetching ? (
          <Loader className="h-[166px] md:h-[376px] lg:h-[360px]" />
        ) : (
          breedImage && (
            <img
              src={breedImage[0].url}
              alt={breedImage[0].id}
              width={breedImage[0].width}
              height={breedImage[0].height}
              className="rounded-20 mx-auto h-[166px] md:h-[376px] lg:h-[360px]"
            />
          )
        )}

        {favourites && (
          <ActionButtons
            handleVote={handleVote}
            imageId={(breedImage && breedImage[0].id) ?? ""}
            userId={userId}
            favourites={favourites}
          />
        )}
      </div>

      {votes && (
        <ActionsLog
          votes={[...votes, ...(Array.isArray(favHistory) ? favHistory : [])]}
        />
      )}
    </section>
  );
};

export default VotingPage;
