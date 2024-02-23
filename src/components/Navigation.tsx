import { ScreenType } from "../types/screen";

import NavLink from "./ui/NavLink";
import useWindowSize from "@hooks/useWindowSize";
import navigation from "@utils/data/navigation";

const Navigation = () => {
  const { width } = useWindowSize();

  return (
    <nav>
      <ul className="md:flex md:gap-[16px]">
        {navigation.map((item) => (
          <NavLink
            key={item.label}
            type={width < 768 ? ScreenType.Mobile : ScreenType.Desktop}
            item={item}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
