import { useSearchParams } from "react-router-dom";
import { useBreedByName } from "@services/breed/query";

import BackBtn from "@components/ui/BackBtn";
import NoItemFound from "@components/NoItemFound";
import Loader from "@components/ui/Loader";
import CatList from "@components/CatList";

const SearchPage = () => {
  const [searchParam] = useSearchParams();
  const breedName = searchParam.get("breedName") ?? "";

  const { data: breed, isLoading } = useBreedByName(breedName);

  return (
    <section className="section">
      <BackBtn text="SEARCH" />

      {breed?.length === 0 && <NoItemFound />}

      {isLoading ? (
        <Loader className="h-full" />
      ) : (
        breed && <CatList data={breed} isOverlay={true} />
      )}
    </section>
  );
};

export default SearchPage;
