import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit";
  btnStyles: string;
  icon?: string;
  iconStyles?: string;
  onClick?: () => void;
  text?: string;
  disabled?: boolean;
}

const Button = ({
  type = "button",
  btnStyles,
  icon,
  iconStyles,
  onClick,
  text,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "group flex items-center justify-center bg-light-pink p-[10px] rounded-10 transition-colors duration-350",
        btnStyles
      )}
    >
      {icon && (
        <svg
          className={clsx(
            "fill-pink transition-colors duration-350",
            iconStyles
          )}
          width="20"
          height="20"
        >
          <use href={`/icons/sprite.svg#${icon}`}></use>
        </svg>
      )}
      {text}
    </button>
  );
};

export default Button;
