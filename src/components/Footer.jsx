import { Link } from "react-router-dom";
import {
  GraduationCap,
  Code2,
  Send,
  Mail,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  const email = "sunnatmaxkamboyev@gmail.com";
  const telegram = "https://t.me/rustamov1ch701";

  const pages = [
    { name: "Bosh sahifa", path: "/" },
    { name: "Kurslar", path: "/courses" },
    { name: "Biz haqimizda", path: "/about" },
    { name: "Bog'lanish", path: "/contact" },
  ];

  const categories = [
    "JavaScript",
    "Python",
    "Node.js",
    "Java",
    "Flutter",
    "Kiberxavfsizlik",
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 w-fit">
              <div className="w-11 h-11 bg-green-500 rounded-xl flex items-center justify-center">
                <GraduationCap size={26} className="text-white" />
              </div>

              <span className="text-2xl font-bold">
                Tron<span className="text-green-500">IT</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-7 mt-6 max-w-xs">
              TronIT — zamonaviy IT bilimlarini o'rganish,
              yangi ko'nikmalar egallash va kelajak kasbingizni
              yaratish uchun onlayn ta'lim platformasi.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-green-500 hover:text-white transition"
              >
                <Send size={19} />
              </a>

              <a
                href={`mailto:${email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-green-500 hover:text-white transition"
              >
                <Mail size={19} />
              </a>

              <a
                href="/"
                aria-label="TronIT"
                className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-green-500 hover:text-white transition"
              >
                <Code2 size={19} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Sahifalar
            </h3>

            <ul className="space-y-4">
              {pages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="text-sm text-gray-400 hover:text-green-500 transition"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Yo'nalishlar
            </h3>

            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to="/courses"
                    className="text-sm text-gray-400 hover:text-green-500 transition"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Aloqa
            </h3>

            <p className="text-sm text-gray-400 leading-7 mb-5">
              Savollaringiz bormi? Biz bilan bog'laning.
            </p>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-sm text-gray-300 hover:text-green-500 transition break-all"
            >
              <Mail size={18} className="text-green-500 shrink-0" />
              {email}
            </a>

            <a
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-300 hover:text-green-500 transition mt-4"
            >
              <Send size={18} className="text-green-500 shrink-0" />
              @rustamov1ch701
            </a>

            <div className="mt-8 p-5 bg-gray-900 rounded-2xl border border-gray-800">
              <BookOpen size={24} className="text-green-500 mb-3" />

              <h4 className="font-semibold">
                O'rganishni boshlang
              </h4>

              <p className="text-xs text-gray-400 mt-2 leading-6">
                Bugungi bilim — ertangi imkoniyat.
              </p>

              <Link
                to="/courses"
                className="inline-flex items-center gap-2 text-green-500 text-sm font-semibold mt-4 hover:text-green-400 transition"
              >
                Kurslarni ko'rish
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-14 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} TronIT. Barcha huquqlar himoyalangan.
          </p>

          <p className="text-gray-500 text-sm">
            Bilim — kelajak kaliti.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
