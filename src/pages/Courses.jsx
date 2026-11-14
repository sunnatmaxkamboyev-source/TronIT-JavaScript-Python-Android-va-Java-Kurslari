import { useMemo, useState } from "react";
import {
  Search,
  BookOpen,
  PlayCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { courses, courseCategories } from "../data/courses";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function Courses() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("Barcha kurslar");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.author.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "Barcha kurslar" ||
        course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-gray-950">

        {/* Header */}
        <section className="relative overflow-hidden border-b border-gray-100 bg-white transition-colors dark:border-gray-800 dark:bg-gray-900">

          {/* Background glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]" />

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-7xl px-6 py-16"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-3 text-sm font-semibold tracking-widest text-green-600 dark:text-green-400"
            >
              TRONIT TA'LIM PLATFORMASI
            </motion.p>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Barcha{" "}
              <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                kurslar
              </span>
            </h1>

            <p className="mt-5 max-w-xl leading-7 text-gray-500 dark:text-gray-400">
              O'zingizga mos IT yo'nalishini tanlang va yangi
              bilimlarni egallashni boshlang.
            </p>

            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {courses.length}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ta kurs
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {courses.reduce(
                    (sum, course) => sum + course.lessons,
                    0
                  )}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Video dars
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Courses */}
        <section className="mx-auto max-w-7xl px-6 py-14">

          {/* Search and filter */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col gap-4 md:flex-row"
          >
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Kurs yoki muallifni qidiring..."
                className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-gray-700 outline-none transition focus:border-green-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
            >
              {courseCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Results heading */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center justify-between"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Mavjud kurslar
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {filteredCourses.length} ta natija
            </p>
          </motion.div>

          {/* Course cards */}
          <AnimatePresence mode="wait">
            {filteredCourses.length > 0 ? (
              <motion.div
                key={`${search}-${selectedCategory}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 10 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredCourses.map((course) => (
                  <motion.article
                    key={course.id}
                    variants={itemVariants}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.25 },
                    }}
                    className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-green-300 hover:shadow-xl hover:shadow-green-500/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
                  >
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      transition={{ duration: 0.25 }}
                      className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 dark:bg-green-950/40"
                    >
                      <BookOpen
                        size={27}
                        className="text-green-600 dark:text-green-400"
                      />
                    </motion.div>

                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600 dark:bg-green-950/40 dark:text-green-400">
                      {course.category}
                    </span>

                    <h3 className="mt-5 text-xl font-bold text-gray-900 transition-colors group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400">
                      {course.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Muallif: {course.author}
                    </p>

                    <p className="mt-4 min-h-12 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      {course.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <PlayCircle
                        size={18}
                        className="text-green-600 dark:text-green-400"
                      />
                      {course.lessons} ta video dars
                    </div>

                    <Link
                      to={`/courses/${course.id}`}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-green-500 py-3 font-semibold text-green-600 transition duration-300 hover:bg-green-500 hover:text-white dark:text-green-400"
                    >
                      Kursni ko'rish
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight size={18} />
                      </motion.span>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl border border-gray-100 bg-white py-16 text-center dark:border-gray-800 dark:bg-gray-900"
              >
                <Search
                  size={35}
                  className="mx-auto mb-4 text-gray-300"
                />

                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Kurs topilmadi
                </h3>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Boshqa nom yoki kategoriyani sinab ko'ring.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("Barcha kurslar");
                  }}
                  className="mt-5 font-semibold text-green-600 transition hover:text-green-700"
                >
                  Filtrlarni tozalash
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Courses;
