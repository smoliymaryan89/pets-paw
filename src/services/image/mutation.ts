import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { uploadImage } from "./api";

import toast from "react-hot-toast";

export const useUploadImage = () => {
  return useMutation({
    mutationFn: (data: FormData) => uploadImage(data),

    onError: (error: Error) => {
      if (
        (error as AxiosError)?.response?.data !==
        "Classifcation failed: correct animal not found."
      ) {
        toast.error("Something went wrong, please try again!");
      }
    },
  });
};
