import { FormEvent } from "react";
import { Data } from "@pages/GalleryPage";
import {
  SelectData,
  selectLimitGallery,
  selectOrder,
  selectType,
} from "@utils/data/selectData";

import CustomSelect from "./ui/CustomSelect/CustomSelect";
import Button from "./ui/Button";

interface GalleryFormProps {
  onSubmit: (data: Data) => void;
  selectDataBreeds: SelectData[];
}

const GalleryForm = ({ onSubmit, selectDataBreeds }: GalleryFormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      order: formData.get("order") as string,
      type: formData.get("type") as string,
      breed: formData.get("breed") as string,
      limit: formData.get("limit") as string,
    };

    onSubmit(data as Data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-[10px] mb-[10px] rounded-20 bg-dark-white dark:bg-grey-0.05 md:flex md:flex-wrap md:gap-y-[10px] md:gap-x-[20px] md:mb-[20px] lg:gap-0 lg:px-[20px] lg:pb-[20px] lg:gap-y-[10px]"
    >
      <div className="mb-[10px] md:mb-0 lg:mr-[20px]">
        <label
          id="order"
          className="text-10 font-medium leading-[1.8] ml-[10px]"
        >
          ORDER
        </label>
        <CustomSelect
          id="order"
          name="order"
          isSearchable={false}
          defaultValue={selectOrder[0]}
          options={selectOrder}
          classNames={{
            control: () => "!bg-white md:w-[314px] lg:w-[290px] dark:!bg-dark",
            singleValue: () => "!text-dark dark:!text-white",
            option: () => "dark:!text-white",
          }}
        />
      </div>

      <div className="mb-[10px] md:mb-0">
        <label
          id="type"
          className=" text-10 font-medium leading-[1.8] ml-[10px]"
        >
          TYPE
        </label>
        <CustomSelect
          id="type"
          name="type"
          isSearchable={false}
          defaultValue={selectType[0]}
          options={selectType}
          classNames={{
            control: () => "!bg-white md:w-[314px] lg:w-[290px] dark:!bg-dark",
            singleValue: () => "!text-dark dark:!text-white",
            option: () => "dark:!text-white",
          }}
        />
      </div>

      <div className="mb-[10px] md:mb-0 lg:mr-[20px]">
        <label
          id="breed"
          className=" text-10 font-medium leading-[1.8] ml-[10px]"
        >
          BREED
        </label>
        <CustomSelect
          id="breed"
          name="breed"
          isSearchable={false}
          defaultValue={selectDataBreeds[0]}
          options={selectDataBreeds}
          classNames={{
            control: () => "!bg-white md:w-[314px] lg:w-[290px] dark:!bg-dark",
            singleValue: () => "!text-dark dark:!text-white",
            option: () => "dark:!text-white",
          }}
        />
      </div>

      <div className="mb-[10px] md:mb-0 lg:mr-[10px]">
        <label
          id="limit"
          className=" text-10 font-medium leading-[1.8] ml-[10px]"
        >
          LIMIT
        </label>
        <CustomSelect
          id="limit"
          name="limit"
          isSearchable={false}
          defaultValue={selectLimitGallery[0]}
          options={selectLimitGallery}
          classNames={{
            control: () => "!bg-white md:w-[254px] lg:w-[240px] dark:!bg-dark",
            singleValue: () => "!text-dark dark:!text-white",
            option: () => "dark:!text-white",
          }}
        />
      </div>

      <Button
        type="submit"
        icon="icon-update"
        btnStyles="w-full bg-white dark:bg-dark hover:bg-pink dark:hover:bg-pink-20 md:w-[40px] md:h-[40px] md:self-end"
        iconStyles="group-hover:fill-white dark:group-hover:fill-pink"
      />
    </form>
  );
};

export default GalleryForm;
