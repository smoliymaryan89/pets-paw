import { useMutation } from "@tanstack/react-query";
import { uploadImage } from "./api";

import toast from "react-hot-toast";

export const useUploadImage = () => {
  return useMutation({
    mutationFn: (data: FormData) => uploadImage(data),

    onError: () => {
      toast.error("Something went wrong, please try again!");
    },
  });
};
