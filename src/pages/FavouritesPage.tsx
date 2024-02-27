import { FavHistory } from "../types/vote";
import { useFavouriteContext } from "@hooks/useFavouriteContext";

import BackBtn from "@components/ui/BackBtn";
import NoItemFound from "@components/NoItemFound";
import Loader from "@components/ui/Loader";
import ActionsLog from "@components/ActionsLog";
import CatList from "@components/CatList";

const FavouritesPage = () => {
  const favHistory: FavHistory[] = JSON.parse(
    localStorage.getItem("fav-history") ?? "[]"
  );

  const deletedFavHistory = favHistory.filter(
    ({ action }) => action === "delete"
  );

  const { favourites, isLoading } = useFavouriteContext() ?? {};

  return (
    <section className="section min-h-[770px]">
      <BackBtn text="FAVOURITE" />

      {favourites?.length === 0 && <NoItemFound />}

      {isLoading ? (
        <Loader className="h-full" />
      ) : (
        favourites && <CatList data={favourites} isOverlay={true} />
      )}

      <ActionsLog votes={deletedFavHistory} />
    </section>
  );
};

export default FavouritesPage;
