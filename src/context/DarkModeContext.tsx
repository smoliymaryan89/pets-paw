import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(undefined);

const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  return (
    <DarkModeContext.Provider value={[isDarkTheme, setIsDarkTheme]}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
