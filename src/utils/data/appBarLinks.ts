interface AppBarLink {
  path: string;
  icon: string;
}

const appBarLinks: AppBarLink[] = [
  {
    path: "/likes",
    icon: "icon-like",
  },
  {
    path: "/favourites",
    icon: "icon-fav",
  },
  {
    path: "/dislikes",
    icon: "icon-dislike",
  },
];

export default appBarLinks;
