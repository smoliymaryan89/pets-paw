import { Route, Routes } from "react-router-dom";

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
  return (
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
  );
};

export default App;
