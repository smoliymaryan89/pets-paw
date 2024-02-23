import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import clsx from "clsx";
import Button from "./ui/Button";
import MobileMenu from "./MobileMenu";
import appBarLinks from "@utils/data/appBarLinks";
import useWindowSize from "@hooks/useWindowSize";
import SearchBreedForm from "./SearchBreedForm";

const AppBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const { pathname } = useLocation();
  const { width } = useWindowSize();

  const handleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="mb-[10px] flex flex-wrap gap-[10px]">
        {width < 1440 && (
          <Button
            onClick={handleMenu}
            icon="icon-open"
            btnStyles="py-[21px] px-[15px] !bg-white rounded-20 h-[60px] hover:!bg-pink"
            iconStyles="w-[30px] h-[30px] group-hover:fill-white"
          />
        )}

        <SearchBreedForm pathname={pathname} />

        <ul className="flex gap-[10px] ml-auto md:order-1">
          {appBarLinks.map(({ path, icon }, index) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  clsx(
                    "w-[60px] h-[60px] rounded-[20px] flex items-center justify-center",
                    isActive
                      ? "bg-pink"
                      : "bg-white hover:bg-light-pink transition-colors duration-350"
                  )
                }
              >
                <svg
                  className={clsx(
                    pathname === path ? "fill-white" : "fill-pink",
                    index === 1 && "h-[26px]"
                  )}
                  width="30"
                  height="29"
                >
                  <use href={`/icons/sprite.svg#${icon}`}></use>
                </svg>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {width < 1440 && (
        <MobileMenu handleMenu={handleMenu} menuIsOpen={menuIsOpen} />
      )}
    </>
  );
};

export default AppBar;
