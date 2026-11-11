import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  ArrowLeft,
  LockKeyhole,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-[75vh] bg-gray-50 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100 p-8 md:p-10">

          <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto">
            <LockKeyhole size={30} className="text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 text-center mt-7">
            Parolni tiklash
          </h1>

          <p className="text-gray-500 text-sm text-center leading-6 mt-3">
            Email manzilingizni kiriting. Parolni tiklash
            bo'yicha ko'rsatmalarni shu manzilga yuborish
            imkoniyati backend ulangandan keyin ishlaydi.
          </p>

          {submitted ? (
            <div className="mt-8 bg-green-50 rounded-2xl p-5 text-center">
              <CheckCircle2 size={32} className="text-green-600 mx-auto" />

              <h2 className="font-semibold text-green-700 mt-3">
                So'rov qabul qilindi
              </h2>

              <p className="text-sm text-green-700 mt-2">
                Bu demo holat. Email hali yuborilmadi.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email manzilingiz
              </label>

              <div className="relative">
                <Mail size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  required
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-xl mt-6 transition"
              >
                Tiklash so'rovini yuborish
              </button>
            </form>
          )}

          <Link
            to="/login"
            className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-green-600 font-medium mt-7 transition"
          >
            <ArrowLeft size={17} />
            Login sahifasiga qaytish
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ForgotPassword;
