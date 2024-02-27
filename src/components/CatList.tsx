import { Link, useLocation } from "react-router-dom";
import { Breed, BreedByParams } from "../types/breed";
import { FavouriteRes, VoteRes } from "../types/vote";

import Overlay from "./ui/Overlay";

interface CatListProps {
  data: Array<Breed | BreedByParams | VoteRes | FavouriteRes>;
  isOverlay: boolean;
}

const CatList = ({ data, isOverlay }: CatListProps) => {
  const { pathname } = useLocation();

  return (
    <ul className="cats-list">
      {data.map((breed) => {
        if ("breeds" in breed) {
          const { url, width, id, height, breeds } = breed as BreedByParams;

          return (
            <li key={id} className="cats-item relative group">
              {isOverlay ? (
                pathname === "/gallery" || pathname === "/favourites" ? (
                  <>
                    <img
                      src={url}
                      alt={breeds[0]?.name}
                      width={width}
                      height={height}
                      className="rounded-20 w-full h-full object-cover"
                    />
                    <Overlay text={breeds[0]?.name} imageId={id} />
                  </>
                ) : (
                  <Link to={`/breeds/${breeds[0].id}`}>
                    <img
                      src={url}
                      alt={breeds[0].name}
                      width={width}
                      height={height}
                      className="rounded-20 w-full h-full object-cover"
                    />
                    <Overlay text={breeds[0].name} />
                  </Link>
                )
              ) : (
                <img
                  src={url}
                  alt={breeds[0].name}
                  width={width}
                  height={height}
                  className="rounded-20 w-full h-full object-cover"
                />
              )}
            </li>
          );
        } else {
          const {
            id,
            name,
            image: { width, height, url },
          } = breed as Breed;

          return (
            <li key={id} className="cats-item relative group">
              {isOverlay ? (
                pathname === "/gallery" || pathname === "/favourites" ? (
                  <>
                    <img
                      src={url}
                      alt={name}
                      width={width}
                      height={height}
                      className="rounded-20 w-full h-full object-cover"
                    />
                    <Overlay text={name} imageId={id} />
                  </>
                ) : (
                  <Link to={`/breeds/${id}`}>
                    <img
                      src={url}
                      alt={name}
                      width={width}
                      height={height}
                      className="rounded-20 w-full h-full object-cover"
                    />
                    <Overlay text={name} />
                  </Link>
                )
              ) : (
                <img
                  src={url}
                  alt={name}
                  width={width}
                  height={height}
                  className="rounded-20 w-full h-full object-cover"
                />
              )}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default CatList;
