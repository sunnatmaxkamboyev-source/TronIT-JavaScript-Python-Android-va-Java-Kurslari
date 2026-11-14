import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

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
  Sparkles,
  Zap,
  Code2,
  Star,
} from "lucide-react";

import StudentSidebar from "./StudentSidebar";

function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const stats = [
    {
      title: "Mening kurslarim",
      value: "4",
      description: "Faol kurslar",
      icon: BookOpen,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      glow: "group-hover:shadow-emerald-500/10",
    },
    {
      title: "Tugatilgan darslar",
      value: "28",
      description: "Jami ko'rilgan",
      icon: Trophy,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      glow: "group-hover:shadow-blue-500/10",
    },
    {
      title: "O'rganish vaqti",
      value: "36 soat",
      description: "Umumiy vaqt",
      icon: Clock,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      glow: "group-hover:shadow-purple-500/10",
    },
    {
      title: "Umumiy progress",
      value: "67%",
      description: "O'qish natijasi",
      icon: TrendingUp,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      glow: "group-hover:shadow-orange-500/10",
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
      color: "from-yellow-400 to-orange-400",
      category: "Frontend Development",
      icon: Code2,
      accent: "text-yellow-400",
      bg: "bg-yellow-400/10",
    },
    {
      id: 3,
      title: "Node.js",
      author: "Muallif ko'rsatilmagan",
      completed: 12,
      total: 26,
      progress: 46,
      color: "from-emerald-400 to-green-500",
      category: "Backend Development",
      icon: Zap,
      accent: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    {
      id: 4,
      title: "Python",
      author: "Muallif ko'rsatilmagan",
      completed: 20,
      total: 23,
      progress: 87,
      color: "from-blue-400 to-cyan-400",
      category: "Programming",
      icon: Code2,
      accent: "text-blue-400",
      bg: "bg-blue-400/10",
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

  const cardVariants = {
    hidden: reduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F4F7F5] text-gray-900 transition-colors duration-300 dark:bg-[#050D0A] dark:text-white">
      <StudentSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className="min-h-screen w-full min-w-0 lg:ml-72 lg:w-[calc(100%-18rem)]">

        {/* HEADER */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200/70 bg-white/85 px-5 backdrop-blur-xl transition-colors duration-300 dark:border-white/[0.06] dark:bg-[#07120F]/85 md:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl border border-gray-200 p-2.5 text-gray-700 transition hover:border-emerald-400 hover:text-emerald-500 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5 lg:hidden"
              aria-label="Menyuni ochish"
            >
              <Menu size={22} />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-emerald-600 dark:text-emerald-400">
                  Student workspace
                </span>
              </div>

              <h1 className="mt-1 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Dashboard
              </h1>
            </div>
          </div>

          <div className="hidden items-center gap-4 sm:flex">
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                Student User
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                O'quvchi
              </p>
            </div>

            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: 5 }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-400 to-emerald-600 font-black text-white shadow-lg shadow-emerald-500/20"
            >
              S
            </motion.div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-7xl space-y-9 p-5 md:p-8">

          {/* HERO */}
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="group relative min-h-[330px] overflow-hidden rounded-[28px] border border-emerald-400/20 bg-[#071B13] p-7 text-white shadow-2xl shadow-emerald-950/10 md:p-10"
          >
            {/* Animated background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: [0, 60, -20, 0],
                        y: [0, 30, 60, 0],
                        scale: [1, 1.2, 0.9, 1],
                      }
                }
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-20 -top-40 h-[450px] w-[450px] rounded-full bg-emerald-400/20 blur-[110px]"
              />

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: [0, -50, 20, 0],
                        y: [0, -30, 40, 0],
                      }
                }
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-48 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[110px]"
              />

              <div
                className="absolute inset-0 opacity-[0.09]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(52,211,153,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.5) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#071B13] via-[#071B13]/90 to-transparent" />
            </div>

            <div className="relative z-10 flex min-h-[270px] flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300"
                >
                  <Flame size={15} className="animate-pulse" />
                  O'rganishni davom ettiring
                  <Sparkles size={14} />
                </motion.div>

                <motion.h2
                  initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-7 text-3xl font-black leading-tight tracking-tight md:text-5xl"
                >
                  Salom, Student!
                  <span className="ml-2 inline-block">👋</span>
                  <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-green-400 to-cyan-300 bg-clip-text text-transparent">
                    Kelajagingni kod bilan qur.
                  </span>
                </motion.h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-emerald-50/65 md:text-base">
                  Bugun yangi bilimlar egallash uchun ajoyib kun.
                  Maqsadlaringiz sari har kuni bir qadam tashlang.
                </p>

                <Link
                  to="/student/courses"
                  className="group/btn mt-7 inline-flex items-center gap-3 rounded-xl bg-emerald-400 px-6 py-3.5 text-sm font-bold text-[#052015] shadow-lg shadow-emerald-500/20 transition duration-300 hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-emerald-400/30"
                >
                  Kurslarimni ko'rish
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </Link>
              </div>

              {/* HERO DECORATION */}
              <div className="relative hidden h-56 w-56 shrink-0 items-center justify-center md:flex lg:mr-8">
                <motion.div
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-dashed border-emerald-300/30"
                />

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : { rotate: -360 }
                  }
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-5 rounded-full border border-emerald-300/20"
                />

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.08, 1],
                          boxShadow: [
                            "0 0 25px rgba(16,185,129,0.15)",
                            "0 0 60px rgba(16,185,129,0.35)",
                            "0 0 25px rgba(16,185,129,0.15)",
                          ],
                        }
                  }
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative flex h-32 w-32 items-center justify-center rounded-[35px] border border-emerald-300/30 bg-emerald-400/10 backdrop-blur-xl"
                >
                  <Code2 size={65} className="text-emerald-300" />
                </motion.div>

                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-4 top-7 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl"
                >
                  <Zap size={22} className="text-yellow-300" />
                </motion.div>

                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute -bottom-2 -left-5 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl"
                >
                  <Star size={22} className="text-emerald-300" />
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* STATISTICS */}
          <section>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-emerald-600 dark:text-emerald-400">
                  Your performance
                </p>
                <h2 className="mt-1 text-xl font-extrabold text-gray-900 dark:text-white">
                  O'qish statistikasi
                </h2>
              </div>

              <Sparkles size={21} className="text-emerald-500" />
            </div>

            <motion.div
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
                    variants={cardVariants}
                    whileHover={reduceMotion ? undefined : { y: -7 }}
                    className={`group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/[0.07] dark:bg-[#0B1712] ${stat.glow}`}
                  >
                    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-400/[0.04] blur-2xl transition duration-500 group-hover:bg-emerald-400/[0.12]" />

                    <div className="relative flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}>
                        <Icon size={23} />
                      </div>

                      <TrendingUp
                        size={18}
                        className="text-emerald-500/70"
                      />
                    </div>

                    <h3 className="relative mt-6 text-3xl font-black tracking-tight text-gray-900 dark:text-white">
                      {stat.value}
                    </h3>

                    <p className="relative mt-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {stat.title}
                    </p>

                    <p className="relative mt-2 text-xs text-gray-400 dark:text-gray-500">
                      {stat.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>

          {/* COURSES */}
          <section>
            <div className="mb-6 flex items-end justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-emerald-600 dark:text-emerald-400">
                  Continue learning
                </p>

                <h2 className="mt-1 text-xl font-extrabold text-gray-900 dark:text-white md:text-2xl">
                  O'rganishni davom ettiring
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Oxirgi ishlagan kurslaringiz
                </p>
              </div>

              <Link
                to="/student/courses"
                className="flex shrink-0 items-center gap-2 text-sm font-bold text-emerald-600 transition hover:gap-3 dark:text-emerald-400"
              >
                Barchasi
                <ArrowRight size={17} />
              </Link>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3"
            >
              {courses.map((course) => {
                const CourseIcon = course.icon;

                return (
                  <motion.article
                    key={course.id}
                    variants={cardVariants}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -8, scale: 1.01 }
                    }
                    className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-400/30 hover:shadow-xl hover:shadow-emerald-950/5 dark:border-white/[0.07] dark:bg-[#0B1712] dark:hover:shadow-black/30"
                  >
                    <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${course.bg} opacity-40 blur-3xl transition duration-500 group-hover:scale-150`} />

                    <div className="relative flex items-start justify-between gap-3">
                      <span className="rounded-lg border border-emerald-500/10 bg-emerald-500/[0.07] px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                        {course.category}
                      </span>

                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${course.bg} ${course.accent}`}>
                        <CourseIcon size={22} />
                      </div>
                    </div>

                    <h3 className="relative mt-5 text-2xl font-black text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                      {course.title}
                    </h3>

                    <p className="relative mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {course.author}
                    </p>

                    <div className="relative mb-3 mt-8 flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        O'zlashtirish
                      </span>

                      <span className={`text-sm font-black ${course.accent}`}>
                        {course.progress}%
                      </span>
                    </div>

                    <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-white/[0.07]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{
                          duration: 1.3,
                          delay: reduceMotion ? 0 : 0.3,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${course.color} shadow-[0_0_12px_rgba(16,185,129,0.2)]`}
                      />
                    </div>

                    <div className="relative mt-5 flex items-center justify-between gap-3">
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        {course.completed}/{course.total} dars
                      </span>

                      <Link
                        to={`/courses/${course.id}`}
                        className="group/link flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-xs font-bold text-emerald-600 transition hover:bg-emerald-500 hover:text-white dark:text-emerald-400"
                      >
                        <Play size={14} />
                        Davom ettirish
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover/link:translate-x-1"
                        />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </section>

          {/* BOTTOM SECTION */}
          <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">

            {/* WEEKLY GOAL */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-7 dark:border-white/[0.07] dark:bg-[#0B1712]"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-400/[0.07] blur-3xl" />

              <div className="relative flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
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

              <div className="relative mt-8 flex items-end justify-between">
                <div>
                  <h2 className="text-4xl font-black text-gray-900 dark:text-white">
                    6 <span className="text-gray-400">/ 10</span>
                  </h2>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Dars bajarildi
                  </p>
                </div>

                <span className="text-lg font-black text-emerald-500">
                  60%
                </span>
              </div>

              <div className="relative mt-5 h-3 overflow-hidden rounded-full bg-gray-100 dark:bg-white/[0.07]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"
                />
              </div>

              <div className="relative mt-4 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                <Flame size={15} className="text-orange-500" />
                Yana 4 ta dars va haftalik maqsad bajariladi!
              </div>
            </motion.div>

            {/* RECOMMENDATION */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#0A2519] to-[#07120F] p-7 text-white shadow-xl shadow-emerald-950/10"
            >
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { rotate: 360 }
                }
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-emerald-300/10"
              />

              <div className="relative flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                  <CalendarDays size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    O'qish tavsiyasi
                  </h3>

                  <p className="mt-1 text-xs text-emerald-100/50">
                    Bugungi kichik vazifa
                  </p>
                </div>
              </div>

              <h4 className="relative mt-7 text-xl font-extrabold leading-snug">
                JavaScript bilimlaringizni mustahkamlang
              </h4>

              <p className="relative mt-3 text-sm leading-7 text-emerald-50/60">
                Bugun kamida bitta darsni ko'ring va o'rgangan
                mavzuingiz bo'yicha amaliy kod yozing.
              </p>

              <Link
                to="/courses/2"
                className="group relative mt-6 inline-flex items-center gap-3 rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-300 transition hover:bg-emerald-400 hover:text-[#052015]"
              >
                Darsga o'tish
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </section>

          {/* FOOTER */}
          <footer className="flex flex-col items-center justify-between gap-3 border-t border-gray-200/70 py-6 text-xs text-gray-400 dark:border-white/[0.06] dark:text-gray-600 sm:flex-row">
            <p>© 2026 TronIT Academy. Barcha huquqlar himoyalangan.</p>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Learning never stops.
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
