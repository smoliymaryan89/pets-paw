import clsx from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={clsx(
        "mx-auto px-[20px] py-[20px] max-w-[375px] md:px-[30px] md:py-[30px] md:max-w-[768px] lg:max-w-[1440px] lg:pl-[147px] lg:pb-[18px] relative",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
