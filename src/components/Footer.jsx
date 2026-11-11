
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
    <footer className="bg-gray-950 text-white transition-colors duration-300 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Logo va tavsif */}
          <div>
            <Link to="/" className="flex w-fit items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500">
                <GraduationCap size={26} className="text-white" />
              </div>

              <span className="text-2xl font-bold">
                Tron<span className="text-green-500">IT</span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-gray-400">
              TronIT — zamonaviy IT bilimlarini o'rganish,
              yangi ko'nikmalar egallash va kelajak kasbingizni
              yaratish uchun onlayn ta'lim platformasi.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 text-gray-300 transition hover:bg-green-500 hover:text-white"
              >
                <Send size={19} />
              </a>

              <a
                href={`mailto:${email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 text-gray-300 transition hover:bg-green-500 hover:text-white"
              >
                <Mail size={19} />
              </a>

              <a
                href="/"
                aria-label="TronIT"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 text-gray-300 transition hover:bg-green-500 hover:text-white"
              >
                <Code2 size={19} />
              </a>
            </div>
          </div>

          {/* Sahifalar */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Sahifalar</h3>

            <ul className="space-y-4">
              {pages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="text-sm text-gray-400 transition hover:text-green-500"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yo'nalishlar */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Yo'nalishlar</h3>

            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to="/courses"
                    className="text-sm text-gray-400 transition hover:text-green-500"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aloqa */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Aloqa</h3>

            <p className="mb-5 text-sm leading-7 text-gray-400">
              Savollaringiz bormi? Biz bilan bog'laning.
            </p>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 break-all text-sm text-gray-300 transition hover:text-green-500"
            >
              <Mail size={18} className="shrink-0 text-green-500" />
              {email}
            </a>

            <a
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-3 text-sm text-gray-300 transition hover:text-green-500"
            >
              <Send size={18} className="shrink-0 text-green-500" />
              @rustamov1ch701
            </a>

            <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900 p-5">
              <BookOpen size={24} className="mb-3 text-green-500" />

              <h4 className="font-semibold">
                O'rganishni boshlang
              </h4>

              <p className="mt-2 text-xs leading-6 text-gray-400">
                Bugungi bilim — ertangi imkoniyat.
              </p>

              <Link
                to="/courses"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-500 transition hover:text-green-400"
              >
                Kurslarni ko'rish
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-7 sm:flex-row">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} TronIT. Barcha huquqlar himoyalangan.
          </p>

          <p className="text-sm text-gray-500">
            Bilim — kelajak kaliti.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
