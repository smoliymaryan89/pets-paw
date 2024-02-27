import { useLocation, useNavigate } from "react-router-dom";

import clsx from "clsx";
import Button from "./Button";

interface BackBtnProps {
  text: string;
  additionalText?: string;
  className?: string;
}

const BackBtn = ({ text, additionalText, className }: BackBtnProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={clsx(
        "flex flex-wrap items-center gap-[10px]",
        pathname === "/breeds" || pathname === "/gallery" ? "mb-0" : "mb-[20px]"
      )}
    >
      <Button
        icon="icon-back"
        btnStyles="hover:bg-pink dark:bg-pink-20 dark:hover:bg-pink"
        iconStyles="group-hover:fill-white"
        onClick={() => navigate(-1)}
      />
      <p
        className={clsx(
          "text-white bg-pink rounded-10 py-[5px] px-[30px] text-20 font-medium leading-normal tracking-[2px]",
          className
        )}
      >
        {text}
      </p>
      {additionalText && (
        <span className="text-white bg-pink rounded-10 py-[5px] px-[20px] text-20 font-medium leading-normal tracking-[2px] md:px-[30px]">
          {additionalText}
        </span>
      )}
    </div>
  );
};

export default BackBtn;
