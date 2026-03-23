import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

export default function useTheme() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;

    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    localStorage.setItem(STORAGE_KEY, darkMode ? "dark" : "light");
  }, [darkMode]);

  return {
    darkMode,
    toggleTheme: () => setDarkMode((prev) => !prev),
  };
}

