
import { create } from "zustand";

const STORAGE_KEY = "tronit-theme";

const getSavedTheme = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
};

const applyTheme = (theme) => {
  if (typeof document === "undefined") return;

  document.documentElement.classList.toggle(
    "dark",
    theme === "dark"
  );

  document.documentElement.style.colorScheme = theme;

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage mavjud bo'lmasa ham tema ishlashda davom etadi.
  }
};

const initialTheme = getSavedTheme();

if (typeof document !== "undefined") {
  applyTheme(initialTheme);
}

const useThemeStore = create((set, get) => ({
  theme: initialTheme,

  setTheme: (newTheme) => {
    if (!["light", "dark"].includes(newTheme)) return;

    applyTheme(newTheme);
    set({ theme: newTheme });
  },

  toggleTheme: () => {
    const newTheme =
      get().theme === "light" ? "dark" : "light";

    applyTheme(newTheme);
    set({ theme: newTheme });
  },

  initializeTheme: () => {
    const theme = getSavedTheme();
    applyTheme(theme);
    set({ theme });
  },
}));

export default useThemeStore;
