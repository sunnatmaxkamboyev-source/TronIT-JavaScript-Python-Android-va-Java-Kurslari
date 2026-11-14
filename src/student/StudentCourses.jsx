
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  BookOpen,
  Play,
  Clock,
  ArrowRight,
  Menu,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  Zap,
  Code2,
  Terminal,
  Shield,
  RefreshCw,
  X,
} from "lucide-react";

import StudentSidebar from "./StudentSidebar";

const courses = [
  {
    id: 2,
    title: "JavaScript",
    author: "Farkhod Dadajanov",
    category: "Frontend",
    total: 27,
    completed: 18,
    progress: 67,
    color: "from-yellow-400 to-orange-500",
    status: "Davom etmoqda",
    icon: Code2,
    accent: "text-yellow-400",
    glow: "shadow-yellow-500/10",
    description: "JavaScript asoslarini chuqur o'rganing.",
  },
  {
    id: 3,
    title: "Node.js",
    author: "Muallif ko'rsatilmagan",
    category: "Backend",
    total: 26,
    completed: 12,
    progress: 46,
    color: "from-green-400 to-emerald-600",
    status: "Davom etmoqda",
    icon: Terminal,
    accent: "text-green-400",
    glow: "shadow-green-500/10",
    description: "Server-side dasturlashni o'rganing.",
  },
  {
    id: 4,
    title: "Python",
    author: "Muallif ko'rsatilmagan",
    category: "Programming",
    total: 23,
    completed: 23,
    progress: 100,
    color: "from-blue-400 to-cyan-500",
    status: "Tugatilgan",
    icon: Code2,
    accent: "text-blue-400",
    glow: "shadow-blue-500/10",
    description: "Python dasturlash tilini o'zlashtiring.",
  },
  {
    id: 1,
    title: "Kiberxavfsizlik",
    author: "Saud Abdulwahed",
    category: "Cybersecurity",
    total: 28,
    completed: 8,
    progress: 29,
    color: "from-red-400 to-rose-600",
    status: "Davom etmoqda",
    icon: Shield,
    accent: "text-red-400",
    glow: "shadow-red-500/10",
    description: "Raqamli xavfsizlik asoslarini o'rganing.",
  },
];

const filters = ["Barchasi", "Davom etmoqda", "Tugatilgan"];

