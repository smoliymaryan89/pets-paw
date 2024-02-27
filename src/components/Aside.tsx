import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import Switcher from "./ui/Switcher";

const Aside = () => {
  return (
    <aside className="sticky top-[30px] h-full">
      <div className="flex items-center justify-between mb-[80px]">
        <Link to="/" className="block">
          <svg width="106" height="24" className="fill-dark dark:fill-white">
            <use href="/icons/sprite.svg#icon-logo"></use>
          </svg>
        </Link>

        <Switcher />
      </div>

      <div>
        <div className="mb-[60px]">
          <h1 className="text-44 font-medium text-dark dark:text-white lead mb-[10px] leading-[1.32]">
            Hi!👋
          </h1>
          <p className="text-20">Welcome to PetsPaw!</p>
        </div>

        <div>
          <h2 className="text-20 text-dark dark:text-white font-medium mb-[20px]">
            Lets start using The Cat API
          </h2>

          <Navigation />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
