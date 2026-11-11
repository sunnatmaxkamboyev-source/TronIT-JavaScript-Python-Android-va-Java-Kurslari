
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

      <main className="min-h-[75vh] bg-gray-50 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100">

          <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mx-auto">
            <GraduationCap size={30} className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 text-center mt-6">
            Hisob yaratish
          </h1>

          <p className="text-gray-500 text-sm text-center mt-2">
            TronIT bilan o'rganishni boshlang
          </p>

          {message && (
            <div className="bg-green-50 text-green-700 p-3 rounded-xl text-sm mt-6">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Ismingiz
              </label>

              <div className="relative">
                <User size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  required
                  placeholder="Ismingizni kiriting"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <div className="relative">
                <Mail size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Parol
              </label>

              <div className="relative">
                <Lock size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  placeholder="Kamida 8 ta belgi"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  aria-label="Parolni ko'rsatish"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Parolni tasdiqlang
              </label>

              <div className="relative">
                <Lock size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type={showConfirm ? "text" : "password"}
                  required
                  placeholder="Parolni qayta kiriting"
                  value={form.confirmPassword}
                  onChange={(e) =>
                    setForm({ ...form, confirmPassword: e.target.value })
                  }
                  className="w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  aria-label="Tasdiqlash parolini ko'rsatish"
                >
                  {showConfirm ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-xl font-semibold transition"
            >
              Ro'yxatdan o'tish
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-7">
            Hisobingiz bormi?{" "}
            <Link to="/login" className="text-green-600 font-semibold hover:text-green-700">
              Kirish
            </Link>
          </p>

          <p className="text-sm text-center mt-3">
            <Link to="/forgot-password" className="text-green-600 font-semibold hover:text-green-700">
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
