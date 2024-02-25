import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useUploadImage } from "@services/image/mutation";

import clsx from "clsx";
import UploadMessage from "./UploadMessage";
import Button from "./ui/Button";

interface ModalProps {
  handleModal: () => void;
}

interface KeyboardEvent {
  code: string;
}

const modalRoot = document.getElementById("modal-root") as HTMLElement;

const Modal = ({ handleModal }: ModalProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);

  const uploadImage = useUploadImage();

  const userId = localStorage.getItem("user-id") ?? "";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        handleModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleModal]);

  const onBackdropClick = (e: MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      handleModal();
    }
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImageName(file.name);
      setImageUrl(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append("file", file);
      formData.append("sub_id", userId);

      setFormData(formData);
    }
  };

  return createPortal(
    <div
      className="fixed top-0 left-0 bg-overlay w-screen h-screen"
      onClick={onBackdropClick}
    >
      <div className="absolute top-0 right-0 p-[20px] bg-dark-white h-full w-full lg:w-1/2 lg:rounded-20 lg:top-[30px] lg:right-[30px] lg:h-[calc(100vh-60px)]">
        <Button
          icon="icon-close"
          btnStyles="absolute top-[20px] right-[25px] w-[60px] h-[60px] bg-white rounded-20 hover:!bg-pink md:right-[30px]"
          iconStyles="w-[25px] h-[25px] group-hover:fill-white"
          onClick={handleModal}
        />

        <div className="gallery-modal-scroll w-full h-full md:overflow-auto md:min-h-full">
          <div className="mt-[80px] max-w-[335px] mx-auto md:max-w-full">
            <h1 className="mb-[20px] text-dark text-20 font-medium text-center md:text-36 md:mb-[10px]">
              Upload a .jpg or .png Cat Image
            </h1>
            <p className="text-20 leading-normal text-center mb-[20px] md:mb-[40px]">
              Any uploads must comply with the{" "}
              <span className="text-pink">upload guidelines</span> or face
              deletion.
            </p>

            <div
              className={clsx(
                "relative cursor-pointer rounded-20 border-[2px] border-dashed border-light-pink px-[20px] py-[10px] flex items-center justify-center h-[168px] mb-[11px] md:w-[640px] md:h-[320px] md:px-[40px] md:py-[20px] md:mb-[20px] md:mx-auto",
                !imageUrl &&
                  'bg-[url("/images/upload-bg.png")] bg-no-repeat bg-center bg-[length:100px] md:bg-[length:200px]',
                uploadImage.isError
                  ? "bg-light-pink border-pink"
                  : "bg-white border-light-pink"
              )}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="image"
                  width={295}
                  height={148}
                  className="rounded-10 w-[295px] max-h-[148px] object-cover md:w-[560px] md:max-h-[280px]"
                />
              ) : (
                <p className="text-20 leading-normal max-w-[199px] text-center md:max-w-full">
                  <span className="text-dark font-medium">Drag here</span> your
                  file or{" "}
                  <span className="text-dark font-medium">Click here</span> to
                  upload
                </p>
              )}

              <input
                type="file"
                onChange={handleFile}
                className="absolute top-0 left-0 opacity-0 w-full h-full rounded-20"
                accept="image/png, image/jpeg"
              />
            </div>

            {imageName ? (
              <>
                <p className="text-center text-20 leading-normal mb-[20px] max-w-[640px] mx-auto">
                  Image File Name: {imageName}
                </p>
                <Button
                  text={uploadImage.isPending ? "UPLOADING" : "UPLOAD PHOTO"}
                  btnStyles={
                    "w-full bg-pink py-[12px] text-12 gap-[10px] font-medium leading-[1.3] tracking-[2px] text-white hover:bg-light-pink hover:text-pink md:max-w-[172px] md:mx-auto"
                  }
                  icon={uploadImage.isPending ? "icon-spinner" : ""}
                  iconStyles={"w-[16px] h-[16px] fill-white animate-spin"}
                  onClick={() =>
                    formData &&
                    uploadImage.mutate(formData, {
                      onSuccess: () => {
                        setFormData(null);
                        setImageName(null);
                        setImageUrl(null);
                      },
                    })
                  }
                />
              </>
            ) : (
              <p className="text-center text-20 leading-normal">
                No file selected
              </p>
            )}

            {uploadImage.isSuccess ? (
              <UploadMessage
                icon={"success"}
                message={"Thanks for the Upload - Cat found!"}
              />
            ) : uploadImage.isError ? (
              <UploadMessage
                icon={"error"}
                message={"No Cat found - try a different one"}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
