import {
  Menu,
  Search,
  Bell,
  Sun,
  Moon,
} from "lucide-react";

import useThemeStore from "../../store/themeStore";

function AdminHeader({ setIsOpen, title }) {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between gap-4 border-b border-gray-100 bg-white px-5 dark:border-gray-800 dark:bg-gray-900 md:px-8">

      
      <div className="flex min-w-0 items-center gap-4">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Menyuni ochish"
          className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
        >
          <Menu size={23} />
        </button>

        <div className="min-w-0">
          <h1 className="truncate text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
            {title || "Dashboard"}
          </h1>

          <p className="hidden text-xs text-gray-500 dark:text-gray-400 sm:block">
            TronIT boshqaruv paneli
          </p>
        </div>
      </div>

   
      <div className="flex items-center gap-2 md:gap-4">

        
        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Qidirish..."
            className="w-52 rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-900 outline-none transition focus:border-green-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
          />
        </div>

    
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Mavzuni almashtirish"
          title={theme === "light" ? "Dark mode" : "Light mode"}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-yellow-400 dark:hover:bg-gray-700"
        >
          {theme === "light" ? (
            <Moon size={19} />
          ) : (
            <Sun size={19} />
          )}
        </button>

      
        <button
          type="button"
          aria-label="Bildirishnomalar"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-600 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          <Bell size={19} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-700 dark:bg-green-900/40 dark:text-green-400">
          A
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
