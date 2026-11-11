import { NavLink } from "react-router-dom";
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

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 w-72 h-screen bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="h-20 px-7 flex items-center justify-between border-b border-gray-100">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
              <GraduationCap size={24} className="text-white" />
            </div>

            <span className="text-2xl font-bold text-gray-900">
              Tron<span className="text-green-500">IT</span>
            </span>
          </NavLink>

          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-900"
          >
            <X size={22} />
          </button>
        </div>

        {/* User */}
        <div className="p-6">
          <div className="flex items-center gap-3 bg-green-50 p-4 rounded-2xl">
            <div className="w-11 h-11 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              S
            </div>

            <div className="min-w-0">
              <h3 className="font-semibold text-gray-900 truncate">
                Student User
              </h3>
              <p className="text-xs text-gray-500">
                O'quvchi
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-4">
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
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? "bg-green-500 text-white shadow-lg shadow-green-100"
                        : "text-gray-500 hover:bg-green-50 hover:text-green-600"
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

        
        <div className="mt-auto p-4 border-t border-gray-100">
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition"
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
