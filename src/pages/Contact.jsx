import { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  ArrowRight,
  MessageCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      return;
    }

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sunnatmaxkamboyev@gmail.com",
      link: "mailto:sunnatmaxkamboyev@gmail.com",
    },
    {
      icon: Send,
      title: "Telegram",
      value: "@rustamov1ch701",
      link: "https://t.me/rustamov1ch701",
    },
    {
      icon: Clock,
      title: "Ish vaqti",
      value: "Dushanba – Shanba",
      link: null,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white transition-colors dark:bg-gray-950">
        {/* Hero */}
        <section className="bg-green-50 transition-colors dark:bg-green-950/20">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-600 dark:bg-gray-900 dark:text-green-400">
              <MessageCircle size={16} />
              Biz bilan bog'laning
            </span>

            <h1 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Sizni tinglashga
              <span className="text-green-500"> tayyormiz.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-500 dark:text-gray-400">
              Savollaringiz, takliflaringiz yoki hamkorlik bo'yicha
              murojaatlaringiz bo'lsa, biz bilan bog'laning.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">

            {/* Left side */}
            <div>
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                ALOQA MA'LUMOTLARI
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                Keling, suhbatlashamiz
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-gray-500 dark:text-gray-400">
                TronIT jamoasi sizning fikrlaringiz va savollaringizni
                qadrlaydi. Biz bilan bog'lanish uchun quyidagi
                ma'lumotlardan foydalaning.
              </p>

              <div className="mt-10 space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-5 rounded-2xl border border-gray-100 p-5 transition hover:border-green-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-800"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 dark:bg-green-950/50">
                        <Icon className="text-green-600 dark:text-green-400" size={23} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>

                        {item.link ? (
                          <a
                            href={item.link}
                            target={item.link.startsWith("http") ? "_blank" : undefined}
                            rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="break-all text-sm text-gray-500 transition hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl bg-gray-950 p-7 text-white dark:bg-gray-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500">
                  <MapPin size={24} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  TronIT platformasi
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  IT bilimlarini o'rganish va yangi imkoniyatlar
                  yaratish uchun yagona manzil.
                </p>
              </div>
            </div>

            {/* Right side form */}
            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xl shadow-gray-100 transition-colors dark:border-gray-800 dark:bg-gray-900 dark:shadow-none md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Xabar yuborish
              </h2>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Formani to'ldiring. Sizning murojaatingiz biz uchun muhim.
              </p>

              {submitted && (
                <div className="mt-6 flex items-center gap-3 rounded-xl bg-green-50 p-4 text-green-700 dark:bg-green-950/40 dark:text-green-400">
                  <CheckCircle2 size={22} />
                  <p className="text-sm font-medium">
                    Forma qabul qilindi. Backend ulangandan keyin xabar yuborish ishlaydi.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Ismingiz
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ismingizni kiriting"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-green-950"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Email manzilingiz
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-green-950"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Mavzu
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Murojaat mavzusi"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-green-950"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Xabaringiz
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Xabaringizni yozing..."
                    rows="5"
                    required
                    className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-green-950"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-4 font-semibold text-white shadow-lg shadow-green-100 transition hover:bg-green-600 dark:shadow-none"
                >
                  Xabar yuborish
                  <ArrowRight size={19} />
                </button>

                <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                  Hozircha demo forma. Xabarlar serverga yuborilmaydi.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
