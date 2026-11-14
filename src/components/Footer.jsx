
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Code2,
  Send,
  Mail,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const footerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const footerItem = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

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
    <footer className="relative overflow-hidden bg-gray-950 text-white transition-colors duration-300 dark:bg-black">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-green-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <motion.div
          variants={footerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Logo va tavsif */}
          <motion.div variants={footerItem}>
            <Link to="/" className="flex w-fit items-center gap-3">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500 shadow-lg shadow-green-500/20"
              >
                <GraduationCap size={26} className="text-white" />
              </motion.div>

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
              {[
                { href: telegram, label: "Telegram", Icon: Send },
                { href: `mailto:${email}`, label: "Email", Icon: Mail },
                { href: "/", label: "TronIT", Icon: Code2 },
              ].map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label === "Telegram" ? "_blank" : undefined}
                  rel={label === "Telegram" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 text-gray-300 transition-colors hover:bg-green-500 hover:text-white"
                >
                  <Icon size={19} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Sahifalar */}
          <motion.div variants={footerItem}>
            <h3 className="mb-6 text-lg font-bold">Sahifalar</h3>

            <ul className="space-y-4">
              {pages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="inline-block text-sm text-gray-400 transition-all duration-300 hover:translate-x-2 hover:text-green-500"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Yo'nalishlar */}
          <motion.div variants={footerItem}>
            <h3 className="mb-6 text-lg font-bold">Yo'nalishlar</h3>

            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to="/courses"
                    className="inline-block text-sm text-gray-400 transition-all duration-300 hover:translate-x-2 hover:text-green-500"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Aloqa */}
          <motion.div variants={footerItem}>
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

            <motion.div
              whileHover={{ y: -5, borderColor: "rgba(34,197,94,0.6)" }}
              className="mt-8 rounded-2xl border border-gray-800 bg-gray-900 p-5 transition-colors"
            >
              <BookOpen size={24} className="mb-3 text-green-500" />

              <h4 className="font-semibold">O'rganishni boshlang</h4>

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
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-7 sm:flex-row"
        >
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} TronIT. Barcha huquqlar himoyalangan.
          </p>

          <p className="text-sm text-gray-500">
            Bilim — kelajak kaliti.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
