
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CodeBackground from "../components/CodeBackground";

export default function Register() {
  const reduceMotion = useReducedMotion();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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

    if (form.name.trim().length < 2) {
      setMessage("Ismingiz kamida 2 ta belgidan iborat bo'lishi kerak.");
      return;
    }

    if (form.password.length < 8) {
      setMessage("Parol kamida 8 ta belgidan iborat bo'lishi kerak.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Parollar bir-biriga mos kelmaydi.");
      return;
    }

    if (!acceptedTerms) {
      setMessage("Davom etish uchun shartlarga rozilik bildiring.");
      return;
    }

    setMessage("Ro'yxatdan o'tish tizimi hali backendga ulanmagan.");
  };

  return (
    <>
      <Navbar />

      <main className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-slate-100 px-5 py-16 transition-colors duration-300 dark:bg-[#020806]">
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
            Hisob yaratish
          </h1>

          <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
            TronIT bilan o'rganishni boshlang
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
                htmlFor="register-name"
                className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Ismingiz
              </label>

              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={19} />

                <input
                  id="register-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={80}
                  placeholder="Ismingizni kiriting"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="register-email"
                className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Email manzilingiz
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={19} />

                <input
                  id="register-email"
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
              <label
                htmlFor="register-password"
                className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Parol
              </label>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={19} />

                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  maxLength={128}
                  placeholder="Kamida 8 ta belgi"
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

            <div>
              <label
                htmlFor="register-confirm"
                className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Parolni tasdiqlang
              </label>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={19} />

                <input
                  id="register-confirm"
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  autoComplete="new-password"
                  required
                  maxLength={128}
                  placeholder="Parolni qayta kiriting"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-12 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm((prev) => !prev)}
                  aria-label={showConfirm ? "Parolni yashirish" : "Parolni ko'rsatish"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-500"
                >
                  {showConfirm ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => {
                  setAcceptedTerms(e.target.checked);
                  setMessage("");
                }}
                className="mt-1 h-4 w-4 shrink-0 accent-emerald-500"
              />

              <span className="leading-6">
                Foydalanish shartlari va maxfiylik siyosatiga roziman.
              </span>
            </label>

            <motion.button
              whileHover={reduceMotion ? undefined : { scale: 1.015 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
            >
              Ro'yxatdan o'tish
              <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </form>

          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
            <span className="text-xs font-medium text-gray-400">YOKI</span>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Hisobingiz bormi?{" "}
            <Link to="/login" className="font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
              Kirish
            </Link>
          </p>

          <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500">
            <CheckCircle2 size={13} className="mr-1 inline text-emerald-500" />
            TronIT · Kelajak sari bilim bilan
          </p>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
