import clsx from "clsx";
import Button from "./ui/Button";
import Navigation from "./Navigation";

interface MobileMenuProps {
  handleMenu: () => void;
  menuIsOpen: boolean;
}

const MobileMenu = ({ handleMenu, menuIsOpen }: MobileMenuProps) => {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-screen h-screen bg-dark-white dark:bg-dark z-50 transition-transform duration-350 px-[20px] pt-[100px] block md:pt-[110px] md:flex md:justify-center lg:hidden",
        menuIsOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <Button
        onClick={handleMenu}
        icon="icon-close"
        btnStyles="dark:bg-pink-20 absolute top-[30px] right-[30px] w-[60px] h-[60px] bg-white rounded-[20px] hover:!bg-pink dark:hover:bg-pink"
        iconStyles="w-[25px] h-[25px] group-hover:fill-white"
      />

      <Navigation />
    </div>
  );
};

export default MobileMenu;
