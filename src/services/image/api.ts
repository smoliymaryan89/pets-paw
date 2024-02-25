import { AxiosResponse } from "axios";

import instance from "@services/instance";

interface UploadImageResponse {
  approved: number;
  height: number;
  id: string;
  original_filename: string;
  pending: number;
  sub_id: string;
  url: string;
  width: number;
}

export const uploadImage = async (
  data: FormData
): Promise<AxiosResponse<UploadImageResponse>> => {
  return await instance.post<UploadImageResponse>("/images/upload", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
