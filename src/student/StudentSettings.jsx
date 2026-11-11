import { useState } from "react";

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
} from "lucide-react";

import StudentSidebar from "./StudentSidebar";
import useThemeStore from "../store/themeStore";

function StudentSettings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Global theme store
  const { theme, setTheme } = useThemeStore();

  // Notifications
  const [notifications, setNotifications] = useState({
    email: true,
    courses: true,
    promotions: false,
  });

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // Password fields
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  // Notification toggle
  const handleNotification = (name) => {
    setNotifications((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Password input
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;

    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Show message
  const showNotification = (text, type = "success") => {
    setMessage(text);
    setMessageType(type);
  };

  // Password validation
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

    showNotification(
      "Tekshiruv muvaffaqiyatli. Haqiqiy parolni yangilash uchun backend kerak."
    );

    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  // Save notifications
  const handleSaveNotifications = () => {
    localStorage.setItem(
      "tronit-notifications",
      JSON.stringify(notifications)
    );

    showNotification("Bildirishnoma sozlamalari saqlandi.");
  };

  const notificationItems = [
    {
      key: "email",
      title: "Email bildirishnomalari",
      description: "Email orqali muhim xabarlarni olish",
      icon: Mail,
    },
    {
      key: "courses",
      title: "Kurs yangiliklari",
      description: "Yangi darslar va kurs yangilanishlari",
      icon: Bell,
    },
    {
      key: "promotions",
      title: "Maxsus takliflar",
      description: "Aksiyalar va platforma yangiliklari",
      icon: Smartphone,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <StudentSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className="min-h-screen w-full min-w-0 lg:ml-72 lg:w-[calc(100%-18rem)]">

        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-100 bg-white px-5 transition-colors dark:border-gray-800 dark:bg-gray-900 md:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
              aria-label="Menyuni ochish"
            >
              <Menu size={23} />
            </button>

            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
                Sozlamalar
              </h1>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 md:text-sm">
                Akkauntingiz va platforma sozlamalari
              </p>
            </div>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400">
            <Settings size={21} />
          </div>
        </header>

        <div className="mx-auto w-full max-w-7xl space-y-7 p-5 md:p-8">

          {/* Intro */}
          <section className="rounded-3xl bg-green-500 p-7 text-white md:p-9">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <Settings size={25} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Akkaunt sozlamalari
                </h2>

                <p className="mt-1 text-sm text-green-50">
                  TronIT tajribangizni o'zingizga moslashtiring.
                </p>
              </div>
            </div>
          </section>

          {/* Notifications */}
          <section className="rounded-2xl border border-gray-100 bg-white p-6 transition-colors dark:border-gray-800 dark:bg-gray-900 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Bell size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Bildirishnomalar
                </h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Qaysi xabarlarni olishni tanlang
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-6">
              {notificationItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.key}
                    className="flex items-center justify-between gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0 dark:border-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                        <Icon size={19} />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
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
                      aria-checked={notifications[item.key]}
                      onClick={() => handleNotification(item.key)}
                      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                        notifications[item.key]
                          ? "bg-green-500"
                          : "bg-gray-300 dark:bg-gray-700"
                      }`}
                    >
                      <span
                        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                          notifications[item.key]
                            ? "left-6"
                            : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleSaveNotifications}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              <Save size={17} />
              Sozlamalarni saqlash
            </button>
          </section>

          {/* Appearance */}
          <section className="rounded-2xl border border-gray-100 bg-white p-6 transition-colors dark:border-gray-800 dark:bg-gray-900 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
                <Monitor size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Tashqi ko'rinish
                </h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Platforma mavzusini tanlang
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* Light mode */}
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`rounded-2xl border-2 p-5 text-left transition ${
                  theme === "light"
                    ? "border-green-500 bg-green-50 dark:bg-green-500/10"
                    : "border-gray-100 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-600"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Sun size={25} className="text-orange-500" />

                  {theme === "light" && (
                    <Check size={21} className="text-green-600" />
                  )}
                </div>

                <h4 className="mt-4 font-bold text-gray-900 dark:text-white">
                  Light mode
                </h4>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Yorug' interfeys
                </p>

                {theme === "light" && (
                  <span className="mt-3 inline-block text-xs font-semibold text-green-600 dark:text-green-400">
                    Tanlangan
                  </span>
                )}
              </button>

              {/* Dark mode */}
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`rounded-2xl border-2 p-5 text-left transition ${
                  theme === "dark"
                    ? "border-green-500 bg-green-50 dark:bg-green-500/10"
                    : "border-gray-100 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-600"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Moon size={25} className="text-purple-600 dark:text-purple-400" />

                  {theme === "dark" && (
                    <Check size={21} className="text-green-600" />
                  )}
                </div>

                <h4 className="mt-4 font-bold text-gray-900 dark:text-white">
                  Dark mode
                </h4>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Qorong'i interfeys
                </p>

                {theme === "dark" && (
                  <span className="mt-3 inline-block text-xs font-semibold text-green-600 dark:text-green-400">
                    Tanlangan
                  </span>
                )}
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
              Tanlangan mavzu Navbar bilan birgalikda ishlaydi va brauzerda saqlanadi.
            </p>
          </section>

          {/* Password */}
          <section className="rounded-2xl border border-gray-100 bg-white p-6 transition-colors dark:border-gray-800 dark:bg-gray-900 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                <LockKeyhole size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Parol xavfsizligi
                </h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Akkauntingiz parolini boshqarish
                </p>
              </div>
            </div>

            <form
              onSubmit={handlePasswordSubmit}
              className="mt-7 space-y-5"
            >
              {/* Current password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Joriy parol
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="currentPassword"
                    value={passwords.currentPassword}
                    onChange={handlePasswordChange}
                    required
                    placeholder="Joriy parolingiz"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
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

              {/* New password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Yangi parol
                </label>

                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    name="newPassword"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                    required
                    minLength={8}
                    placeholder="Yangi parol"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />

                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    aria-label="Yangi parolni ko'rsatish"
                  >
                    {showNewPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Yangi parolni tasdiqlang
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
                  required
                  minLength={8}
                  placeholder="Yangi parolni qayta kiriting"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                <ShieldCheck size={17} />
                Parolni yangilash
              </button>
            </form>
          </section>

          {/* Message */}
          {message && (
            <div
              className={`flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4 text-sm ${
                messageType === "error"
                  ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
                  : "border-green-100 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300"
              }`}
            >
              <span>{message}</span>

              <button
                onClick={() => setMessage("")}
                className="font-bold underline"
              >
                Yopish
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

export default StudentSettings;
