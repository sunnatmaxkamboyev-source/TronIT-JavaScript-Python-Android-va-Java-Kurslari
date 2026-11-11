
import { useState } from "react";
import {
  BookOpen,
  TrendingUp,
  Clock3,
  Award,
  CheckCircle2,
  Target,
  CalendarDays,
  Flame,
  PlayCircle,
  Menu,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import StudentSidebar from "./StudentSidebar";

const courses = [
  {
    id: 1,
    title: "JavaScript",
    category: "Frontend Development",
    completed: 18,
    total: 27,
    color: "bg-yellow-400",
    textColor: "text-yellow-600",
    icon: "JS",
  },
  {
    id: 2,
    title: "Node.js",
    category: "Backend Development",
    completed: 12,
    total: 26,
    color: "bg-green-500",
    textColor: "text-green-600",
    icon: "JS",
  },
  {
    id: 3,
    title: "Python",
    category: "Programming",
    completed: 23,
    total: 23,
    color: "bg-blue-500",
    textColor: "text-blue-600",
    icon: "PY",
  },
  {
    id: 4,
    title: "Kiberxavfsizlik",
    category: "Cyber Security",
    completed: 8,
    total: 28,
    color: "bg-purple-500",
    textColor: "text-purple-600",
    icon: "CS",
  },
];

const weeklyActivity = [
  { day: "Du", hours: 2 },
  { day: "Se", hours: 3 },
  { day: "Ch", hours: 1 },
  { day: "Pa", hours: 4 },
  { day: "Ju", hours: 2 },
  { day: "Sh", hours: 5 },
  { day: "Ya", hours: 3 },
];

function StudentProgress() {
  const [isOpen, setIsOpen] = useState(false);

  const totalLessons = courses.reduce(
    (sum, course) => sum + course.total,
    0
  );

  const completedLessons = courses.reduce(
    (sum, course) => sum + course.completed,
    0
  );

  const progress = Math.round(
    (completedLessons / totalLessons) * 100
  );

  const completedCourses = courses.filter(
    (course) => course.completed === course.total
  ).length;

  const totalHours = weeklyActivity.reduce(
    (sum, day) => sum + day.hours,
    0
  );

  const stats = [
    {
      title: "Umumiy progress",
      value: `${progress}%`,
      description: "Barcha kurslar bo‘yicha",
      icon: TrendingUp,
      style: "bg-green-50 text-green-600",
    },
    {
      title: "Tugatilgan darslar",
      value: completedLessons,
      description: `${totalLessons} ta darsdan`,
      icon: CheckCircle2,
      style: "bg-blue-50 text-blue-600",
    },
    {
      title: "O‘qish vaqti",
      value: `${totalHours} soat`,
      description: "Oxirgi 7 kun ichida",
      icon: Clock3,
      style: "bg-purple-50 text-purple-600",
    },
    {
      title: "Tugatilgan kurslar",
      value: completedCourses,
      description: `${courses.length} ta kursdan`,
      icon: Award,
      style: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f8faf9]">
      <StudentSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Asosiy kontent */}
      <main className="min-h-screen w-full min-w-0 lg:ml-72 lg:w-[calc(100%-18rem)]">

        {/* Header */}
        <header className="sticky top-0 z-30 flex min-h-[76px] w-full items-center justify-between gap-4 border-b border-gray-100 bg-white px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="shrink-0 rounded-xl border border-gray-200 p-2 text-gray-700 lg:hidden"
              aria-label="Menyuni ochish"
            >
              <Menu size={21} />
            </button>

            <div className="min-w-0">
              <h1 className="truncate text-lg font-bold text-gray-900 sm:text-xl">
                O‘qish jarayoni
              </h1>
              <p className="hidden text-sm text-gray-500 sm:block">
                O‘z rivojlanishingizni kuzatib boring
              </p>
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-2 rounded-xl bg-green-50 px-4 py-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-green-700">
              Faol o‘quvchi
            </span>
          </div>
        </header>

        {/* Page content */}
        <div className="mx-auto w-full max-w-[1600px] space-y-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

          {/* Title */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Sizning natijalaringiz
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              O‘qish jarayoningiz va erishgan natijalaringiz.
            </p>
          </section>

          {/* Main progress */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white shadow-lg shadow-green-100 sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />

            <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div className="min-w-0">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-sm">
                  <TrendingUp size={16} />
                  Umumiy rivojlanish
                </div>

                <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
                  {progress}%
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-green-50">
                  Siz jami {totalLessons} ta darsdan {completedLessons}
                  tasini yakunladingiz. O‘rganishda davom eting!
                </p>

                <div className="mt-7 h-3 w-full max-w-md overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-white transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="mt-2 text-xs text-green-100">
                  {completedLessons} / {totalLessons} ta dars
                </p>
              </div>

              <div className="flex justify-center">
                <div className="flex h-40 w-40 items-center justify-center rounded-full border-[10px] border-white/25 sm:h-48 sm:w-48">
                  <div className="text-center">
                    <Award size={34} className="mx-auto mb-2" />
                    <p className="text-3xl font-bold">{progress}%</p>
                    <p className="mt-1 text-xs text-green-100">
                      Yakunlandi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="min-w-0 rounded-2xl border border-gray-100 bg-white p-5 transition hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.style}`}>
                      <Icon size={22} />
                    </div>
                    <ArrowUpRight size={19} className="text-gray-300" />
                  </div>

                  <p className="mt-5 text-sm text-gray-500">
                    {stat.title}
                  </p>

                  <h3 className="mt-1 break-words text-2xl font-bold text-gray-900">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-xs text-gray-400">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </section>

          {/* Main grid */}
          <section className="grid min-w-0 grid-cols-1 gap-6 2xl:grid-cols-3">

            {/* Course progress */}
            <div className="min-w-0 rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 2xl:col-span-2">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Kurslar bo‘yicha progress
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Har bir kursdagi natijalaringiz
                  </p>
                </div>

                <span className="rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-700">
                  {courses.length} ta kurs
                </span>
              </div>

              <div className="space-y-7">
                {courses.map((course) => {
                  const percentage = Math.round(
                    (course.completed / course.total) * 100
                  );

                  const isCompleted = percentage === 100;

                  return (
                    <div key={course.id}>
                      <div className="flex min-w-0 items-center gap-3">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${course.color} text-sm font-bold text-white`}>
                          {course.icon}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="truncate font-semibold text-gray-900">
                            {course.title}
                          </h3>
                          <p className="truncate text-xs text-gray-500">
                            {course.category}
                          </p>
                        </div>

                        <div className="shrink-0 text-right">
                          <p className="font-bold text-gray-900">
                            {percentage}%
                          </p>
                          <p className="text-xs text-gray-400">
                            {course.completed}/{course.total}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${course.color}`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>

                      <div className="mt-2 flex items-center justify-between gap-2">
                        <span className="text-xs text-gray-400">
                          {isCompleted
                            ? "Kurs tugatilgan"
                            : "O‘rganish davom etmoqda"}
                        </span>

                        {isCompleted && (
                          <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-green-600">
                            <CheckCircle2 size={14} />
                            Yakunlandi
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Weekly activity */}
            <div className="min-w-0 rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Haftalik faollik
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    O‘qishga sarflangan vaqt
                  </p>
                </div>

                <CalendarDays className="shrink-0 text-green-600" size={21} />
              </div>

              <div className="mt-8 flex h-48 items-end justify-between gap-2">
                {weeklyActivity.map((day) => (
                  <div
                    key={day.day}
                    className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
                  >
                    <span className="text-xs font-medium text-gray-500">
                      {day.hours}s
                    </span>

                    <div className="flex h-36 w-full items-end">
                      <div
                        className={`w-full rounded-t-lg ${
                          day.hours === 5
                            ? "bg-green-600"
                            : "bg-green-300"
                        }`}
                        style={{
                          height: `${(day.hours / 5) * 100}%`,
                        }}
                      />
                    </div>

                    <span className="text-xs text-gray-400">
                      {day.day}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-xl bg-green-50 p-4">
                <div className="flex items-center gap-2">
                  <Flame size={20} className="text-orange-500" />
                  <span className="font-bold text-gray-900">
                    {totalHours} soat
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Oxirgi 7 kun ichida o‘qishga sarflagan vaqtingiz.
                </p>
              </div>
            </div>
          </section>

          {/* Recommendation */}
          <section className="flex flex-col justify-between gap-5 rounded-2xl border border-green-100 bg-green-50 p-5 sm:flex-row sm:items-center sm:p-6">
            <div className="flex min-w-0 items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-green-600">
                <Target size={24} />
              </div>

              <div className="min-w-0">
                <h2 className="font-bold text-gray-900">
                  Maqsadingiz sari davom eting!
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Har kuni yangi bilim o‘rganing va natijalaringizni
                  yaxshilab boring.
                </p>
              </div>
            </div>

            <Link
              to="/student/courses"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              Kurslarim
              <PlayCircle size={18} />
            </Link>
          </section>

        </div>
      </main>
    </div>
  );
}

export default StudentProgress;
