import { useParams } from "react-router-dom";
import { useBreedByParams } from "@services/breed/query";

import Slider from "@components/Slider";
import Loader from "@components/ui/Loader";
import BackBtn from "@components/ui/BackBtn";
import BreedDescription from "@components/BreedDescription";

const BreedDetailsPage = () => {
  const { breedId } = useParams();

  const { data: breed, isFetching } = useBreedByParams({
    breed_ids: breedId ?? "",
    limit: String(5),
  });

  return (
    <section className="section">
      <BackBtn
        text="BREEDS"
        additionalText={breedId}
        className="!bg-light-pink !text-pink dark:!bg-pink-20"
      />

      {isFetching ? (
        <Loader className="h-[520px] md:h-[606px]" />
      ) : (
        breed && (
          <>
            <Slider data={breed} />
            <BreedDescription data={breed} />
          </>
        )
      )}
    </section>
  );
};

export default BreedDetailsPage;
