import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { nanoid } from "nanoid";

import Layout from "@layouts/Layout";
import SuspenseWithLoader from "@components/SuspenseWithLoader";

const HomePage = lazy(() => import("@pages/HomePage"));
const BreedsPage = lazy(() => import("@pages/BreedsPage"));
const BreedDetailsPage = lazy(() => import("@pages/BreedDetailsPage"));
const SearchPage = lazy(() => import("@pages/SearchPage"));
const DisLikesPage = lazy(() => import("@pages/DisLikesPage"));
const FavouritesPage = lazy(() => import("@pages/FavouritesPage"));
const GalleryPage = lazy(() => import("@pages/GalleryPage"));
const LikesPage = lazy(() => import("@pages/LikesPage"));
const VotingPage = lazy(() => import("@pages/VotingPage"));

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
          <Route
            index
            element={
              <SuspenseWithLoader>
                <HomePage />
              </SuspenseWithLoader>
            }
          />
          <Route
            path="breeds"
            element={
              <SuspenseWithLoader>
                <BreedsPage />
              </SuspenseWithLoader>
            }
          />
          <Route
            path="breeds/:breedId"
            element={
              <SuspenseWithLoader>
                <BreedDetailsPage />
              </SuspenseWithLoader>
            }
          />
          <Route
            path="search"
            element={
              <SuspenseWithLoader>
                <SearchPage />
              </SuspenseWithLoader>
            }
          />
          <Route
            path="dislikes"
            element={
              <SuspenseWithLoader>
                <DisLikesPage />
              </SuspenseWithLoader>
            }
          />
          <Route
            path="likes"
            element={
              <SuspenseWithLoader>
                <LikesPage />
              </SuspenseWithLoader>
            }
          />
          <Route
            path="favourites"
            element={
              <SuspenseWithLoader>
                <FavouritesPage />
              </SuspenseWithLoader>
            }
          />
          <Route
            path="gallery"
            element={
              <SuspenseWithLoader>
                <GalleryPage />
              </SuspenseWithLoader>
            }
          />
          <Route
            path="voting"
            element={
              <SuspenseWithLoader>
                <VotingPage />
              </SuspenseWithLoader>
            }
          />
        </Route>
      </Routes>

      <Toaster position="bottom-center" />
    </>
  );
};

export default App;
