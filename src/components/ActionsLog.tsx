import { useLocation } from "react-router-dom";
import { VoteRes } from "../types/vote";

import clsx from "clsx";
import formatTime from "@utils/helpers/formatTime";

interface ActionsLogProps {
  votes: (VoteRes & { action?: string })[];
}

const ActionsLog = ({ votes }: ActionsLogProps) => {
  const { pathname } = useLocation();

  return (
    <ul className={clsx(pathname === "/favourites" && "mt-[40px]")}>
      {[...votes]
        .sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        .map(({ image_id, created_at, value, action, id }) => (
          <li
            key={image_id}
            className="bg-dark-white p-[15px] rounded-10 mb-[10px] flex flex-wrap items-center last:mb-0"
          >
            <span className="block w-[61px] py-[3px] px-[10px] rounded-5 bg-white text-dark leading-normal mb-[10px] md:mb-0 md:mr-[20px]">
              {formatTime(created_at)}
            </span>

            {action !== "delete" && (
              <svg
                className={clsx(
                  "order-0 ml-auto md:order-1",
                  value === 1
                    ? "fill-green"
                    : value === -1
                    ? "fill-yellow"
                    : "fill-pink"
                )}
                width="20"
                height="20"
              >
                <use
                  href={`/icons/sprite.svg#${
                    value === 1
                      ? "icon-like"
                      : value === -1
                      ? "icon-dislike"
                      : "icon-fav"
                  }`}
                ></use>
              </svg>
            )}

            <p className="leading-normal max-w-[267px] md:max-w-full">
              Image ID:{" "}
              <span className="font-medium text-dark">{image_id || id}</span>{" "}
              {action === "delete" ? "was removed from" : "was added to"}{" "}
              {value === 1 ? "Likes" : value === -1 ? "Dislikes" : "Favourites"}
            </p>
          </li>
        ))}
    </ul>
  );
};

export default ActionsLog;
