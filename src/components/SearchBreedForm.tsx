import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import clsx from "clsx";
import Button from "./ui/Button";

interface SearchBreedFormProps {
  pathname: string;
}

const SearchBreedForm = ({ pathname }: SearchBreedFormProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const breedName = searchParams.get("breedName");

  const [value, setValue] = useState<string>(breedName || "");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim() === "") return;

    setSearchParams({ breedName: value });

    if (value.trim()) {
      navigate(
        "/search?" + new URLSearchParams({ breedName: value }).toString()
      );
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="order-2 relative flex flex-1 h-[60px] md:order-1 md:w-[428px] lg:w-[470px]"
    >
      <input
        type="text"
        name="breedName"
        value={value}
        onChange={handleChange}
        className={clsx(
          "w-full bg-white dark:bg-grey-0.05 rounded-20 py-[15px] pl-[20px] pr-[70px] text-dark dark:text-white text-20 leading-normal placeholder:text-grey border-[2px] outline-none",
          pathname === "/search"
            ? "border-pink"
            : "hover:border-light-pink dark:hover:border-pink-20 transition-colors duration-350 border-transparent focus:border-pink dark:focus:border-pink-20"
        )}
        placeholder="Search for breeds by name"
      />

      <Button
        type="submit"
        icon="icon-search"
        btnStyles="absolute top-[10px] right-[10px] dark:bg-pink-20 hover:bg-pink dark:hover:bg-light-pink group-hover:fill-white"
        iconStyles="group-hover:fill-white dark:group-hover:fill-pink"
      />
    </form>
  );
};

export default SearchBreedForm;
