import { NavLink as Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Navigation } from "@utils/data/navigation";
import { ScreenType } from "../../types/screen";

import clsx from "clsx";

interface NavLinkProps {
  type: ScreenType;
  item: Navigation;
}

const NavLink = ({
  type,
  item: { path, label, color, icon },
}: NavLinkProps) => {
  const { pathname } = useLocation();

  return type === ScreenType.Desktop ? (
    <li>
      <Link to={path} className="text-center group">
        <div
          className={clsx(
            "flex items-center justify-center w-[138px] h-[198px] rounded-20 border-[4px] mb-[10px] bg-center bg-no-repeat",
            pathname === path
              ? "border-light-pink"
              : "border-grey-60 group-hover:border-white transition-colors duration-350"
          )}
          style={{ backgroundColor: color, backgroundImage: `url(${icon})` }}
        ></div>

        <p
          className={clsx(
            "py-[10px] rounded-10 text-12 font-medium leading-[1.3] tracking-[2px]",
            pathname === path
              ? "text-white bg-pink"
              : "text-pink bg-white dark:bg-grey-10 group-hover:bg-light-pink transition-colors duration-350"
          )}
        >
          {label}
        </p>
      </Link>
    </li>
  ) : (
    <li className="text-center mb-[20px] last:mb-0 md:mb-0">
      <Link
        to={path}
        className={({ isActive }) =>
          clsx(
            "block py-[10px] rounded-10 w-full text-12 font-medium leading-[1.3] tracking-[2px]",
            isActive
              ? "text-white bg-pink"
              : "text-pink bg-white dark:bg-grey-0.05 hover:bg-light-pink dark:hover:bg-light-pink transition-colors duration-350"
          )
        }
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
