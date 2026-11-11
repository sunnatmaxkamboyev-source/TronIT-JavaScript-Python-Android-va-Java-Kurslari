
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  GraduationCap,
  Sun,
  Moon,
} from "lucide-react";
import { useState } from "react";

import useThemeStore from "../store/themeStore";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useThemeStore();

  const navLinks = [
    { name: "Bosh sahifa", path: "/" },
    { name: "Kurslar", path: "/courses" },
    { name: "Biz haqimizda", path: "/about" },
    { name: "Bog'lanish", path: "/contact" },
  ];

  const themeButton = (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Mavzuni almashtirish"
      title={theme === "light" ? "Dark mode" : "Light mode"}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-yellow-400 dark:hover:bg-gray-700"
    >
      {theme === "light" ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  );

  return (
    <header className="w-full border-b border-gray-100 bg-white transition-colors dark:border-gray-800 dark:bg-gray-900">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500">
            <GraduationCap className="text-white" size={25} />
          </div>

          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Tron<span className="text-green-500">IT</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-600 hover:text-green-600 dark:text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          {themeButton}

          <Link
            to="/register"
            className="rounded-xl bg-green-500 px-5 py-2.5 font-medium text-white transition hover:bg-green-600"
          >
            Ro'yxatdan o'tish
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          {themeButton}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            aria-label="Menyuni ochish"
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 border-t border-gray-100 bg-white px-6 pb-6 pt-5 dark:border-gray-800 dark:bg-gray-900 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="rounded-xl bg-green-500 px-5 py-3 text-center font-medium text-white"
          >
            Ro'yxatdan o'tish
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
