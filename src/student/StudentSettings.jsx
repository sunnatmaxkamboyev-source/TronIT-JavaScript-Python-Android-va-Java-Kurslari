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
} from "lucide-react";

import StudentSidebar from "./StudentSidebar";

function StudentSettings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [notifications, setNotifications] = useState({
    email: true,
    courses: true,
    promotions: false,
  });

  const [theme, setTheme] = useState("light");

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

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
      setMessage("Yangi parol kamida 8 ta belgidan iborat bo'lishi kerak.");
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      setMessage("Yangi parollar bir-biriga mos kelmayapti.");
      return;
    }

    setMessage(
      "Frontend tekshiruvi muvaffaqiyatli. Parolni haqiqiy yangilash backend ulangandan keyin ishlaydi."
    );

    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleSaveNotifications = () => {
    setMessage("Bildirishnoma sozlamalari hozircha frontendda saqlandi.");
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <StudentSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className="min-h-screen w-full min-w-0 lg:ml-72 lg:w-[calc(100%-18rem)]">

        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-100 bg-white px-5 md:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
              aria-label="Menyuni ochish"
            >
              <Menu size={23} />
            </button>

            <div>
              <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
                Sozlamalar
              </h1>
              <p className="mt-1 text-xs text-gray-500 md:text-sm">
                Akkauntingiz va platforma sozlamalari
              </p>
            </div>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-700">
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
          <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Bell size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Bildirishnomalar
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Qaysi xabarlarni olishni tanlang
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-6">
              {[
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
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.key}
                    className="flex items-center justify-between gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-500">
                        <Icon size={19} />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs text-gray-500">
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
                          : "bg-gray-300"
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
          <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <Monitor size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Tashqi ko'rinish
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Platforma mavzusini tanlang
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button
                onClick={() => setTheme("light")}
                className={`rounded-2xl border-2 p-5 text-left transition ${
                  theme === "light"
                    ? "border-green-500 bg-green-50"
                    : "border-gray-100 hover:border-gray-300"
                }`}
              >
                <Sun size={25} className="text-orange-500" />

                <h4 className="mt-4 font-bold text-gray-900">
                  Light mode
                </h4>

                <p className="mt-1 text-xs text-gray-500">
                  Yorug' interfeys
                </p>

                {theme === "light" && (
                  <span className="mt-3 inline-block text-xs font-semibold text-green-600">
                    Tanlangan
                  </span>
                )}
              </button>

              <button
                onClick={() => setTheme("dark")}
                className={`rounded-2xl border-2 p-5 text-left transition ${
                  theme === "dark"
                    ? "border-green-500 bg-green-50"
                    : "border-gray-100 hover:border-gray-300"
                }`}
              >
                <Moon size={25} className="text-purple-600" />

                <h4 className="mt-4 font-bold text-gray-900">
                  Dark mode
                </h4>

                <p className="mt-1 text-xs text-gray-500">
                  Qorong'i interfeys
                </p>

                {theme === "dark" && (
                  <span className="mt-3 inline-block text-xs font-semibold text-green-600">
                    Tanlangan
                  </span>
                )}
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Mavzu tanlovi hozircha demo holatda. Butun saytga qo'llash keyingi bosqichda amalga oshiriladi.
            </p>
          </section>

          {/* Password */}
          <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <LockKeyhole size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Parol xavfsizligi
                </h3>
                <p className="mt-1 text-sm text-gray-500">
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
                <label className="mb-2 block text-sm font-semibold text-gray-700">
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
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-sm outline-none focus:border-green-500"
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
                <label className="mb-2 block text-sm font-semibold text-gray-700">
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
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-sm outline-none focus:border-green-500"
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
                <label className="mb-2 block text-sm font-semibold text-gray-700">
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
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-green-500"
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
            <div className="rounded-xl border border-green-100 bg-green-50 p-4 text-sm text-green-700">
              {message}
              <button
                onClick={() => setMessage("")}
                className="ml-3 font-bold underline"
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
