import { PuffLoader } from "react-spinners";

import clsx from "clsx";

interface LoaderProps {
  className: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={clsx("flex items-center justify-center w-full", className)}>
      <PuffLoader color="#FF868E" />
    </div>
  );
};

export default Loader;
