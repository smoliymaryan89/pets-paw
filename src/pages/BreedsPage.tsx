import { useEffect, useState } from "react";
import { useAllBreeds, useBreedByParams } from "@services/breed/query";
import { SelectData, selectLimit } from "@utils/data/selectData";
import { BreedByParams } from "../types/breed";
import { PaginationType } from "../types/pagination";

import clsx from "clsx";
import BackBtn from "@components/ui/BackBtn";
import Button from "@components/ui/Button";
import Loader from "@components/ui/Loader";
import CatList from "@components/CatList";
import Pagination from "@components/ui/Pagination";
import CustomSelect from "@components/ui/CustomSelect/CustomSelect";

interface SelectedData {
  breedId: string;
  limit: string;
}

const BreedsPage = () => {
  const { data: breeds } = useAllBreeds();

  const allBreeds = [{ value: "", label: "All breeds" }, ...(breeds ?? [])];

  const [page, setPage] = useState<number>(0);
  const [sortedBreeds, setSortedBreeds] = useState<BreedByParams[] | null>(
    null
  );
  const [sortType, setSortType] = useState<"asc" | "desc">("asc");
  const [selectedData, setSelectedData] = useState<SelectedData>({
    breedId: allBreeds[0].value,
    limit: selectLimit[0].value,
  });

  const {
    data: breedByParams,
    isLoading,
    isFetching,
    isPlaceholderData,
  } = useBreedByParams({
    breed_ids: selectedData.breedId,
    limit: selectedData.limit,
    has_breeds: true,
    page,
  });

  useEffect(() => {
    if (breedByParams) {
      const sorted = [...breedByParams].sort((a, b) =>
        sortType === "asc"
          ? a.breeds[0].name.localeCompare(b.breeds[0].name)
          : b.breeds[0].name.localeCompare(a.breeds[0].name)
      );
      setSortedBreeds(sorted);
    }
  }, [breedByParams, sortType]);

  const handleSelect = (value: SelectData, selectType: "breeds" | "limit") => {
    if (selectType === "breeds") {
      setSelectedData({
        ...selectedData,
        breedId: value.value,
      });

      setPage(0);
    } else if (selectType === "limit") {
      setSelectedData({
        ...selectedData,
        limit: value.value,
      });

      setPage(0);
    }
  };

  const handlePage = (type: PaginationType) => {
    if (type === PaginationType.Prev) {
      setPage((prev) => prev - 1);
    } else {
      setPage((prev) => prev + 1);
    }
  };
  return (
    <section className="section ">
      <div className="flex flex-wrap gap-[10px] mb-[10px] md:flex-nowrap md:mb-[20px]">
        <BackBtn text="BREEDS" />

        <CustomSelect
          options={allBreeds}
          defaultValue={allBreeds[0]}
          onChange={(value) =>
            handleSelect(value ?? { value: "", label: "" }, "breeds")
          }
          isSearchable={true}
          className="w-full md:w-[226px] lg:w-[224px]"
        />

        <div className="flex flex-1 gap-[10px] ">
          <CustomSelect
            options={selectLimit}
            isSearchable={false}
            defaultValue={selectLimit[0]}
            onChange={(value) =>
              handleSelect(value ?? { value: "", label: "" }, "limit")
            }
            className="w-full md:w-[101px]"
          />

          <Button
            icon="icon-sort-top"
            btnStyles={clsx(
              "!bg-dark-white dark:!bg-grey-0.05 w-[40px] h-[40px] border-[2px] border-transparent hover:border-light-pink dark:hover:border-pink-20 self-end min-w-[40px] md:self-start",
              sortType === "asc" && "!border-light-pink dark:!border-pink-20"
            )}
            iconStyles={clsx(
              "!fill-grey group-hover:!fill-pink",
              sortType === "asc" && "!fill-pink"
            )}
            onClick={() => setSortType("asc")}
          />

          <Button
            icon="icon-sort-bottom"
            btnStyles={clsx(
              "!bg-dark-white dark:!bg-grey-0.05 border-[2px] w-[40px] h-[40px] border-transparent hover:border-light-pink dark:hover:border-pink-20 self-end min-w-[40px] md:self-start",
              sortType === "desc" && "!border-light-pink dark:!border-pink-20"
            )}
            iconStyles={clsx(
              "!fill-grey group-hover:!fill-pink",
              sortType === "desc" && "!fill-pink"
            )}
            onClick={() => setSortType("desc")}
          />
        </div>
      </div>

      {isLoading || isFetching ? (
        <Loader className={"min-h-[460px]"} />
      ) : (
        breedByParams && (
          <CatList data={sortedBreeds || breedByParams} isOverlay={true} />
        )
      )}

      {breedByParams && (
        <Pagination
          handlePage={handlePage}
          page={page}
          limit={Number(selectedData.limit)}
          data={breedByParams}
          isPlaceholderData={isPlaceholderData}
        />
      )}
    </section>
  );
};

export default BreedsPage;
