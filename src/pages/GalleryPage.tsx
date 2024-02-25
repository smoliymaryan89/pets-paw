import { useState } from "react";
import { useAllBreeds, useBreedByParams } from "@services/breed/query";
import { PaginationType } from "../types/pagination";

import Modal from "@components/Modal";
import Pagination from "@components/ui/Pagination";
import CatList from "@components/CatList";
import Loader from "@components/ui/Loader";
import GalleryForm from "@components/GalleryForm";
import Button from "@components/ui/Button";
import BackBtn from "@components/ui/BackBtn";

export interface Data {
  limit: string;
  order: "RANDOM" | "ASC" | "DESC";
  type: string;
  breed: string;
}

const GalleryPage = () => {
  const [selectData, setSelectData] = useState<Data | null>(null);
  const [page, setPage] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const { data } = useAllBreeds();
  const {
    data: breedsByParams,
    isLoading,
    isFetching,
    isPlaceholderData,
  } = useBreedByParams({
    mime_types: selectData?.type,
    order: selectData?.order ?? "RANDOM",
    breed_ids: selectData?.breed ?? "",
    limit: selectData?.limit ?? "5",
    page,
  });

  const selectDataBreeds = [{ value: "", label: "None" }, ...(data ?? [])];

  const handleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  const handleSubmit = (selectData: Data) => {
    setSelectData(selectData);
    setPage(0);
  };

  const handlePage = (type: PaginationType) => {
    if (type === PaginationType.Prev) {
      setPage((prev) => prev - 1);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <section className="section">
        <div className="flex flex-wrap gap-[10px] mb-[10px] md:items-center md:justify-between md:mb-[20px]">
          <BackBtn text="GALLERY" />

          <Button
            icon="icon-upload"
            text="UPLOAD"
            iconStyles="w-[16px] h-[16px] group-hover:fill-white"
            btnStyles="w-full gap-[10px] text-pink text-12 font-medium leading-[1.3] tracking-[2px] py-[12px] hover:bg-pink hover:text-white md:max-w-[143px]"
            onClick={handleModal}
          />
        </div>

        <GalleryForm
          onSubmit={handleSubmit}
          selectDataBreeds={selectDataBreeds}
        />

        {isLoading || isFetching ? (
          <Loader className={"min-h-[460px]"} />
        ) : (
          breedsByParams && <CatList data={breedsByParams} isOverlay={true} />
        )}

        {breedsByParams && (
          <Pagination
            handlePage={handlePage}
            page={page}
            isPlaceholderData={isPlaceholderData}
            data={breedsByParams}
            limit={Number(selectData?.limit) ?? 5}
          />
        )}
      </section>

      {modalIsOpen && <Modal handleModal={handleModal} />}
    </>
  );
};

export default GalleryPage;
