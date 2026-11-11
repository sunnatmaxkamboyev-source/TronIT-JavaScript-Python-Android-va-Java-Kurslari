
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  BookOpen,
  Play,
  Clock,
  Filter,
  ArrowRight,
  Menu,
} from "lucide-react";

import StudentSidebar from "./StudentSidebar";

function StudentCourses() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Barchasi");

  const courses = [
    {
      id: 2,
      title: "JavaScript",
      author: "Farkhod Dadajanov",
      category: "Frontend",
      total: 27,
      completed: 18,
      progress: 67,
      color: "bg-yellow-400",
      status: "Davom etmoqda",
    },
    {
      id: 3,
      title: "Node.js",
      author: "Muallif ko'rsatilmagan",
      category: "Backend",
      total: 26,
      completed: 12,
      progress: 46,
      color: "bg-green-500",
      status: "Davom etmoqda",
    },
    {
      id: 4,
      title: "Python",
      author: "Muallif ko'rsatilmagan",
      category: "Programming",
      total: 23,
      completed: 23,
      progress: 100,
      color: "bg-blue-500",
      status: "Tugatilgan",
    },
    {
      id: 1,
      title: "Kiberxavfsizlik",
      author: "Saud Abdulwahed",
      category: "Cybersecurity",
      total: 28,
      completed: 8,
      progress: 29,
      color: "bg-red-500",
      status: "Davom etmoqda",
    },
  ];

  const filters = [
    "Barchasi",
    "Davom etmoqda",
    "Tugatilgan",
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.author.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "Barchasi" ||
      course.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const completedCourses = courses.filter(
    (course) => course.status === "Tugatilgan"
  ).length;

  const activeCourses = courses.filter(
    (course) => course.status === "Davom etmoqda"
  ).length;

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <StudentSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Asosiy kontent */}
      <main className="min-h-screen w-full min-w-0 lg:ml-72 lg:w-[calc(100%-18rem)]">

        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-100 bg-white px-5 md:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
              aria-label="Menyuni ochish"
            >
              <Menu size={22} />
            </button>

            <div>
              <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
                Mening kurslarim
              </h1>
              <p className="mt-1 text-xs text-gray-500 md:text-sm">
                Barcha o'quv kurslaringiz bir joyda
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">
                Student User
              </p>
              <p className="text-xs text-gray-500">
                O'quvchi
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
              S
            </div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-7xl p-5 md:p-8">

          {/* Welcome */}
          <section className="rounded-2xl border border-gray-100 bg-white p-7">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-semibold text-green-600">
                  TA'LIM JARAYONI
                </p>

                <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
                  Bilim olishda davom eting!
                </h2>

                <p className="mt-3 text-sm text-gray-500">
                  O'zingiz boshlagan kurslarni davom ettiring.
                </p>
              </div>

              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600"
              >
                Yangi kurslar
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>

          {/* Statistics */}
          <section className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">

            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <BookOpen size={22} />
              </div>

              <h3 className="mt-4 text-3xl font-bold text-gray-900">
                {courses.length}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Jami kurslar
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Play size={22} />
              </div>

              <h3 className="mt-4 text-3xl font-bold text-gray-900">
                {activeCourses}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Davom etayotgan
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <Clock size={22} />
              </div>

              <h3 className="mt-4 text-3xl font-bold text-gray-900">
                {completedCourses}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Tugatilgan kurslar
              </p>
            </div>

          </section>

          {/* Search and filters */}
          <section className="mt-9">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Kurslar ro'yxati
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  O'zingiz o'rganayotgan kurslarni boshqaring
                </p>
              </div>

              <div className="relative w-full lg:w-80">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Kursni qidirish..."
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pr-4 pl-12 outline-none transition focus:border-green-500"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                    activeFilter === filter
                      ? "bg-green-500 text-white"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-green-500 hover:text-green-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </section>

          {/* Course cards */}
          <section className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <article
                key={course.id}
                className="rounded-2xl border border-gray-100 bg-white p-6 transition hover:shadow-lg hover:shadow-gray-100"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-600">
                    {course.category}
                  </span>

                  <span
                    className={`rounded-lg px-3 py-2 text-xs font-semibold ${
                      course.progress === 100
                        ? "bg-blue-50 text-blue-600"
                        : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    {course.status}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {course.author}
                </p>

                <div className="mb-3 mt-8 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    O'qish jarayoni
                  </span>

                  <span className="text-sm font-bold text-green-600">
                    {course.progress}%
                  </span>
                </div>

                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className={`h-full rounded-full ${course.color}`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-xs text-gray-400">
                    {course.completed}/{course.total} dars
                  </span>

                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700"
                  >
                    {course.progress === 100
                      ? "Qayta ko'rish"
                      : "Davom etish"}

                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </section>

          {/* Empty state */}
          {filteredCourses.length === 0 && (
            <div className="mt-7 rounded-2xl border border-gray-100 bg-white p-12 text-center">
              <Search
                size={35}
                className="mx-auto text-gray-300"
              />

              <h3 className="mt-4 text-lg font-bold text-gray-900">
                Kurs topilmadi
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Qidiruv so'zini yoki filtrni o'zgartirib ko'ring.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveFilter("Barchasi");
                }}
                className="mt-5 rounded-xl bg-green-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-600"
              >
                Filtrlarni tozalash
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

export default StudentCourses;
