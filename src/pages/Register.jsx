
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password.length < 8) {
      setMessage("Parol kamida 8 ta belgidan iborat bo'lishi kerak.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Parollar bir-biriga mos kelmaydi.");
      return;
    }

    setMessage("Ro'yxatdan o'tish tizimi hali backendga ulanmagan.");
  };

  return (
    <>
      <Navbar />

      <main className="flex min-h-[75vh] items-center justify-center bg-gray-50 px-6 py-16 transition-colors dark:bg-gray-950">
        <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-100 transition-colors dark:border-gray-800 dark:bg-gray-900 dark:shadow-none md:p-10">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500">
            <GraduationCap size={30} className="text-white" />
          </div>

          <h1 className="mt-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Hisob yaratish
          </h1>

          <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
            TronIT bilan o'rganishni boshlang
          </p>

          {message && (
            <div className="mt-6 rounded-xl bg-green-50 p-3 text-sm text-green-700 dark:bg-green-950/40 dark:text-green-400">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Ismingiz
              </label>

              <div className="relative">
                <User
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  required
                  placeholder="Ismingizni kiriting"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-green-950"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-green-950"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Parol
              </label>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  placeholder="Kamida 8 ta belgi"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-12 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-green-950"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600"
                  aria-label="Parolni ko'rsatish"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Parolni tasdiqlang
              </label>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showConfirm ? "text" : "password"}
                  required
                  placeholder="Parolni qayta kiriting"
                  value={form.confirmPassword}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-12 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-green-950"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600"
                  aria-label="Tasdiqlash parolini ko'rsatish"
                >
                  {showConfirm ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-green-500 py-3.5 font-semibold text-white transition hover:bg-green-600"
            >
              Ro'yxatdan o'tish
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-gray-500 dark:text-gray-400">
            Hisobingiz bormi?{" "}
            <Link
              to="/login"
              className="font-semibold text-green-600 hover:text-green-700 dark:text-green-400"
            >
              Kirish
            </Link>
          </p>

          <p className="mt-3 text-center text-sm">
            <Link
              to="/forgot-password"
              className="font-semibold text-green-600 hover:text-green-700 dark:text-green-400"
            >
              Parolni unutdingizmi?
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Register;
