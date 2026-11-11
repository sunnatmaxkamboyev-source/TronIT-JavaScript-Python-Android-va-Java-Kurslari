import { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  Phone,
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

      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-green-50">
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">
            <span className="inline-flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
              <MessageCircle size={16} />
              Biz bilan bog'laning
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
              Sizni tinglashga
              <span className="text-green-500"> tayyormiz.</span>
            </h1>

            <p className="text-gray-500 max-w-2xl mx-auto mt-5 leading-7">
              Savollaringiz, takliflaringiz yoki hamkorlik bo'yicha
              murojaatlaringiz bo'lsa, biz bilan bog'laning.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            
            <div>
              <span className="text-green-600 font-semibold text-sm">
                ALOQA MA'LUMOTLARI
              </span>

              <h2 className="text-3xl font-bold text-gray-900 mt-3">
                Keling, suhbatlashamiz
              </h2>

              <p className="text-gray-500 leading-7 mt-5 max-w-lg">
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
                      className="flex items-center gap-5 p-5 border border-gray-100 rounded-2xl hover:border-green-200 hover:shadow-md transition"
                    >
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="text-green-600" size={23} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {item.title}
                        </h3>

                        {item.link ? (
                          <a
                            href={item.link}
                            target={item.link.startsWith("http") ? "_blank" : undefined}
                            rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm text-gray-500 hover:text-green-600 transition break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-500">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 bg-gray-950 rounded-2xl p-7 text-white">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>

                <h3 className="text-xl font-bold mt-5">
                  TronIT platformasi
                </h3>

                <p className="text-gray-400 text-sm leading-6 mt-2">
                  IT bilimlarini o'rganish va yangi imkoniyatlar
                  yaratish uchun yagona manzil.
                </p>
              </div>
            </div>

            {/* Right side form */}
            <div className="bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-100 p-7 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Xabar yuborish
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                Formani to'ldiring. Sizning murojaatingiz biz uchun muhim.
              </p>

              {submitted && (
                <div className="flex items-center gap-3 bg-green-50 text-green-700 p-4 rounded-xl mt-6">
                  <CheckCircle2 size={22} />
                  <p className="text-sm font-medium">
                    Forma qabul qilindi. Backend ulangandan keyin xabar yuborish ishlaydi.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ismingiz
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ismingizni kiriting"
                    required
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email manzilingiz
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mavzu
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Murojaat mavzusi"
                    required
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Xabaringiz
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Xabaringizni yozing..."
                    rows="5"
                    required
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition shadow-lg shadow-green-100"
                >
                  Xabar yuborish
                  <ArrowRight size={19} />
                </button>

                <p className="text-xs text-gray-400 text-center">
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
