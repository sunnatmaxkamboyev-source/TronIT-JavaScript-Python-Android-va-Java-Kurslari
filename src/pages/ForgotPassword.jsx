
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

      <main className="flex min-h-[75vh] items-center justify-center bg-gray-50 px-6 py-16 transition-colors dark:bg-gray-950">
        <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-100 transition-colors dark:border-gray-800 dark:bg-gray-900 dark:shadow-none md:p-10">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 dark:bg-green-950/40">
            <LockKeyhole
              size={30}
              className="text-green-600 dark:text-green-400"
            />
          </div>

          <h1 className="mt-7 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Parolni tiklash
          </h1>

          <p className="mt-3 text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
            Email manzilingizni kiriting. Parolni tiklash
            bo'yicha ko'rsatmalarni shu manzilga yuborish
            imkoniyati backend ulangandan keyin ishlaydi.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-green-50 p-5 text-center dark:bg-green-950/40">
              <CheckCircle2
                size={32}
                className="mx-auto text-green-600 dark:text-green-400"
              />

              <h2 className="mt-3 font-semibold text-green-700 dark:text-green-400">
                So'rov qabul qilindi
              </h2>

              <p className="mt-2 text-sm text-green-700 dark:text-green-400">
                Bu demo holat. Email hali yuborilmadi.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-green-950"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-green-500 py-3.5 font-semibold text-white transition hover:bg-green-600"
              >
                Tiklash so'rovini yuborish
              </button>
            </form>
          )}

          <Link
            to="/login"
            className="mt-7 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 transition hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
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
