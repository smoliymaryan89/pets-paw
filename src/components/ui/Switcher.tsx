import { useDarkModeContext } from "@hooks/useDarkModeContext";

import clsx from "clsx";

const Switcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useDarkModeContext() ?? [];

  const handleSwitch = () => {
    if (setIsDarkTheme) {
      setIsDarkTheme((prev) => !prev);
    }
  };

  return (
    <label htmlFor="theme-switcher" className="flex items-center gap-[5px]">
      <div className="flex items-center justify-center w-[24px] h-[24px] bg-white rounded-full dark:bg-grey-0.05">
        <svg className={"fill-pink"} width="16" height="16">
          <use
            href={`/icons/sprite.svg#${
              isDarkTheme ? "icon-close-eye" : "icon-eye"
            }`}
          ></use>
        </svg>
      </div>

      <div className="flex items-center cursor-pointer">
        <input
          id="theme-switcher"
          type="checkbox"
          onChange={handleSwitch}
          checked={isDarkTheme}
          className="sr-only"
        />
        <div
          className={clsx(
            "relative w-[44px] h-[24px] bg-light-pink dark:bg-pink-20 rounded-50 after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-pink after:rounded-full after:h-[16px] after:w-[16px] after:transition-all",
            isDarkTheme ? "after:translate-x-full" : "after:translate-x-0"
          )}
        ></div>
      </div>
    </label>
  );
};

export default Switcher;
