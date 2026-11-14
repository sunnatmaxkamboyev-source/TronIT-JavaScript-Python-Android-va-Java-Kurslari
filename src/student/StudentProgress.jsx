import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
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
  BookOpen,
  Code2,
  Terminal,
  Shield,
  Zap,
  Sparkles,
} from "lucide-react";

import StudentSidebar from "./StudentSidebar";

const courses = [
  {
    id: 1,
    title: "JavaScript",
    category: "Frontend Development",
    completed: 18,
    total: 27,
    color: "from-yellow-400 to-orange-500",
    icon: "JS",
    Icon: Code2,
  },
  {
    id: 2,
    title: "Node.js",
    category: "Backend Development",
    completed: 12,
    total: 26,
    color: "from-green-400 to-emerald-600",
    icon: "JS",
    Icon: Terminal,
  },
  {
    id: 3,
    title: "Python",
    category: "Programming",
    completed: 23,
    total: 23,
    color: "from-blue-400 to-cyan-500",
    icon: "PY",
    Icon: Code2,
  },
  {
    id: 4,
    title: "Kiberxavfsizlik",
    category: "Cyber Security",
    completed: 8,
    total: 28,
    color: "from-purple-400 to-violet-600",
    icon: "CS",
    Icon: Shield,
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
  const [selectedDay, setSelectedDay] = useState(null);

  const reduceMotion = useReducedMotion();

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
      description: "Barcha kurslar bo'yicha",
      icon: TrendingUp,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      title: "Tugatilgan darslar",
      value: completedLessons,
      description: `${totalLessons} ta darsdan`,
      icon: CheckCircle2,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      title: "O'qish vaqti",
      value: `${totalHours} soat`,
      description: "Oxirgi 7 kun ichida",
      icon: Clock3,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      title: "Tugatilgan kurslar",
      value: completedCourses,
      description: `${courses.length} ta kursdan`,
      icon: Award,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
  ];

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
      y: reduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F4F7F5] transition-colors duration-300 dark:bg-[#050D0A]">
      <StudentSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <main className="min-h-screen w-full min-w-0 lg:ml-72 lg:w-[calc(100%-18rem)]">

        {/* HEADER */}
        <header className="sticky top-0 z-30 flex min-h-[76px] items-center justify-between gap-4 border-b border-gray-200/70 bg-white/85 px-4 py-4 backdrop-blur-xl dark:border-white/5 dark:bg-[#07120F]/85 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="shrink-0 rounded-xl border border-gray-200 p-2 text-gray-700 transition hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5 lg:hidden"
              aria-label="Menyuni ochish"
            >
              <Menu size={21} />
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="truncate text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
                  O'qish jarayoni
                </h1>

                <span className="hidden rounded-lg bg-green-500/10 px-2 py-1 text-[10px] font-bold text-green-600 dark:text-green-400 sm:inline-block">
                  ANALYTICS
                </span>
              </div>

              <p className="hidden text-sm text-gray-500 dark:text-gray-400 sm:block">
                O'z rivojlanishingizni kuzatib boring
              </p>
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-2 rounded-xl border border-green-500/10 bg-green-500/10 px-4 py-2 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>

            <span className="text-sm font-semibold text-green-700 dark:text-green-400">
              Faol o'quvchi
            </span>
          </div>
        </header>

        <div className="mx-auto w-full max-w-[1600px] space-y-7 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

          {/* PAGE TITLE */}
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <Sparkles size={17} />
              <span className="text-xs font-bold tracking-[0.2em]">
                YOUR PERFORMANCE
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-black text-gray-900 sm:text-3xl dark:text-white">
              Sizning natijalaringiz
              <span className="text-green-500">.</span>
            </h2>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              O'qish jarayoningiz va erishgan natijalaringiz.
            </p>
          </motion.section>

          {/* MAIN PROGRESS HERO */}
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative isolate overflow-hidden rounded-3xl border border-green-400/20 bg-[#071A12] p-6 text-white shadow-2xl shadow-green-950/10 sm:p-8 lg:p-10"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.12)_1px,transparent_1px)] bg-[size:35px_35px]" />
            </div>

            <motion.div
              animate={reduceMotion ? {} : {
                scale: [1, 1.2, 1],
                opacity: [0.12, 0.28, 0.12],
              }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute -right-20 -top-32 -z-10 h-80 w-80 rounded-full bg-green-500/40 blur-[100px]"
            />

            <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-2 text-xs font-bold tracking-wider text-green-400">
                  <TrendingUp size={15} />
                  UMUMIY RIVOJLANISH
                </div>

                <h2 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl">
                  {progress}
                  <span className="text-green-400">%</span>
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
                  Siz jami {totalLessons} ta darsdan{" "}
                  <span className="font-bold text-green-400">
                    {completedLessons} tasini
                  </span>{" "}
                  yakunladingiz. O'rganishda davom eting!
                </p>

                <div className="mt-8 h-3 w-full max-w-md overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{
                      duration: reduceMotion ? 0 : 1.3,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-300 shadow-[0_0_15px_rgba(74,222,128,0.5)]"
                  />
                </div>

                <p className="mt-3 text-xs font-medium text-gray-400">
                  {completedLessons} / {totalLessons} ta dars
                </p>
              </div>

              {/* ANIMATED CIRCLE */}
              <div className="flex justify-center">
                <div className="relative flex h-52 w-52 items-center justify-center sm:h-60 sm:w-60">
                  <motion.div
                    animate={reduceMotion ? {} : { rotate: 360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border border-dashed border-green-400/30"
                  />

                  <div className="absolute inset-5 rounded-full border border-green-400/10" />

                  <svg
                    viewBox="0 0 200 200"
                    className="absolute inset-0 h-full w-full -rotate-90"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="84"
                      fill="none"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="8"
                    />

                    <motion.circle
                      cx="100"
                      cy="100"
                      r="84"
                      fill="none"
                      stroke="#4ade80"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 84}
                      initial={{ strokeDashoffset: 2 * Math.PI * 84 }}
                      animate={{
                        strokeDashoffset:
                          2 * Math.PI * 84 * (1 - progress / 100),
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 1.5,
                        ease: "easeOut",
                      }}
                    />
                  </svg>

                  <div className="relative text-center">
                    <Award size={36} className="mx-auto mb-2 text-green-400" />
                    <p className="text-4xl font-black text-white">
                      {progress}%
                    </p>
                    <p className="mt-1 text-xs font-medium text-gray-400">
                      YAKUNLANDI
                    </p>
                  </div>

                  <div className="absolute right-0 top-8 rounded-xl border border-green-400/20 bg-[#0B2116] p-3 text-green-400 shadow-lg">
                    <Zap size={19} />
                  </div>

                  <div className="absolute bottom-8 left-0 rounded-xl border border-cyan-400/20 bg-[#0B2116] p-3 text-cyan-400 shadow-lg">
                    <BookOpen size={19} />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* STATISTICS */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.title}
                  variants={itemVariants}
                  whileHover={reduceMotion ? {} : { y: -5 }}
                  className="group relative min-w-0 overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-5 transition dark:border-white/5 dark:bg-[#0A1711]"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green-500/5 blur-2xl transition group-hover:bg-green-500/10" />

                  <div className="relative flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}>
                      <Icon size={23} />
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-gray-300 dark:text-gray-600"
                    />
                  </div>

                  <p className="relative mt-5 text-sm text-gray-500 dark:text-gray-400">
                    {stat.title}
                  </p>

                  <h3 className="relative mt-1 break-words text-2xl font-black text-gray-900 dark:text-white">
                    {stat.value}
                  </h3>

                  <p className="relative mt-1 text-xs text-gray-400 dark:text-gray-500">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.section>

          {/* MAIN GRID */}
          <section className="grid min-w-0 grid-cols-1 gap-6 2xl:grid-cols-3">

            {/* COURSE PROGRESS */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="min-w-0 rounded-2xl border border-gray-200/70 bg-white p-5 sm:p-6 2xl:col-span-2 dark:border-white/5 dark:bg-[#0A1711]"
            >
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-1 rounded-full bg-green-500" />
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                      Kurslar bo'yicha progress
                    </h2>
                  </div>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Har bir kursdagi natijalaringiz
                  </p>
                </div>

                <span className="rounded-lg border border-green-500/10 bg-green-500/10 px-3 py-2 text-xs font-bold text-green-600 dark:text-green-400">
                  {courses.length} TA KURS
                </span>
              </div>

              <div className="space-y-8">
                {courses.map((course, index) => {
                  const percentage = Math.round(
                    (course.completed / course.total) * 100
                  );

                  const Icon = course.Icon;
                  const isCompleted = percentage === 100;

                  return (
                    <motion.div
                      key={course.id}
                      initial={reduceMotion ? false : { opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: reduceMotion ? 0 : index * 0.1,
                      }}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${course.color} text-white shadow-lg`}>
                          <Icon size={23} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="truncate font-bold text-gray-900 dark:text-white">
                            {course.title}
                          </h3>

                          <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                            {course.category}
                          </p>
                        </div>

                        <div className="shrink-0 text-right">
                          <p className="font-black text-gray-900 dark:text-white">
                            {percentage}%
                          </p>

                          <p className="text-xs text-gray-400 dark:text-gray-500">
                            {course.completed}/{course.total}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-gray-100 dark:bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{
                            duration: reduceMotion ? 0 : 1,
                            delay: reduceMotion ? 0 : 0.2 + index * 0.1,
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
                        />
                      </div>

                      <div className="mt-2 flex items-center justify-between gap-2">
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {isCompleted
                            ? "Kurs tugatilgan"
                            : "O'rganish davom etmoqda"}
                        </span>

                        {isCompleted && (
                          <span className="flex items-center gap-1 text-xs font-bold text-green-600 dark:text-green-400">
                            <CheckCircle2 size={14} />
                            Yakunlandi
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* WEEKLY ACTIVITY */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="min-w-0 rounded-2xl border border-gray-200/70 bg-white p-5 sm:p-6 dark:border-white/5 dark:bg-[#0A1711]"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Haftalik faollik
                  </h2>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    O'qishga sarflangan vaqt
                  </p>
                </div>

                <div className="rounded-xl bg-green-500/10 p-2.5 text-green-500">
                  <CalendarDays size={21} />
                </div>
              </div>

              <div className="mt-8 flex h-48 items-end justify-between gap-2">
                {weeklyActivity.map((day, index) => {
                  const isSelected = selectedDay === day.day;

                  return (
                    <button
                      key={day.day}
                      onClick={() => setSelectedDay(
                        isSelected ? null : day.day
                      )}
                      className="group flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
                      aria-label={`${day.day}: ${day.hours} soat`}
                    >
                      <span className={`text-xs font-bold transition ${
                        isSelected
                          ? "text-green-500"
                          : "text-gray-400 dark:text-gray-500"
                      }`}>
                        {day.hours}s
                      </span>

                      <div className="flex h-36 w-full items-end">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{
                            height: `${(day.hours / 5) * 100}%`,
                          }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.7,
                            delay: reduceMotion ? 0 : index * 0.08,
                          }}
                          className={`w-full rounded-t-lg transition-colors ${
                            isSelected
                              ? "bg-green-500 shadow-lg shadow-green-500/20"
                              : day.hours === 5
                                ? "bg-green-600"
                                : "bg-green-300 group-hover:bg-green-500 dark:bg-green-800"
                          }`}
                        />
                      </div>

                      <span className={`text-xs font-medium ${
                        isSelected
                          ? "text-green-500"
                          : "text-gray-400 dark:text-gray-500"
                      }`}>
                        {day.day}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 rounded-xl border border-green-500/10 bg-green-500/5 p-4">
                <div className="flex items-center gap-2">
                  <Flame size={20} className="text-orange-500" />

                  <span className="font-black text-gray-900 dark:text-white">
                    {selectedDay
                      ? `${weeklyActivity.find((day) => day.day === selectedDay).hours} soat`
                      : `${totalHours} soat`}
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  {selectedDay
                    ? `${selectedDay} kuni o'qishga sarflangan vaqt.`
                    : "Oxirgi 7 kun ichida o'qishga sarflagan vaqtingiz."}
                </p>
              </div>
            </motion.div>
          </section>

          {/* RECOMMENDATION */}
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative isolate overflow-hidden rounded-2xl border border-green-500/15 bg-gradient-to-r from-green-500/10 to-cyan-500/5 p-5 sm:p-6 dark:border-green-500/10"
          >
            <div className="pointer-events-none absolute -right-10 -top-16 -z-10 h-48 w-48 rounded-full bg-green-500/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div className="flex min-w-0 items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-green-500/10 bg-white text-green-600 shadow-sm dark:bg-[#0A1711] dark:text-green-400">
                  <Target size={24} />
                </div>

                <div className="min-w-0">
                  <h2 className="font-bold text-gray-900 dark:text-white">
                    Maqsadingiz sari davom eting!
                  </h2>

                  <p className="mt-1 max-w-xl text-sm leading-6 text-gray-500 dark:text-gray-400">
                    Har kuni yangi bilim o'rganing va
                    natijalaringizni yaxshilab boring.
                  </p>
                </div>
              </div>

              <Link
                to="/student/courses"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-bold text-[#041009] shadow-lg shadow-green-500/10 transition hover:-translate-y-1 hover:bg-green-400"
              >
                Kurslarim
                <PlayCircle size={18} />
              </Link>
            </div>
          </motion.section>

          {/* FOOTER */}
          <footer className="flex flex-col items-center justify-between gap-3 border-t border-gray-200 py-6 text-xs text-gray-400 dark:border-white/5 dark:text-gray-600 sm:flex-row">
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

export default StudentProgress;
