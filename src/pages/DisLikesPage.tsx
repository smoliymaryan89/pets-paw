import { useVote } from "@services/vote/queries";

import CatList from "@components/CatList";
import NoItemFound from "@components/NoItemFound";
import BackBtn from "@components/ui/BackBtn";
import Loader from "@components/ui/Loader";

const DisLikesPage = () => {
  const userId = localStorage.getItem("user-id") ?? "";

  const { data: votes, isLoading } = useVote(userId);

  const disLikesVotes = votes?.filter(({ value }) => value === -1);

  return (
    <section className="section min-h-[770px]">
      <BackBtn text="DISLIKES" />

      {disLikesVotes?.length === 0 && <NoItemFound />}

      {isLoading ? (
        <Loader className="h-full" />
      ) : (
        disLikesVotes && <CatList data={disLikesVotes} isOverlay={false} />
      )}
    </section>
  );
};

export default DisLikesPage;
