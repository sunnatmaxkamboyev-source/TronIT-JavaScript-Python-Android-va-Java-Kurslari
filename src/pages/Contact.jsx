import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  ArrowRight,
  MessageCircle,
  Clock,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Headphones,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "sunnatmaxkamboyev@gmail.com",
    link: "mailto:sunnatmaxkamboyev@gmail.com",
    description: "Bizga email orqali yozing",
  },
  {
    icon: Send,
    title: "Telegram",
    value: "@rustamov1ch701",
    link: "https://t.me/rustamov1ch701",
    description: "Telegram orqali bog'laning",
  },
  {
    icon: Clock,
    title: "Ish vaqti",
    value: "Dushanba – Shanba",
    link: null,
    description: "Murojaatlaringizni kutamiz",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Contact() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);

    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
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

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 transition-colors dark:from-gray-950 dark:via-gray-950 dark:to-green-950/30">
          {/* Background decorations */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-300/20 blur-3xl dark:bg-green-500/10" />
            <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />

            <div
              className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(#16a34a 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200/70 bg-white/80 px-5 py-2.5 text-sm font-semibold text-green-700 shadow-sm backdrop-blur dark:border-green-900 dark:bg-gray-900/80 dark:text-green-400">
                <Sparkles size={16} />
                Biz bilan bog'laning
              </span>
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12 }}
              className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl md:text-6xl"
            >
              Sizni tinglashga
              <span className="block bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                tayyormiz.
              </span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg"
            >
              Savollaringiz, takliflaringiz yoki hamkorlik bo'yicha
              murojaatlaringiz bo'lsa, biz bilan bog'laning.
              TronIT jamoasi siz bilan muloqot qilishga tayyor.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="mt-9 flex flex-wrap justify-center gap-3"
            >
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-1 hover:bg-green-600"
              >
                Xabar yuborish
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="https://t.me/rustamov1ch701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-6 py-3.5 font-semibold text-gray-800 backdrop-blur transition hover:-translate-y-1 hover:border-green-300 dark:border-gray-700 dark:bg-gray-900/80 dark:text-white dark:hover:border-green-700"
              >
                <Send size={17} />
                Telegram
              </a>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-500"
            >
              <ShieldCheck size={17} className="text-green-500" />
              Har bir murojaat biz uchun muhim
            </motion.div>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* LEFT SIDE */}
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-green-600 dark:text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  ALOQA MA'LUMOTLARI
                </span>

                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white md:text-4xl">
                  Keling, suhbatlashamiz
                </h2>

                <p className="mt-5 max-w-lg leading-8 text-gray-500 dark:text-gray-400">
                  TronIT jamoasi sizning fikrlaringiz va savollaringizni
                  qadrlaydi. Biz bilan bog'lanish uchun quyidagi
                  ma'lumotlardan foydalaning.
                </p>

                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="mt-10 space-y-4"
                >
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        variants={fadeUp}
                        whileHover={reduceMotion ? undefined : { x: 7 }}
                        className="group flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-900"
                      >
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition-colors group-hover:bg-green-500 group-hover:text-white dark:bg-green-950/50 dark:text-green-400">
                          <Icon size={24} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>

                          {item.link ? (
                            <a
                              href={item.link}
                              target={
                                item.link.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.link.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="mt-1 block break-all text-sm font-medium text-gray-600 transition hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                              {item.value}
                            </p>
                          )}

                          <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                            {item.description}
                          </p>
                        </div>

                        <ArrowRight
                          size={18}
                          className="shrink-0 text-gray-300 transition group-hover:translate-x-1 group-hover:text-green-500"
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* PLATFORM CARD */}
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  className="relative mt-8 overflow-hidden rounded-3xl bg-gray-950 p-8 text-white dark:bg-gray-900"
                >
                  <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-green-500/20 blur-3xl" />

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 shadow-lg shadow-green-500/20">
                      <MapPin size={25} />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold">
                      TronIT platformasi
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-gray-400">
                      IT bilimlarini o'rganish va yangi imkoniyatlar
                      yaratish uchun yagona manzil.
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-green-400">
                      <Sparkles size={16} />
                      Kelajak sari birgalikda
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>

            {/* RIGHT SIDE FORM */}
            <Reveal delay={0.12}>
              <motion.div
                id="contact-form"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-2xl shadow-gray-200/60 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none md:p-10"
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-300" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-sm font-bold tracking-widest text-green-600 dark:text-green-400">
                      BIZGA YOZING
                    </span>

                    <h2 className="mt-3 text-2xl font-extrabold text-gray-950 dark:text-white md:text-3xl">
                      Xabar yuborish
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Formani to'ldiring. Sizning murojaatingiz biz uchun muhim.
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400 sm:flex">
                    <Headphones size={23} />
                  </div>
                </div>

                {submitted && (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mt-7 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-900 dark:bg-green-950/40 dark:text-green-400"
                  >
                    <CheckCircle2 size={22} className="mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold">
                        Forma muvaffaqiyatli qabul qilindi!
                      </p>
                      <p className="mt-1 text-xs leading-5 opacity-80">
                        Bu demo forma. Backend ulangandan keyin xabar serverga yuboriladi.
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Ismingiz
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ismingizni kiriting"
                      autoComplete="name"
                      maxLength={80}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3.5 text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 dark:border-gray-700 dark:bg-gray-800/70 dark:text-white dark:placeholder:text-gray-500 dark:focus:bg-gray-800"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Email manzilingiz
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      autoComplete="email"
                      maxLength={120}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3.5 text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 dark:border-gray-700 dark:bg-gray-800/70 dark:text-white dark:placeholder:text-gray-500 dark:focus:bg-gray-800"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Mavzu
                    </label>

                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Murojaat mavzusi"
                      maxLength={150}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3.5 text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 dark:border-gray-700 dark:bg-gray-800/70 dark:text-white dark:placeholder:text-gray-500 dark:focus:bg-gray-800"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Xabaringiz
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Xabaringizni yozing..."
                      rows={5}
                      maxLength={2000}
                      required
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3.5 text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 dark:border-gray-700 dark:bg-gray-800/70 dark:text-white dark:placeholder:text-gray-500 dark:focus:bg-gray-800"
                    />
                    <p className="mt-2 text-right text-xs text-gray-400">
                      {form.message.length}/2000
                    </p>
                  </div>

                  <motion.button
                    whileHover={reduceMotion ? undefined : { scale: 1.015 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-green-500 py-4 font-bold text-white shadow-lg shadow-green-500/20 transition-colors hover:bg-green-600"
                  >
                    Xabar yuborish
                    <ArrowRight
                      size={19}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </motion.button>

                  <p className="text-center text-xs leading-5 text-gray-400 dark:text-gray-500">
                    Hozircha demo forma. Xabarlar serverga yuborilmaydi.
                  </p>
                </form>
              </motion.div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
