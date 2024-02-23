import { PaginationType } from "../../types/pagination";
import { BreedByParams } from "../../types/breed";

import clsx from "clsx";
import Button from "./Button";

interface PaginationProps {
  handlePage: (type: PaginationType) => void;
  page: number;
  isPlaceholderData: boolean;
  limit: number;
  data: BreedByParams[];
}

const Pagination = ({
  handlePage,
  page,
  isPlaceholderData,
  limit,
  data,
}: PaginationProps) => {
  return (
    <ul className="flex items-center justify-around mt-[10px] md:mt-[20px]">
      <li>
        <Button
          onClick={() => handlePage(PaginationType.Prev)}
          icon={"icon-prev"}
          disabled={page === 0}
          text={"PREV"}
          iconStyles={clsx(
            "w-[16px] h-[16px]",
            page === 0 ? "fill-grey" : "group-hover:fill-white"
          )}
          btnStyles={clsx(
            "gap-[10px] text-12 text-pink font-medium leading-[1.3] tracking-[2px] py-[12px] px-[20px] md:px-[30px]",
            page === 0
              ? "!bg-dark-white text-grey"
              : "hover:bg-pink hover:text-white"
          )}
        />
      </li>
      <li>
        <Button
          onClick={() => handlePage(PaginationType.Next)}
          icon={"icon-prev"}
          disabled={isPlaceholderData || limit > data?.length}
          text={"NEXT"}
          iconStyles={clsx(
            "w-[16px] h-[16px] rotate-180",
            isPlaceholderData || limit > data?.length
              ? "fill-grey"
              : "group-hover:fill-white"
          )}
          btnStyles={clsx(
            "gap-[10px] flex-row-reverse text-12 text-pink font-medium leading-[1.3] tracking-[2px] py-[12px] px-[20px] md:px-[30px]",
            isPlaceholderData || limit > data?.length
              ? "!bg-dark-white text-grey"
              : "hover:bg-pink hover:text-white"
          )}
        />
      </li>
    </ul>
  );
};

export default Pagination;
