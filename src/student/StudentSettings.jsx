
import { useEffect, useState } from "react";
import {
  Menu,
  Settings,
  Bell,
  Moon,
  Sun,
  LockKeyhole,
  ShieldCheck,
  Eye,
  EyeOff,
  Save,
  Mail,
  Smartphone,
  Monitor,
  Check,
  Sparkles,
  X,
  CheckCircle2,
  AlertCircle,
  Palette,
  KeyRound,
  Zap,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import StudentSidebar from "./StudentSidebar";
import useThemeStore from "../store/themeStore";

const defaultNotifications = {
  email: true,
  courses: true,
  promotions: false,
};

const notificationItems = [
  {
    key: "email",
    title: "Email bildirishnomalari",
    description: "Email orqali muhim xabarlarni olish",
    icon: Mail,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    key: "courses",
    title: "Kurs yangiliklari",
    description: "Yangi darslar va kurs yangilanishlari",
    icon: Bell,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    key: "promotions",
    title: "Maxsus takliflar",
    description: "Aksiyalar va platforma yangiliklari",
    icon: Smartphone,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 dark:border-gray-700 dark:bg-[#101B16] dark:text-white dark:focus:border-green-400";

const labelClass =
  "mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300";

function StudentSettings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, setTheme } = useThemeStore();
  const reduceMotion = useReducedMotion();

  const [notifications, setNotifications] = useState(() => {
    try {
      const saved = localStorage.getItem("tronit-notifications");
      return saved
        ? { ...defaultNotifications, ...JSON.parse(saved) }
        : defaultNotifications;
    } catch {
      return defaultNotifications;
    }
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  useEffect(() => {
    if (!message) return;

    const timeout = setTimeout(() => setMessage(""), 4500);
    return () => clearTimeout(timeout);
  }, [message]);

  const showNotification = (text, type = "success") => {
    setMessage(text);
    setMessageType(type);
  };

  const handleNotification = (name) => {
    setNotifications((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;

    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (passwords.newPassword.length < 8) {
      showNotification(
        "Yangi parol kamida 8 ta belgidan iborat bo'lishi kerak.",
        "error"
      );
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      showNotification(
        "Yangi parollar bir-biriga mos kelmayapti.",
        "error"
      );
      return;
    }

    if (passwords.currentPassword === passwords.newPassword) {
      showNotification(
        "Yangi parol joriy paroldan farq qilishi kerak.",
        "error"
      );
      return;
    }

    showNotification(
      "Tekshiruv muvaffaqiyatli. Haqiqiy parolni yangilash uchun backend API kerak."
    );

    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleSaveNotifications = () => {
    try {
      localStorage.setItem(
        "tronit-notifications",
        JSON.stringify(notifications)
      );
      showNotification("Bildirishnoma sozlamalari saqlandi.");
    } catch {
      showNotification(
        "Sozlamalarni saqlashda xatolik yuz berdi.",
        "error"
      );
    }
  };

  const pageVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.45 },
    },
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F4F7F5] text-gray-900 transition-colors duration-300 dark:bg-[#050D0A] dark:text-white">
      <StudentSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className="min-h-screen w-full min-w-0 lg:ml-72 lg:w-[calc(100%-18rem)]">

        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200/70 bg-white/85 px-5 backdrop-blur-xl dark:border-white/5 dark:bg-[#09130F]/85 md:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl p-2 transition hover:bg-gray-100 dark:hover:bg-white/5 lg:hidden"
              aria-label="Menyuni ochish"
            >
              <Menu size={23} />
            </button>

            <div>
              <h1 className="text-xl font-black tracking-tight md:text-2xl">
                Sozlamalar
              </h1>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 md:text-sm">
                Akkauntingizni o'zingizga moslashtiring
              </p>
            </div>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400">
            <Settings size={21} />
          </div>
        </header>

        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-7xl space-y-7 p-5 md:p-8"
        >

          {/* Hero */}
          <motion.section
            variants={cardVariants}
            className="relative isolate overflow-hidden rounded-[2rem] border border-green-400/20 bg-[#071A12] p-7 text-white shadow-2xl shadow-green-950/10 md:p-10"
          >
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(34,197,94,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,.2) 1px, transparent 1px)",
                backgroundSize: "35px 35px",
              }}
            />

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : { x: [0, 30, 0], y: [0, -20, 0] }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-20 -top-32 -z-10 h-80 w-80 rounded-full bg-green-500/20 blur-[100px]"
            />

            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-xs font-bold tracking-wider text-green-300">
                  <Sparkles size={14} />
                  PERSONAL CONTROL CENTER
                </div>

                <h2 className="text-3xl font-black leading-tight tracking-tight md:text-4xl">
                  Akkaunt
                  <span className="block bg-gradient-to-r from-green-300 to-emerald-500 bg-clip-text text-transparent">
                    sozlamalari
                  </span>
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-gray-400 md:text-base">
                  TronIT tajribangizni boshqaring. Xavfsizlik,
                  bildirishnomalar va interfeysni o'zingizga moslang.
                </p>
              </div>

              <div className="relative flex h-32 w-32 shrink-0 items-center justify-center self-center md:h-40 md:w-40">
                <motion.div
                  animate={reduceMotion ? {} : { rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-dashed border-green-400/40"
                />
                <div className="absolute inset-3 rounded-full border border-green-400/20" />
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-green-400/30 bg-green-400/10 text-green-300 shadow-[0_0_45px_rgba(34,197,94,0.18)] md:h-24 md:w-24">
                  <Settings size={42} />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Notifications */}
          <motion.section
            variants={cardVariants}
            className="rounded-3xl border border-gray-200/70 bg-white p-6 shadow-sm transition-colors dark:border-white/5 dark:bg-[#0B1711] md:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                  <Bell size={23} />
                </div>
                <div>
                  <h3 className="text-lg font-black">Bildirishnomalar</h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Sizga yuboriladigan xabarlarni boshqaring
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-bold text-green-600 dark:text-green-400">
                {Object.values(notifications).filter(Boolean).length} / 3 faol
              </span>
            </div>

            <div className="mt-8 space-y-5">
              {notificationItems.map((item) => {
                const Icon = item.icon;
                const active = notifications[item.key];

                return (
                  <div
                    key={item.key}
                    className="flex items-center justify-between gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0 dark:border-white/5"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-sm font-bold">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-label={item.title}
                      aria-checked={active}
                      onClick={() => handleNotification(item.key)}
                      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-300 ${
                        active
                          ? "bg-green-500"
                          : "bg-gray-300 dark:bg-gray-700"
                      }`}
                    >
                      <motion.span
                        animate={{ x: active ? 22 : 3 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                        className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-md"
                      />
                    </button>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleSaveNotifications}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-green-600 active:translate-y-0"
            >
              <Save size={17} />
              Sozlamalarni saqlash
            </button>
          </motion.section>

          {/* Appearance */}
          <motion.section
            variants={cardVariants}
            className="rounded-3xl border border-gray-200/70 bg-white p-6 shadow-sm transition-colors dark:border-white/5 dark:bg-[#0B1711] md:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500">
                <Palette size={23} />
              </div>
              <div>
                <h3 className="text-lg font-black">Tashqi ko'rinish</h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  O'zingizga yoqqan interfeysni tanlang
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {/* Light */}
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`group relative overflow-hidden rounded-2xl border-2 p-5 text-left transition-all duration-300 hover:-translate-y-1 ${
                  theme === "light"
                    ? "border-green-500 bg-green-50 shadow-lg shadow-green-500/10 dark:bg-green-500/5"
                    : "border-gray-200 bg-gray-50 hover:border-gray-300 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                    <Sun size={24} />
                  </div>
                  {theme === "light" && (
                    <CheckCircle2 size={22} className="text-green-500" />
                  )}
                </div>

                <h4 className="mt-5 font-black">Light mode</h4>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Yorug' va toza interfeys
                </p>

                <div className="mt-5 flex h-12 gap-1.5 overflow-hidden rounded-lg border border-gray-200 bg-white p-2 dark:border-white/10">
                  <div className="w-1/4 rounded bg-gray-200" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-2 w-2/3 rounded bg-green-400" />
                    <div className="h-2 w-full rounded bg-gray-200" />
                  </div>
                </div>

                {theme === "light" && (
                  <span className="mt-4 inline-block text-xs font-bold text-green-600">
                    Tanlangan
                  </span>
                )}
              </button>

              {/* Dark */}
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`group relative overflow-hidden rounded-2xl border-2 p-5 text-left transition-all duration-300 hover:-translate-y-1 ${
                  theme === "dark"
                    ? "border-green-500 bg-green-50 shadow-lg shadow-green-500/10 dark:bg-green-500/5"
                    : "border-gray-200 bg-gray-50 hover:border-gray-300 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
                    <Moon size={24} />
                  </div>
                  {theme === "dark" && (
                    <CheckCircle2 size={22} className="text-green-500" />
                  )}
                </div>

                <h4 className="mt-5 font-black">Dark mode</h4>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Ko'zga qulay qorong'i interfeys
                </p>

                <div className="mt-5 flex h-12 gap-1.5 overflow-hidden rounded-lg border border-gray-700 bg-[#07120D] p-2">
                  <div className="w-1/4 rounded bg-gray-700" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-2 w-2/3 rounded bg-green-400" />
                    <div className="h-2 w-full rounded bg-gray-700" />
                  </div>
                </div>

                {theme === "dark" && (
                  <span className="mt-4 inline-block text-xs font-bold text-green-600 dark:text-green-400">
                    Tanlangan
                  </span>
                )}
              </button>
            </div>

            <p className="mt-5 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
              <Check size={14} className="text-green-500" />
              Mavzu global theme store orqali boshqariladi.
            </p>
          </motion.section>

          {/* Password */}
          <motion.section
            variants={cardVariants}
            className="rounded-3xl border border-gray-200/70 bg-white p-6 shadow-sm transition-colors dark:border-white/5 dark:bg-[#0B1711] md:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                <ShieldCheck size={23} />
              </div>
              <div>
                <h3 className="text-lg font-black">Parol xavfsizligi</h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Akkauntingiz himoyasini boshqaring
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-green-500/10 bg-green-500/5 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                <LockKeyhole size={19} />
              </div>
              <div>
                <p className="text-sm font-bold">Xavfsiz parol yarating</p>
                <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  Kamida 8 ta belgidan foydalaning. Har bir akkaunt uchun
                  alohida parol tanlash ma'qul.
                </p>
              </div>
            </div>

            <form
              onSubmit={handlePasswordSubmit}
              className="mt-7 max-w-2xl space-y-5"
            >
              {/* Current password */}
              <div>
                <label className={labelClass}>Joriy parol</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="currentPassword"
                    value={passwords.currentPassword}
                    onChange={handlePasswordChange}
                    required
                    autoComplete="current-password"
                    placeholder="Joriy parolingiz"
                    className={inputClass}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-green-500"
                    aria-label="Joriy parolni ko'rsatish"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {/* New password */}
              <div>
                <label className={labelClass}>Yangi parol</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    name="newPassword"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                    required
                    minLength={8}
                    autoComplete="new-password"
                    placeholder="Yangi parol"
                    className={inputClass}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-green-500"
                    aria-label="Yangi parolni ko'rsatish"
                  >
                    {showNewPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                    <motion.div
                      initial={false}
                      animate={{
                        width:
                          passwords.newPassword.length >= 12
                            ? "100%"
                            : passwords.newPassword.length >= 8
                              ? "65%"
                              : passwords.newPassword.length > 0
                                ? "30%"
                                : "0%",
                      }}
                      className="h-full rounded-full bg-green-500"
                    />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-400">
                    {passwords.newPassword.length >= 12
                      ? "Uzun"
                      : passwords.newPassword.length >= 8
                        ? "Yaxshi"
                        : passwords.newPassword.length > 0
                          ? "Qisqa"
                          : "Parol kuchi"}
                  </span>
                </div>
              </div>

              {/* Confirm password */}
              <div>
                <label className={labelClass}>
                  Yangi parolni tasdiqlang
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
                  required
                  minLength={8}
                  autoComplete="new-password"
                  placeholder="Yangi parolni qayta kiriting"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 dark:border-gray-700 dark:bg-[#101B16] dark:text-white"
                />

                {passwords.confirmPassword && (
                  <p className={`mt-2 flex items-center gap-1.5 text-xs ${
                    passwords.newPassword === passwords.confirmPassword
                      ? "text-green-500"
                      : "text-red-500"
                  }`}>
                    {passwords.newPassword === passwords.confirmPassword
                      ? <Check size={14} />
                      : <X size={14} />}
                    {passwords.newPassword === passwords.confirmPassword
                      ? "Parollar mos"
                      : "Parollar mos emas"}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-green-600 active:translate-y-0"
              >
                <KeyRound size={17} />
                Parolni yangilash
              </button>
            </form>
          </motion.section>

          {/* Footer */}
          <motion.div
            variants={cardVariants}
            className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200/70 py-5 text-xs text-gray-400 dark:border-white/5"
          >
            <p>© 2026 TRONIT. Barcha huquqlar himoyalangan.</p>
            <p className="flex items-center gap-1.5">
              <Zap size={13} className="text-green-500" />
              Built for the next generation
            </p>
          </motion.div>
        </motion.div>
      </main>

      {/* Toast notification */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-5 right-5 z-[100] flex max-w-[calc(100%-2.5rem)] items-start gap-3 rounded-2xl border p-4 shadow-2xl backdrop-blur-xl sm:max-w-md ${
              messageType === "error"
                ? "border-red-500/20 bg-white text-red-600 dark:bg-[#111A15] dark:text-red-400"
                : "border-green-500/20 bg-white text-green-600 dark:bg-[#111A15] dark:text-green-400"
            }`}
          >
            {messageType === "error"
              ? <AlertCircle size={21} className="mt-0.5 shrink-0" />
              : <CheckCircle2 size={21} className="mt-0.5 shrink-0" />}

            <p className="flex-1 text-sm font-semibold leading-6 text-gray-800 dark:text-gray-200">
              {message}
            </p>

            <button
              onClick={() => setMessage("")}
              className="text-gray-400 transition hover:text-gray-700 dark:hover:text-white"
              aria-label="Xabarni yopish"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default StudentSettings;
