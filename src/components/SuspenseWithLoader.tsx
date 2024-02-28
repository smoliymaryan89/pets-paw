import { ReactNode, Suspense } from "react";

import Loader from "./ui/Loader";

interface SuspenseWithLoaderProps {
  children: ReactNode;
}

const SuspenseWithLoader = ({ children }: SuspenseWithLoaderProps) => {
  return (
    <Suspense
      fallback={
        <Loader className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseWithLoader;
