
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Menu,
  UserRound,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Camera,
  Save,
  ShieldCheck,
  BookOpen,
  Sparkles,
  Edit3,
  X,
  CheckCircle2,
  GraduationCap,
  Code2,
  Clock3,
} from "lucide-react";

import StudentSidebar from "./StudentSidebar";

const initialProfile = {
  name: "Student User",
  email: "student@example.com",
  phone: "+998 90 123 45 67",
  location: "Toshkent, O'zbekiston",
  bio: "Men dasturlash va zamonaviy texnologiyalarni o'rganishga qiziqaman.",
};

function StudentProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(initialProfile);
  const [formData, setFormData] = useState(initialProfile);
  const [saved, setSaved] = useState(false);

  const reduceMotion = useReducedMotion();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();

    setProfile(formData);
    setIsEditing(false);
    setSaved(true);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-sm text-gray-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10 disabled:cursor-not-allowed disabled:text-gray-500 dark:border-white/10 dark:bg-[#101D16] dark:text-gray-100 dark:disabled:text-gray-400";

  const labelClass =
    "mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300";

  const profileStats = [
    {
      label: "Faol kurslar",
      value: "4 ta",
      icon: BookOpen,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      label: "O'rganish vaqti",
      value: "36 soat",
      icon: Clock3,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      label: "O'quvchi",
      value: "Student",
      icon: GraduationCap,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F4F7F5] transition-colors duration-300 dark:bg-[#050D0A]">
      <StudentSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className="min-h-screen w-full min-w-0 lg:ml-72 lg:w-[calc(100%-18rem)]">

        {/* HEADER */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200/70 bg-white/85 px-5 backdrop-blur-xl dark:border-white/5 dark:bg-[#07120F]/85 md:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl p-2 text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5 lg:hidden"
              aria-label="Menyuni ochish"
            >
              <Menu size={22} />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
                  Profilim
                </h1>

                <span className="hidden rounded-lg bg-green-500/10 px-2 py-1 text-[10px] font-bold text-green-600 dark:text-green-400 sm:inline-block">
                  ACCOUNT
                </span>
              </div>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 md:text-sm">
                Shaxsiy ma'lumotlaringizni boshqaring
              </p>
            </div>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-green-500/20 bg-gradient-to-br from-green-400 to-emerald-700 font-bold text-white shadow-lg shadow-green-500/20">
            {profile.name.charAt(0).toUpperCase() || "S"}
          </div>
        </header>

        <div className="mx-auto w-full max-w-7xl space-y-7 p-5 md:p-8">

          {/* HERO BANNER */}
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative isolate overflow-hidden rounded-3xl border border-green-400/20 bg-[#071A12] p-7 shadow-2xl shadow-green-950/10 md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.12)_1px,transparent_1px)] bg-[size:35px_35px]" />
            </div>

            <motion.div
              animate={reduceMotion ? {} : {
                scale: [1, 1.2, 1],
                opacity: [0.12, 0.28, 0.12],
              }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute -right-20 -top-32 -z-10 h-80 w-80 rounded-full bg-green-500/40 blur-[100px]"
            />

            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-2 text-xs font-bold tracking-wider text-green-400">
                  <Sparkles size={15} />
                  TRONIT STUDENT ACCOUNT
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-4xl">
                  Shaxsiy profilingiz
                  <span className="text-green-400">.</span>
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-gray-400 md:text-base">
                  Ma'lumotlaringizni yangilang, o'quv profilingizni
                  boshqaring va TronIT platformasidagi faoliyatingizni
                  kuzatib boring.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                  <span className="text-xs font-semibold text-green-400">
                    ACCOUNT ACTIVE
                  </span>
                </div>
              </div>

              <motion.div
                animate={reduceMotion ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mx-auto flex h-36 w-36 shrink-0 items-center justify-center rounded-[2rem] border border-green-400/20 bg-green-400/10 text-green-400 shadow-2xl shadow-green-500/10 backdrop-blur-xl md:mx-8 md:h-44 md:w-44"
              >
                <UserRound size={85} strokeWidth={1.1} />
              </motion.div>
            </div>
          </motion.section>

          {/* SUCCESS MESSAGE */}
          <AnimatePresence>
            {saved && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm font-semibold text-green-700 dark:text-green-400"
              >
                <CheckCircle2 size={20} />
                Profil ma'lumotlari muvaffaqiyatli saqlandi!
              </motion.div>
            )}
          </AnimatePresence>

          {/* PROFILE CONTENT */}
          <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">

            {/* USER CARD */}
            <motion.section
              initial={reduceMotion ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-fit overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-7 dark:border-white/5 dark:bg-[#0A1711]"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />

              <div className="relative flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-green-500/20 bg-gradient-to-br from-green-400 to-emerald-700 text-4xl font-black text-white shadow-xl shadow-green-500/20">
                    {profile.name.charAt(0).toUpperCase() || "S"}
                  </div>

                  <div className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-green-500 text-white dark:border-[#0A1711]">
                    <Camera size={16} />
                  </div>
                </div>

                <h3 className="mt-5 max-w-full break-words text-xl font-black text-gray-900 dark:text-white">
                  {profile.name}
                </h3>

                <p className="mt-1 max-w-full break-all text-sm text-gray-500 dark:text-gray-400">
                  {profile.email}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-500/10 bg-green-500/10 px-4 py-2 text-xs font-bold text-green-600 dark:text-green-400">
                  <ShieldCheck size={15} />
                  STUDENT ACCOUNT
                </span>
              </div>

              <div className="my-7 border-t border-gray-100 dark:border-white/5" />

              <div className="space-y-4">
                {profileStats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="flex items-center gap-3"
                    >
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}>
                        <Icon size={20} />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  );
                })}

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <CalendarDays size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                      2026
                    </p>

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Ro'yxatdan o'tgan yil
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* PROFILE FORM */}
            <motion.section
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-gray-200/70 bg-white p-6 dark:border-white/5 dark:bg-[#0A1711] md:p-8 xl:col-span-2"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-1 rounded-full bg-green-500" />

                    <h3 className="text-xl font-black text-gray-900 dark:text-white">
                      Shaxsiy ma'lumotlar
                    </h3>
                  </div>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Profilingiz haqidagi ma'lumotlarni boshqaring
                  </p>
                </div>

                {!isEditing && (
                  <button
                    onClick={handleEdit}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-bold text-[#041009] shadow-lg shadow-green-500/10 transition hover:-translate-y-1 hover:bg-green-400"
                  >
                    <Edit3 size={17} />
                    Profilni tahrirlash
                  </button>
                )}
              </div>

              <form onSubmit={handleSave} className="mt-8 space-y-6">

                {/* NAME */}
                <div>
                  <label className={labelClass}>
                    To'liq ism
                  </label>

                  <div className="relative">
                    <UserRound
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                      minLength={2}
                      maxLength={60}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className={labelClass}>
                    Email manzil
                  </label>

                  <div className="relative">
                    <Mail
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label className={labelClass}>
                    Telefon raqam
                  </label>

                  <div className="relative">
                    <Phone
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* LOCATION */}
                <div>
                  <label className={labelClass}>
                    Manzil
                  </label>

                  <div className="relative">
                    <MapPin
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* BIO */}
                <div>
                  <label className={labelClass}>
                    O'zim haqimda
                  </label>

                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    disabled={!isEditing}
                    rows={4}
                    maxLength={300}
                    placeholder="O'zingiz haqingizda qisqacha yozing..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 disabled:cursor-not-allowed disabled:text-gray-500 dark:border-white/10 dark:bg-[#101D16] dark:text-gray-100 dark:disabled:text-gray-400"
                  />

                  {isEditing && (
                    <p className="mt-2 text-right text-xs text-gray-400">
                      {formData.bio.length}/300
                    </p>
                  )}
                </div>

                {/* ACTIONS */}
                {isEditing && (
                  <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 dark:border-white/5 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
                    >
                      <X size={17} />
                      Bekor qilish
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-bold text-[#041009] shadow-lg shadow-green-500/10 transition hover:bg-green-400"
                    >
                      <Save size={17} />
                      Saqlash
                    </button>
                  </div>
                )}
              </form>
            </motion.section>
          </div>

          {/* FOOTER */}
          <footer className="flex flex-col items-center justify-between gap-3 border-t border-gray-200 py-6 text-xs text-gray-400 dark:border-white/5 dark:text-gray-600 sm:flex-row">
            <p>© 2026 TRONIT. Barcha huquqlar himoyalangan.</p>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Learning system online
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default StudentProfile;
