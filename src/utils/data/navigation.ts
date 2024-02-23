export interface Navigation {
  path: string;
  icon: string;
  label: string;
  color: string;
}

const navigation: Navigation[] = [
  {
    path: "/voting",
    icon: "/images/vote.png",
    label: "VOTING",
    color: "#B4B7FF",
  },
  {
    path: "/breeds",
    icon: "/images/breeds.png",
    label: "BREEDS",
    color: "#97EAB9",
  },
  {
    path: "/gallery",
    icon: "/images/gallery.png",
    label: "GALLERY",
    color: "#FFD280",
  },
];

export default navigation;
