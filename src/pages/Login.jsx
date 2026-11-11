
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Login tizimi hali backendga ulanmagan.");
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
            Xush kelibsiz!
          </h1>

          <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
            TronIT hisobingizga kiring
          </p>

          {message && (
            <div className="mt-6 rounded-xl bg-green-50 p-3 text-sm text-green-700 dark:bg-green-950/40 dark:text-green-400">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Email manzilingiz
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
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Parol
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-green-600 hover:text-green-700 dark:text-green-400"
                >
                  Parolni unutdingizmi?
                </Link>
              </div>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Parolingizni kiriting"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-12 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-green-950"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-green-600"
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

            <button
              type="submit"
              className="w-full rounded-xl bg-green-500 py-3.5 font-semibold text-white transition hover:bg-green-600"
            >
              Kirish
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-gray-500 dark:text-gray-400">
            Hisobingiz yo'qmi?{" "}
            <Link
              to="/register"
              className="font-semibold text-green-600 hover:text-green-700 dark:text-green-400"
            >
              Ro'yxatdan o'tish
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Login;
