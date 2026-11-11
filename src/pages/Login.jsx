
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, GraduationCap } from "lucide-react";
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

      <main className="min-h-[75vh] bg-gray-50 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100">

          <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mx-auto">
            <GraduationCap size={30} className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 text-center mt-6">
            Xush kelibsiz!
          </h1>

          <p className="text-gray-500 text-sm text-center mt-2">
            TronIT hisobingizga kiring
          </p>

          {message && (
            <div className="bg-green-50 text-green-700 p-3 rounded-xl text-sm mt-6">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email manzilingiz
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
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-700">
                  Parol
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm text-green-600 font-semibold hover:text-green-700"
                >
                  Parolni unutdingizmi?
                </Link>
              </div>

              <div className="relative">
                <Lock size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Parolingizni kiriting"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600"
                  aria-label="Parolni ko'rsatish"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-xl font-semibold transition"
            >
              Kirish
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-7">
            Hisobingiz yo'qmi?{" "}
            <Link to="/register" className="text-green-600 font-semibold hover:text-green-700">
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
