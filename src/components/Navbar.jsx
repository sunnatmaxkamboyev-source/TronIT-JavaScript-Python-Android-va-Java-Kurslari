import { Link, NavLink } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

const navLinks = [
  { name: "Bosh sahifa", path: "/" },
  { name: "Kurslar", path: "/courses" },
  { name: "Biz haqimizda", path: "/about" },
  { name: "Bog'lanish", path: "/contact" },
];

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">


        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
            <GraduationCap className="text-white" size={25} />
          </div>

          <span className="text-2xl font-bold text-gray-900">
            Tron<span className="text-green-500">IT</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-600 hover:text-green-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

    
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-gray-700 font-medium hover:text-green-600"
          >
            
          </Link>

          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-medium transition"
          >
            Ro'yxatdan o'tish
          </Link>
        </div>

    
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 font-medium"
            >
              {link.name}
            </NavLink>
          ))}

          <Link to="/login" className="text-green-600 font-medium">
        
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
