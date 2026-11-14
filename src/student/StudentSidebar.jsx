
import { NavLink, useNavigate } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  UserRound,
  Settings,
  LogOut,
  X,
  Sparkles,
} from "lucide-react";

import useThemeStore from "../store/themeStore";

function StudentSidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  const links = [
    {
      name: "Dashboard",
      path: "/student",
      icon: LayoutDashboard,
    },
    {
      name: "Mening kurslarim",
      path: "/student/courses",
      icon: BookOpen,
    },
    {
      name: "O'qish jarayoni",
      path: "/student/progress",
      icon: GraduationCap,
    },
    {
      name: "Profilim",
      path: "/student/profile",
      icon: UserRound,
    },
    {
      name: "Sozlamalar",
      path: "/student/settings",
      icon: Settings,
    },
  ];

  const colors = {
    sidebar: isDark
      ? "bg-[#07120F] text-white border-emerald-500/10"
      : "bg-white text-gray-900 border-gray-200",

    logoBorder: isDark
      ? "border-white/[0.07]"
      : "border-gray-200",

    closeButton: isDark
      ? "text-gray-400 hover:bg-white/10 hover:text-white"
      : "text-gray-500 hover:bg-gray-100 hover:text-gray-900",

    profileCard: isDark
      ? "border-emerald-400/15 bg-gradient-to-br from-emerald-500/15 via-emerald-500/[0.06] to-cyan-500/10"
      : "border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50",

    profileName: isDark ? "text-white" : "text-gray-900",

    profileRole: isDark
      ? "text-emerald-300"
      : "text-emerald-700",

    profileFooter: isDark
      ? "border-white/[0.08] text-gray-500"
      : "border-gray-200 text-gray-500",

    menuTitle: isDark ? "text-gray-500" : "text-gray-400",

    inactiveLink: isDark
      ? "border-transparent text-gray-400 hover:border-white/[0.06] hover:bg-white/[0.05] hover:text-white"
      : "border-transparent text-gray-600 hover:border-emerald-100 hover:bg-emerald-50 hover:text-emerald-700",

    inactiveIcon: isDark
      ? "bg-white/[0.04] text-gray-500 group-hover:bg-emerald-400/10 group-hover:text-emerald-300"
      : "bg-gray-100 text-gray-500 group-hover:bg-emerald-100 group-hover:text-emerald-700",

    activeLink: isDark
      ? "border-emerald-400/20 bg-gradient-to-r from-emerald-500/20 to-emerald-500/[0.05] text-emerald-300 shadow-[0_0_22px_rgba(16,185,129,0.08)]"
      : "border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 shadow-sm",

    activeIcon: isDark
      ? "bg-emerald-400/15 text-emerald-300"
      : "bg-emerald-100 text-emerald-700",

    statusCard: isDark
      ? "border-white/[0.06] bg-white/[0.03]"
      : "border-gray-200 bg-gray-50",

    statusText: isDark ? "text-gray-400" : "text-gray-600",

    bottomBorder: isDark
      ? "border-white/[0.07]"
      : "border-gray-200",

    logout: isDark
      ? "text-red-400 hover:border-red-400/10 hover:bg-red-500/10 hover:text-red-300"
      : "text-red-600 hover:border-red-200 hover:bg-red-50 hover:text-red-700",
  };

  const closeSidebar = () => {
    setIsOpen?.(false);
  };

  const handleLogout = () => {
    closeSidebar();
    navigate("/login");
  };

  const itemVariants = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : -18 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: reduceMotion ? 0 : index * 0.07,
        duration: reduceMotion ? 0 : 0.35,
      },
    }),
  };

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-72 flex-col overflow-hidden
          border-r shadow-xl
          transition-all duration-300 ease-out
          ${colors.sidebar}
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${isDark ? "shadow-black/20" : "shadow-gray-200/60"}
        `}
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {isDark ? (
            <>
              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        x: [0, 35, -15, 0],
                        y: [0, 30, 60, 0],
                      }
                }
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-emerald-500/15 blur-[100px]"
              />

              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        x: [0, -30, 20, 0],
                        y: [0, -40, -10, 0],
                      }
                }
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-32 -right-28 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]"
              />

              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(52,211,153,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.7) 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />
            </>
          ) : (
            <>
              <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-100/70 blur-[100px]" />
              <div className="absolute -bottom-32 -right-28 h-80 w-80 rounded-full bg-cyan-100/60 blur-[100px]" />

              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />
            </>
          )}
        </div>

        {/* Logo */}
        <div
          className={`relative z-10 flex h-20 shrink-0 items-center justify-between border-b px-6 ${colors.logoBorder}`}
        >
          <NavLink
            to="/"
            onClick={closeSidebar}
            className="group flex items-center gap-3"
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { rotate: 8, scale: 1.08 }}
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.25)]"
            >
              <GraduationCap size={25} className="text-white" />

              <span
                className={`absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 ${
                  isDark ? "border-[#07120F]" : "border-white"
                } bg-cyan-400`}
              />
            </motion.div>

            <span
              className={`text-2xl font-black tracking-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Tron<span className="text-emerald-500">IT</span>
            </span>
          </NavLink>

          <button
            onClick={closeSidebar}
            aria-label="Menyuni yopish"
            className={`rounded-lg p-2 transition lg:hidden ${colors.closeButton}`}
          >
            <X size={21} />
          </button>
        </div>

        {/* Profile */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="relative z-10 shrink-0 px-5 py-6"
        >
          <div
            className={`relative overflow-hidden rounded-2xl border p-4 ${colors.profileCard}`}
          >
            <motion.div
              animate={reduceMotion ? {} : { x: ["-100%", "200%"] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 2,
              }}
              className="pointer-events-none absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent"
            />

            <div className="relative flex items-center gap-3">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-lg font-black text-white shadow-lg shadow-emerald-500/20">
                S

                <span
                  className={`absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-[3px] ${
                    isDark ? "border-[#102019]" : "border-white"
                  } bg-emerald-400`}
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className={`truncate text-sm font-bold ${colors.profileName}`}>
                  Student User
                </h3>

                <p className={`mt-1 text-xs ${colors.profileRole}`}>
                  <Sparkles size={11} className="mr-1 inline" />
                  O'quvchi
                </p>
              </div>
            </div>

            <div
              className={`relative mt-4 flex items-center justify-between border-t pt-3 ${colors.profileFooter}`}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[2px]">
                TronIT Academy
              </span>

              <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[9px] font-bold tracking-wider text-emerald-600 dark:text-emerald-300">
                STUDENT
              </span>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="relative z-10 min-h-0 flex-1 overflow-y-auto px-4">
          <div className="mb-4 flex items-center justify-between px-3">
            <p
              className={`text-[10px] font-bold uppercase tracking-[2.5px] ${colors.menuTitle}`}
            >
              Asosiy menyu
            </p>

            <div className="h-px w-8 bg-emerald-500/30" />
          </div>

          <nav className="space-y-2">
            {links.map((link, index) => {
              const Icon = link.icon;

              return (
                <motion.div
                  key={link.path}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <NavLink
                    to={link.path}
                    end={link.path === "/student"}
                    onClick={closeSidebar}
                    className={({ isActive }) => `
                      group relative flex items-center gap-3
                      overflow-hidden rounded-xl border px-4 py-3.5
                      text-sm font-semibold transition-all duration-300
                      ${
                        isActive
                          ? colors.activeLink
                          : colors.inactiveLink
                      }
                    `}
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <>
                            <motion.span
                              layoutId="student-active-indicator"
                              className="absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full bg-emerald-500"
                              transition={{
                                type: "spring",
                                stiffness: 350,
                                damping: 30,
                              }}
                            />

                            <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/[0.05] to-transparent" />
                          </>
                        )}

                        <motion.span
                          whileHover={reduceMotion ? undefined : { scale: 1.12 }}
                          className={`
                            relative z-10 flex h-8 w-8
                            items-center justify-center rounded-lg
                            transition-colors
                            ${isActive ? colors.activeIcon : colors.inactiveIcon}
                          `}
                        >
                          <Icon size={18} strokeWidth={2} />
                        </motion.span>

                        <span className="relative z-10 flex-1">
                          {link.name}
                        </span>

                        {isActive && (
                          <motion.span
                            layoutId="student-active-dot"
                            className="relative z-10 h-1.5 w-1.5 rounded-full bg-emerald-500"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              );
            })}
          </nav>
        </div>

        {/* Status */}
        <div
          className={`relative z-10 mx-5 mb-4 mt-3 rounded-xl border p-3 ${colors.statusCard}`}
        >
          <div className="flex items-center gap-2">
            <motion.span
              animate={reduceMotion ? {} : { opacity: [1, 0.35, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-emerald-500"
            />

            <span className={`text-xs font-medium ${colors.statusText}`}>
              Platforma faol
            </span>

            <span className="ml-auto text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
              ONLINE
            </span>
          </div>
        </div>

        {/* Logout */}
        <div className={`relative z-10 shrink-0 border-t p-4 ${colors.bottomBorder}`}>
          <motion.button
            whileHover={reduceMotion ? undefined : { x: 4 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            onClick={handleLogout}
            className={`group flex w-full items-center gap-3 rounded-xl border border-transparent px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${colors.logout}`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 transition-colors group-hover:bg-red-500/20">
              <LogOut size={18} />
            </span>

            Chiqish
          </motion.button>
        </div>
      </aside>
    </>
  );
}

export default StudentSidebar;
