import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  UserRound,
  Settings,
  LogOut,
  X,
} from "lucide-react";

function StudentSidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

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

  const handleLogout = () => {
    navigate("/login");
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-72 flex-col
          border-r border-gray-100 bg-white
          transition-colors duration-300
          dark:border-gray-800 dark:bg-gray-900
          transition-transform
          duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Logo */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-gray-100 px-7 dark:border-gray-800">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500">
              <GraduationCap size={24} className="text-white" />
            </div>

            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Tron<span className="text-green-500">IT</span>
            </span>
          </NavLink>

          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white lg:hidden"
            aria-label="Menyuni yopish"
          >
            <X size={22} />
          </button>
        </div>

        {/* User */}
        <div className="shrink-0 p-6">
          <div className="flex items-center gap-3 rounded-2xl bg-green-50 p-4 dark:bg-green-950/30">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-500 font-bold text-white">
              S
            </div>

            <div className="min-w-0">
              <h3 className="truncate font-semibold text-gray-900 dark:text-white">
                Student User
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                O'quvchi
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="min-h-0 flex-1 overflow-y-auto px-4">
          <p className="mb-4 px-3 text-xs font-bold uppercase tracking-wider text-gray-400">
            Asosiy menyu
          </p>

          <nav className="space-y-2">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/student"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-green-500 text-white shadow-lg shadow-green-100 dark:shadow-none"
                        : "text-gray-500 hover:bg-green-50 hover:text-green-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-green-400"
                    }`
                  }
                >
                  <Icon size={19} />
                  {link.name}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <div className="shrink-0 border-t border-gray-100 p-4 dark:border-gray-800">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950/30"
          >
            <LogOut size={19} />
            Chiqish
          </button>
        </div>
      </aside>
    </>
  );
}

export default StudentSidebar;
