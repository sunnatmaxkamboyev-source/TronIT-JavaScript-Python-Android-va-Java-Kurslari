
import { create } from "zustand";

const getSavedTheme = () => {
  return localStorage.getItem("tronit-theme") || "light";
};

const applyTheme = (theme) => {
  document.documentElement.classList.toggle(
    "dark",
    theme === "dark"
  );

  localStorage.setItem("tronit-theme", theme);
};

const useThemeStore = create((set, get) => ({
  theme: getSavedTheme(),

  setTheme: (newTheme) => {
    applyTheme(newTheme);
    set({ theme: newTheme });
  },

  toggleTheme: () => {
    const newTheme =
      get().theme === "light" ? "dark" : "light";

    applyTheme(newTheme);
    set({ theme: newTheme });
  },
}));

applyTheme(getSavedTheme());

export default useThemeStore;
