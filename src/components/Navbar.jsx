import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  GraduationCap,
  Sun,
  Moon,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import useThemeStore from "../store/themeStore";

const navLinks = [
  { name: "Bosh sahifa", path: "/" },
  { name: "Kurslar", path: "/courses" },
  { name: "Biz haqimizda", path: "/about" },
  { name: "Bog'lanish", path: "/contact" },
];

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  const themeButton = (
    <motion.button
      whileHover={{ scale: 1.08, rotate: 8 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      type="button"
      aria-label="Mavzuni almashtirish"
      title={theme === "light" ? "Dark mode" : "Light mode"}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-yellow-400 dark:hover:bg-gray-700"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 w-full border-b border-gray-100/80 bg-white/90 backdrop-blur-xl transition-colors dark:border-gray-800/80 dark:bg-gray-900/90"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: -8, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 shadow-lg shadow-green-500/20"
          >
            <GraduationCap className="text-white" size={25} />
          </motion.div>

          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Tron<span className="text-green-500">IT</span>
          </span>
        </Link>

        {/* Desktop links */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <motion.div key={link.path} variants={linkVariants}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium transition ${
                    isActive
                      ? "text-green-600"
                      : "text-gray-600 hover:text-green-600 dark:text-gray-300"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <motion.span
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      className="absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-full bg-green-500"
                    />
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          {themeButton}

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/register"
              className="inline-flex rounded-xl bg-green-500 px-5 py-2.5 font-medium text-white shadow-lg shadow-green-500/20 transition hover:bg-green-600"
            >
              Ro'yxatdan o'tish
            </Link>
          </motion.div>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          {themeButton}

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            aria-label="Menyuni ochish"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {isOpen ? <X size={25} /> : <Menu size={25} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900 md:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.08 }}
              className="flex flex-col gap-4 px-6 pb-6 pt-5"
            >
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={linkVariants}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block font-medium ${
                        isActive
                          ? "text-green-600"
                          : "text-gray-700 dark:text-gray-300"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div variants={linkVariants}>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl bg-green-500 px-5 py-3 text-center font-medium text-white"
                >
                  Ro'yxatdan o'tish
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
