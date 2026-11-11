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
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Tugatilgan darslar",
      value: "28",
      description: "Jami ko'rilgan",
      icon: Trophy,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "O'rganish vaqti",
      value: "36 soat",
      description: "Umumiy vaqt",
      icon: Clock,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Umumiy progress",
      value: "67%",
      description: "O'qish natijasi",
      icon: TrendingUp,
      color: "bg-orange-50 text-orange-600",
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
    <div className="min-h-screen bg-gray-50 flex">
      <StudentSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className="flex-1 min-w-0">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-100 px-5 md:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu size={23} />
            </button>

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Dashboard
              </h1>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                O'qish jarayoningiz haqida umumiy ma'lumot
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">
                Student User
              </p>
              <p className="text-xs text-gray-500">
                O'quvchi
              </p>
            </div>

            <div className="w-11 h-11 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold">
              S
            </div>
          </div>
        </header>

        <div className="p-5 md:p-8 max-w-7xl mx-auto">

          {/* Welcome */}
          <section className="bg-green-500 rounded-3xl p-7 md:p-10 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm">
                <Flame size={16} />
                O'rganishni davom ettiring
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-6 leading-tight">
                Salom, Student! 👋
              </h2>

              <p className="text-green-50 mt-4 leading-7">
                Bugun yangi bilimlar egallash uchun ajoyib kun.
                Maqsadlaringiz sari har kuni bir qadam tashlang.
              </p>

              <Link
                to="/student/courses"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold mt-7 hover:bg-green-50 transition"
              >
                Kurslarimni ko'rish
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="absolute -right-12 -bottom-24 w-80 h-80 rounded-full border-[35px] border-white/10 hidden md:block" />
            <div className="absolute right-20 -top-20 w-52 h-52 rounded-full bg-white/10 hidden md:block" />
          </section>

          {/* Statistics */}
          <section className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.title}
                    className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:shadow-gray-100 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                        <Icon size={23} />
                      </div>

                      <TrendingUp size={18} className="text-green-500" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mt-5">
                      {stat.value}
                    </h3>

                    <p className="text-sm font-medium text-gray-700 mt-1">
                      {stat.title}
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Courses */}
          <section className="mt-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  O'rganishni davom ettiring
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Oxirgi ishlagan kurslaringiz
                </p>
              </div>

              <Link
                to="/student/courses"
                className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-2"
              >
                Barchasi
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-gray-100 transition"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                      {course.category}
                    </span>

                    <BookOpen size={20} className="text-gray-400" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mt-5">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    {course.author}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <span className="text-sm text-gray-500">
                      O'zlashtirish
                    </span>

                    <span className="text-sm font-bold text-green-600">
                      {course.progress}%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${course.color}`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-gray-400">
                      {course.completed}/{course.total} dars
                    </span>

                    <Link
                      to={`/courses/${course.id}`}
                      className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700"
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
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">

            <div className="bg-white border border-gray-100 rounded-2xl p-7">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center">
                  <Target size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Haftalik maqsad
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Bu haftadagi o'qish rejangiz
                  </p>
                </div>
              </div>

              <div className="flex items-end justify-between mt-7">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    6 / 10
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Dars bajarildi
                  </p>
                </div>

                <span className="text-green-600 font-bold">
                  60%
                </span>
              </div>

              <div className="w-full h-3 bg-gray-100 rounded-full mt-4 overflow-hidden">
                <div className="w-3/5 h-full bg-green-500 rounded-full" />
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-7">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <CalendarDays size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    O'qish tavsiyasi
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Bugungi kichik vazifa
                  </p>
                </div>
              </div>

              <h4 className="font-semibold text-gray-800 mt-6">
                JavaScript bilimlaringizni mustahkamlang
              </h4>

              <p className="text-sm text-gray-500 leading-6 mt-2">
                Bugun kamida bitta darsni ko'ring va o'rgangan
                mavzuingiz bo'yicha amaliy kod yozing.
              </p>

              <Link
                to="/courses/2"
                className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm mt-5 hover:text-green-700"
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
