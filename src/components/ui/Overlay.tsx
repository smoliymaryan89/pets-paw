import clsx from "clsx";

interface OverlayProps {
  text: string;
}

const Overlay = ({ text }: OverlayProps) => {
  return (
    <div
      className={clsx(
        "absolute top-0 left-1/2 -translate-x-1/2 flex text-center w-full h-full px-[10px] py-[10px] bg-pink-60 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-350",
        text && "items-end justify-center"
      )}
    >
      <p className="text-pink rounded-10 py-[5px] bg-white w-full">{text}</p>
    </div>
  );
};

export default Overlay;
