import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  BookOpen,
  Clock,
  Trophy,
  TrendingUp,
  Play,
  ArrowRight,
  CalendarDays,
  Flame,
  Target,
} from "lucide-react";

import StudentSidebar from "./StudentSidebar";

function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    {
      title: "Mening kurslarim",
      value: "4",
      description: "Faol kurslar",
      icon: BookOpen,
      color: "bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400",
    },
    {
      title: "Tugatilgan darslar",
      value: "28",
      description: "Jami ko'rilgan",
      icon: Trophy,
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
    },
    {
      title: "O'rganish vaqti",
      value: "36 soat",
      description: "Umumiy vaqt",
      icon: Clock,
      color: "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
    },
    {
      title: "Umumiy progress",
      value: "67%",
      description: "O'qish natijasi",
      icon: TrendingUp,
      color: "bg-orange-50 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400",
    },
  ];

  const courses = [
    {
      id: 2,
      title: "JavaScript",
      author: "Farkhod Dadajanov",
      completed: 18,
      total: 27,
      progress: 67,
      color: "bg-yellow-400",
      category: "Frontend Development",
    },
    {
      id: 3,
      title: "Node.js",
      author: "Muallif ko'rsatilmagan",
      completed: 12,
      total: 26,
      progress: 46,
      color: "bg-green-500",
      category: "Backend Development",
    },
    {
      id: 4,
      title: "Python",
      author: "Muallif ko'rsatilmagan",
      completed: 20,
      total: 23,
      progress: 87,
      color: "bg-blue-500",
      category: "Programming",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 transition-colors duration-300 dark:bg-gray-950">
      <StudentSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Asosiy kontent */}
      <main className="min-h-screen w-full min-w-0 lg:ml-72 lg:w-[calc(100%-18rem)]">

        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-100 bg-white px-5 transition-colors duration-300 md:px-8 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
              aria-label="Menyuni ochish"
            >
              <Menu size={23} />
            </button>

            <div>
              <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
                Dashboard
              </h1>
              <p className="mt-1 text-xs text-gray-500 md:text-sm dark:text-gray-400">
                O'qish jarayoningiz haqida umumiy ma'lumot
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Student User
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                O'quvchi
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 font-bold text-green-700 dark:bg-green-950 dark:text-green-400">
              S
            </div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-7xl p-5 md:p-8">

          {/* Welcome */}
          <section className="relative overflow-hidden rounded-3xl bg-green-500 p-7 text-white md:p-10">
            <div className="relative z-10 max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm">
                <Flame size={16} />
                O'rganishni davom ettiring
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                Salom, Student! 👋
              </h2>

              <p className="mt-4 leading-7 text-green-50">
                Bugun yangi bilimlar egallash uchun ajoyib kun.
                Maqsadlaringiz sari har kuni bir qadam tashlang.
              </p>

              <Link
                to="/student/courses"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-green-600 transition hover:bg-green-50"
              >
                Kurslarimni ko'rish
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="absolute -right-12 -bottom-24 hidden h-80 w-80 rounded-full border-[35px] border-white/10 md:block" />

            <div className="absolute -top-20 right-20 hidden h-52 w-52 rounded-full bg-white/10 md:block" />
          </section>

          {/* Statistics */}
          <section className="mt-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.title}
                    className="rounded-2xl border border-gray-100 bg-white p-6 transition duration-300 hover:shadow-lg hover:shadow-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-black/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}>
                        <Icon size={23} />
                      </div>

                      <TrendingUp
                        size={18}
                        className="text-green-500"
                      />
                    </div>

                    <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {stat.title}
                    </p>

                    <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Courses */}
          <section className="mt-10">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  O'rganishni davom ettiring
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Oxirgi ishlagan kurslaringiz
                </p>
              </div>

              <Link
                to="/student/courses"
                className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
              >
                Barchasi
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="rounded-2xl border border-gray-100 bg-white p-6 transition duration-300 hover:shadow-lg hover:shadow-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-black/20"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-600 dark:bg-green-950/40 dark:text-green-400">
                      {course.category}
                    </span>

                    <BookOpen size={20} className="text-gray-400 dark:text-gray-500" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {course.author}
                  </p>

                  <div className="mb-3 mt-7 flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      O'zlashtirish
                    </span>

                    <span className="text-sm font-bold text-green-600 dark:text-green-400">
                      {course.progress}%
                    </span>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <div
                      className={`h-full rounded-full ${course.color}`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {course.completed}/{course.total} dars
                    </span>

                    <Link
                      to={`/courses/${course.id}`}
                      className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                    >
                      <Play size={16} />
                      Davom ettirish
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom section */}
          <section className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">

            {/* Weekly goal */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500 dark:bg-orange-950/40 dark:text-orange-400">
                  <Target size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Haftalik maqsad
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Bu haftadagi o'qish rejangiz
                  </p>
                </div>
              </div>

              <div className="mt-7 flex items-end justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    6 / 10
                  </h2>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Dars bajarildi
                  </p>
                </div>

                <span className="font-bold text-green-600 dark:text-green-400">
                  60%
                </span>
              </div>

              <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                <div className="h-full w-3/5 rounded-full bg-green-500" />
              </div>
            </div>

            {/* Recommendation */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                  <CalendarDays size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    O'qish tavsiyasi
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Bugungi kichik vazifa
                  </p>
                </div>
              </div>

              <h4 className="mt-6 font-semibold text-gray-800 dark:text-gray-200">
                JavaScript bilimlaringizni mustahkamlang
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Bugun kamida bitta darsni ko'ring va o'rgangan
                mavzuingiz bo'yicha amaliy kod yozing.
              </p>

              <Link
                to="/courses/2"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
              >
                Darsga o'tish
                <ArrowRight size={17} />
              </Link>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
