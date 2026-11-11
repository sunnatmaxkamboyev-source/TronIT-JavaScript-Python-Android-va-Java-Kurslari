import { useState } from "react";
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
} from "lucide-react";

import StudentSidebar from "./StudentSidebar";

function StudentProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Student User",
    email: "student@example.com",
    phone: "+998 90 123 45 67",
    location: "Toshkent, O'zbekiston",
    bio: "Men dasturlash va zamonaviy texnologiyalarni o'rganishga qiziqaman.",
  });

  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 disabled:cursor-not-allowed disabled:text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:disabled:text-gray-400";

  const labelClass =
    "mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300";

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-950">
      <StudentSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className="min-h-screen w-full min-w-0 lg:ml-72 lg:w-[calc(100%-18rem)]">

        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-100 bg-white px-5 dark:border-gray-800 dark:bg-gray-900 md:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
              aria-label="Menyuni ochish"
            >
              <Menu size={23} />
            </button>

            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
                Profilim
              </h1>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 md:text-sm">
                Shaxsiy ma'lumotlaringizni boshqaring
              </p>
            </div>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 font-bold text-green-700 dark:bg-green-900/40 dark:text-green-400">
            {profile.name.charAt(0).toUpperCase()}
          </div>
        </header>

        <div className="mx-auto w-full max-w-7xl p-5 md:p-8">

          {/* Profile banner */}
          <section className="relative overflow-hidden rounded-3xl bg-green-500 p-7 text-white md:p-10">
            <div className="relative z-10">
              <p className="text-sm font-semibold text-green-100">
                TRONIT STUDENT ACCOUNT
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Shaxsiy profilingiz
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-green-50">
                Ma'lumotlaringizni yangilang va o'quv profilingizni
                boshqaring.
              </p>
            </div>

            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[35px] border-white/10" />
          </section>

          {/* Profile content */}
          <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">

            {/* User card */}
            <section className="h-fit rounded-2xl border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-green-100 text-4xl font-bold text-green-600 dark:bg-green-900/40 dark:text-green-400">
                    {profile.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-green-500 text-white dark:border-gray-900">
                    <Camera size={16} />
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                  {profile.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  TronIT o'quvchisi
                </p>

                <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <ShieldCheck size={15} />
                  Student account
                </span>
              </div>

              <div className="my-7 border-t border-gray-100 dark:border-gray-800" />

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    <BookOpen size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      4 ta kurs
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Faol kurslar
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <CalendarDays size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      2026
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Ro'yxatdan o'tgan yil
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Profile form */}
            <section className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 md:p-8 xl:col-span-2">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Shaxsiy ma'lumotlar
                  </h3>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Profilingiz haqidagi ma'lumotlar
                  </p>
                </div>

                {!isEditing && (
                  <button
                    onClick={handleEdit}
                    className="rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    Profilni tahrirlash
                  </button>
                )}
              </div>

              <form onSubmit={handleSave} className="mt-8 space-y-6">

                {/* Name */}
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
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
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

                {/* Phone */}
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

                {/* Location */}
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

                {/* Bio */}
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
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-900 outline-none transition focus:border-green-500 disabled:cursor-not-allowed disabled:text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:disabled:text-gray-400"
                  />
                </div>

                {/* Actions */}
                {isEditing && (
                  <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 dark:border-gray-800 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                      Bekor qilish
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                    >
                      <Save size={17} />
                      Saqlash
                    </button>
                  </div>
                )}
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentProfile;
