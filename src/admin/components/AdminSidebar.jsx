import { NavLink, Link } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FolderOpen,
  Users,
  PlayCircle,
  UserRound,
  Settings,
  LogOut,
  GraduationCap,
  X,
} from "lucide-react";

function AdminSidebar({ isOpen, setIsOpen }) {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Kurslar",
      path: "/admin/courses",
      icon: BookOpen,
    },
    {
      name: "Kategoriyalar",
      path: "/admin/categories",
      icon: FolderOpen,
    },
    {
      name: "O'quvchilar",
      path: "/admin/students",
      icon: Users,
    },
    {
      name: "Video darslar",
      path: "/admin/lessons",
      icon: PlayCircle,
    },
    {
      name: "Profil",
      path: "/admin/profile",
      icon: UserRound,
    },
    {
      name: "Sozlamalar",
      path: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-gray-100 bg-white transition-transform duration-300 dark:border-gray-800 dark:bg-gray-900 ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-gray-100 px-7 dark:border-gray-800">
          <Link to="/admin" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500 text-white">
              <GraduationCap size={25} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Tron<span className="text-green-500">IT</span>
              </h2>
              <p className="text-xs text-gray-400">
                Admin Panel
              </p>
            </div>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
            aria-label="Menyuni yopish"
          >
            <X size={21} />
          </button>
        </div>

        {/* Admin info */}
        <div className="mx-5 mt-6 flex items-center gap-3 rounded-2xl bg-green-50 p-4 dark:bg-green-900/20">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 font-bold text-white">
            A
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold text-gray-900 dark:text-white">
              Administrator
            </h3>
            <p className="text-xs text-green-600 dark:text-green-400">
              Super Admin
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-7 flex-1 space-y-2 overflow-y-auto px-5">
          <p className="mb-4 px-3 text-xs font-bold uppercase tracking-wider text-gray-400">
            Boshqaruv
          </p>

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                      : "text-gray-600 hover:bg-gray-100 hover:text-green-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-green-400"
                  }`
                }
              >
                <Icon size={19} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-gray-100 p-5 dark:border-gray-800">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <LogOut size={19} />
            Chiqish
          </button>

          <p className="mt-4 text-center text-xs text-gray-400">
            TronIT Admin v1.0
          </p>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;
