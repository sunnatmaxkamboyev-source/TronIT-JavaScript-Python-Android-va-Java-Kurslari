
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CodeBackground from "../components/CodeBackground";

export default function Login() {
  const reduceMotion = useReducedMotion();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password) {
      setMessage("Barcha maydonlarni to'ldiring.");
      return;
    }

    setMessage("Login tizimi hali backendga ulanmagan.");
  };

  return (
    <>
      <Navbar />

      <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-slate-100 px-5 py-16 transition-colors duration-300 dark:bg-[#020806]">
        <CodeBackground />

        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-10 w-full max-w-md rounded-3xl border border-white/60 bg-white/90 p-8 shadow-2xl shadow-black/15 backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/90 md:p-10"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 shadow-lg shadow-emerald-500/30">
            <GraduationCap size={32} className="text-white" />
          </div>

          <h1 className="mt-7 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Xush kelibsiz!
          </h1>

          <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
            TronIT hisobingizga kiring
          </p>

          {message && (
            <div
              role="alert"
              className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300"
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="login-email"
                className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Email manzilingiz
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={19} />

                <input
                  id="login-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={120}
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="login-password"
                  className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Parol
                </label>

                <Link
                  to="/forgot-password"
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
                >
                  Parolni unutdingizmi?
                </Link>
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={19} />

                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  placeholder="Parolingizni kiriting"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-12 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Parolni yashirish" : "Parolni ko'rsatish"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-500"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            <motion.button
              whileHover={reduceMotion ? undefined : { scale: 1.015 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
            >
              Kirish
              <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </form>

          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
            <span className="text-xs font-medium text-gray-400">YOKI</span>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Hisobingiz yo'qmi?{" "}
            <Link to="/register" className="font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
              Ro'yxatdan o'tish
            </Link>
          </p>

          <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500">
            TronIT · Kelajak sari bilim bilan
          </p>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
