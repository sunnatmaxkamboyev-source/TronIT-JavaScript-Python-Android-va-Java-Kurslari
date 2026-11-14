import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BookOpen,
  PlayCircle,
  Clock,
  ChevronLeft,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { courses } from "../data/courses";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const lessonVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35 },
  },
};

function CourseDetail() {
  const { id } = useParams();

  const course = courses.find((item) => item.id === Number(id));

  const [selectedLesson, setSelectedLesson] = useState(1);

  if (!course) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[60vh] flex-col items-center justify-center bg-gray-50 px-6 transition-colors dark:bg-gray-950">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Kurs topilmadi
            </h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Bunday kurs mavjud emas.
            </p>

            <Link
              to="/courses"
              className="mt-6 inline-block rounded-xl bg-green-500 px-6 py-3 text-white transition hover:-translate-y-1 hover:bg-green-600"
            >
              Kurslarga qaytish
            </Link>
          </motion.div>
        </main>

        <Footer />
      </>
    );
  }

  const currentLesson = course.lessonList.find(
    (lesson) => lesson.id === selectedLesson
  );

  const progress = course.lessons
    ? (selectedLesson / course.lessons) * 100
    : 0;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-gray-950">

        {/* Course header */}
        <section className="relative overflow-hidden border-b border-gray-100 bg-white transition-colors dark:border-gray-800 dark:bg-gray-900">

          {/* Background glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative mx-auto max-w-7xl px-6 py-10"
          >
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:gap-3 hover:text-green-600 dark:text-gray-400"
            >
              <ChevronLeft size={18} />
              Barcha kurslar
            </Link>

            <div className="mt-8 max-w-3xl">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600 dark:bg-green-950/40 dark:text-green-400"
              >
                {course.category}
              </motion.span>

              <h1 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
                {course.title}
              </h1>

              <p className="mt-4 leading-7 text-gray-500 dark:text-gray-400">
                {course.description}
              </p>

              <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
                Muallif:{" "}
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {course.author}
                </span>
              </p>

              <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <BookOpen
                    size={18}
                    className="text-green-600 dark:text-green-400"
                  />
                  {course.lessons} ta dars
                </div>

                <div className="flex items-center gap-2">
                  <PlayCircle
                    size={18}
                    className="text-green-600 dark:text-green-400"
                  />
                  Video kurs
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Course content */}
        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* Video player */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="lg:col-span-2"
            >
              <div className="relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-950 p-8 text-center shadow-xl shadow-black/10">

                <AnimatePresence mode="wait">
                  {currentLesson?.videoUrl ? (
                    <motion.video
                      key={currentLesson.videoUrl}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      controls
                      className="h-full w-full"
                      src={currentLesson.videoUrl}
                    />
                  ) : (
                    <motion.div
                      key={selectedLesson}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-col items-center"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.08, 1],
                          boxShadow: [
                            "0 0 0px rgba(34,197,94,0)",
                            "0 0 35px rgba(34,197,94,0.15)",
                            "0 0 0px rgba(34,197,94,0)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                        className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10"
                      >
                        <PlayCircle
                          size={42}
                          className="text-green-500"
                        />
                      </motion.div>

                      <h2 className="text-xl font-bold text-white">
                        {currentLesson?.title}
                      </h2>

                      <p className="mt-3 max-w-md text-sm text-gray-400">
                        Bu dars uchun video hali joylanmagan.
                        Video materiallar keyinchalik qo'shiladi.
                      </p>

                      <span className="mt-6 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs text-green-500">
                        Demo video oynasi
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Current lesson information */}
              <motion.div
                key={`info-${selectedLesson}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 transition-colors dark:border-gray-800 dark:bg-gray-900"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {currentLesson?.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-500 dark:text-gray-400">
                  Siz hozir {course.title} kursining{" "}
                  {selectedLesson}-darsini tanladingiz.
                  Dars materiallari shu yerda namoyish etiladi.
                </p>
              </motion.div>
            </motion.div>

            {/* Lessons sidebar */}
            <motion.aside
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="h-fit overflow-hidden rounded-2xl border border-gray-100 bg-white transition-colors dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="border-b border-gray-100 p-5 dark:border-gray-800">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Kurs darslari
                </h2>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {course.lessons} ta video dars
                </p>

                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-green-400 to-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>

              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="max-h-[550px] overflow-y-auto p-3"
              >
                {course.lessonList.map((lesson) => {
                  const isActive = selectedLesson === lesson.id;

                  return (
                    <motion.button
                      key={lesson.id}
                      variants={lessonVariants}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedLesson(lesson.id)}
                      className={`mb-1 flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                        isActive
                          ? "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/40"
                          : "border-transparent hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      <motion.div
                        animate={{
                          scale: isActive ? 1.08 : 1,
                        }}
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                          isActive
                            ? "bg-green-500 text-white"
                            : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                        }`}
                      >
                        {isActive ? (
                          <PlayCircle size={19} />
                        ) : (
                          <Lock size={17} />
                        )}
                      </motion.div>

                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-sm font-semibold ${
                            isActive
                              ? "text-green-700 dark:text-green-400"
                              : "text-gray-700 dark:text-gray-200"
                          }`}
                        >
                          {lesson.title}
                        </p>

                        <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                          <Clock size={12} />
                          {lesson.duration}
                        </div>
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                          >
                            <CheckCircle2
                              size={18}
                              className="shrink-0 text-green-500"
                            />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </motion.div>
            </motion.aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CourseDetail;
