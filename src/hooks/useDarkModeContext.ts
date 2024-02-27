import { useContext } from "react";
import { DarkModeContext } from "@context/DarkModeContext";

export const useDarkModeContext = () => useContext(DarkModeContext);
