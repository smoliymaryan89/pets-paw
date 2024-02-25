import instance from "@services/instance";

export const uploadImage = async (data: FormData) => {
  return await instance.post("/images/upload", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
