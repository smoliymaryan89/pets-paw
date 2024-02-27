import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { nanoid } from "nanoid";

import Layout from "@layouts/Layout";
import HomePage from "@pages/HomePage";
import BreedsPage from "@pages/BreedsPage";
import BreedDetailsPage from "@pages/BreedDetailsPage";
import SearchPage from "@pages/SearchPage";
import DisLikesPage from "@pages/DisLikesPage";
import FavouritesPage from "@pages/FavouritesPage";
import GalleryPage from "@pages/GalleryPage";
import LikesPage from "@pages/LikesPage";
import VotingPage from "@pages/VotingPage";

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("user-id")) {
      localStorage.setItem("user-id", nanoid());
    }

    if (!localStorage.getItem("fav-history")) {
      localStorage.setItem("fav-history", JSON.stringify([]));
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="breeds" element={<BreedsPage />} />
          <Route path="breeds/:breedId" element={<BreedDetailsPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="dislikes" element={<DisLikesPage />} />
          <Route path="likes" element={<LikesPage />} />
          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="voting" element={<VotingPage />} />
        </Route>
      </Routes>

      <Toaster position="bottom-center" />
    </>
  );
};

export default App;
