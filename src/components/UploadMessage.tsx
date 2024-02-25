interface UploadMessageProps {
  message: string;
  icon: string;
}

const UploadMessage = ({ message, icon }: UploadMessageProps) => {
  return (
    <div className="p-[20px] bg-white rounded-10 flex items-center gap-[10px] max-w-[640px] mt-[20px] mx-auto">
      <svg width="20" height="20">
        <use href={`/icons/sprite.svg#icon-${icon}`}></use>
      </svg>
      <p className="leading-normal">{message}</p>
    </div>
  );
};

export default UploadMessage;
