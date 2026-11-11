import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  Save,
  Camera,
  Lock,
} from "lucide-react";

function AdminProfile() {
  const [profile, setProfile] = useState({
    firstName: "Admin",
    lastName: "TronIT",
    email: "admin@tronit.uz",
    phone: "+998 90 123 45 67",
    about: "TronIT platformasi administratori.",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("tronit-admin-profile", JSON.stringify(profile));
    setSaved(true);
  };

  return (
    <div className="space-y-7 text-gray-900 dark:text-white">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Admin profili</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Shaxsiy ma'lumotlaringizni boshqaring.
        </p>
      </div>

      {/* Profile card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700 dark:bg-green-500/10 dark:text-green-400">
              {profile.firstName.charAt(0).toUpperCase()}
            </div>

            <div className="absolute bottom-0 right-0 rounded-full bg-green-500 p-2 text-white">
              <Camera size={15} />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold">
              {profile.firstName} {profile.lastName}
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {profile.email}
            </p>

            <span className="mt-3 inline-flex items-center gap-1 rounded-lg bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600 dark:bg-green-500/10 dark:text-green-400">
              <ShieldCheck size={14} />
              Administrator
            </span>
          </div>
        </div>
      </div>

      {/* Personal information */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
      >
        <div className="mb-6">
          <h2 className="text-lg font-bold">Shaxsiy ma'lumotlar</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Profilingiz haqidagi ma'lumotlarni tahrirlang.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* First name */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Ism
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 dark:border-gray-700 dark:bg-gray-800">
              <User size={18} className="text-gray-400" />
              <input
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
                required
                className="w-full bg-transparent py-3 outline-none"
                placeholder="Ismingiz"
              />
            </div>
          </div>

          {/* Last name */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Familiya
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 dark:border-gray-700 dark:bg-gray-800">
              <User size={18} className="text-gray-400" />
              <input
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
                required
                className="w-full bg-transparent py-3 outline-none"
                placeholder="Familiyangiz"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 dark:border-gray-700 dark:bg-gray-800">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent py-3 outline-none"
                placeholder="email@example.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Telefon
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 dark:border-gray-700 dark:bg-gray-800">
              <Phone size={18} className="text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full bg-transparent py-3 outline-none"
                placeholder="+998 90 000 00 00"
              />
            </div>
          </div>

          {/* About */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">
              O'zim haqimda
            </label>

            <textarea
              name="about"
              value={profile.about}
              onChange={handleChange}
              rows={4}
              className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-green-500 dark:border-gray-700 dark:bg-gray-800"
              placeholder="O'zingiz haqingizda..."
            />
          </div>
        </div>

        {/* Save */}
        <div className="mt-7 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">
          <p className="text-sm text-green-600 dark:text-green-400">
            {saved ? "Ma'lumotlar saqlandi!" : ""}
          </p>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
          >
            <Save size={18} />
            O'zgarishlarni saqlash
          </button>
        </div>
      </form>

      {/* Security card */}
      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-6 sm:flex-row sm:items-center dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500 dark:bg-blue-500/10">
            <Lock size={23} />
          </div>

          <div>
            <h3 className="font-bold">Xavfsizlik</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Parolni o'zgartirish va hisob xavfsizligi.
            </p>
          </div>
        </div>

        <button
          type="button"
          disabled
          className="cursor-not-allowed rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-400 dark:border-gray-700"
        >
          Tez orada
        </button>
      </div>
    </div>
  );
}

export default AdminProfile;
