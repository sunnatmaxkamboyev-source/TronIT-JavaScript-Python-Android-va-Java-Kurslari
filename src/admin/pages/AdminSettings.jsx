import { useEffect, useState } from "react";
import {
  Settings,
  Globe,
  Mail,
  Phone,
  FileText,
  Save,
  Bell,
  UserPlus,
  Wrench,
  ShieldCheck,
  RotateCcw,
  CheckCircle,
} from "lucide-react";

const defaultSettings = {
  platformName: "TronIT",
  email: "info@tronit.uz",
  phone: "+998 90 123 45 67",
  description: "Zamonaviy IT ta'lim platformasi.",
  allowRegistration: true,
  emailNotifications: true,
  maintenanceMode: false,
};

function AdminSettings() {
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem("tronit-admin-settings");
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(false);
  }, [settings]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "tronit-admin-settings",
      JSON.stringify(settings)
    );

    setSaved(true);
  };

  const handleReset = () => {
    setSettings(defaultSettings);
    localStorage.removeItem("tronit-admin-settings");
    setSaved(false);
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-green-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white";

  const toggleItems = [
    {
      name: "allowRegistration",
      title: "Ro‘yxatdan o‘tish",
      description: "Yangi foydalanuvchilarga akkaunt ochishga ruxsat berish.",
      icon: UserPlus,
    },
    {
      name: "emailNotifications",
      title: "Email bildirishnomalari",
      description: "Platformadagi muhim hodisalar haqida xabar berish.",
      icon: Bell,
    },
    {
      name: "maintenanceMode",
      title: "Texnik xizmat rejimi",
      description: "Platformani vaqtincha texnik xizmat rejimiga o‘tkazish.",
      icon: Wrench,
    },
  ];

  return (
    <div className="space-y-7">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Platforma sozlamalari
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          TronIT platformasining asosiy parametrlarini boshqaring.
        </p>
      </div>

      {/* General settings */}
      <form onSubmit={handleSave} className="space-y-7">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-green-100 p-3 text-green-600 dark:bg-green-500/10">
              <Globe size={22} />
            </div>

            <div>
              <h2 className="font-bold text-gray-900 dark:text-white">
                Umumiy ma'lumotlar
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Platforma haqida asosiy ma'lumotlar
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Platforma nomi
              </label>
              <div className="relative">
                <Settings className="absolute left-3 top-3.5 text-gray-400" size={18} />
                <input
                  name="platformName"
                  value={settings.platformName}
                  onChange={handleChange}
                  className={`${inputClass} pl-10`}
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Elektron pochta
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className={`${inputClass} pl-10`}
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Telefon raqam
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
                <input
                  name="phone"
                  value={settings.phone}
                  onChange={handleChange}
                  className={`${inputClass} pl-10`}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Platforma tavsifi
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3.5 text-gray-400" size={18} />
                <input
                  name="description"
                  value={settings.description}
                  onChange={handleChange}
                  className={`${inputClass} pl-10`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Platform controls */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6">
            <h2 className="font-bold text-gray-900 dark:text-white">
              Platforma boshqaruvi
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Platformaning ishlash parametrlarini sozlang.
            </p>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {toggleItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-gray-100 p-3 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      name={item.name}
                      checked={settings[item.name]}
                      onChange={handleChange}
                      className="peer sr-only"
                    />
                    <span className="h-6 w-11 rounded-full bg-gray-300 transition peer-checked:bg-green-500 peer-focus:ring-4 peer-focus:ring-green-100 dark:bg-gray-700 dark:peer-focus:ring-green-900">
                      <span className="block h-5 w-5 translate-x-0.5 translate-y-0.5 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
                    </span>
                  </label>
                </div>
              );
            })}
          </div>

          {settings.maintenanceMode && (
            <div className="mt-6 flex gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm text-orange-700 dark:border-orange-900 dark:bg-orange-500/10 dark:text-orange-300">
              <Wrench size={20} className="shrink-0" />
              Texnik xizmat rejimi yoqilgan. Hozircha bu faqat saqlanadigan sozlama, backendda haqiqiy cheklov hali qo‘shilmagan.
            </div>
          )}
        </section>

        {/* Security information */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/10">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h2 className="font-bold text-gray-900 dark:text-white">
                Xavfsizlik
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Admin paroli va ruxsatlarni boshqarish backend autentifikatsiyasi orqali amalga oshiriladi.
              </p>
              <span className="mt-3 inline-block rounded-lg bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400">
                Backend integratsiyasi kerak
              </span>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <RotateCcw size={17} />
            Standart holatga qaytarish
          </button>

          <div className="flex items-center gap-4">
            {saved && (
              <span className="flex items-center gap-2 text-sm font-medium text-green-600">
                <CheckCircle size={18} />
                Saqlandi
              </span>
            )}

            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-green-600"
            >
              <Save size={18} />
              Saqlash
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdminSettings;