function StudentCourses() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Barchasi");

  const reduceMotion = useReducedMotion();

  const completedCourses = courses.filter(
    (course) => course.status === "Tugatilgan"
  ).length;

  const activeCourses = courses.filter(
    (course) => course.status === "Davom etmoqda"
  ).length;

  const filteredCourses = courses.filter((course) => {
    const query = search.toLowerCase().trim();

    const matchesSearch =
      course.title.toLowerCase().includes(query) ||
      course.author.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query);

    const matchesFilter =
      activeFilter === "Barchasi" ||
      course.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F4F7F5] transition-colors duration-300 dark:bg-[#050D0A]">
      <StudentSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className="min-h-screen w-full min-w-0 lg:ml-72 lg:w-[calc(100%-18rem)]">

        {/* HEADER */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200/70 bg-white/85 px-5 backdrop-blur-xl dark:border-white/5 dark:bg-[#07120F]/85 md:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl p-2 text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5 lg:hidden"
              aria-label="Menyuni ochish"
            >
              <Menu size={22} />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
                  Mening kurslarim
                </h1>
                <span className="hidden rounded-lg bg-green-500/10 px-2 py-1 text-[10px] font-bold text-green-600 dark:text-green-400 sm:inline-block">
                  LEARNING
                </span>
              </div>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 md:text-sm">
                Barcha o'quv kurslaringiz bir joyda
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

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-green-500/20 bg-gradient-to-br from-green-400 to-emerald-700 font-bold text-white shadow-lg shadow-green-500/20">
              S
            </div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-7xl p-5 md:p-8">

          {/* HERO */}
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative isolate overflow-hidden rounded-3xl border border-green-500/20 bg-[#071A12] p-7 shadow-2xl shadow-green-950/10 md:p-10"
          >
            {/* Background effects */}
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.12)_1px,transparent_1px)] bg-[size:35px_35px]" />
            </div>

            <motion.div
              animate={reduceMotion ? {} : {
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{ duration: 7, repeat: Infinity }}
              className="pointer-events-none absolute -right-20 -top-32 -z-10 h-80 w-80 rounded-full bg-green-500/30 blur-[100px]"
            />

            <motion.div
              animate={reduceMotion ? {} : {
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 9, repeat: Infinity }}
              className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-[90px]"
            />

            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-xs font-bold tracking-wider text-green-400">
                  <Sparkles size={14} />
                  TA'LIM JARAYONI
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-4xl">
                  Bilim olishda
                  <br />
                  davom eting
                  <span className="text-green-400">!</span>
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-gray-400 md:text-base">
                  Har bir o'rganilgan dars sizni maqsadingizga
                  yaqinlashtiradi. Bugun ham yangi bilim oling.
                </p>

                <Link
                  to="/courses"
                  className="mt-7 inline-flex items-center gap-3 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-bold text-[#041009] shadow-lg shadow-green-500/20 transition hover:-translate-y-1 hover:bg-green-400"
                >
                  Yangi kurslarni ko'rish
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="relative mx-auto flex h-40 w-40 shrink-0 items-center justify-center md:mx-8 md:h-52 md:w-52">
                <motion.div
                  animate={reduceMotion ? {} : { rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-dashed border-green-400/30"
                />

                <motion.div
                  animate={reduceMotion ? {} : { rotate: -360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-5 rounded-full border border-green-400/20"
                />

                <div className="absolute inset-10 rounded-full bg-green-400/10 blur-xl" />

                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-green-400/30 bg-green-400/10 text-green-400 shadow-2xl shadow-green-500/20 backdrop-blur-xl md:h-28 md:w-28">
                  <GraduationCap size={55} strokeWidth={1.3} />
                </div>

                <div className="absolute right-0 top-5 rounded-xl border border-green-400/20 bg-[#0B2116] p-2.5 text-green-400">
                  <Code2 size={20} />
                </div>

                <div className="absolute bottom-4 left-0 rounded-xl border border-cyan-400/20 bg-[#0B2116] p-2.5 text-cyan-400">
                  <Zap size={20} />
                </div>
              </div>
            </div>
          </motion.section>

          {/* STATISTICS */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {[
              {
                title: "Jami kurslar",
                value: courses.length,
                icon: BookOpen,
                color: "text-green-400",
                bg: "bg-green-500/10",
                detail: "Barcha kurslaringiz",
              },
              {
                title: "Davom etayotgan",
                value: activeCourses,
                icon: Play,
                color: "text-cyan-400",
                bg: "bg-cyan-500/10",
                detail: "O'rganish jarayonida",
              },
              {
                title: "Tugatilgan kurslar",
                value: completedCourses,
                icon: CheckCircle2,
                color: "text-purple-400",
                bg: "bg-purple-500/10",
                detail: "Muvaffaqiyatli yakunlangan",
              },
            ].map((stat) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.title}
                  variants={itemVariants}
                  whileHover={reduceMotion ? {} : { y: -5 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-6 transition-colors dark:border-white/5 dark:bg-[#0A1711]"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green-500/5 blur-2xl transition group-hover:bg-green-500/10" />

                  <div className="relative flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}>
                      <Icon size={23} />
                    </div>

                    <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                      TRONIT
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-3xl font-black text-gray-900 dark:text-white">
                    {stat.value}
                  </h3>

                  <p className="relative mt-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {stat.title}
                  </p>

                  <p className="relative mt-1 text-xs text-gray-400 dark:text-gray-500">
                    {stat.detail}
                  </p>
                </motion.div>
              );
            })}
          </motion.section>

          {/* COURSE SECTION */}
          <section className="mt-10">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-1 rounded-full bg-green-500" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Kurslar ro'yxati
                  </h2>
                </div>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  O'zingiz o'rganayotgan kurslarni boshqaring
                </p>
              </div>

              {/* SEARCH */}
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
                  className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-11 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 dark:border-white/10 dark:bg-[#0A1711] dark:text-white dark:placeholder:text-gray-600"
                />

                {search && (
                  <button
                    onClick={() => setSearch("")}
                    aria-label="Qidiruvni tozalash"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>
            </div>

            {/* FILTERS */}
            <div className="mt-6 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                    activeFilter === filter
                      ? "bg-green-500 text-[#041009] shadow-lg shadow-green-500/20"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-green-500 hover:text-green-600 dark:border-white/10 dark:bg-[#0A1711] dark:text-gray-400 dark:hover:text-green-400"
                  }`}
                >
                  {filter}
                  {filter === "Barchasi" && (
                    <span className="ml-2 opacity-70">{courses.length}</span>
                  )}
                </button>
              ))}
            </div>

            {/* COURSE CARDS */}
            {filteredCourses.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
              >
                {filteredCourses.map((course) => {
                  const Icon = course.icon;

                  return (
                    <motion.article
                      key={course.id}
                      variants={itemVariants}
                      whileHover={reduceMotion ? {} : {
                        y: -7,
                        transition: { duration: 0.2 },
                      }}
                      className={`group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm transition dark:border-white/5 dark:bg-[#0A1711] dark:shadow-none ${course.glow}`}
                    >
                      {/* Top glow */}
                      <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${course.color} opacity-[0.07] blur-3xl transition group-hover:opacity-20`} />

                      <div className="relative flex items-center justify-between gap-2">
                        <span className="rounded-lg border border-green-500/10 bg-green-500/10 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
                          {course.category}
                        </span>

                        <span
                          className={`rounded-lg px-3 py-2 text-[10px] font-bold ${
                            course.progress === 100
                              ? "bg-blue-500/10 text-blue-500"
                              : "bg-orange-500/10 text-orange-500"
                          }`}
                        >
                          {course.status}
                        </span>
                      </div>

                      {/* Course icon */}
                      <div className="relative mt-7 flex items-center gap-4">
                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${course.color} text-white shadow-lg`}>
                          <Icon size={27} />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-xl font-black text-gray-900 dark:text-white">
                            {course.title}
                          </h3>

                          <p className="mt-1 truncate text-xs text-gray-500 dark:text-gray-400">
                            {course.author}
                          </p>
                        </div>
                      </div>

                      <p className="relative mt-5 text-sm text-gray-500 dark:text-gray-400">
                        {course.description}
                      </p>

                      {/* Progress */}
                      <div className="relative mb-3 mt-7 flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          O'qish jarayoni
                        </span>

                        <span className={`text-sm font-black ${course.accent}`}>
                          {course.progress}%
                        </span>
                      </div>

                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${course.progress}%` }}
                          transition={{
                            duration: reduceMotion ? 0 : 1,
                            delay: reduceMotion ? 0 : 0.2,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
                        />
                      </div>

                      <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-gray-100 pt-5 dark:border-white/5">
                        <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                          <Clock size={14} />
                          {course.completed}/{course.total} dars
                        </div>

                        <Link
                          to={`/courses/${course.id}`}
                          className="inline-flex items-center gap-2 text-sm font-bold text-green-600 transition hover:gap-3 dark:text-green-400"
                        >
                          {course.progress === 100
                            ? "Qayta ko'rish"
                            : "Davom etish"}
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            ) : (
              /* EMPTY STATE */
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-7 rounded-3xl border border-gray-200 bg-white px-6 py-16 text-center dark:border-white/5 dark:bg-[#0A1711]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-green-500">
                  <Search size={30} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                  Kurs topilmadi
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Qidiruv so'zini yoki filtrni o'zgartirib ko'ring.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setActiveFilter("Barchasi");
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-bold text-[#041009] transition hover:bg-green-400"
                >
                  <RefreshCw size={16} />
                  Filtrlarni tozalash
                </button>
              </motion.div>
            )}
          </section>

          {/* FOOTER */}
          <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-200 py-6 text-xs text-gray-400 dark:border-white/5 dark:text-gray-600 sm:flex-row">
            <p>© 2026 TRONIT. Barcha huquqlar himoyalangan.</p>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Learning system online
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default StudentCourses;
