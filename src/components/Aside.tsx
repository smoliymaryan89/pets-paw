import { Link } from "react-router-dom";

import Navigation from "./Navigation";

const Aside = () => {
  return (
    <aside className="sticky top-[30px] h-full">
      <Link to="/" className="block mb-[80px]">
        <svg width="106" height="24">
          <use href="/icons/sprite.svg#icon-logo"></use>
        </svg>
      </Link>

      <div>
        <div className="mb-[60px]">
          <h1 className="text-44 font-medium text-dark lead mb-[10px] leading-[1.32]">
            Hi!👋
          </h1>
          <p className="text-20">Welcome to PetsPaw!</p>
        </div>

        <div>
          <h2 className="text-20 text-dark font-medium mb-[20px]">
            Lets start using The Cat API
          </h2>

          <Navigation />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
